# Bem-vindo ao Gerenciador de Eventos da MB Labs !

### Descrição
> É uma aplicação backend para gerenciamento de **eventos** corporativos e universitários, onde pessoas podem **buscar** e **comprar ingressos**.

<details>
  <summary><strong>Principais funcionalidades ✨</strong></summary>

  > As principais responsabilidade desta API estão relacionadas a integração com o banco de dados, seguindo os princípios do REST, com as requisições feitas baseadas nos *endpoints*:
  
  <h4>Usuário</h4>
  
  | Método | Caminho | Responsabilidade |
  |---|---|---|
  | POST | `/users` | Criar novo usuário |
  | GET | `/users` | Listar todos usuários cadastrados na aplicação |
  | GET | `/users/:id` | Listar o usuário e seus ingressos comprados |
  | PUT | `/users/:id` | Editar as propriedades do usuário |
  | DELETE | `/users/:id` | Remover o usuário cadastrado na aplicação |
  | POST | `/login` | Realizar *login* na aplicação para gerar o token de autenticação |
  
  <hr>
  
  <h4>Empresa</h4>
  
  | Método | Caminho | Responsabilidade |
  |---|---|---|
  | POST | `/company` | Criar nova empresa |
  | GET | `/company` | Listar todas empresas cadastradas na aplicação |
  | GET | `/company/:id` | Listar a empresa e seus eventos patrocinados |
  | PUT | `/company/:id` | Editar as propriedades da empresa |
  | DELETE | `/users/:id` | Remover a empresa cadastrado na aplicação |
  
  - Para o CRUD de Universidade, a rota é `/university` e seguem as mesmas responsabilidades de Empresa.
  
  <hr>
  
   <h4>Evento</h4>
  
  | Método | Caminho | Responsabilidade |
  |---|---|---|
  | POST | `/events` | Criar novo evento e indicar a empresa/universidade responsável pelo evento |
  | POST | `/events/buy-ticket` | Usuário logado compra o ingresso do evento desejado |
  | GET | `/events` | Listar todos eventos cadastrados na aplicação |
  | GET | `/events/:id` | Listar o evento específico |
  | PUT | `/events/:id` | Editar as propriedades do evento |
  | DELETE | `/events/:id` | Remover o evento cadastrado na aplicação |
    
</details>

<details>
  <summary><strong>Tecnologias utilizadas 👨‍💻</strong></summary>

  - [`TypeScript`](https://www.typescriptlang.org)
  - [`Node.js`](https://nodejs.org/)
  - [`Express`](https://expressjs.com/)
  - [`Docker`](https://www.docker.com/)
  - [`Typeorm`](https://typeorm.io/)
  - [`MySQL`](https://www.mysql.com/)
  - [`bcrypt`](https://www.npmjs.com/package/bcrypt)
  - [`jwt`](https://jwt.io/)
  - [`zod`](https://github.com/colinhacks/zod)
  - [`ESLint`](https://eslint.org/)
  - [`Prettier`](https://prettier.io/)
</details>

<details>
  <summary><strong>Executando o projeto 🌐</strong></summary>

  - É necessário ter o `Docker` e o [`Docker Compose`](https://docs.docker.com/compose) instalado em sua máquina.

  - Clone o projeto: `git clone git@github.com:gricar/mblabs-events-manager.git`.

  - Entre na pasta do projeto: `cd mblabs-events-manager/app`.
  
  - Execute o **script** no terminal para iniciar o Docker Compose: `docker-compose up -d --build`.
  
  - Entre na pasta do projeto: `cd backend`.

  - Instale as dependências: `npm install`.

  - Os contêineres estarão prontos e você poderá acessar o projeto em: http://localhost:3999

  - Para desligar os containers, utilize o script: `docker-compose down`
</details>
