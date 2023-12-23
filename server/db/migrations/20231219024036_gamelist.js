export async function up(knex) {
  return knex.schema.createTable('gamelist', (table) => {
    table.uuid('user_id')
    table.uuid('games_id')
    table.uuid('platforms_id')
    table.string('status').defaultsTo('backlog')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('gamelist')
}
