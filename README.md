# Automatize seu dia a dia

> **Slogan:** *Sua rotina pode ser mais simples.*  
> Plataforma educativa estática desenvolvida como produto de **projeto de extensão universitária** para ensinar estudantes e iniciantes sem conhecimentos técnicos a automatizar tarefas da rotina acadêmica com o **Microsoft Power Automate**.

---

## 1. Estrutura do projeto

```text
automatize-se/
├── index.html                  # Página inicial (Hero, problemas, ferramenta, tutoriais em destaque, CTA)
├── automacao.html              # Introdução à automação + diagrama GATILHO → AÇÃO → RESULTADO + glossário
├── power-automate.html         # Visão geral do Power Automate + 3 tutoriais universitários completos
├── sobre.html                  # Objetivos de extensão, ficha institucional editável e referências
├── 404.html                    # Página personalizada de erro 404
├── css/
│   ├── style.css               # Variáveis (tokens), tipografia, layout, componentes e acessibilidade
│   ├── tutorials.css           # Layout dos tutoriais, barra de progresso e espaços de captura de tela
│   └── responsive.css          # Media queries mobile-first (640px, 900px, 1200px)
├── js/
│   ├── main.js                 # Ano automático, links externos seguros, animações reveal e scrollspy
│   ├── navigation.js           # Menu mobile acessível por teclado e botão "Voltar ao topo"
│   └── tutorials.js            # Progresso de leitura e navegação "Etapa anterior / Próxima etapa"
├── assets/
│   ├── icons/favicon.svg       # Ícone vetorial do site
│   ├── images/hero-flow.svg    # Ilustração autoral de fluxo de automação
│   └── screenshots/README.md   # Guia de nomenclatura e privacidade para capturas de tela reais
├── README.md
└── .gitignore
```

---

## 2. Como executar o projeto localmente

O site utiliza apenas **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, sem dependências de backend ou banco de dados.

### Opção A — Abrir direto no navegador
Basta dar duplo clique no arquivo `index.html` em qualquer navegador moderno (Edge, Chrome, Firefox ou Safari). Todos os caminhos são relativos e funcionam via `file://`.

### Opção B — Servidor local (recomendado para desenvolvimento)
No terminal, na raiz do projeto:

```bash
# Com Python 3 instalado:
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

---

## 3. Como publicar no GitHub Pages

1. Envie os arquivos da raiz para o repositório no GitHub:
   ```bash
   git add -A
   git commit -m "Atualiza plataforma com tutoriais universitários"
   git push
   ```
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
5. Em alguns instantes, o site estará no ar em `https://SEU-USUARIO.github.io/automatize-se/`.

---

## 4. Como publicar no Netlify (alternativa)

### Método 1 — Arrastar e soltar (Netlify Drop)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta do projeto para a área indicada.
3. O site será publicado imediatamente com HTTPS e suporte automático ao arquivo `404.html`.

### Método 2 — Conectado ao GitHub
1. No painel do Netlify, clique em **Add new site → Import an existing project** e conecte seu repositório do GitHub.
2. Deixe **Build command** e **Publish directory** em branco e clique em **Deploy site**.

---

## 5. Funcionalidades implementadas

- **Identidade visual completa:** paleta oficial (`#142B50`, `#2563EB`, `#8B5CF6`, `#F1F5F9`, `#FFFFFF`, `#1E293B`), tipografia *Poppins* + *Inter* com fontes locais de reserva, cards, badges e ícones autorais em SVG.
- **5 páginas HTML completas e interligadas:** `index.html`, `automacao.html`, `power-automate.html`, `sobre.html` e `404.html`.
- **Diagrama didático em HTML + CSS:** fluxo `GATILHO → AÇÃO → RESULTADO` na página `automacao.html`, responsivo (vertical no celular, horizontal no desktop), sem depender de imagem estática.
- **3 tutoriais completos voltados à rotina universitária no Microsoft Power Automate** (conta institucional Microsoft 365 Education):
  - *Tutorial 01:* Salvar no Microsoft To Do os trabalhos que chegam no Teams.
  - *Tutorial 02:* Salvar em uma pasta no OneDrive os materiais de aula.
  - *Tutorial 03:* Agendar no calendário os trabalhos do Teams com prazo.
- **Componentes de aprendizagem nos tutoriais:** barra de progresso de leitura no topo da janela, barra de status fixa por tutorial ("Passo X de N" + porcentagem), índice lateral com destaque automático da etapa atual e botões **Etapa anterior / Próxima etapa**.
- **Acessibilidade (WCAG 2.2 nível AA):** link "Pular para o conteúdo", navegação completa por teclado (`Tab`, `Shift+Tab`, `Escape` no menu mobile), foco visível em todos os controles, textos alternativos, suporte a `prefers-reduced-motion` e modo de alto contraste.

---

## 6. Capturas de tela dos tutoriais

