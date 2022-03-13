import { Errors, GET, Path, PathParam } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { HelloWorldApi } from '../../services';
import { LoggerApi } from '../../logger';

@Path('/hello')
export class HelloWorldController {

  @Inject
  service: HelloWorldApi;

  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('HelloWorldController');
  }

  @GET
  async sayHelloToUnknownUser(): Promise<string> {
    this.logger.info('Saying hello to someone');
    return this.service.greeting();
  }

  @Path(':name')
  @GET
  async sayHello(@PathParam('name') name: string): Promise<string> {
    this.logger.info(`Saying hello to ${name}`);
    return this.service.greeting(name.toString());
  }
  
  @Path('number/:value')
  @GET
  async sayValue(@PathParam('value') value: number): Promise<string> {
    if (isNaN(value)) throw new Errors.BadRequestError('value is not a number');
    this.logger.info(`Saying hello to ${value}`);
    return this.service.greeting(value.toString());
  }
}