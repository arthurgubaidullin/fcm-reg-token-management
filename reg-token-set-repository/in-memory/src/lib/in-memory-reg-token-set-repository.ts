import { RegTokenSetRepository } from '@arthurgubaidullin/reg-token-set-repository';

export class InMemoryRegTokenSetRepository implements RegTokenSetRepository {
  private entries: Map<string, Record<string, unknown>>;

  constructor() {
    this.entries = new Map();
  }

  get(id: string) {
    return this.entries.get(id);
  }

  set(id: string, entry: Record<string, unknown>) {
    this.entries.set(id, entry);
  }
}
