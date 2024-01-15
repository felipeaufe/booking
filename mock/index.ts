import Places from './data/places.json';
import Bookings from './data/bookings.json';

export default [
  
  /** !SECTION Places */

  {
    url: '/api/places',
    method: 'get',
    response: () => {
      return Places;
    },
  },


  /** !SECTION Bookings */

  {
    url: '/api/bookings',
    method: 'get',
    response: () => {
      return Bookings;
    },
  },

  {
    url: '/api/bookings',
    method: 'post',
    response: () => {
      return {
        id: Date.now(),
      };
    },
  },
];