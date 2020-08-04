import Knex from 'knex';

export async function up(Knex: Knex){
    return Knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

export async function down(Knex: Knex){
    return Knex.schema.dropTable('connections');
}