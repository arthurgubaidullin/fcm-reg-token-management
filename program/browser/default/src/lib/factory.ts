import { getAuth } from 'firebase/auth';
import { DefaultBrowserProgram } from './program';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthAdapter } from '@arthurgubaidullin/firebase-auth-adapter';
import { FirebaseMessagingAdapter } from '@arthurgubaidullin/firebase-messaging-adapter';
import { getInstallations } from 'firebase/installations';
import { getMessaging } from 'firebase/messaging';

let instance: DefaultBrowserProgram | null = null;

export class DefaultBrouserPropramFactory {
  static default(firebaseApp: FirebaseApp) {
    if (instance === null) {
      const auth = new FirebaseAuthAdapter(getAuth(firebaseApp));
      const messaging = new FirebaseMessagingAdapter(
        getMessaging(firebaseApp),
        getInstallations(firebaseApp)
      );

      instance = new DefaultBrowserProgram(auth, messaging);
    }
    return instance;
  }
}
