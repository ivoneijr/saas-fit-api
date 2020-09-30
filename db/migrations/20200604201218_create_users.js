exports.up = async (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNull().unique();
    table.string('email', 255).notNull().unique();
    table.string('password', 255).notNull();
    table.enu('role', ['ADMIN', 'PUPIL', 'COACH']).defaultTo('PUPIL');
    table
      .integer('coach_id')
      .references('id')
      .inTable('users')
      .unsigned()
      .onDelete('cascade');
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('users');
