exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Dereck Bubols',
          email: 'dereckbubols@teambubols.com',
          password:
            '$2b$10$OrWxxadbR3LJGGQMpPMx3ucSXsXIyBZUlfnVvewMhaFpM2VlsvBYi', // whoami
          role: 'ADMIN',
        },
        {
          name: 'Valentina Menna Guazzelli Marques',
          email: 'valentina@teambubols.com',
          password:
            '$2b$10$OrWxxadbR3LJGGQMpPMx3ucSXsXIyBZUlfnVvewMhaFpM2VlsvBYi', // whoami
          role: 'PUPIL',
        },
        {
          name: 'Arianne Menna Guazzelli Marques',
          email: 'arianne@teambubols.com',
          password:
            '$2b$10$OrWxxadbR3LJGGQMpPMx3ucSXsXIyBZUlfnVvewMhaFpM2VlsvBYi', // whoami
          role: 'PUPIL',
        },
      ]);
    });
};
