export async function seed(knex) {
  // inserts seed entries
  await knex('difficulty').insert([
    {
      id: '3bedb32f-69e2-409a-ae26-dd3f7d7e0d9b',
      name: 'Variable',
      definition:
        'Game designed to allow the player to experience the game in various difficulty modes, typically some variation of easy, normal, or hard and potentially an ultimate difficulty such as nightmare.',
    },
  ])
}
