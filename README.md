# Desafio

Desafio de Desenvolvedor Fullstack Ecossistema Virtus

# Objetivo

Construir uma aplicação de cadastro de Planos, com as operações CRUD com Banco de Dados MongoDB, usando o add-on do MLab no Heroku.

A aplicação deverá ser hospedada no Heroku, usando NodeJS como servidor de API’s para as operações com o banco de dados e ferramentas do AngularJS para Front-end.

É livre o uso de Frameworks como Bootstrap, Datatables e outros.

- [x] Bando de Dados MongoDB
- [ ] MLab no Heroku
- [ ] Hospedagem Heroku
- [x] NodeJS no backend
- [x] AngularJS no frontend
- [x] Bootstrap

# Cadastro

O cadastro deverá conter

- [x] Campo para Código do Plano (Sequencial) e não editável;

- [x] Descrição;

- [x] Vigência Inicial do Plano (Data);

- [x] Vigência Final do Plano (Data)

- [x] Valor da Parcela;

- [x] % Desconto Permitido;

# O Desenvolvimento

- [x] Publicar projeto no GitHub e disponibilizar aplicação para acesso.

# Ferramentas

⁃ Heroku
https://www.heroku.com/

⁃ AngularJS
https://angular.io/

⁃ NodeJs (Backend)

https://devcenter.heroku.com/articles/getting-started-with-nodejs

⁃ MongoDB

https://elements.heroku.com/addons/mongolab

⁃ Github

https://github.com

# Para ver a aplicação

- Clone do repositório

  > git clone

- Inicializar o servidor ( Necessário MongoDB rodando na porta 27017 sem usuário e senha)

  - entrar na pasta backend
    > cd backend
  - instalar dependencias
    > yarn
  - inicializar aplicação
    > yarn dev

- Inicializar a parte de frontend
  - entar na pasta frontend
    > cd frontend
  - inicializar aplicação
    > ng serve
