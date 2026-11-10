# Automatize seu dia a dia

> **Slogan:** *Sua rotina pode ser mais simples.*  
> Plataforma educativa estática desenvolvida como produto de **projeto de extensão universitária** para ensinar pessoas sem conhecimentos técnicos a automatizar tarefas cotidianas com o **Microsoft Power Automate**.

---

## 1. Estrutura do projeto

```text
automatize-se/
├── index.html                  # Página inicial (Hero, problemas, ferramenta, tutoriais em destaque, CTA)
├── automacao.html              # Introdução à automação + diagrama GATILHO → AÇÃO → RESULTADO + glossário
├── power-automate.html         # Visão geral do Power Automate + Tutorial 01 + Tutorial 02
├── desafios.html               # 3 desafios práticos comentados + Quiz final com 5 questões
├── sobre.html                  # Objetivos de extensão, ficha institucional editável e referências
├── 404.html                    # Página personalizada de erro 404
├── css/
│   ├── style.css               # Variáveis (tokens), tipografia, layout, componentes e acessibilidade
│   ├── tutorials.css           # Layout dos tutoriais, barra de progresso, desafios e quiz
│   └── responsive.css          # Media queries mobile-first (640px, 900px, 1200px)
├── js/
│   ├── main.js                 # Ano automático, links externos seguros, animações reveal e scrollspy
│   ├── navigation.js           # Menu mobile acessível por teclado e botão "Voltar ao topo"
│   ├── tutorials.js            # Progresso de leitura e navegação "Etapa anterior / Próxima etapa"
│   └── quiz.js                 # Lógica local dos 3 desafios práticos e do quiz de 5 perguntas
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
No terminal, dentro da pasta `automatize-se/`:

```bash
# Com Python 3 instalado:
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

---

## 3. Como publicar no GitHub Pages

1. Crie um repositório público no GitHub (por exemplo, `automatize-se`) e envie o conteúdo da pasta `automatize-se/` para a raiz do repositório:
   ```bash
   cd automatize-se
   git init
   git add .
   git commit -m "Versão inicial da plataforma Automatize seu dia a dia"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/automatize-se.git
   git push -u origin main
   ```
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
5. Em alguns instantes, o site estará no ar em `https://SEU-USUARIO.github.io/automatize-se/`.
   - Como todos os links internos são relativos, o site funciona normalmente mesmo publicado em subdiretório (`/automatize-se/`).

---

## 4. Como publicar no Netlify (alternativa)

### Método 1 — Arrastar e soltar (Netlify Drop)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `automatize-se/` para a área indicada.
3. O site será publicado imediatamente com HTTPS e suporte automático ao arquivo `404.html`.

### Método 2 — Conectado ao GitHub
1. No painel do Netlify, clique em **Add new site → Import an existing project** e conecte seu repositório do GitHub.
2. Caso o repositório contenha a subpasta `automatize-se/`, configure **Base directory** e **Publish directory** como `automatize-se` (ou deixe em branco se os arquivos estiverem na raiz do repositório).
3. Deixe **Build command** vazio e clique em **Deploy site**.

---

## 5. Funcionalidades implementadas

- **Identidade visual completa:** paleta oficial (`#142B50`, `#2563EB`, `#8B5CF6`, `#F1F5F9`, `#FFFFFF`, `#1E293B`), tipografia *Poppins* + *Inter* com fontes locais de reserva, cards, badges e ícones autorais em SVG.
- **6 páginas HTML completas e interligadas:** `index.html`, `automacao.html`, `power-automate.html`, `desafios.html`, `sobre.html` e `404.html`.
- **Diagrama didático em HTML + CSS:** fluxo `GATILHO → AÇÃO → RESULTADO` na página `automacao.html`, responsivo (vertical no celular, horizontal no desktop), sem depender de imagem estática.
- **2 tutoriais completos do Microsoft Power Automate** (conta institucional Microsoft 365):
  - *Tutorial 01:* Enviar uma notificação quando chegar um e-mail importante.
  - *Tutorial 02:* Salvar anexos automaticamente em uma pasta do OneDrive for Business.
- **Componentes de aprendizagem nos tutoriais:** barra de progresso de leitura no topo da janela, barra de status fixa por tutorial ("Passo X de 6" + porcentagem), índice lateral com destaque automático da etapa atual e botões **Etapa anterior / Próxima etapa**.
- **Desafios práticos e Quiz final (`desafios.html`):**
  - 3 desafios baseados em situações cotidianas com feedback específico para cada alternativa e contador de progresso.
  - Quiz final com 5 perguntas de múltipla escolha, validação de questões em branco, cálculo de pontuação, feedback individual e botão **Refazer o teste**.
- **Acessibilidade (WCAG 2.2 nível AA):** link "Pular para o conteúdo", navegação completa por teclado (`Tab`, `Shift+Tab`, `Escape` no menu mobile), foco visível em todos os controles, textos alternativos, regiões `aria-live` para feedbacks do quiz, suporte a `prefers-reduced-motion` e modo de alto contraste.

---

## 6. Conteúdos que dependem de capturas de tela reais

