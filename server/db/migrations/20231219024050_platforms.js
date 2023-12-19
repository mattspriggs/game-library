export async function up(knex) {
  return knex.schema.createTable('platforms', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('name')
    table.string('model')
    table.string('manufacturer')
    table.date('date')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('platforms')
}
