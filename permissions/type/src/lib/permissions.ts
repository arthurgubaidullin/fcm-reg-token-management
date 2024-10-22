import { Permission } from './permission';

export interface Permissions {
  readonly notification: Permission;
  readonly requestNotification: () => Promise<Permission>;
}