Os dois tutoriais de `power-automate.html` possuem espaços reservados (`<figure class="screenshot">`) prontos para receber as capturas reais feitas em uma conta de teste do Microsoft 365. Veja as orientações detalhadas em [`assets/screenshots/README.md`](assets/screenshots/README.md).

| Arquivo esperado | Tutorial e passo | O que deve aparecer na imagem |
|---|---|---|
| `assets/screenshots/pa-t01-passo-01.webp` | Tutorial 01 — Passo 1 | Tela inicial do Power Automate (`make.powerautomate.com`) com menu lateral esquerdo |
| `assets/screenshots/pa-t01-passo-02.webp` | Tutorial 01 — Passo 2 | Tela `+ Criar` destacando a opção **Fluxo da nuvem automatizado** |
| `assets/screenshots/pa-t01-passo-03.webp` | Tutorial 01 — Passo 3 | Janela com nome do fluxo e gatilho **Quando um novo email chegar (V3)** (Office 365 Outlook) |
| `assets/screenshots/pa-t01-passo-04.webp` | Tutorial 01 — Passo 4 | Bloco do gatilho aberto com **Pasta: Caixa de Entrada** e **Filtro de Assunto: `[IMPORTANTE]`** |
| `assets/screenshots/pa-t01-passo-05.webp` | Tutorial 01 — Passo 5 | Ação **Enviar um email (V2)** preenchida com os campos dinâmicos *De* e *Assunto* |
| `assets/screenshots/pa-t01-passo-06.webp` | Tutorial 01 — Passo 6 | Tela de teste exibindo a mensagem **Seu fluxo foi executado com êxito** |
| `assets/screenshots/pa-t02-passo-01.webp` | Tutorial 02 — Passo 1 | Pasta `Anexos do E-mail` criada no OneDrive for Business |
| `assets/screenshots/pa-t02-passo-02.webp` | Tutorial 02 — Passo 2 | Criação do fluxo `Salvar anexos no OneDrive` com o gatilho de chegada de e-mail |
| `assets/screenshots/pa-t02-passo-03.webp` | Tutorial 02 — Passo 3 | Parâmetros avançados do gatilho com **Incluir Anexos: Sim** e **Somente com Anexos: Sim** |
| `assets/screenshots/pa-t02-passo-04.webp` | Tutorial 02 — Passo 4 | Ação **Criar arquivo** (OneDrive for Business) com Caminho da Pasta, Nome e Conteúdo dos Anexos |
| `assets/screenshots/pa-t02-passo-05.webp` | Tutorial 02 — Passo 5 | Bloco **Aplicar a cada** criado automaticamente ao redor da ação *Criar arquivo* |
| `assets/screenshots/pa-t02-passo-06.webp` | Tutorial 02 — Passo 6 | Arquivo de teste salvo dentro da pasta `Anexos do E-mail` no OneDrive |

---

## 7. Informações institucionais editáveis

Para evitar dados institucionais fictícios, todos os campos que dependem da sua universidade foram marcados com a classe `.editable` e o atributo `data-editable`. Procure por `data-editable` nos arquivos HTML para preencher:

| Identificador (`data-editable`) | Texto provisório atual | Onde aparece |
|---|---|---|
| `universidade` | `[Nome da universidade]` | Rodapé de todas as páginas e ficha em `sobre.html` |
| `curso` | `[Nome do curso]` | Rodapé de todas as páginas e ficha em `sobre.html` |
| `responsavel` | `[Nome do responsável]` | Rodapé de todas as páginas e ficha em `sobre.html` |
| `orientador` | `[Nome do(a) professor(a) orientador(a)]` | Ficha institucional em `sobre.html` |
| `ano` | `2026` | Ficha institucional em `sobre.html` |

> **Dica:** após substituir os textos reais, você pode remover a classe `editable` dos elementos `<span>` caso não queira mais o destaque amarelo.

---

## 8. Limitações identificadas e observações importantes

1. **Descontinuação do aplicativo móvel do Power Automate (31/08/2026):** conforme comunicado oficial no Microsoft Learn, o app móvel independente do Power Automate foi aposentado. Por isso, o Tutorial 01 utiliza a ação oficial recomendada (**Enviar um email (V2)** ou mensagem no **Microsoft Teams**) em vez da antiga notificação push do aplicativo móvel.
2. **Diferenças entre contas institucionais e pessoais:** os tutoriais usam os conectores **Office 365 Outlook** e **OneDrive for Business** (padrão em contas institucionais Microsoft 365). Em contas gratuitas pessoais (`@outlook.com`), os conectores equivalentes chamam-se **Outlook.com** e **OneDrive**.
3. **Políticas de TI e licenciamento:** administradores de TI da universidade podem bloquear determinados conectores ou impor políticas de prevenção contra perda de dados (DLP).
4. **Conferência na interface real:** a Microsoft atualiza periodicamente o designer do Power Automate (alternância entre "Novo designer" e "Designer clássico") e as traduções para o português. Ao realizar as capturas de tela, confira se os rótulos dos campos batem exatamente com os exibidos no locatário da sua instituição.
5. **Processamento local:** o quiz e os desafios funcionam 100% no navegador do visitante; as respostas não são salvas em servidor nem enviadas pela internet.
