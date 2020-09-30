exports.up = async (knex) => {
  return knex.schema.createTable('assessment_comments', (table) => {
    table.increments('id').primary();
    table
      .integer('assessment_id')
      .references('id')
      .inTable('assessments')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table.string('comment', 255);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('assessment_comments');
