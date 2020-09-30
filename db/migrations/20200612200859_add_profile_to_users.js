exports.up = async (knex) =>
  knex.schema.alterTable('users', (table) => {
    table
      .integer('profile_id')
      .references('id')
      .inTable('profiles')
      .nullable()
      .unsigned()
      .onDelete('cascade');
  });

exports.down = async ({ schema }) =>
  schema.table('users', (table) => {
    table.dropColumn('profile_id');
  });
