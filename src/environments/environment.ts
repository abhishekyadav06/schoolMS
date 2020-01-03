// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailAPI: 'http://XXXXXX.com/contact-form.php',
  database: 'firebase',
  social: {
    role: 'Guest',
    fblink: 'https://www.facebook.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    emailid: 'abhiakkem96@gmail.com'
  },
  socialAuthEnabled: true,
  firebase : {
    apiKey: "AIzaSyBTyp_zfDGR3nf1fO0VWx7fOO6R5SVvNLM",
    authDomain: "schms-65d10.firebaseapp.com",
    databaseURL: "https://schms-65d10.firebaseio.com",
    projectId: "schms-65d10",
    storageBucket: "",
    messagingSenderId: "735706244734",
    appId: "1:735706244734:web:a1e871c3d36c696e085a2f"
  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
