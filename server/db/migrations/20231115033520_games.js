export async function up(knex) {
  return knex.schema.createTable('games', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.uuid('publishers_id')
    table.uuid('developers_id')
    table.string('name').unique
    table.date('date')
    table.uuid('atmosphere_id')
    table.uuid('artstyle_id')
    table.uuid('genre_id')
    table.uuid('perspective_id')
    table.uuid('difficulty_id')
    table.uuid('structure_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('games')
}
