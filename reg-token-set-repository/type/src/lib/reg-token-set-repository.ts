export interface RegTokenSetRepository {
  readonly get: (id: string) => Record<string, unknown> | undefined;
  readonly set: (id: string, data: Record<string, unknown>) => void;
}
