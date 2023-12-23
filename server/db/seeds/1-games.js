export async function seed(knex) {
  // inserts seed entries
  await knex('games').insert([
    {
      id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      publishers_id: '',
      developers_id: '',
      name: 'Armored Core VI: The Fires of Rubicon',
      date: '',
    },
  ])
}
