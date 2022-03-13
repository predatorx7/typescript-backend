import { ContainerConfiguration, Scope } from 'typescript-ioc';
import { HealthApi } from './health.api';
import { HealthService } from './health.service';
import { HelloWorldApi } from './hello-world.api';
import { HelloWorldService } from './hello-world.service';

const config: ContainerConfiguration[] = [
  {
    bind: HelloWorldApi,
    to: HelloWorldService,
    scope: Scope.Singleton
  },
  {
    bind: HealthApi,
    to: HealthService,
    scope: Scope.Singleton,
  }
];

export default config;