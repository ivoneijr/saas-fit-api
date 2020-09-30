exports.up = async (knex) => {
  return knex.schema.createTable('invites', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNull().unique();
    table.string('email', 255).notNull().unique();
    table
      .integer('coach_id')
      .references('id')
      .inTable('users')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table.string('hash', 255).notNull().unique();
    table.boolean('pending').notNullable().defaultTo(true);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('invites');
