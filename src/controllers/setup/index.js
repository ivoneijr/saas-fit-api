const { error } = require('../../helpers/logger');

const landing = async (req, res, next) => {
  try {
    return res.send({
      banner: {
        title: 'Some title here',
        subtitle: 'aux text here',
        images: ['', '', ''],
      },
      depoimentos: {
        title: 'depoimentos title',
        subtitle: 'depoimentos subtitle',
        data: [
          {
            id: 1,
            name: 'Ivo',
            text: 'some text',
            videoUrl: '',
          },
        ],
      },
      sobre: {
        text: 'blablablablablba',
      },
      faq: {
        image: '',
        questions: [
          {
            id: 1,
            question: 'O que é ?',
            answer:
              'O Projeto LifeStyle foi feito para você que busca constante melhoria do seu corpo, saúde e da qualidade de vida! Todos podem participar do projeto, basta querer mudar o seu estilo de vida e estar apto a fazer exercícios físicos.',
          },
        ],
      },
      planos: [
        {
          id: 1,
          title: 'PLANO TRAINNING',
          valor: 'R$ 199,00',
          features: [
            '30 dias de projeto.',
            'Suporte por WhatsApp com horário programado.',
            'Grade e periodização de treinos indoor ou treinos em academia exclusivos.',
            'Acesso ao aplicativo do LifeStyle.',
            'Suporte ao Aplicativo.',
          ],
        },
      ],
      footer: {
        social: {
          instagram: '',
          youtube: '',
          facebook: '',
        },
      },
    });
  } catch (err) {
    return error(err, next);
  }
};

module.exports = {
  landing,
};
