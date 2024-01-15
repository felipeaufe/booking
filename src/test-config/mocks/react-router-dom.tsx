// eslint-disable-next-line @typescript-eslint/no-explicit-any
jest.mock('react-router-dom', () => ({ Link: ({ children }: any) => <div>{children}</div> }));