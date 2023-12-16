export async function up(knex) {
  return knex.schema.createTable('games', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('title')
    table.string('platform')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('games')
}
