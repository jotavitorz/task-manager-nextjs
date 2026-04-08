# Tarefas Plus

![Badge Next](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Badge React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white)
![Badge Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Badge CSS](https://img.shields.io/badge/CSS%20Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## Sobre o projeto

Este projeto é uma aplicação desenvolvida com **Next.js** com foco em aprendizado prático do ecossistema React com renderização híbrida. A aplicação explora conceitos como **SSR (Server Side Rendering)**, **SSG (Static Site Generation)**, rotas baseadas em arquivos, autenticação de usuários com Google utilizando **NextAuth.js** e integração com banco de dados em tempo real utilizando **Firebase**.

O objetivo principal é evoluir o conhecimento no framework através da construção de páginas, testes e experimentações com boas práticas de desenvolvimento.

---

## Fluxo da aplicação

1. Usuário acessa a aplicação e faz login com a conta Google
2. É redirecionado para o Dashboard, onde pode criar suas tarefas
3. Ao criar uma tarefa, pode escolher se ela será pública ou privada
4. Tarefas públicas ficam visíveis para outros usuários
5. Outros usuários podem comentar nas tarefas públicas
6. Cada usuário pode excluir apenas seus próprios comentários

---

## Layout

<p align="center">
  <img src="./screenshots/home.png" width="800">
</p>
<p align="center">
  <img src="./screenshots/dashboard.png" width="800">
</p>

---

## 🛠 Tecnologias utilizadas

- **Next.js** — Framework React com SSR e SSG
- **React** — Biblioteca para construção de interfaces
- **Node.js** — Ambiente de execução do Next.js
- **NextAuth.js** — Autenticação com Google (OAuth)
- **Firebase** — Banco de dados e serviços backend (Firestore)
- **CSS Modules** — Estilização com escopo local
- **npm / yarn** — Gerenciamento de dependências

---

## Funcionalidades

- Autenticação de usuários com Google (NextAuth.js)
- Proteção de rotas baseada em login
- Criação de tarefas públicas e privadas
- Comentários em tarefas públicas por outros usuários
- Exclusão de tarefas pelo dono da tarefa
- Exclusão de comentários pelo próprio autor do comentário
- Estrutura de páginas com rotas automáticas do Next.js
- Renderização com SSR e SSG
- Organização de componentes reutilizáveis
- Integração com Firebase Firestore
- Estilização com CSS Modules
- Estrutura preparada para APIs internas (`/api`)

---

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- [Git](https://git-scm.com/)
- Conta no [Firebase](https://firebase.google.com/) com um projeto criado
- Credenciais OAuth configuradas no [Google Cloud Console](https://console.cloud.google.com/)

---

### 📥 Clonando o repositório

```bash
git clone https://github.com/jotavitorz/tarefas-plus.git
cd tarefas-plus
```

---

### ⚙️ Configurando as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```dotenv
# Google OAuth (Google Cloud Console)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# NextAuth
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=

# URL pública da aplicação
NEXT_PUBLIC_URL=http://localhost:3000

# Firebase
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
```

>  Nunca suba o arquivo `.env.local` para o repositório. Certifique-se de que ele está no `.gitignore`.

---

###  Instalando dependências

```bash
npm install
# ou
yarn
```

---

###  Executando o projeto

```bash
npm run dev
```

O projeto será iniciado em:

```
http://localhost:3000
```

---

###  Build para produção

```bash
npm run build
npm start
```

---

## Contribuições & Observações

Fique à vontade para estudar, modificar e evoluir este projeto.

- Utilize boas práticas de commits
- Organize bem os componentes
- Use como base para projetos maiores

Projeto voltado para aprendizado e evolução contínua.

---

<p align="center">
  Feito por <b>João Vitor 🖖</b>
</p>
