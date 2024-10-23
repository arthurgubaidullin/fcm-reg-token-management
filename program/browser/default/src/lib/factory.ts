import { getAuth } from 'firebase/auth';
import { DefaultBrowserProgram } from './program';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthAdapter } from '@arthurgubaidullin/firebase-auth-adapter';
import { FirebaseMessagingAdapter } from '@arthurgubaidullin/firebase-messaging-adapter';
import { BrowserPermissions } from '@arthurgubaidullin/browser-permissions';
import { FirebaseDeviceAdapter } from '@arthurgubaidullin/firebase-device-adapter';
import { getInstallations } from 'firebase/installations';
import { getMessaging } from 'firebase/messaging';
import { RegTokenFirestoreStorage } from '@arthurgubaidullin/reg-token-firestore-storage';
import { getFirestore } from 'firebase/firestore';
import { RegTokenManager } from '@arthurgubaidullin/reg-token-manager-factory';

let instance: DefaultBrowserProgram | null = null;

export class DefaultBrouserPropramFactory {
  static default(firebaseApp: FirebaseApp) {
    if (instance === null) {
      const auth = new FirebaseAuthAdapter(getAuth(firebaseApp));

      const device = new FirebaseDeviceAdapter(getInstallations(firebaseApp));

      const messaging = new FirebaseMessagingAdapter(
        getMessaging(firebaseApp),
        device,
        auth
      );
      const regTokenStorage = new RegTokenFirestoreStorage(
        getFirestore(firebaseApp)
      );

      const permissions = BrowserPermissions.default();

      const regTokenManager = new RegTokenManager(messaging, regTokenStorage);

      instance = new DefaultBrowserProgram(permissions, regTokenManager);
    }
    return instance;
  }
}
