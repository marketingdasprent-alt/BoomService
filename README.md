# BoomService — Landing Page

Site institucional da **BoomService** — empresa de mobilidade e TVDE em Portugal.
Áreas: **Mobility (TVDE) | Rent a Car | Fleet**.

Construído em **React + Vite**, com **React Router** para as páginas legais e
**lucide-react** para os ícones.

## Páginas e secções

- `/` — Hero, Sobre Nós, Serviços (Mobility, Rent a Car, Fleet), Trabalhe como
  motorista, Como funciona, Contactos.
- `/privacidade`, `/termos`, `/cookies` — páginas legais. O conteúdo é um
  rascunho marcado como placeholder: precisa de revisão jurídica antes de
  publicar, já que a empresa opera em Portugal e está sujeita ao RGPD.

## Como correr

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # gerar versão de produção (pasta dist/)
npm run preview  # pré-visualizar a build de produção
```

## Personalizar

- **Contactos reais:** email/telefone/localização estão repetidos em
  `src/pages/Home.jsx` (secção Contactos) e nos `mailto:`/`tel:` do Hero e do
  Header — são placeholders (`geral@boomservice.pt`, `+351 900 000 000`,
  "Lisboa, Portugal") a confirmar antes de publicar.
- **Cores da marca:** variáveis CSS no topo de `src/index.css` (`--violet`,
  `--purple`, `--magenta`, `--bg`, `--surface`).
- **Textos e serviços:** arrays `SERVICOS`, `CAMINHOS_MOTORISTA` e `PASSOS` em
  `src/pages/Home.jsx`.
- **Logótipo:** `src/assets/logo.png` (usado no Header e Footer) e
  `public/favicon.png` (favicon do site).
- **Páginas legais:** conteúdo em `src/pages/Privacy.jsx`, `Terms.jsx` e
  `Cookies.jsx`, dentro do wrapper `src/components/LegalLayout.jsx`.
