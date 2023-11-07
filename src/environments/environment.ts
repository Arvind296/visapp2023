// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.


export const environment = {
  production: false,
  version: 'DEV',
  api_url: 'http://localhost:52590/api',
 //api_url: 'http://localhost:44500/api',
  adalconfig:{
    tenant: '7af7a571-c081-4692-b992-3c086943cf40',
    clientId: 'a2c13f2c-c200-483b-b8f8-da6b0776beb9',
    redirectUri: 'http://localhost:4200/',//window.location.origin,
    endpoints: {
      "http://localhost:44500/": "api://a2c13f2c-c200-483b-b8f8-da6b0776beb9",
    } ,
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage', }
};
