import { getAuth } from 'firebase/auth';
import { DefaultBrowserProgram } from './program';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthAdapter } from '@arthurgubaidullin/firebase-auth-adapter';

let instance: DefaultBrowserProgram | null = null;

export class DefaultBrouserPropramFactory {
  static default(firebaseApp: FirebaseApp) {
    if (instance === null) {
      const auth = new FirebaseAuthAdapter(getAuth(firebaseApp));

      instance = new DefaultBrowserProgram(auth);
    }
    return instance;
  }
}
