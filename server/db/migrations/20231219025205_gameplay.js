export async function up(knex) {
  return knex.schema.createTable('gameplay', (table) => {
    table.uuid('games_id')
    table.uuid('gameplay_type_id')
    table.integer('percentage')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('gameplay')
}
