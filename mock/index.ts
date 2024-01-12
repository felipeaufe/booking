import Places from './data/places.json';

export default [
  {
    url: '/api/places',
    method: 'get',
    response: () => {
      return Places;
    },
  },
];