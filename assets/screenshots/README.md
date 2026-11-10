# Capturas de tela dos tutoriais

Esta pasta guarda as capturas de tela **reais** do Power Automate usadas nos três tutoriais universitários.
Enquanto as imagens não forem adicionadas, o site mostra espaços reservados ("Captura de tela pendente").

## Convenção de nomes

| Tutorial | Padrão | Exemplo |
|---|---|---|
| Tutorial 01 — Salvar no Microsoft To Do os trabalhos que chegam no Teams | `pa-t01-passo-NN.webp` | `pa-t01-passo-03.webp` |
| Tutorial 02 — Salvar em uma pasta no OneDrive os materiais de aula       | `pa-t02-passo-NN.webp` | `pa-t02-passo-05.webp` |
| Tutorial 03 — Agendar no calendário os trabalhos do Teams com prazo      | `pa-t03-passo-NN.webp` | `pa-t03-passo-04.webp` |

A lista completa dos 16 arquivos esperados está no `README.md` principal, na seção
**"Conteúdos que dependem de capturas de tela reais"**.

## Como substituir um espaço reservado

No HTML, cada captura pendente tem este formato:

```html
<div class="screenshot__frame">
  <div class="screenshot__placeholder"> ... Captura de tela pendente ... </div>
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

- **Use uma conta ou equipe de teste** (nunca exponha dados reais de colegas ou professores).
- **Oculte ou desfoque** nomes completos, e-mails, fotos de perfil, IDs de locatário (tenant) e qualquer dado pessoal.
- Formato **WebP** (ou PNG otimizado), largura entre 1280 e 1600 px, tamanho ideal abaixo de 200 KB.
- Escreva um `alt` que explique a informação importante da tela, não apenas "captura de tela".
