import {HelloWorldApi} from './hello-world.api';
import {Inject, Scope} from 'typescript-ioc';
import {LoggerApi} from '../../logger';

export class HelloWorldService implements HelloWorldApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('HelloWorldService');
  }

  async greeting(name: string = 'World'): Promise<string> {
    this.logger.info(`Generating greeting for ${name}`);
    return `Hello, ${name}!`;
  }
}

export const config = {
  bind: HelloWorldApi,
  to: HelloWorldService,
  scope: Scope.Singleton
};
