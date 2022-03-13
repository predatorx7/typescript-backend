import { ContainerConfiguration } from 'typescript-ioc';
import { config as HealthConfig } from './health/health.service';
import { config as HelloWorldConfig } from './hello/hello-world.service';

const config: ContainerConfiguration[] = [
  HelloWorldConfig,
  HealthConfig,
];

export default config;
