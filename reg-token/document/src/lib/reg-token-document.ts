import * as t from 'io-ts';
import { FirestoreTimestamp } from './firestore-timestamp';

export const RegTokenDocument = t.readonly(
  t.strict({
    token: t.string,
    userId: t.string,
    deviceId: t.string,
    timestamp: FirestoreTimestamp,
  })
);
