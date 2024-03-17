declare global {
    namespace NodeJS {
      interface ProcessEnv {
        KINDE_DOMAIN: string;
        KINDE_CLIENT_ID: string;
        KINDE_CLIENT_SECRET: string;
        KINDE_REDIRECT_URI: string;
        KINDE_LOGOUT_REDIRECT_URI: string;

      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}