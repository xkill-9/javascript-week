# Landingpage del Evento Angular Week

Este proyecto fue creado con angular / cli [Angular CLI] (https://github.com/angular/angular-cli) versión 1.0.0-beta.32.3.

## Instalación del proyecto

Para ejecutar este proyecto usted necesita tener instalado en su máquina el ** Node.js **, ** NPM **, ** @ angular / cli **

- Clone este repositorio `git clone https: // github.com / lfdev-gdg / landingpage-evento.git`
- Entre en la carpeta `cd landingpage-evento`
- Instale las dependencias `npm install`
- Gira el servidor de prueba `ng sirve '

## Configurar el Firebase

Necesitas llenar la configuración del firebase con las credenciales de su proyecto disponible en la consola del firebase.
Esta configuración está en el archivo `firebase.config.ts` que se encuentra en la carpeta` src / app / shared`:

```
export const firebaseConfig =
     apiKey: "su api key",
     authDomain: "url del auth",
     databaseURL: "url del banco",
     storageBucket: "url del almacenamiento",
     messagingSenderId: "id de FCM"
};
```