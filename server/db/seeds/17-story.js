export async function seed(knex) {
  // inserts seed entries
  await knex('story').insert([
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      story_method_id: 'fb099acc-e758-4a09-8592-cc8ceba693c6',
      // Cutscene
      percentage: 25,
    },
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      story_method_id: '55cbb73e-7bff-453e-9068-30fafe576f99',
      // Document collection
      percentage: 15,
    },
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      story_method_id: '8ae7fb1b-e2ba-4ede-977a-f630b243a5ff',
      // Audio log
      percentage: 45,
    },
    {
      games_id: 'cf6da41c-7a95-41e5-b5a0-e8b540fc6c7f',
      // Armored Core VI
      story_method_id: '275519aa-4f38-4289-948b-ef43c3ad80bf',
      // Environmental storytelling
      percentage: 15,
    },
  ])
}
