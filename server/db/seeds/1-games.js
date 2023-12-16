export async function seed(knex) {
  // inserts seed entries
  await knex('games').insert([
    {
      title: 'Legend of Zelda: Tears of the Kingdom',
      platform: 'Nintendo Switch',
    },
    { title: 'Alan Wake 2', platform: 'Xbox Series X' },
    {
      title: 'Armored Core VI: The Fires of Rubicon',
      platform: 'Playstation 5',
    },
  ])
}
