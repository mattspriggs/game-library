export async function seed(knex) {
  // inserts seed entries
  await knex('atmosphere').insert([
    {
      id: '64f08592-9bad-4f44-bfac-057ce1479258',
      name: '',
      definition: '',
    },
  ])
}
