export async function seed(knex) {
  // inserts seed entries
  await knex('user').insert([
    {
      id: '6be4b31a-3796-4740-b6b7-7b419fdf1f70',
      email: 'abc@123.com',
      password: 'password',
      username: 'johndoe',
      admin: false,
      auth0: null,
    },
  ])
}
