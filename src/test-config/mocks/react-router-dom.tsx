jest.mock("react-router-dom", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Link: ({ children }: any) => <div data-testid="link">{children}</div>,
}));
