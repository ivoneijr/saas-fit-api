exports.seed = (knex) => {
  return knex('assessments')
    .del()
    .then(() => {
      return knex('assessments').insert([
        {
          pupil_id: 2,
          coach_id: 1,
          title: 'Assessments Title',
          description: 'Description',
          diet_url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
          train_url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
        },
        {
          pupil_id: 3,
          coach_id: 1,
          title: 'Assessments Title',
          description: 'Description',
          diet_url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
          train_url:
            'https://docs.google.com/spreadsheets/d/1IMXa0MF9owZfxNAKi80P2Pu-LUuCigfSLMHUWk4eIQ8/edit#gid=1414999140',
        },
      ]);
    });
};
