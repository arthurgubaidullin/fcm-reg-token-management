import { Runner } from '@arthurgubaidullin/runner-type';

export class FunctionRunnerAdapter implements Runner {
  constructor(private readonly fn: () => void | Promise<void>) {}

  start() {
    this.fn();

    return () => void 0;
  }
}
