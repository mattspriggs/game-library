export async function seed(knex) {
  // inserts seed entries
  await knex('artstyle').insert([
    {
      id: '93a61a15-62f6-4e76-a0a7-baeeeaa06984',
      name: '',
      definition: '',
    },
  ])
}
