# 📽️ CinePhoria

CinePhoria é uma aplicação **React + Vite + Tailwind CSS** que consome a **API do TMDB (The Movie Database)**.  
Ela permite que usuários busquem filmes, visualizem detalhes completos e montem sua lista personalizada de favoritos — tudo com persistência em **localStorage**.

---

## 🚀 Funcionalidades

✅ **Busca de filmes** por título em tempo real.  
✅ **Paginação** para navegar pelos resultados.  
✅ **Página de detalhes** com informações completas:
- Poster  
- Título  
- Sinopse  
- Avaliação  
- Diretor e elenco principal  

✅ **Favoritos**: adicione/remova filmes da sua lista.  
✅ **Persistência**: lista de favoritos salva no localStorage.  
✅ **Feedback visual**: indicadores de loading e mensagens de erro.  
✅ **Responsividade**: interface adaptada para desktop, tablet e mobile.  

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** → Biblioteca principal  
- **[Vite](https://vitejs.dev/)** → Build tool rápida e moderna  
- **[React Router DOM](https://reactrouter.com/)** → Gerenciamento de rotas  
- **[Tailwind CSS](https://tailwindcss.com/)** → Estilização moderna e responsiva  
- **[Lucide React](https://lucide.dev/)** → Ícones minimalistas  
- **[TMDB API](https://www.themoviedb.org/documentation/api)** → Fonte de dados dos filmes  

---

## 🏗️ Arquitetura

📂 Estrutura de pastas organizada seguindo princípios de **Clean Code** e **SOLID**:
```bash
src/
├─ api/                      # Cliente da API do TMDB
│ └─ tmdb.js
├─ components/               # Componentes reutilizáveis
├─ context/                  # Contexto global de favoritos
├─ hooks/                    # Hooks customizados
├─ pages/                    # Páginas da aplicação
├─ utils/                    # Constantes e helpers
├─ App.jsx                   # Definição de rotas
├─ main.jsx                  # Ponto de entrada
└─ index.css                 # Estilos globais
```

---

## ⚡ Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/CamilaPeretto/cinephoria.git
cd cinephoria
```
2️⃣ Instalar dependências
```bash
npm install
```
3️⃣ Criar arquivo .env na raiz do 
```bash
VITE_API_KEY=SUA_CHAVE_DA_TMDB
```

🔑 Crie sua chave gratuita no site do TMDB.

4️⃣ Rodar em modo de desenvolvimento
```bash
npm run dev
```
5️⃣ Gerar build de produção
```bash
npm run build
```

## 🧪 Qualidade de Código

Clean Code → Código organizado e legível

SOLID → Separação de responsabilidades (hooks, contextos, componentes)

ESLint → Padronização de estilo e boas práticas

## 📌 Melhorias Futuras

🔊 Adicionar sons para feedbacks (favoritar, erros, etc.)

🌙 Tema escuro/claro com ThemeContext

🔐 Área de login para salvar favoritos por usuário

📱 PWA (Progressive Web App) para usar offline

## 👩‍💻 Autor

Feito com ❤️ por Camila Peretto

⚡ "Transformar dados em experiências é o que move a tecnologia. E no CinePhoria, o cinema ganha vida na palma da sua mão."
