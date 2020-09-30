exports.up = async (knex) => {
  return knex.schema.createTable('faq', (table) => {
    table.increments('id').primary();
    table.string('question', 255);
    table.string('answer', 255);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('faq');
