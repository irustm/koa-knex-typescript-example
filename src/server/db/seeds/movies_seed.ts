import * as Knex from 'knex';

exports.seed = (knex: Knex) => seed(knex);

function seed(knex: Knex) {
    // Deletes ALL existing entries
    return knex('movies').del()
        .then(() => {
            return knex('movies').insert({
                name: 'The Land Before Time',
                genre: 'Fantasy',
                rating: 7,
                explicit: false,
            });
        })
        .then(() => {
            return knex('movies').insert({
                name: 'Jurassic Park',
                genre: 'Science Fiction',
                rating: 9,
                explicit: true,
            });
        })
        .then(() => {
            return knex('movies').insert({
                name: 'Ice Age: Dawn of the Dinosaurs',
                genre: 'Action/Romance',
                rating: 5,
                explicit: false,
            });
        });
}
