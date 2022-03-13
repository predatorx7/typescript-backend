import { Container } from "typescript-ioc";

export * from './hello/hello-world.api';
export * from './health/health.api';

import config from './ioc.config';

// This is required only if you want provide implementation when an interface/abstract class is requested
Container.configure(...config);
