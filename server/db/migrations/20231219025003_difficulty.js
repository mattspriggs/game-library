export async function up(knex) {
  return knex.schema.createTable('difficulty', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('name')
    table.string('definition')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('difficulty')
}
