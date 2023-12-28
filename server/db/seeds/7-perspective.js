export async function seed(knex) {
  // inserts seed entries
  await knex('perspective').insert([
    {
      id: '46c09d59-34d0-4c1e-bfe1-99496bd7a304',
      name: 'Third person',
      definition:
        'The player camera sits behind the shoulder or head of the player character allowing for a broader field of view and the ability to move the a camera around the character without changing the characters direction that they are facing.',
    },
  ])
}
