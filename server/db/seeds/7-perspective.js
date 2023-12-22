export async function seed(knex) {
  // inserts seed entries
  await knex('perspective').insert([
    {
      id: '46c09d59-34d0-4c1e-bfe1-99496bd7a304',
      name: '',
      definition: '',
    },
  ])
}
