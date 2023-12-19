export async function seed(knex) {
  // inserts seed entries
  await knex('games').insert([
    {
      name: 'Legend of Zelda: Tears of the Kingdom',
    },
    { name: 'Alan Wake 2' },
    {
      name: 'Armored Core VI: The Fires of Rubicon',
    },
  ])
}
