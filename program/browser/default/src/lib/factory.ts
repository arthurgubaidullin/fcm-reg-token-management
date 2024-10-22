import { getAuth } from 'firebase/auth';
import { DefaultBrowserProgram } from './program';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthAdapter } from '@arthurgubaidullin/firebase-auth-adapter';
import { FirebaseMessagingAdapter } from '@arthurgubaidullin/firebase-messaging-adapter';
import { FirebaseDeviceAdapter } from '@arthurgubaidullin/firebase-device-adapter';
import { getInstallations } from 'firebase/installations';
import { getMessaging } from 'firebase/messaging';
import { RegTokenFirestoreStorage } from '@arthurgubaidullin/reg-token-firestore-storage';
import { getFirestore } from 'firebase/firestore';

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

      instance = new DefaultBrowserProgram(auth, messaging, regTokenStorage);
    }
    return instance;
  }
}
