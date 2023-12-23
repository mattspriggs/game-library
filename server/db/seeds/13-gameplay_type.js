export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay_type').insert([
    {
      id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      name: 'Shooter',
      definition:
        'A game that uses projectile weapons to resolve combat conflicts.  Typically firearms but may also include other projectile weapons such as spells or other ranged abilities.',
    },
  ])
}
