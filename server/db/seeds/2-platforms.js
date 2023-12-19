export async function seed(knex) {
  // inserts seed entries
  await knex('platforms').insert([
    {
      id: 'fb5e87fa-3ed0-4836-92b6-75cbdda819ce',
      name: 'Playstation',
      model: 'PS5',
      manufacturer: 'Sony',
      date: '2020-11-12',
    },
    {
      id: 'fbc0532b-4fd1-4caf-b55a-4c6d55a46b0f',
      name: 'Playstation',
      model: 'PS4',
      manufacturer: 'Sony',
      date: '2013-11-15',
    },
    {
      id: '23c97611-0fae-4e0c-8f78-5b6cc9d0c1fd',
      name: 'Nintendo',
      model: 'Switch',
      manufacturer: 'Nintendo',
      date: '2017-03-03',
    },
    {
      id: 'e5bf63c1-c778-4dae-8c40-949be1177b71',
      name: 'Xbox',
      model: 'Series X',
      manufacturer: 'Microsoft',
      date: '2020-11-10',
    },
    {
      id: 'd3820a80-5a1d-4da2-a665-b85f11f4e951',
      name: 'Xbox',
      model: 'Series S',
      manufacturer: 'Microsoft',
      date: '2020-11-10',
    },
    {
      id: '43c79131-e261-4fd6-bd60-c5e012072945',
      name: 'Xbox',
      model: 'One',
      manufacturer: 'Microsoft',
      date: '2013-11-22',
    },
  ])
}
