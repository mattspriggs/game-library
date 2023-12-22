export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('games').del()
  await knex('platforms').del()
  await knex('user').del()
  await knex('story_method').del()
  await knex('difficulty').del()
  await knex('structure').del()
  await knex('perspective').del()
  await knex('genre').del()
  await knex('artstyle').del()
  await knex('atmosphere').del()
  await knex('').del()
}
