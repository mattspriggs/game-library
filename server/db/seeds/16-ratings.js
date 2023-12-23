export async function seed(knex) {
  // inserts seed entries
  await knex('ratings').insert([
    {
      games_id: '',
      platfomrs_id: '',
      source: '',
      critic: null,
      user: null,
    },
  ])
}
