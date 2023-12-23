export async function seed(knex) {
  // inserts seed entries
  await knex('developers').insert([
    {
      id: '04c305ef-a031-402b-83bb-80326eeda218',
      name: 'FromSoftware',
      location: 'Tokyo, Japan',
      link: 'https://www.fromsoftware.jp/ww/index.html',
      start: '1986-11-01',
      end: '',
    },
  ])
}
