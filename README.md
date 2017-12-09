# Nuitdelinfo2017

## Info

Un compte rendu pdf est disponible dans le répertoire d'origine.

## Les instructions du porc poilu

Installer :
* NodeJS
* MongoDB

Lancer "(chemin d'install)/MongoDB/Server/3.4/bin/`mongod.exe`" 
Les commandes mongo peuvent se faire par le shell (mongo.exe) pour en installant un client (Robot 3T).

Installer les libraries npm : 
```
npm install
```

Lancer un build du front-end (dans nuitdelinfo2017) : 
```
ng build
```

Puis lancer le serveur : 
```
node server.js
```

L'application est lancer sur l'url :
 http://localhost:3000/

Pour voir les modifs du front sans rebuild lancer : 
```
npm start
```
L'app en dev est sur http://localhost:4200/

Dans le dossier d'install de mongoDB, 
Pour créer un dump de la base de données :
```
mongodump --out (chemin du projet)\nuitdelinfo2017\bd\dump(heure, ex dump1700) --db nuitdelinfo2017
``` 

Pour restorer la base de données :
```
mongorestore (chemin du projet)\nuitdelinfo2017\bd\dump1700\nuitdelinfo2017 --db nuitdelinfo2017
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Connexion SSH au serveur OVH

ssh porc@54.37.151.60

Je donne le mdp contre une fellation
