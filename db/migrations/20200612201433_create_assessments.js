exports.up = async (knex) => {
  return knex.schema.createTable('assessments', (table) => {
    table.increments('id').primary();
    table
      .integer('pupil_id')
      .references('id')
      .inTable('users')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table
      .integer('coach_id')
      .references('id')
      .inTable('users')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table.string('title', 50).notNull();
    table.string('description');
    table.string('diet_url');
    table.string('train_url');
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('assessments');
