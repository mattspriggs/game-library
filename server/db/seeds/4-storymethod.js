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
        'An audio device that the player collects and then plays or auto-plays for players when triggered, to convey past events that contribute to the players understanding of the world and story being told.  The player may or may not be able to freely move and act while the log plays, depending on the design choice.',
    },
    {
      id: '55cbb73e-7bff-453e-9068-30fafe576f99',
      name: 'Document collection',
      definition:
        'A document, including things such as item descriptions or log entries, that the player collects and then reads later to build additional understanding of the history, setting, plot, etcetera.  Typically not essential to the story because the consupmtion is voluntary, but may enhance immersion, understanding and player enjoyment.',
    },
    {
      id: '275519aa-4f38-4289-948b-ef43c3ad80bf',
      name: 'Environmental storytelling',
      definition:
        'Design of the playspace environment where the placement of objects, symbols, architecture, ruins, hazards or other physical objects tells a story to the player through discovery, interaction and observation.',
    },
    {
      id: '7839ec32-6ab8-46dd-9c86-c46d14e9ba6b',
      name: 'Quicktime event',
      definition:
        'An in engine interactive video cutscene that is triggered by a certain action or location that partially removes player interaction and involves players responding through an onscreen control prompt at a certain moment, in a certain way, in a limited time window to progress the scene. Also known as a QTE, these interactions are intended to create tension and player immersion beyond a standard cutscene.',
    },
    {
      id: '9645cc42-0c42-4cc9-8c4b-d4c7d8e50e15',
      name: 'Branching dialogue',
      definition:
        'Conversational interactions between the player and non-player characters where the player chooses how to respond to a non-player character.  Heavily used in Visual Novels and Role Playing Games where games may be designed to have branching narratives paths and, in some cases, outcomes, dependent on player choice of response.',
    },
    {
      id: '646f083f-9954-4a57-b19e-b83d23508e04',
      name: 'Emergent narrative',
      definition:
        'Story that is told by player interaction with the game over time that is made available by game design but is not scripted specifically to be told in a specific way to the player.  Frequently found in more sandbox games such as Minecraft or Dwarf Fortress.',
    },
  ])
}
