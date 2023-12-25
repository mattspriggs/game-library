export async function seed(knex) {
  // inserts seed entries
  await knex('story').insert([
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      story_method_id: 'fb099acc-e758-4a09-8592-cc8ceba693c6',
      // Cutscene
      percentage: 15,
    },
  ])
}
