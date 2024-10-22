import { Permissions as _Permissions } from '@arthurgubaidullin/permissions-type';
import { BrowserPermissions as _BrowserPermissions } from './permissions';

export let instance: _Permissions | null = null;

export class BrowserPermissions {
  static default() {
    if (instance === null) {
      instance = new _BrowserPermissions();
    }
    return instance;
  }
}
