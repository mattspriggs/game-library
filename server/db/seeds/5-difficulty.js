export async function seed(knex) {
  // inserts seed entries
  await knex('difficulty').insert([
    {
      id: '3bedb32f-69e2-409a-ae26-dd3f7d7e0d9b',
      name: 'Variable',
      definition:
        'Game designed to allow the player to experience the game in various difficulty modes, typically some variation of easy, normal, or hard and potentially an ultimate difficulty such as nightmare.',
    },
    {
      id: '8217ab81-0856-4385-8e92-0f56d4c6e446',
      name: 'Difficult',
      definition:
        'Game difficulty designed to encourage player skill development, adaptability and pattern recognition. In such games, the fail state is intended to be a common occurence and a part of the game design.',
    },
  ])
}
