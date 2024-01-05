export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay').insert([
    {
      gameplay_type_id: '033935c8-06ef-4e1b-9cbb-db193a3b7fe3',
      // Shooter
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      percentage: 40,
    },
    {
      gameplay_type_id: 'fef58232-86d1-4c81-8405-472f4c8d04b8',
      // Melee combat
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      percentage: 30,
    },
  ])
}
