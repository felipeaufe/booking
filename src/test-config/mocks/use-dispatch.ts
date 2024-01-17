jest.mock('@state/store', () => {
  const original = jest.requireActual('@state/store');
  return {
    ...original,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});
