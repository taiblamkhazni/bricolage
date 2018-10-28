// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase :{
    apiKey: "AIzaSyAb0Met0lJL6c3YaJ98VgtW87ccHMhZSPk",
    authDomain: "bricolage-maroc.firebaseapp.com",
    databaseURL: "https://bricolage-maroc.firebaseio.com",
    projectId: "bricolage-maroc",
    storageBucket: "bricolage-maroc.appspot.com",
    messagingSenderId: "918178271021"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
