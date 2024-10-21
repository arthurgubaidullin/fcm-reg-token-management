import { DeviceId } from '@arthurgubaidullin/device-id';
import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp as DefaultTimestamp } from '@arthurgubaidullin/default-timestamp';
import { Timestamp } from '@arthurgubaidullin/timestamp';
import { UserId } from '@arthurgubaidullin/user';
import {
  SimplifiedUserRegTokenSet,
  UserRegTokenSet,
} from '@arthurgubaidullin/reg-token-set';

const TWO_HUNDRED_SEVENTY_DAYS_IN_MILLIS = 270 * 24 * 60 * 60 * 1000;

export class DefaultUserRegTokenSet implements UserRegTokenSet {
  private userId: UserId;
  private _tokens: Map<DeviceId, RegToken>;

  private deletedAt: Timestamp;
  private updatedAt: Timestamp;
  private createdAt: Timestamp;

  constructor(now: Timestamp, userId: UserId) {
    this.userId = userId;
    this._tokens = new Map();

    this.createdAt = now;
    this.updatedAt = now;
    this.deletedAt = this.calculateDeletedAt(now);
  }

  static fromJSON(
    now: Timestamp,
    json: SimplifiedUserRegTokenSet
  ): UserRegTokenSet {
    const tokenSet = new DefaultUserRegTokenSet(now, json.userId);

    tokenSet._tokens = json.tokens.reduce(
      (acc, v) => acc.set(v.deviceId, v.value),
      new Map<DeviceId, RegToken>()
    );

    tokenSet.createdAt = json.createdAt;
    tokenSet.updatedAt = json.updatedAt;
    tokenSet.deletedAt = json.deletedAt;

    return tokenSet;
  }

  toJSON(): SimplifiedUserRegTokenSet {
    return {
      userId: this.userId,
      tokens: Array.from(this._tokens.entries()).map(
        ([deviceId, regToken]) => ({
          deviceId,
          value: regToken,
        })
      ),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  updateToken(now: Timestamp, regToken: RegToken) {
    this._tokens.set(regToken.deviceId, regToken);
    this.deletedAt = this.calculateDeletedAt(now);
  }

  tokens(): Iterator<RegToken, RegToken | undefined, RegToken> {
    return this._tokens.values();
  }

  private calculateDeletedAt(now: Timestamp) {
    return DefaultTimestamp.fromMillis(
      now.toMillis() + TWO_HUNDRED_SEVENTY_DAYS_IN_MILLIS
    );
  }
}
