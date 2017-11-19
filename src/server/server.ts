import * as Koa from 'koa';
import { createKoaServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import { config } from './config';
import { logger } from './logging';
import { routes } from './movies.route';
import { MoviesController } from './controllers/movies.controller';
import { ReflectiveInjector } from 'injection-js';
import { MoviesService } from './db/services/movies.service';

export const injector = ReflectiveInjector.resolveAndCreate([
    MoviesService,
]);
useContainer(Container);

const app = createKoaServer({
    controllers: [
        MoviesController
    ]
});

app.use(logger);
app.use(routes);

app.listen(config.port);

console.log(`Server running on port ${config.port}`);

