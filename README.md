Las características  principales de este bloque son: 
- Consiste en una aplicación que tiene login, listado de usuarios, menu de pestañas, modales y boton flotante usando el api (https://reqres.in/) 
- Construido con el sabor de ionic 5 (angular)
- Utiliza capacitor lo cual permite ejecutar web-apps de forma nativa en android y ios (https://capacitor.ionicframework.com/docs/)
- Usa la arquitectura de referencia de angular (https://angular.io/guide/styleguide#overall-structural-guidelines)
- Soporte para enrutamiento con [angular-router](https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/). 
- Soporte de pruebas unitarias con [karma](https://ionicframework.com/docs/angular/testing)
- Soporte de pruebas funcionales con [protractor] (https://ionicframework.com/docs/angular/testing)
- Uso de enviroments de angular para manejar variables de entorno en los diferentes ambientes


## Estructura del proyecto

Se identifican 3 capas en **src/app** 

- **core**: capa que tiene componentes transversales a toda la aplicación (error handler, guards, toast)
- **feature**: capa que tiene las caracteristicas y pantallas de la aplicación (login, tabs, users)
- **shared**: capa que tiene caracteristicas compartidas en más de un feature (pipes, messages, componentes etc)

## Para instalar este bloque se deben ejecutar los siguientes comandos

- `npm install -g @ionic/cli` para descargar ionic de manera global
- `npm install` para descargar las dependencias
- `ionic serve` inicia la aplicación en modo desarrollo

## Otros comandos

- `npm run test` para ejecutar las pruebas unitarias
- `npm run e2e` para ejecutar las pruebas funcionales
- `npm run lint` para ejecutar tslint
- `npm run buildprod` para generar la versión compilada de la web app para producción que servirá de insumo para capacitor
- `npx cap sync` para syncronizar los archivos compilados con capacitor
- `npx open android` para abrir android studio y visualizar la aplicación en emuladores o generar el apk