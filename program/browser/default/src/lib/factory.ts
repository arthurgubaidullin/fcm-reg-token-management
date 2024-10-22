import { DefaultBrowserProgram } from './program';

let instance: DefaultBrowserProgram | null = null;

export class DefaultBrouserPropramFactory {
  static default() {
    if (instance === null) {
      instance = new DefaultBrowserProgram();
    }
    return instance;
  }
}
