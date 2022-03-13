import { GET, Path } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { LoggerApi } from '../logger';
import { HealthApi } from '../services';

@Path('/health')
export class HealthController {
  @Inject
  service: HealthApi

  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('HealthController');
  }

  @GET
  async healthCheck(): Promise<{ status: string; }> {
    // return { status: 'DOWN' };
    return this.service.health();
  }
}
