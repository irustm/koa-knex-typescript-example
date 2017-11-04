import * as knex from 'knex';
import { Connection } from '../connection';
export class MoviesService {
    private connector: knex;
    constructor() {
        this.connector = new Connection().knex();
    }
    public getAllMovies() {
        return this.connector.table('movies')
            .select('*');
    }
    public getSingleMovie(entityId: number) {
        return this.connector.table('movies')
            .select('*')
            .where({ id:  entityId });
    }
}
