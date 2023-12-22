export async function seed(knex) {
  // inserts seed entries
  await knex('difficulty').insert([
    {
      id: '3bedb32f-69e2-409a-ae26-dd3f7d7e0d9b',
      name: '',
      definition: '',
    },
  ])
}
