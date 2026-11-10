# Capturas de tela dos tutoriais

Esta pasta guarda as capturas de tela **reais** do Power Automate usadas nos tutoriais.
Enquanto as imagens não forem adicionadas, o site mostra espaços reservados ("Captura pendente").

## Convenção de nomes

| Tutorial | Padrão | Exemplo |
|---|---|---|
| Power Automate — Tutorial 01 (aviso de e-mail) | `pa-t01-passo-NN.webp` | `pa-t01-passo-03.webp` |
| Power Automate — Tutorial 02 (salvar anexos)   | `pa-t02-passo-NN.webp` | `pa-t02-passo-05.webp` |

A lista completa de arquivos esperados está no `README.md` principal, na seção
**"Conteúdos que dependem de capturas de tela reais"**.

## Como substituir um espaço reservado

No HTML, cada captura pendente tem este formato:

```html
<div class="screenshot__frame">
  <div class="screenshot__placeholder"> ... Captura pendente ... </div>
</div>
```

Troque o bloco `screenshot__placeholder` por:

```html
<div class="screenshot__frame">
  <img src="assets/screenshots/pa-t01-passo-03.webp"
       alt="Descreva o que aparece na tela e o que deve ser observado"
       width="1600" height="900" loading="lazy" decoding="async">
</div>
```

## Recomendações

- **Use uma conta de teste** (nunca contas pessoais reais).
- **Oculte ou desfoque** nomes, e-mails, fotos de perfil, IDs de locatário (tenant) e qualquer dado pessoal.
- Use os dados fictícios dos tutoriais (ex.: `coordenacao@exemplo.edu.br`, "Relatório mensal — exemplo.pdf").
- Formato **WebP** (ou PNG otimizado), largura entre 1280 e 1600 px, tamanho ideal abaixo de 200 KB.
- Escreva um `alt` que explique a informação importante da tela, não apenas "captura de tela".
- Registre a data da captura: a interface do Power Automate muda com frequência.
