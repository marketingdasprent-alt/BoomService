# BoomService — Landing Page

Landing page (em construção) da **BoomService** — empresa de mobilidade e TVDE.
Áreas: **Mobility | Rent a Car | Fleet**.

Construída em **React + Vite**.

## Secções
- **Hero** com aviso de "site em construção"
- **Sobre Nós**
- **Serviços** (Mobility, Rent a Car, Fleet)
- **Contactos** (email, telefone, localização)

## Como correr

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # gerar versão de produção (pasta dist/)
npm run preview  # pré-visualizar a build de produção
```

## Personalizar
- **Contactos reais:** editar `src/App.jsx` (email/telefone na secção `Contact`).
- **Cores da marca:** variáveis CSS no topo de `src/index.css` (`--violet`, `--purple`, `--magenta`).
- **Textos e serviços:** array `SERVICES` e secções em `src/App.jsx`.
