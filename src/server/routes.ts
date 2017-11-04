import * as Router from 'koa-router';
import { MoviesService } from './db/services/movies.service';

class MoviesController {
    public router: Router;
    public moviesdb: MoviesService;
    constructor() {
        this.router = new Router();
        this.moviesdb = new MoviesService();
        this.init();
    }
    private init() {
        this.router.get('/', async (ctx) => {
            ctx.body = 'Hello World!';
        });
        this.router.get('/movies', async (ctx) => {
            try {
                const movies = await this.moviesdb.getAllMovies();
                ctx.body = {
                    status: 'success',
                    data: movies,
                };
            } catch (err) {
                console.log(err);
            }
        });
    }
}

export const routes = new MoviesController().router.routes();
