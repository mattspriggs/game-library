export async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('email').unique
    table.string('password')
    table.string('username').unique
    table.boolean('admin').defaultsTo(false)
    table.string('auth0')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
