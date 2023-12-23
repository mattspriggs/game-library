export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay').insert([
    {
      gameplay_type_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      games_id: '',
      percentage: 20,
    },
  ])
}
