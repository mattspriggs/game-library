export async function seed(knex) {
  // inserts seed entries
  await knex('genre').insert([
    {
      id: '965c93fc-b0a4-45fa-af7a-69765ad8a0fd',
      name: 'Shooter Mecha Action',
      definition:
        'A game that uses firearms and other projectiles as a primary form of combat that is specific to Mechs.  Mechs being a vehicle that is piloted and carries heavy weaponry.  Mechs typically can be upgraded through acquiring and equipping parts.',
    },
  ])
}
