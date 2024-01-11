export async function up(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.uuid('games_id')
    table.uuid('platforms_id')
    table.string('source')
    table.integer('critic')
    table.integer('user')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ratings')
}
