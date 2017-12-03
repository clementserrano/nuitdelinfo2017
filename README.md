# Nuitdelinfo2017

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Les instructions du porc poilu

Installer :
* NodeJS
* MongoDB

Lancer "(chemin d'install)/MongoDB/Server/3.4/bin/`mongod.exe`" 
Les commandes mongo peuvent se faire par le shell (mongo.exe) pour en installant un client (Robot 3T).

Lancer un build du front-end (dans nuitdelinfo2017) : 
`ng build`

Puis lancer le serveur : 
`node server.js`

L'application est lancer sur l'url :
 http://localhost:3000/

Pour voir les modifs du front sans rebuild lancer : 
`ng serve`
L'app en dev est sur http://localhost:4200/ 
(pour l'instant l'api marche pas sur 4200)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
