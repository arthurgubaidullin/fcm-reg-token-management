import { RegToken } from '@arthurgubaidullin/reg-token';

export interface Messaging {
  readonly getToken: () => RegToken;
}