Os três tutoriais de `power-automate.html` contam com 16 capturas de tela reais em `assets/screenshots/`:

| Arquivo | Tutorial e passo | O que aparece na imagem |
|---|---|---|
| `assets/screenshots/pa-t01-passo-01.png` | Tutorial 01 — Passo 1 | Lista `Trabalhos da Faculdade` criada no Microsoft To Do |
| `assets/screenshots/pa-t01-passo-02.png` | Tutorial 01 — Passo 2 | Criação do fluxo com o gatilho **Quando uma nova mensagem de canal é adicionada** (Teams) |
| `assets/screenshots/pa-t01-passo-03.png` | Tutorial 01 — Passo 3 | Gatilho configurado com a Equipe da disciplina e o Canal `Geral` |
| `assets/screenshots/pa-t01-passo-04.png` | Tutorial 01 — Passo 4 | Ação **Adicionar uma tarefa (V3)** (Microsoft To-Do Business) configurada |
| `assets/screenshots/pa-t01-passo-05.png` | Tutorial 01 — Passo 5 | Tarefa criada automaticamente na lista `Trabalhos da Faculdade` no Microsoft To Do |
| `assets/screenshots/pa-t02-passo-01.png` | Tutorial 02 — Passo 1 | Pasta `Materiais de Aula` criada no OneDrive for Business |
| `assets/screenshots/pa-t02-passo-02.png` | Tutorial 02 — Passo 2 | Criação do fluxo com o gatilho **Quando um arquivo é criado (somente propriedades)** (SharePoint) |
| `assets/screenshots/pa-t02-passo-03.png` | Tutorial 02 — Passo 3 | Gatilho configurado com o Endereço do Site da turma e a Biblioteca `Documentos` |
| `assets/screenshots/pa-t02-passo-04.png` | Tutorial 02 — Passo 4 | Ação **Obter conteúdo do arquivo** (SharePoint) preenchida com o *Identificador* dinâmico |
| `assets/screenshots/pa-t02-passo-05.png` | Tutorial 02 — Passo 5 | Ação **Criar arquivo** (OneDrive for Business) preenchida com pasta, nome e conteúdo |
| `assets/screenshots/pa-t02-passo-06.png` | Tutorial 02 — Passo 6 | Material de aula de teste salvo automaticamente na pasta `Materiais de Aula` no OneDrive |
| `assets/screenshots/pa-t03-passo-01.png` | Tutorial 03 — Passo 1 | Criação de Fluxo da nuvem instantâneo com o gatilho **Para uma mensagem selecionada (V2)** (Teams) |
| `assets/screenshots/pa-t03-passo-02.png` | Tutorial 03 — Passo 2 | Cartão Adaptável do gatilho configurado com as entradas `Nome do trabalho` e `Data de entrega` |
| `assets/screenshots/pa-t03-passo-03.png` | Tutorial 03 — Passo 3 | Seleção da ação **Criar evento (V4)** do conector Office 365 Outlook |
| `assets/screenshots/pa-t03-passo-04.png` | Tutorial 03 — Passo 4 | Ação **Criar evento (V4)** preenchida com Calendário, Assunto, Data de entrega e fuso de Brasília |
| `assets/screenshots/pa-t03-passo-05.png` | Tutorial 03 — Passo 5 | Menu da mensagem no Microsoft Teams acionando o fluxo **Agendar trabalho no Calendário** |

---

## 7. Identificação institucional

- **Universidade:** Universidade de Mogi das Cruzes
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Responsáveis:** Juan Fernando, Murilo Victorino e Nicollas Santos

---

## 8. Limitações identificadas e observações importantes

1. **Aba "Tarefas" (*Assignments*) do Microsoft Teams:** o conector padrão do Microsoft Teams no Power Automate não possui um gatilho nativo exclusivo para a aba *Tarefas*. Por isso, o Tutorial 01 utiliza o gatilho **Quando uma nova mensagem de canal é adicionada** (capturando os avisos postados no canal da turma) e o Tutorial 03 utiliza o gatilho **Para uma mensagem selecionada** (permitindo agendar o prazo a partir de qualquer mensagem no Teams).
2. **Lista de tarefas (Microsoft To Do) × Planilha (Excel):** o Microsoft To Do cria itens em listas de tarefas (ação *Adicionar uma tarefa (V3)*). Caso o estudante queira registrar os trabalhos em uma planilha, o Tutorial 01 orienta como substituir a ação por *Adicionar uma linha em uma tabela* do conector **Excel Online (Business)**.
3. **Arquivos do Teams no SharePoint:** toda equipe do Teams armazena os arquivos da aba *Arquivos* em uma biblioteca do SharePoint da turma; por isso, o Tutorial 02 utiliza o gatilho do **SharePoint** combinado com o **OneDrive for Business**.
4. **Políticas de TI e licenciamento:** administradores de TI da universidade podem restringir determinados conectores ou permissões em equipes de disciplinas.
