export async function seed(knex) {
  // inserts seed entries
  await knex('artstyle').insert([
    {
      id: '93a61a15-62f6-4e76-a0a7-baeeeaa06984',
      name: 'Dark Angular Mech',
      definition:
        'An artstyle that evokes a bleak or dark atmosphere with an emphasis on Mech designs that are more angular than smooth',
    },
  ])
}
