import * as Knex from 'knex';

exports.up = (knex: Knex) => up(knex);
exports.down = (knex: Knex) => down(knex);

function up(knex: Knex) {
    return knex.schema.createTable('movies', (table) => {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('genre').notNullable();
        table.integer('rating').notNullable();
        table.boolean('explicit').notNullable();
    });
}

function down(knex: Knex) {
    return knex.schema.dropTable('movies');
}
