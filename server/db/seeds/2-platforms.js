export async function seed(knex) {
  // inserts seed entries
  await knex('platforms').insert([
    {
      id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      name: 'Playstation',
      model: 'PS 5',
      manufacturer: 'Sony',
      date: '2020-11-12',
    },
    {
      id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      name: 'Playstation',
      model: 'PS 5',
      manufacturer: 'Sony',
      date: '2020-11-12',
    },
    {
      id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      name: 'Playstation',
      model: 'PS 5',
      manufacturer: 'Sony',
      date: '2020-11-12',
    },
  ])
}
