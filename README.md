# Implementação de projeto CRUD de pedidos em NodeJs

O projeto utiliza **sqlite3** conta com 2 versões de API, a versão v1 utiliza armazenamento em **memória**, já a versão v2 utiliza um banco de dados persistente com **SQLite3**.

> http://localhost:3000/api/v1

> http://localhost:3000/api/v2

## Tecnologias

 - [x] Knex
 - [x] NodeJs
 - [x] Express
 - [x] Sqlite3

## Instalação

    npm install
    npx knex migrate:up
    npx knex seed:run

## Execução do projeto

    npm start

 
## Estrutura do projeto

|Método| Descrição|Corpo
|--|--|--
|GET| Busca todos os produtos |/api/v**x**/produtos |
|GET| Busca um produto | /api/v**x**/produtos/{id} |
|POST|Adicionar um produto|/api/v**x**/produtos|
|PUT|Atualiza um produto|/api/v**x**/produtos/{id}|

Corpo json utilizado de exemplo

> {
	"descricao": "Nome do produto",
	"marca": "Marca do produto",
	"preco": 1
}


