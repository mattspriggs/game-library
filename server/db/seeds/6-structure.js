export async function seed(knex) {
  // inserts seed entries
  await knex('structure').insert([
    {
      id: 'e55f06b1-0585-41fb-ad21-2e7515c7e8a3',
      name: 'Linear Mission Based',
      definition:
        'A game built on the use of a mission structure where you begin on a map with a set objective.  Maps may be semi-open and allow for exploration and side activities but is focused on the completion of an objective or objectives to advance the game.',
    },
  ])
}
