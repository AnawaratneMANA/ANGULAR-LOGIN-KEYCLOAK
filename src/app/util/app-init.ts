import {KeycloakService} from "keycloak-angular";

export function initializer(Keycloak: KeycloakService): () => Promise<any>
{
  return () : Promise<any> => {
    return new  Promise(async (resolve, reject) => {
      try{
        await Keycloak.init(
          {
            config: {
              url:"http://localhost:8080/auth",
              realm:"Test",
              clientId:"todo-ui"
            },
        loadUserProfileAtStartUp: false,
            initOptions: {
              onLoad: 'login-required',
              checkLoginIframe: true
            },
            bearerExcludedUrls: []
          }
        );
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}

