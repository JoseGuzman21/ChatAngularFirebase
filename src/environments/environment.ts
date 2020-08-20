// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const newLocal = '804313778761';
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWsbxJ_xHI7DGIUUNX157jS8U0NmelGxs',
    authDomain: 'fire-chart-98da1.firebaseapp.com',
    databaseURL: 'https://fire-chart-98da1.firebaseio.com',
    projectId: 'fire-chart-98da1',
    storageBucket: 'fire-chart-98da1.appspot.com',
    messagingSenderId: newLocal,
    /* appId: "1:804313778761:web:9a77ea3e691b23dc6ecd98" */
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
