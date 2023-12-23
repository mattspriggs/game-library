export async function up(knex) {
  return knex.schema.createTable('publishers', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('name')
    table.string('location')
    table.date('start')
    table.date('end').defaultsTo('')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('publishers')
}
