export async function seed(knex) {
  // inserts seed entries
  await knex('atmosphere').insert([
    {
      id: '64f08592-9bad-4f44-bfac-057ce1479258',
      name: 'Dystopian Sci-Fi',
      definition:
        'Futuristic setting using advanced technology with a  structure of corporation control and-or factions that gives a feeling of oppression and is set on a distant world.  Typically resource scarcity and constant conflict are present.',
    },
  ])
}
