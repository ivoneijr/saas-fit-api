exports.seed = (knex) => {
  return knex('faq')
    .del()
    .then(() => {
      return knex('faq').insert([
        {
          question: 'O que é o que , clara e salgada?',
          answer: 'Cabe em um olho e pesa uma tonelada',
        },
        {
          question: 'O que é o que , clara e salgada?',
          answer: 'Cabe em um olho e pesa uma tonelada',
        },
      ]);
    });
};
