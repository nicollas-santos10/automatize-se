/**
 * navigation.js
 * --------------------------------------------------------------------------
 * Responsável pela navegação global do site:
 *  - Menu responsivo (abrir/fechar no celular) com suporte a teclado;
 *  - Botão "Voltar ao topo".
 *
 * O link da página atual é marcado diretamente no HTML (aria-current="page"),
 * para funcionar mesmo sem JavaScript.
 */
(function () {
  'use strict';

  var DESKTOP_QUERY = window.matchMedia('(min-width: 900px)');

  /* ------------------------------------------------------------------------
   * Menu responsivo
   * ---------------------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('menu-principal');
    if (!toggle || !nav) return;

    var label = toggle.querySelector('.nav-toggle__text');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      if (label) label.textContent = open ? 'Fechar' : 'Menu';
      nav.classList.toggle('is-open', open);
    }

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    toggle.addEventListener('click', function () {
      setOpen(!isOpen());
      if (isOpen()) {
        // Leva o foco ao primeiro link, facilitando a navegação por teclado
        var first = nav.querySelector('a');
        if (first) first.focus();
      }
    });

    // Tecla Esc fecha o menu e devolve o foco ao botão
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Fecha ao escolher um link (útil para âncoras na mesma página)
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a') && !DESKTOP_QUERY.matches) setOpen(false);
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', function (event) {
      if (isOpen() && !nav.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
      }
    });

    // Fecha quando o foco sai do menu (Tab após o último link)
    nav.addEventListener('focusout', function (event) {
      if (DESKTOP_QUERY.matches || !isOpen()) return;
      var next = event.relatedTarget;
      if (next && !nav.contains(next) && next !== toggle) setOpen(false);
    });

    // Ao redimensionar para desktop, restaura o estado padrão
    var onChange = function (e) { if (e.matches) setOpen(false); };
    if (DESKTOP_QUERY.addEventListener) DESKTOP_QUERY.addEventListener('change', onChange);
    else if (DESKTOP_QUERY.addListener) DESKTOP_QUERY.addListener(onChange);

    setOpen(false);
  }

  /* ------------------------------------------------------------------------
   * Botão "Voltar ao topo"
   * ---------------------------------------------------------------------- */
  function initBackToTop() {
    var button = document.querySelector('.back-to-top');
    if (!button) return;

    var ticking = false;
    function update() {
      button.classList.toggle('is-visible', window.scrollY > 600);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    button.addEventListener('click', function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      // Move o foco para o início do conteúdo, para leitores de tela
      var skipTarget = document.getElementById('conteudo');
      if (skipTarget) skipTarget.focus({ preventScroll: true });
    });

    update();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initBackToTop();
  });
})();
