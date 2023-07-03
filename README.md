# ProjectAgro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## DB.JSON

No momento estamos utilizando um CRUD simples, de simulação para BackEnd. Para poder utiliza-lo, cole em seu terminal:

json-server --watch db.json

Padrão do endereço: localhost:3000

Utilize junto ao rodar o projeto para obter os dados de listagem, gráficos e entre outros.

## DB.JSON ROUTES

Para rodar cada id, ou seja, ver se um id tem uma forma e outra, utilize esse comando:

json-server db.json --routes routes.json
## Usuário Temporário para acessar rotas

Para acessar as outras rotas do projeto, use um email e senha para poder acessar, aqui está um exemplo padrão:

email: pat@uol.com.br
senha: 12345678
