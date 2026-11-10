/**
 * tutorials.js
 * --------------------------------------------------------------------------
 * Experiência de leitura dos tutoriais:
 *  - Barra fina de progresso de leitura da página (.reading-progress);
 *  - Barra de status de cada tutorial: "Passo X de N" + porcentagem lida;
 *  - Destaque do passo atual e dos passos já lidos;
 *  - Botões "Etapa anterior" / "Próxima etapa" gerados automaticamente
 *    em cada passo (não aparecem se o JavaScript estiver desativado).
 *
 * Marcação esperada:
 *  <article data-tutorial>
 *    <div class="tutorial-status" data-tutorial-status> ... </div>
 *    <ol class="steps"> <li class="step" id="..."> <h3 class="step__title">...
 *    <section data-tutorial-end> (destino do botão no último passo)
 *  </article>
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ícones dos botões de navegação */
  var ICON_PREV = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
  var ICON_NEXT = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

  /** Rola até o elemento e move o foco para ele (acessível por teclado). */
  function goTo(element) {
    if (!element) return;
    var focusTarget = element.querySelector('.step__title, h3, h2') || element;
    if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
    element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    focusTarget.focus({ preventScroll: true });
    if (element.id && history.replaceState) history.replaceState(null, '', '#' + element.id);
  }

  /* ------------------------------------------------------------------------
   * Cria os botões "Etapa anterior" e "Próxima etapa"
   * ---------------------------------------------------------------------- */
  function buildStepNavigation(tutorial) {
    var steps = Array.prototype.slice.call(tutorial.querySelectorAll('.step'));
    var end = tutorial.querySelector('[data-tutorial-end]');
    var total = steps.length;

    steps.forEach(function (step, index) {
      var nav = document.createElement('nav');
      nav.className = 'step-nav';
      nav.setAttribute('aria-label', 'Navegação entre etapas — passo ' + (index + 1) + ' de ' + total);

      if (index > 0) {
        var prev = document.createElement('button');
        prev.type = 'button';
        prev.className = 'btn btn--secondary btn--sm btn--prev';
        prev.innerHTML = ICON_PREV + '<span>Etapa anterior</span>';
        prev.addEventListener('click', function () { goTo(steps[index - 1]); });
        nav.appendChild(prev);
      }

      var next = document.createElement('button');
      next.type = 'button';
      next.className = 'btn btn--primary btn--sm btn--next';
      var isLast = index === total - 1;
      next.innerHTML = '<span>' + (isLast ? 'Ver resultado esperado' : 'Próxima etapa') + '</span>' + ICON_NEXT;
      next.addEventListener('click', function () { goTo(isLast ? end : steps[index + 1]); });
      if (isLast && !end) next.hidden = true;
      nav.appendChild(next);

      var content = step.querySelector('.step__content') || step;
      content.appendChild(nav);
    });
  }

  /* ------------------------------------------------------------------------
   * Atualiza a barra de status de um tutorial
   * ---------------------------------------------------------------------- */
  function createStatusUpdater(tutorial) {
    var status = tutorial.querySelector('[data-tutorial-status]');
    var steps = Array.prototype.slice.call(tutorial.querySelectorAll('.step'));
    if (!status || !steps.length) return function () {};

    var fill = status.querySelector('.tutorial-status__fill');
    var percentEl = status.querySelector('.tutorial-status__percent');
    var stepEl = status.querySelector('[data-current-step]');
    var track = status.querySelector('[role="progressbar"]');
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll('[data-toc-for="' + tutorial.id + '"] a'));
    var lastStep = -1;

    return function update() {
      var rect = tutorial.getBoundingClientRect();
      var viewport = window.innerHeight;
      // Percentual lido: quanto do tutorial já passou pela tela
      var scrolled = Math.min(Math.max(viewport * 0.5 - rect.top, 0), rect.height);
      var percent = rect.height > 0 ? Math.round((scrolled / rect.height) * 100) : 0;

      // Passo atual: o último cujo topo já passou de 40% da altura da tela
      var current = 0;
      steps.forEach(function (step, i) {
        if (step.getBoundingClientRect().top < viewport * 0.4) current = i;
      });

      if (fill) fill.style.width = percent + '%';
      if (percentEl) percentEl.textContent = percent + '%';
      if (track) {
        track.setAttribute('aria-valuenow', String(percent));
        track.setAttribute('aria-valuetext', percent + '% do tutorial lido');
      }

      if (current !== lastStep) {
        lastStep = current;
        if (stepEl) stepEl.textContent = String(current + 1);
        steps.forEach(function (step, i) {
          step.classList.toggle('is-current', i === current);
          step.classList.toggle('is-done', i < current);
        });
        tocLinks.forEach(function (link) {
          var active = link.hash === '#' + steps[current].id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'step');
          else link.removeAttribute('aria-current');
        });
      }
    };
  }

  /* ------------------------------------------------------------------------
   * Barra de progresso de leitura da página inteira
   * ---------------------------------------------------------------------- */
  function createPageProgressUpdater() {
    var bar = document.querySelector('.reading-progress__bar');
    if (!bar) return function () {};
    return function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = 'scaleX(' + ratio + ')';
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tutorials = Array.prototype.slice.call(document.querySelectorAll('[data-tutorial]'));
    var updaters = [createPageProgressUpdater()];

    tutorials.forEach(function (tutorial) {
      buildStepNavigation(tutorial);
      updaters.push(createStatusUpdater(tutorial));
    });

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updaters.forEach(function (fn) { fn(); });
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  });
})();
