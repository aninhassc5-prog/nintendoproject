# Projeto Final: Blog & Catálogo da História da Nintendo 🎮

Este é o projeto final de Desenvolvimento Web Front-End desenvolvido em **React** utilizando a infraestrutura do **Vite**. O objetivo da aplicação é apresentar uma página de blog estilizada sobre os marcos históricos da empresa Nintendo e um sistema assíncrono de catálogo de jogos.

## 🚀 Funcionalidades Implementadas

- **Estrutura de Componentes Funcionais:** Organização modular do código com componentes isolados para cada secção da página (`Header`, `Navigation`, `Main`, `About`, `Footer`, `Preloader`, `NotFound`, `SearchForm` e `GamesCatalog`).
- **Rotas Dinâmicas (SPA):** Navegação entre a página inicial do Blog (`/`) e a página de pesquisa do Catálogo (`/jogos`) sem recarregamento de página através do `React Router`.
- **Pesquisa e Simulação de API Assíncrona:** Sistema de busca no catálogo com atraso controlado (simulando uma resposta de rede) para exibição do `Preloader`.
- **Layout Responsivo e Metodologia BEM:** Folhas de estilo CSS estruturadas estritamente de acordo com as regras de nomenclatura BEM. Layout totalmente adaptável com CSS Grid e Flexbox, garantindo exibição correta em computadores e dispositivos móveis sem rolagem horizontal.
- **Tratamento de Estados e Persistência:**
  - Renderização condicional do ecrã de "Nada Encontrado" se a busca não retornar resultados.
  - Paginação inteligente que renderiza os cartões em blocos de 3 em 3 através do botão "Mostrar mais".
  - Salvamento automático dos resultados no `LocalStorage` para persistência dos dados ao recarregar a aba.
  - Microanimações de foco em botões e inputs, incluindo a ativação visual (cor azul) do ícone de salvar artigo.

## 🛠️ Tecnologias Utilizadas

- **React.js** (Componentes Funcionais e Hooks como `useState` e `useEffect`)
- **Vite** (Ambiente de desenvolvimento rápido)
- **React Router Dom** (Gestão de rotas da aplicação)
- **HTML5 Semântico**
- **CSS3** (Flexbox, Grid Layout e Variáveis Nativas)
- **JavaScript Moderno (ES6+)** (Promises e Async/Await)

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── App/
│   ├── Header/
│   ├── Navigation/
│   ├── Main/
│   ├── SearchForm/
│   ├── GamesCatalog/
│   ├── Preloader/
│   ├── NotFound/
│   ├── About/
│   └── Footer/
├── utils/
│   └── ThirdPartyApi.js
├── vendor/
├── index.css
└── main.jsx
```

## 🔧 Como Executar o Projeto Localmente

1. Clone este repositório para a sua máquina local.
2. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o endereço `http://localhost:5173` no seu navegador de internet.

> 🌐 **Link do Deploy do Projeto:** [https://nintendoproject-git-main-aninha2.vercel.app/](https://vercel.app)

Por Ana Sofia Sanches
