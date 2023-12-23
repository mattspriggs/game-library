export async function seed(knex) {
  // inserts seed entries
  await knex('publishers').insert([
    {
      id: '42c59485-4765-430e-80c7-c1f284876973',
      name: 'Bandai Namco Games',
      location: 'Tokyo, Japan',
      start: '2006-03-31',
      end: '',
    },
  ])
}
