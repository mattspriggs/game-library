export async function up(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.uuid('games_id')
    table.uuid('platforms_id')
    table.string('source')
    table.integer('critic_rating')
    table.integer('user_rating')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ratings')
}
