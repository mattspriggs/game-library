export async function seed(knex) {
  // inserts seed entries
  await knex('gameplay_type').insert([
    {
      id: '033935c8-06ef-4e1b-9cbb-db193a3b7fe3',
      name: 'Shooter',
      definition:
        'A game that uses projectile weapons to resolve combat conflicts.  Typically firearms but may also include other projectile weapons such as spells or other ranged abilities.',
    },
  ])
}
