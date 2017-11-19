import { Body, Delete, Get, JsonController, Param, Post, Put, Req, Res } from 'routing-controllers';
import { MoviesService } from '../db/services/movies.service';
import { injector } from '../server';

// Second version
@JsonController()
export class MoviesController {
    private moviesService: MoviesService = <MoviesService>injector.get(MoviesService);
    constructor() {
    }
    @Get('/movies1')
    async getAll() {
        return await this.moviesService.getAllMovies();
    }
}
