export async function seed(knex) {
  // inserts seed entries
  await knex('structure').insert([
    {
      id: 'e55f06b1-0585-41fb-ad21-2e7515c7e8a3',
      name: '',
      definition: '',
    },
  ])
}
