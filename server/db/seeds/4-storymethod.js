export async function seed(knex) {
  // inserts seed entries
  await knex('story_method').insert([
    {
      id: 'fb099acc-e758-4a09-8592-cc8ceba693c6',
      name: 'Cutscene',
      definition:
        'An in engine or other video that is triggered by a certain action or location that removes player interaction to show a story segment that typically is used to ensure a critical plot point is expressed in a specific way to all players.',
    },
    {
      id: '8ae7fb1b-e2ba-4ede-977a-f630b243a5ff',
      name: 'Audio log',
      definition:
        'An audio device that the player collects and then plays or auto players when triggered to convey past events that contribute to the players understanding of the world and story being told.  The player may or may not be able to freely move and act while the log plays, depending on the design choice.',
    },
    {
      id: '8ae7fb1b-e2ba-4ede-977a-f630b243a5ff',
      name: 'Document collection',
      definition:
        'Use of a document, including things such as item descriptions, log entries, that the player collects and then reads later to build additional understanding of the history, setting, plot, etcetera.  Typically not essential to the story but may enhance immersion, understanding and player enjoyment.',
    },
  ])
}
