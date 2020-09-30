exports.seed = (knex) => {
  return knex('profiles')
    .del()
    .then(() => {
      return knex('profiles').insert([
        {
          user_id: 1,
          cpf: '02426147016',
          address: 'Rua padre joão batista réus 1877',
          avatar:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw13csLNp-gAO9AMPoGEuakm&ust=1598483708534000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKigq_q9t-sCFQAAAAAdAAAAABAD',
          phone: '51991879477',
          birthdate: '23/12/2017',
        },
        {
          user_id: 2,
          cpf: '02426147016',
          address: 'Rua padre joão batista réus 1877',
          avatar:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw13csLNp-gAO9AMPoGEuakm&ust=1598483708534000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKigq_q9t-sCFQAAAAAdAAAAABAD',
          phone: '51991879477',
          birthdate: '23/12/2017',
        },
        {
          user_id: 3,
          cpf: '02426147016',
          address: 'Rua padre joão batista réus 1877',
          avatar:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw13csLNp-gAO9AMPoGEuakm&ust=1598483708534000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKigq_q9t-sCFQAAAAAdAAAAABAD',
          phone: '51991879477',
          birthdate: '23/12/2017',
        },
      ]);
    });
};
