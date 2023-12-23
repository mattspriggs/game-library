export async function seed(knex) {
  // inserts seed entries
  await knex('story').insert([
    {
      games_id: '',
      story_method_id: '',
      percentage: null,
    },
  ])
}
