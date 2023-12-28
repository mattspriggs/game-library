export async function seed(knex) {
  // inserts seed entries
  await knex('ratings').insert([
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      platforms_id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      // PS5
      source: 'MetaCritic',
      critic: 86,
      user: 8,
    },
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      platforms_id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      // PS5
      source: 'OpenCritic',
      critic: 85,
      user: null,
    },
  ])
}
