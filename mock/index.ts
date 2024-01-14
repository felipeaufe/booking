import {v4 as uuidv4} from 'uuid';
import Places from './data/places.json';

export default [
  {
    url: '/api/places',
    method: 'get',
    response: () => {
      return Places;
    },
  },

  {
    url: '/api/bookings',
    method: 'post',
    response: () => {
      return {
        id: uuidv4(),
      };
    },
  },
];