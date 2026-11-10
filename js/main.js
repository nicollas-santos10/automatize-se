/**
 * main.js
 * --------------------------------------------------------------------------
 * Funcionalidades gerais, usadas em todas as páginas:
 *  - Ano atual no rodapé;
 *  - Tratamento de links externos (nova aba + aviso acessível);
 *  - Animação suave de entrada dos elementos (respeita "reduzir movimento");
 *  - Destaque do item atual no índice da página (scrollspy).
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ano atual em elementos [data-current-year] */
  function setCurrentYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ------------------------------------------------------------------------
   * Links externos: abrem em nova aba com segurança (noopener) e recebem
   * um aviso para leitores de tela e um ícone discreto.
   * Para ignorar um link, adicione o atributo data-no-external.
   * ---------------------------------------------------------------------- */
  function enhanceExternalLinks() {
    var ICON = '<svg class="external-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M10 14L20 4"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>';

    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      if (link.hasAttribute('data-no-external')) return;
      if (link.hostname === window.location.hostname) return;

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      if (!link.querySelector('.external-icon')) {
        link.insertAdjacentHTML('beforeend', ICON + '<span class="sr-only"> (abre em uma nova aba)</span>');
      }
    });
  }

  /* ------------------------------------------------------------------------
   * Revelação suave ao rolar a página (IntersectionObserver).
   * Desativada se o usuário prefere menos movimento.
   * ---------------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------------
   * Scrollspy: destaca no índice ([data-scrollspy]) a seção visível.
   * ---------------------------------------------------------------------- */
  function initScrollSpy() {
    document.querySelectorAll('[data-scrollspy]').forEach(function (nav) {
      var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
      var targets = links
        .map(function (link) { return document.getElementById(decodeURIComponent(link.hash.slice(1))); })
        .filter(Boolean);
      if (!targets.length) return;

      var ticking = false;
      function update() {
        var offset = window.innerHeight * 0.3;
        var currentId = targets[0].id;
        targets.forEach(function (t) {
          if (t.getBoundingClientRect().top - offset <= 0) currentId = t.id;
        });
        links.forEach(function (link) {
          var active = link.hash === '#' + currentId;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
        ticking = false;
      }

      window.addEventListener('scroll', function () {
        if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
      }, { passive: true });
      update();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setCurrentYear();
    enhanceExternalLinks();
    initReveal();
    initScrollSpy();
  });
})();
