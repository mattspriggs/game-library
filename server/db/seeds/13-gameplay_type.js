export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay_type').insert([
    {
      id: '033935c8-06ef-4e1b-9cbb-db193a3b7fe3',
      name: 'Shooter',
      definition:
        'A game that uses projectile weapons to resolve combat conflicts.  Typically firearms but may also include other projectile weapons such as spells or other ranged abilities.',
    },
    {
      id: 'fef58232-86d1-4c81-8405-472f4c8d04b8',
      name: 'Melee',
      definition:
        'A game that uses melee weapons to resolve combat conflicts.  Typically melee weapons include things like swords, clubs, hammers, knives, maces, spears, etc and can be a variant like a lightsaber for a sci-fi setting.',
    },
    {
      id: 'b6cdc8cf-2377-4623-bb96-dee6d9552a0c',
      name: 'Complex traversal',
      definition:
        'A game that uses a complex form of traversal as a key element in portions of the game such as combat or exploration.',
    },
    {
      id: '9332352f-1489-4b7c-ac98-92bcc31b8e71',
      name: 'Exploration',
      definition:
        'A game that uses exploration as a key element in the such as discovering secrets, items, hidden locations, puzzle solutions, etc.',
    },
  ])
}
