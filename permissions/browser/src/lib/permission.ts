import { Permission as _Permission } from '@arthurgubaidullin/permissions-type';

export class Permission implements _Permission {
  constructor(private readonly value: NotificationPermission) {}

  get isGranted() {
    return this.value === 'granted';
  }

  get isNotGranted() {
    return !this.isGranted;
  }
}
