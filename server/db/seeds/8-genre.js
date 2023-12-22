export async function seed(knex) {
  // inserts seed entries
  await knex('genre').insert([
    {
      id: '965c93fc-b0a4-45fa-af7a-69765ad8a0fd',
      name: '',
      definition: '',
    },
  ])
}
