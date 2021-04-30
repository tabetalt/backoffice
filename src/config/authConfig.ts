import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig =
  //{
  //   type: 'service_account',
  //   project_id: 'tabetalt-312106',
  //   private_key_id: '48054726d137e5e83f5fe64c0b4482cb544cb3e6',
  //   private_key:
  //     '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCg+dCV0F0MhB6t\nQd9B/zy7YLtXC1TpKoZ+fi7Il1que+teuzn9yVLzNCWB5d5r0cU1EJKJjq9aS/zo\nyR2I0AYLcMsnJDE29uoByS9YpqFPifds8KfJB3Q2O6uBGAeetDs/vrxWuEB/JIs1\noiIVaD1G24aSSw863HW8sn3lQFgsg1CV6+w/c8dCgVMVIU0IvoXicvnG+x8Mv+Gx\nDj8tg/WOk3b16Jh4vb777+zQRZ1BBKFWGXNpbADMjo6BO7Yc02mPLcqesGwtt57B\nIpFB9AovM7Ru3rNybaYinW9K1kKonSWPaDSHhdiNAjJBntjhPZ1g82dCNMltvYxh\nwksNRVJNAgMBAAECggEAGAzq4I82b7nHmYwnboVTTg2IP9uGDqYXXQu+MqMGXd5O\nzqL7aZLsLUDjv7IX1pULOT/mHN4wDbYfranqmze1R31NJOZv4e3nDWhBBiYzIJ6U\n1HZqIwtVjgrBN3LfJJN57K6zFePGYxiTIeq82+Tsjssaon3LYzhv8MbcL2W7Jr8l\nHQ2t7D8sVdxJCEAyB33b5ApC+pOaCayEx7gYqiy6tiuAlI003JhTr/TcT4wkc7bG\nuhukxMhtkkrCc4CwOAaG/AeoYAxk4hoAgLd8LrPUZoAEsz10/UPGUZLzj0OqrjFK\nLvGS0PI8luomSbNmqDzjGsf+/mlS1NbaIknNSjX+wwKBgQDPeOnAXmATPzo8IcPB\nu70R3DkK5GMnw1dn8P/ZxPBIvStod+vSHu9qnP8A5KGjEZDBxqcDxaKEyfwRWlZt\nIq4V3UcasK86K7rTAUUkmYxmchsWsp7hX7lq4+uaRhD4HIy2dGx3hysKXKSuJkHh\nym7Wm1aHdP0ENjlhdQfdvbU/GwKBgQDGoMWyxuPeV0QIkePy7A/+NDYq8djhnklq\nl8hr9r5mMIeo1qauYYOMEM4di9vtiO2oqJodUuOODriWyx9jBnDOwi+RugjAyVIo\nMWMsJySdJ4+tAqrGOTjTAhv9qy2wrHVy7ffB5zBK4leMtmlwrGIA93FZNX1IrvFC\nSB7FGxUCtwKBgQC44OZrpa23eQBL1Uq7uLAi2jt6mUpChK++z+MuC3CTYP7teO+L\nrkVqm7wg75uZ1G1KP9tUYSkRa2xTiky5s82tbiGOhyOekplIrjkPBEU4hTXeZA1w\nh/ySY8fvEcDNV6OMcvK1EJ4p/aRCC5VpvxpF4uaYjodo2WkIj2ETF5oLQQKBgAyD\nmpEN6NNcSiQEFQl8B/HrFjKUdCaa02NM1sq+i/ZiPlnL1EqOSDxt3p6L7jpD8z06\nCiOo0j9j/As8FuklQbw1DcwvnVeQF4YCvo3MlYj1Mh8jWOEOP99DdcIAo+tKokew\naHil+SvuoLdz0qbPpYkMDe8h6JfItdiINLAUabl3AoGAPCsD912lQzP1JwmTl2y9\nOKP+j8JVAxK7aFnyUbcnYrMusIsZmRWnUf9yMYBn+/TSr1HLa64tOd1Z2lMdjQv+\n8GKAmjbethgAuyAF/pyXNtwCUpdHQ/4ksmC3kbWaareQW1OoXX3JamL6sPvPZwVe\nsKPdcQmRn3ieYlzm8grG2DQ=\n-----END PRIVATE KEY-----\n',
  //   client_email: 'tabetaltbacknd@tabetalt-312106.iam.gserviceaccount.com',
  //   client_id: '113599390808863647565',
  //   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  //   token_uri: 'https://oauth2.googleapis.com/token',
  //   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  //   client_x509_cert_url:
  //     'https://www.googleapis.com/robot/v1/metadata/x509/tabetaltbacknd%40tabetalt-312106.iam.gserviceaccount.com',
  // };

  {
    apiKey: '<api-key>',
    authDomain: '<auth-domain>',
    databaseURL: '<auth-domain>',
    projectId: '<auth-domain>',
    storageBucket: '<auth-domain>',
    messagingSenderId: 'n-a',
    appId: 'n-a',
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export const useFirebase = (): any => {
  return { firebase, auth };
};
export { auth, firebase };
