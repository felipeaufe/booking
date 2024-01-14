import { render } from "@testing-library/react"
import { Header } from "./header"

describe('header', () => {
  it('should render Header', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument();
  })
})