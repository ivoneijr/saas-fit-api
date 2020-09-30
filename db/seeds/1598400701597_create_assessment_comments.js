exports.seed = (knex) => {
  return knex('assessment_comments')
    .del()
    .then(() => {
      return knex('assessment_comments').insert([
        {
          assessment_id: 1,
          user_id: 1,
          comment: 'Coach comment',
        },
        {
          assessment_id: 1,
          user_id: 1,
          comment: 'Coach comment',
        },
      ]);
    });
};
