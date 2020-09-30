exports.up = async (knex) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNull()
      .unsigned()
      .onDelete('cascade');
    table.string('cpf', 12);
    table.string('address', 255);
    table.string('avatar', 255);
    table.string('phone', 11);
    table.timestamp('birthdate');
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
  });
};

exports.down = async ({ schema }) => schema.dropTable('profiles');
