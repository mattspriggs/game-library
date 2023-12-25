export async function seed(knex) {
  // inserts seed entries
  await knex('games').insert([
    {
      id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      publishers_id: '42c59485-4765-430e-80c7-c1f284876973',
      // Bandai Namco
      developers_id: '04c305ef-a031-402b-83bb-80326eeda218',
      // FromSoftware
      name: 'Armored Core VI: The Fires of Rubicon',
      date: '',
      atmosphere_id: '64f08592-9bad-4f44-bfac-057ce1479258',
      // Dystopian Sci-Fi
      artstyle_id: '',
      genre_id: '',
      perspective_id: '',
      difficulty_id: '',
      structure_id: 'e55f06b1-0585-41fb-ad21-2e7515c7e8a3',
      // Linear Mission Based
    },
  ])
}
