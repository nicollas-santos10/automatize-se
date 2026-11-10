/**
 * quiz.js
 * --------------------------------------------------------------------------
 * Desafios práticos e quiz final (desafios.html).
 *
 * Todo o processamento acontece no navegador: nenhuma resposta é enviada
 * ou armazenada. Para editar perguntas, altere os objetos CHALLENGES e QUIZ
 * abaixo — a interface é gerada automaticamente.
 *
 * Estrutura de cada pergunta:
 *  {
 *    id: 'identificador-unico',
 *    question: 'Texto da pergunta',
 *    options: [{ text: '...', feedback: 'Explicação desta alternativa' }],
 *    correct: índice da alternativa correta (começando em 0),
 *    explanation: 'Explicação geral exibida após responder'
 *  }
 */
(function () {
  'use strict';

  var LETTERS = ['A', 'B', 'C', 'D', 'E'];

  /* ========================================================================
   * DADOS — Desafios práticos
   * ====================================================================== */
  var CHALLENGES = [
    {
      id: 'desafio-1',
      title: 'Desafio 01 — Anexos que não param de chegar',
      scenario: 'Você recebe diversos e-mails com arquivos anexados (boletos, relatórios, comprovantes) e perde tempo baixando um por um.',
      question: 'Como você poderia evitar baixar cada arquivo manualmente?',
      options: [
        { text: 'Pedir que todas as pessoas enviem os arquivos por aplicativo de mensagens.', feedback: 'Isso apenas muda o lugar onde os arquivos chegam. Você continuaria salvando tudo manualmente.' },
        { text: 'Criar um fluxo automatizado: quando chegar um e-mail com anexo (gatilho), o arquivo é salvo em uma pasta do OneDrive (ação).', feedback: 'Exatamente! O gatilho percebe a chegada do e-mail e a ação salva o anexo sem que você precise fazer nada.' },
        { text: 'Juntar todos os e-mails e baixar os anexos uma vez por mês.', feedback: 'Agrupar a tarefa ajuda um pouco, mas ela continua sendo manual e repetitiva — e você corre o risco de esquecer algum arquivo.' },
        { text: 'Desativar o recebimento de anexos no e-mail.', feedback: 'Isso impediria você de receber documentos importantes. O objetivo é facilitar a tarefa, não eliminá-la.' }
      ],
      correct: 1,
      explanation: 'Esse é exatamente o fluxo ensinado no Tutorial 02 do Power Automate: o gatilho “Quando um novo email chegar” com a opção de anexos ativada, seguido da ação “Criar arquivo” no OneDrive.'
    },
    {
      id: 'desafio-2',
      title: 'Desafio 02 — Avisos de mensagens importantes',
      scenario: 'Você precisa ser avisado sempre que receber uma mensagem importante, por exemplo, da coordenação do curso.',
      question: 'Em uma automação, qual elemento inicia o fluxo?',
      options: [
        { text: 'A ação de enviar o aviso.', feedback: 'O envio do aviso é a ação: ela acontece depois que algo inicia o fluxo.' },
        { text: 'O gatilho: a chegada de uma nova mensagem que atende aos critérios definidos (por exemplo, um remetente específico).', feedback: 'Correto! O gatilho é o evento que “dispara” a automação. Sem ele, nada acontece.' },
        { text: 'O resultado: o aviso aparecendo na sua caixa de entrada.', feedback: 'O resultado é a consequência final do fluxo, não o que o inicia.' },
        { text: 'Nenhum elemento: a automação funciona sozinha, sem eventos.', feedback: 'Todo fluxo automatizado precisa de um ponto de partida: um evento (como um e-mail) ou um horário programado.' }
      ],
      correct: 1,
      explanation: 'Gatilho = “quando isso acontecer…”; Ação = “…faça aquilo”. No Tutorial 01, o gatilho é a chegada do e-mail e a ação é o envio de um aviso.'
    },
    {
      id: 'desafio-3',
      title: 'Desafio 03 — Respostas de formulário espalhadas',
      scenario: 'Uma pessoa recebe inscrições por um formulário on-line (como o Microsoft Forms) e precisa organizar as respostas em uma planilha para acompanhar os pedidos.',
      question: 'Como a automação pode ajudar nessa situação?',
      options: [
        { text: 'Copiando e colando cada resposta na planilha ao final do dia.', feedback: 'Essa é justamente a tarefa manual e repetitiva que queremos evitar — e copiar à mão aumenta a chance de erros.' },
        { text: 'Com um fluxo que, a cada nova resposta enviada (gatilho), adiciona uma linha na planilha e envia um aviso (ações).', feedback: 'Isso mesmo! Cada resposta vira automaticamente uma linha organizada, e você ainda pode ser avisado de cada novo pedido.' },
        { text: 'Apagando automaticamente as respostas antigas para não acumular informações.', feedback: 'Apagar dados não organiza as informações e pode causar perda de registros importantes.' },
        { text: 'Não pode: automações não funcionam com formulários.', feedback: 'O Power Automate possui conectores para formulários e planilhas (como Microsoft Forms e Excel), que permitem esse tipo de fluxo.' }
      ],
      correct: 1,
      explanation: 'Formulário → planilha é um dos usos mais comuns de automação. Lembre-se: formulários podem coletar dados pessoais, então guarde a planilha em um local com acesso restrito.'
    }
  ];

  /* ========================================================================
   * DADOS — Quiz final (5 perguntas)
   * ====================================================================== */
  var QUIZ = [
    {
      id: 'q1',
      question: 'O que é automação de tarefas?',
      options: [
        { text: 'Usar regras para que tarefas repetitivas aconteçam automaticamente, sem intervenção manual a cada vez.' },
        { text: 'Substituir completamente o trabalho das pessoas por robôs físicos.' },
        { text: 'Aprender a programar em uma linguagem complexa.' },
        { text: 'Instalar mais aplicativos no computador.' }
      ],
      correct: 0,
      explanation: 'Automatizar é definir uma regra (“quando isso acontecer, faça aquilo”) para que o computador execute tarefas repetitivas por você. Ferramentas como o Power Automate permitem isso sem programar.'
    },
    {
      id: 'q2',
      question: 'No Power Automate, o que é um gatilho?',
      options: [
        { text: 'O resultado final do fluxo.' },
        { text: 'Uma senha de acesso ao sistema.' },
        { text: 'O evento que inicia o fluxo, como a chegada de um novo e-mail.' },
        { text: 'Um tipo de arquivo salvo no OneDrive.' }
      ],
      correct: 2,
      explanation: 'O gatilho é o evento que dá início ao fluxo. Exemplos: um e-mail recebido, um arquivo criado ou um horário programado.'
    },
    {
      id: 'q3',
      question: 'No fluxo “receber e-mail → salvar anexo no OneDrive”, o que significa “salvar anexo no OneDrive”?',
      options: [
        { text: 'É o gatilho.' },
        { text: 'É a ação.' },
        { text: 'É o conector de e-mail.' },
        { text: 'É uma licença paga.' }
      ],
      correct: 1,
      explanation: 'Salvar o anexo é a ação: a tarefa que o fluxo executa depois que o gatilho (receber o e-mail) acontece.'
    },
    {
      id: 'q4',
      question: 'Por que o bloco “Aplicar a cada” aparece automaticamente no tutorial de salvar anexos?',
      options: [
        { text: 'Porque o fluxo apresentou um erro.' },
        { text: 'Porque é necessário pagar uma licença extra.' },
        { text: 'Porque ele apaga os e-mails depois de salvar os anexos.' },
        { text: 'Porque um e-mail pode ter vários anexos, e a ação precisa ser repetida para cada um deles.' }
      ],
      correct: 3,
      explanation: '“Aplicar a cada” é uma repetição (loop): para cada anexo encontrado no e-mail, o Power Automate executa a ação de criar o arquivo. Isso é normal e esperado.'
    },
    {
      id: 'q5',
      question: 'Qual destes é um cuidado correto ao criar e testar automações?',
      options: [
        { text: 'Compartilhar sua senha com colegas para que eles testem o fluxo.' },
        { text: 'Testar com dados fictícios e respeitar as regras de uso de dados da sua instituição.' },
        { text: 'Encaminhar automaticamente todos os e-mails para um endereço pessoal externo.' },
        { text: 'Publicar capturas de tela mostrando e-mails reais de outras pessoas.' }
      ],
      correct: 1,
      explanation: 'Automações lidam com e-mails e arquivos que podem conter dados pessoais. Use dados fictícios em testes, nunca compartilhe senhas e siga as políticas da sua instituição e a LGPD.'
    }
  ];

  /* ========================================================================
   * Utilidades de renderização
   * ====================================================================== */

  /** Escapa texto para inserção segura em HTML. */
  function esc(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** Gera o HTML das alternativas (inputs do tipo radio). */
  function renderChoices(item, groupName) {
    return item.options.map(function (opt, i) {
      var inputId = groupName + '-op' + i;
      return (
        '<label class="choice" for="' + inputId + '">' +
          '<input type="radio" id="' + inputId + '" name="' + groupName + '" value="' + i + '">' +
          '<span class="choice__box">' +
            '<span class="choice__marker" aria-hidden="true">' + LETTERS[i] + '</span>' +
            '<span class="choice__text">' + esc(opt.text) + '</span>' +
            '<span class="choice__status" aria-hidden="true"></span>' +
          '</span>' +
        '</label>'
      );
    }).join('');
  }

  /** Retorna o índice da alternativa marcada, ou -1. */
  function getSelected(container, groupName) {
    var checked = container.querySelector('input[name="' + groupName + '"]:checked');
    return checked ? Number(checked.value) : -1;
  }

  /** Marca visualmente alternativas certas/erradas. */
  function markChoices(container, groupName, item, selected) {
    container.querySelectorAll('input[name="' + groupName + '"]').forEach(function (input) {
      var i = Number(input.value);
      var label = input.closest('.choice');
      var status = label.querySelector('.choice__status');
      label.classList.remove('is-correct', 'is-wrong');
      status.textContent = '';
      input.disabled = true;
      if (i === item.correct) {
        label.classList.add('is-correct');
        status.textContent = '✓ Correta';
      } else if (i === selected) {
        label.classList.add('is-wrong');
        status.textContent = '✗ Sua resposta';
      }
    });
  }

  /** Desfaz marcações e reabilita as alternativas. */
  function resetChoices(container, groupName) {
    container.querySelectorAll('input[name="' + groupName + '"]').forEach(function (input) {
      var label = input.closest('.choice');
      input.disabled = false;
      input.checked = false;
      label.classList.remove('is-correct', 'is-wrong');
      label.querySelector('.choice__status').textContent = '';
    });
  }

  function setFeedback(el, type, title, bodyHtml) {
    el.className = 'feedback feedback--' + type;
    el.innerHTML = '<p class="feedback__title">' + esc(title) + '</p>' + bodyHtml;
  }

  function clearFeedback(el) {
    el.className = 'feedback';
    el.innerHTML = '';
  }

  /* ========================================================================
   * Desafios práticos
   * ====================================================================== */
  function initChallenges() {
    var root = document.getElementById('desafios-lista');
    if (!root) return;

    var progressItems = [];
    var progress = document.getElementById('desafios-progresso');
    if (progress) {
      var list = progress.querySelector('ol');
      CHALLENGES.forEach(function (c, i) {
        var li = document.createElement('li');
        li.textContent = String(i + 1);
        li.setAttribute('aria-label', 'Desafio ' + (i + 1) + ': não respondido');
        list.appendChild(li);
        progressItems.push(li);
      });
    }
    var summary = document.getElementById('desafios-resumo');

    function updateSummary() {
      if (!summary) return;
      var done = progressItems.filter(function (li) { return li.classList.contains('is-correct'); }).length;
      summary.textContent = done + ' de ' + CHALLENGES.length + ' desafios resolvidos';
    }

    root.innerHTML = CHALLENGES.map(function (c) {
      return (
        '<article class="challenge" id="' + c.id + '" aria-labelledby="' + c.id + '-titulo">' +
          '<h3 id="' + c.id + '-titulo">' + esc(c.title) + '</h3>' +
          '<div class="challenge__scenario">' +
            '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
            '<p><strong>Situação:</strong> ' + esc(c.scenario) + '</p>' +
          '</div>' +
          '<form class="challenge__form" novalidate>' +
            '<fieldset>' +
              '<legend>' + esc(c.question) + '</legend>' +
              '<div class="choices">' + renderChoices(c, c.id) + '</div>' +
            '</fieldset>' +
            '<div class="challenge__actions">' +
              '<button type="submit" class="btn btn--primary">Verificar resposta</button>' +
              '<button type="button" class="btn btn--secondary" data-action="retry" hidden>Tentar novamente</button>' +
            '</div>' +
            '<div class="feedback" role="status" aria-live="polite"></div>' +
          '</form>' +
        '</article>'
      );
    }).join('');

    CHALLENGES.forEach(function (c, index) {
      var article = document.getElementById(c.id);
      var form = article.querySelector('form');
      var feedback = article.querySelector('.feedback');
      var submit = form.querySelector('[type="submit"]');
      var retry = form.querySelector('[data-action="retry"]');

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var selected = getSelected(form, c.id);

        if (selected === -1) {
          setFeedback(feedback, 'warning', 'Escolha uma alternativa', '<p>Selecione uma das opções antes de verificar.</p>');
          var first = form.querySelector('input');
          if (first) first.focus();
          return;
        }

        var isCorrect = selected === c.correct;
        markChoices(form, c.id, c, selected);

        var body = '<p>' + esc(c.options[selected].feedback) + '</p>';
        if (!isCorrect) body += '<p><strong>Resposta correta (' + LETTERS[c.correct] + '):</strong> ' + esc(c.options[c.correct].text) + '</p>';
        body += '<p><strong>Para lembrar:</strong> ' + esc(c.explanation) + '</p>';
        setFeedback(feedback, isCorrect ? 'correct' : 'wrong', isCorrect ? 'Muito bem! Resposta correta.' : 'Ainda não foi dessa vez.', body);

        submit.hidden = true;
        retry.hidden = false;
        retry.focus();

        if (progressItems[index]) {
          progressItems[index].classList.toggle('is-correct', isCorrect);
          progressItems[index].classList.toggle('is-wrong', !isCorrect);
          progressItems[index].setAttribute('aria-label', 'Desafio ' + (index + 1) + ': ' + (isCorrect ? 'resposta correta' : 'resposta incorreta'));
        }
        updateSummary();
      });

      retry.addEventListener('click', function () {
        resetChoices(form, c.id);
        clearFeedback(feedback);
        retry.hidden = true;
        submit.hidden = false;
        var first = form.querySelector('input');
        if (first) first.focus();
      });
    });

    updateSummary();
  }

  /* ========================================================================
   * Quiz final
   * ====================================================================== */
  function initQuiz() {
    var form = document.getElementById('quiz-form');
    if (!form) return;

    var questionsRoot = form.querySelector('[data-quiz-questions]');
    var errorBox = form.querySelector('.quiz__error');
    var submitBtn = form.querySelector('[type="submit"]');
    var result = document.getElementById('quiz-resultado');
    var scoreEl = result.querySelector('[data-score]');
    var meterFill = result.querySelector('.quiz-result__meter-fill');
    var titleEl = result.querySelector('.quiz-result__title');
    var messageEl = result.querySelector('[data-message]');
    var restartButtons = document.querySelectorAll('[data-quiz-restart]');

    questionsRoot.innerHTML = QUIZ.map(function (q, i) {
      return (
        '<fieldset class="quiz-question" id="quiz-' + q.id + '">' +
          '<legend><small>Pergunta ' + (i + 1) + ' de ' + QUIZ.length + '</small>' + esc(q.question) + '</legend>' +
          '<div class="choices">' + renderChoices(q, q.id) + '</div>' +
          '<div class="feedback" aria-live="polite"></div>' +
        '</fieldset>'
      );
    }).join('');

    function resetQuiz() {
      QUIZ.forEach(function (q) {
        var fs = document.getElementById('quiz-' + q.id);
        resetChoices(fs, q.id);
        clearFeedback(fs.querySelector('.feedback'));
      });
      clearFeedback(errorBox);
      result.hidden = true;
      meterFill.style.width = '0';
      submitBtn.hidden = false;
      var firstInput = form.querySelector('input');
      document.getElementById('quiz').scrollIntoView({ block: 'start' });
      if (firstInput) firstInput.focus({ preventScroll: true });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // 1. Validação: todas as perguntas precisam ser respondidas
      var unanswered = QUIZ.filter(function (q) { return getSelected(form, q.id) === -1; });
      if (unanswered.length) {
        var links = unanswered.map(function (q) {
          var n = QUIZ.indexOf(q) + 1;
          return '<li><a href="#quiz-' + q.id + '">Pergunta ' + n + '</a></li>';
        }).join('');
        setFeedback(errorBox, 'warning',
          unanswered.length === 1 ? 'Falta responder 1 pergunta' : 'Faltam responder ' + unanswered.length + ' perguntas',
          '<ul>' + links + '</ul>');
        errorBox.setAttribute('tabindex', '-1');
        errorBox.focus();
        return;
      }
      clearFeedback(errorBox);

      // 2. Correção e feedback por questão
      var score = 0;
      QUIZ.forEach(function (q) {
        var fs = document.getElementById('quiz-' + q.id);
        var selected = getSelected(form, q.id);
        var ok = selected === q.correct;
        if (ok) score++;
        markChoices(fs, q.id, q, selected);
        var body = '';
        if (!ok) body += '<p><strong>Resposta correta (' + LETTERS[q.correct] + '):</strong> ' + esc(q.options[q.correct].text) + '</p>';
        body += '<p>' + esc(q.explanation) + '</p>';
        setFeedback(fs.querySelector('.feedback'), ok ? 'correct' : 'wrong', ok ? 'Correta!' : 'Incorreta', body);
      });

      // 3. Resultado final
      var percent = Math.round((score / QUIZ.length) * 100);
      scoreEl.innerHTML = score + '<span> / ' + QUIZ.length + '</span>';
      scoreEl.setAttribute('aria-label', score + ' acertos de ' + QUIZ.length + ' perguntas');

      var title, message;
      if (percent === 100) {
        title = 'Excelente! Você gabaritou!';
        message = 'Você domina os conceitos básicos de automação. Que tal colocar em prática com os tutoriais do Power Automate?';
      } else if (percent >= 60) {
        title = 'Muito bem! Você está no caminho certo.';
        message = 'Revise o feedback das questões que errou e, se quiser, releia a página “Entenda a automação”.';
      } else {
        title = 'Continue aprendendo!';
        message = 'Errar faz parte do processo. Leia novamente a página “Entenda a automação” e tente o quiz mais uma vez.';
      }
      titleEl.textContent = title;
      messageEl.textContent = message;

      submitBtn.hidden = true;
      result.hidden = false;
      // Pequeno atraso para a animação da barra (ignorado se reduzir movimento)
      window.requestAnimationFrame(function () { meterFill.style.width = percent + '%'; });

      titleEl.setAttribute('tabindex', '-1');
      result.scrollIntoView({ behavior: 'auto', block: 'center' });
      titleEl.focus({ preventScroll: true });
    });

    restartButtons.forEach(function (btn) { btn.addEventListener('click', resetQuiz); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initChallenges();
    initQuiz();
  });
})();
