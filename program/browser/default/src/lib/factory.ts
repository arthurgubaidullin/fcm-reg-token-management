import { getAuth } from 'firebase/auth';
import { DefaultBrowserProgram } from './program';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthAdapter } from '@arthurgubaidullin/firebase-auth-adapter';
import { FirebaseMessagingAdapter } from '@arthurgubaidullin/firebase-messaging-adapter';
import { FirebaseDeviceAdapter } from '@arthurgubaidullin/firebase-device-adapter';
import { getInstallations } from 'firebase/installations';
import { getMessaging } from 'firebase/messaging';

let instance: DefaultBrowserProgram | null = null;

export class DefaultBrouserPropramFactory {
  static default(firebaseApp: FirebaseApp) {
    if (instance === null) {
      const auth = new FirebaseAuthAdapter(getAuth(firebaseApp));

      const device = new FirebaseDeviceAdapter(getInstallations(firebaseApp));

      const messaging = new FirebaseMessagingAdapter(
        getMessaging(firebaseApp),
        device
      );

      instance = new DefaultBrowserProgram(auth, messaging);
    }
    return instance;
  }
}
