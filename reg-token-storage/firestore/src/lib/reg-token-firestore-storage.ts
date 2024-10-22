import { DeviceId } from '@arthurgubaidullin/device-id-type';
import { RegToken } from '@arthurgubaidullin/reg-token';
import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { RegTokenStorage } from '@arthurgubaidullin/reg-token-storage-type';
import { UserId } from '@arthurgubaidullin/user-type';
import * as firestore from 'firebase/firestore';
import { RegTokenDocument } from '@arthurgubaidullin/reg-token-document';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

const USER_COLLECTION = 'users' as const;
const REG_TOKEN_COLLECTION = 'reg_tokens' as const;

export class RegTokenFirestoreStorage implements RegTokenStorage {
  private firestore: firestore.Firestore;

  constructor(firestore: firestore.Firestore) {
    this.firestore = firestore;
  }

  async getRegToken(userId: UserId, deviceId: DeviceId) {
    const ref = firestore.doc(
      this.firestore,
      USER_COLLECTION,
      userId.value,
      REG_TOKEN_COLLECTION,
      deviceId.value
    );

    const snapshot = await firestore.getDoc(ref);

    return pipe(
      RegTokenDocument.decode(snapshot.data()),
      O.fromEither,
      O.map((data) => DefaultRegToken.fromJSON(data)),
      O.toNullable
    );
  }

  async updateRegToken(regToken: RegToken) {
    const ref = firestore.doc(
      this.firestore,
      USER_COLLECTION,
      regToken.userId.value,
      REG_TOKEN_COLLECTION,
      regToken.deviceId.value
    );

    await firestore.runTransaction(this.firestore, async (tx) => {
      await tx.get(ref);

      const document = RegTokenDocument.encode(regToken.toJSON());

      tx.set(ref, document);
    });
  }
}
