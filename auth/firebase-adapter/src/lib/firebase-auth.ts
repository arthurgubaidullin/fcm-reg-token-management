import { Auth } from '@arthurgubaidullin/auth-type';
import { DefaultUser, DefaultUserId } from '@arthurgubaidullin/default-user';
import * as FirbaseAuth from 'firebase/auth';

export class FirebaseAuthAdapter implements Auth {
  private auth: FirbaseAuth.Auth;

  constructor(firebaseAuth: FirbaseAuth.Auth) {
    this.auth = firebaseAuth;
  }

  get currentUser() {
    const user = this.auth.currentUser;

    if (!user) {
      return null;
    }

    const id = new DefaultUserId(user.uid);

    return new DefaultUser(id);
  }
}
