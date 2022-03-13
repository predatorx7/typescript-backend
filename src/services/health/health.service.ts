import { HealthApi } from './health.api';
import { Inject, Scope } from 'typescript-ioc';
import { LoggerApi } from '../../logger';

export class HealthService implements HealthApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('HealthService');
  }

  async health(): Promise<{ status: string }> {
    this.logger.info(`Sending status`);
    return {
      status: 'UP',
    };
  }
}

export const config = {
  bind: HealthApi,
  to: HealthService,
  scope: Scope.Singleton,
};
