export async function up(knex) {
  return knex.schema.createTable('developers', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('name')
    table.string('location')
    table.string('link')
    table.date('start')
    table.date('end')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('developers')
}
