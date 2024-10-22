import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp-type';

export interface Messaging {
  readonly getToken: (now: Timestamp) => Promise<RegToken | null>;
}
