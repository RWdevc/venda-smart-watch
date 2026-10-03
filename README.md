# Chronos Kinetic — Landing Page de Smartwatch

Landing page de produto para o **Chronos Kinetic**, um smartwatch premium. Construída com React, Vite e Tailwind CSS, com animações Framer Motion e design responsivo moderno.

---

## ✨ Principais Funcionalidades

- Design dark premium com paleta de cores personalizada
- Animações de entrada e scroll com Framer Motion
- Seções completas: Hero, Features, Health, Customization, Dials, Specs, Guarantee, Testimonials e Footer
- Tipografia customizada (Outfit, Plus Jakarta Sans, Space Grotesk)
- Ícones via Material Symbols
- Totalmente responsivo (mobile-first)

---

## 🛠️ Stack / Tecnologias

| Tecnologia     | Versão       |
|----------------|--------------|
| React          | ^19          |
| Vite           | ^8           |
| Tailwind CSS   | ^4           |
| Framer Motion  | ^14          |
| PostCSS        | ^8           |
| Oxlint         | ^1           |

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior (incluído com o Node.js)

---

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/RWdevc/venda-smart-watch.git
cd venda-smart-watch
npm install
```

---

## ▶️ Executar em Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

---

## 🔍 Lint

```bash
npm run lint
```

---

## 📦 Build de Produção

```bash
npm run build
```

O output será gerado na pasta `dist/`.

---

## 👁️ Preview da Build

```bash
npm run preview
```

---

## 📁 Estrutura do Projeto

```
venda-smart-watch/
├── public/               # Assets estáticos (favicon, ícones SVG)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Imagens e assets do projeto
│   ├── components/       # Componentes React por seção
│   │   ├── Header.jsx
│   │   ├── TopBanner.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Health.jsx
│   │   ├── Customization.jsx
│   │   ├── Dials.jsx
│   │   ├── Specs.jsx
│   │   ├── Guarantee.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente raiz
│   ├── App.css           # Estilos globais adicionais
│   ├── index.css         # Variáveis e base do Tailwind
│   └── main.jsx          # Entry point da aplicação
├── index.html            # HTML raiz com meta tags e fontes
├── tailwind.config.js    # Design tokens e paleta de cores
├── vite.config.js        # Configuração do Vite
├── postcss.config.js     # Configuração do PostCSS
├── package.json
└── package-lock.json
```

---

## 📝 Licença

Este projeto é privado e não possui licença open-source.
