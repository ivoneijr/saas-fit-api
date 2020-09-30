exports.up = async (knex) => {
  return knex.schema.createTable('assessment_uploads', (table) => {
    table.increments('id').primary();
    table
      .integer('assessment_id')
      .references('id')
      .inTable('assessments')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table.string('url', 255);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('assessment_uploads');
