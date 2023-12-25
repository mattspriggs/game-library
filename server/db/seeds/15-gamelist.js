export async function seed(knex) {
  // inserts seed entries
  await knex('gamelist').insert([
    {
      user_id: '6be4b31a-3796-4740-b6b7-7b419fdf1f70',
      // johndoe
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      platforms_id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      // PS5
      status: 'paused',
    },
  ])
}
