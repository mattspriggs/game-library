export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay').insert([
    {
      gameplay_type_id: '033935c8-06ef-4e1b-9cbb-db193a3b7fe3',
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      percentage: 20,
    },
  ])
}
