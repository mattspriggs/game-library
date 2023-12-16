export async function up(knex) {
  return knex.schema.createTable('gamelist', (table) => {
    table.uuid('user_id')
    table.boolean('played').defaultsTo(false)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('gamelist')
}
