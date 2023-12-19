export async function up(knex) {
  return knex.schema.createTable('story', (table) => {
    table.uuid('story_method_id')
    table.uuid('games_id')
    table.integer('percentage')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('story')
}
