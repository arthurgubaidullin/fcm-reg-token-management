import * as firestore from 'firebase/firestore';
import { identity } from 'fp-ts/function';
import * as t from 'io-ts';

export const FirestoreTimestamp = new t.Type<
  firestore.Timestamp,
  firestore.Timestamp,
  unknown
>(
  'Timestamp',
  (u) => u instanceof firestore.Timestamp,
  (u, c) => (u instanceof firestore.Timestamp ? t.success(u) : t.failure(u, c)),
  identity
);
