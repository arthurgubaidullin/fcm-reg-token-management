import { onCall } from 'firebase-functions/v2/https';

export const foo = onCall({}, async () => {
  return 'bar';
});
