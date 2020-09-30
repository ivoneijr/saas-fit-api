exports.seed = (knex) => {
  return knex('assessment_uploads')
    .del()
    .then(() => {
      return knex('assessment_uploads').insert([
        {
          assessment_id: 1,
          url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
        },
        {
          assessment_id: 1,
          url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
        },
      ]);
    });
};
