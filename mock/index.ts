export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
        },
      };
    },
  },
];