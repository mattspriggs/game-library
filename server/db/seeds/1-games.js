export async function seed(knex) {
  // inserts seed entries
  await knex('games').insert([
    {
      id: 1,
      title: 'Legend of Zelda: Tears of the Kingdom',
      platform: 'Nintendo Switch',
    },
    { id: 2, title: 'Alan Wake 2', platform: 'Xbox Series X' },
    {
      id: 3,
      title: 'Armored Core VI: The Fires of Rubicon',
      platform: 'Playstation 5',
    },
  ])
}
