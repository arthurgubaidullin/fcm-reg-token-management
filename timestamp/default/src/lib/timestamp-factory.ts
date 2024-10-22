import * as firestore from 'firebase/firestore';
import { TimestampFactory } from '@arthurgubaidullin/timestamp-type';

export const Timestamp: TimestampFactory = {
  now: () => {
    return firestore.Timestamp.now();
  },
};
