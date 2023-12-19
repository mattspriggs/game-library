export async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary
    table.string('title')
    table.string('platform')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
