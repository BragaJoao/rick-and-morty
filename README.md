<h1 align="center"> Rick and Morty 2ª entrega </h1>

2ª Parte do projeto Rick and Morty, o projeto tem como objetivo ser um **Backend for Frontend** capaz de disponibilizar a criação de usuários e a leitura de todos que foram cadastrados, realizar o CRUD de personagens de Rick and Morty baseados em seus nomes e respectivas imagens, além de ser capas de gerar a autorização JWT de um usuário logado na API.

### Pré-requisitos

* IDE Visual Studio Code
* Node.js
* Express


### Instalação

Ao iniciar o Visual Studio Code abra o terminal no diretório que você está realizando o projeto.
Em seguinda execute o comando: npm i, assim você irá baixar a pasta node-modules com todas as dependências do projeto.

```
Exemplo: PS C:\Users\joaog\OneDrive\Documentos\Blue\Modulo 3\projeto4-m4/rick-and-morty>  npm i
``` 

Após a instalação, você deve executar em sua máquina o projeto com o seguinte comando no seu terminal: npm run dev


O terminal irá gerar um link, que irá dar acesso a porta ao qual ele estará rodando.

```
Exemplo: Servidor rodando em http://localhost:3001
```

## Desenvolvimento

No desenvolvimento do projeto foram criadas as rotas de criação de usuário, com os seguintes campos: name, username, email, password, photo. Onde foram feitas as verificações que não permitem o cadastro de usuários a partir de emails e usernames repetidos, também foi efetuada a encriptação do password no banco de dados. Em seguida foi adicionando a seção de autoriazação via JWT, que permite um usário permanecer logado por um período de vinte e quatro horas ao efetuar o login na API, e consequentemente adicionado um middleware de autorização para ser acoplado junto do CRUD dos personagens que serão cadastrados, assim, se o usuário não possuir um token válido, não será possível executar a ação. Juntamente com o CRUD dos personagens, foi adicionado uma rota de busca, que será responsável de procurar os personagens por seus respectivos nomes, caso houver, e por último foi incluido o sistema de paginação para carregar um número limitado de personagens por vez.

## Construído com

Tecnologias e linguagens utilizadas no projeto:

* Linguagem: JavaScript e EJS
* Tecnologias: Express, Nodemon, Mongoose, Cors, Swagger-Ui, Dotenv, bcryptjs, jsonwebtoken

## Autores

* **João Guilherme Braga** - ([https://github.com/BragaJoao])

## Licença

Este projeto está sob a licença (Mozilla Public License 2.0) - veja o arquivo LICENSE.md ([https://github.com/BragaJoao/rick-and-morty/blob/main/LICENSE]) para detalhes.

## Agradecimentos

Agradeço aos meus professores Marcus e Renato, por toda a atenção durante o módulo e a ajuda prestada para que cada dia eu me torne um profissional melhor.

---
João Guilherme Braga
