export async function seed(knex) {
  // inserts seed entries
  await knex('ratings').insert([
    {
      games_id: '',
      platforms_id: '',
      source: '',
      critic: null,
      user: null,
    },
  ])
}
