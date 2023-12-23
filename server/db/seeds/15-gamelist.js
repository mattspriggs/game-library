export async function seed(knex) {
  // inserts seed entries
  await knex('gamelist').insert([
    {
      user_id: '',
      games_id: '',
      platforms_id: '',
      played: false,
    },
  ])
}
