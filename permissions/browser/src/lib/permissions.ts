import { Permissions as Permissions } from '@arthurgubaidullin/permissions-type';
import { Permission } from './permission';

export class BrowserPermissions implements Permissions {
  private instance: typeof window.Notification;

  constructor() {
    this.instance = window.Notification;
  }

  get notification() {
    return new Permission(this.instance.permission);
  }

  async requestNotification() {
    const browserPermission = await this.instance.requestPermission();

    return new Permission(browserPermission);
  }
}
