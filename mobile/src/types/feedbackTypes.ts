export const feedbackTypes = Object.freeze({
  'BUG': Object.freeze({
    title: 'Problema',
    image: require('../assets/bug.png')
  }),
  'IDEA': Object.freeze({
    title: 'Idea',
    image: require('../assets/idea.png'),
  }),
  'OTHER': Object.freeze({
    title: 'Otro',
    image: require('../assets/thought.png'),
  }),
});

// agregue Object.freeze() para hacer los objetos de solo lectura y evitar que se le agreguen mas propiedades