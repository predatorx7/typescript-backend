import { Container } from "typescript-ioc";

export * from './hello-world.api';
export * from './hello-world.service';
export * from './health.api';
export * from './health.service';

import config from './ioc.config';

Container.configure(...config);