import { render } from "@testing-library/react";

import { Icon } from "./icon";

describe("icon", () => {
  it("should render icon component with style solid and icon star", () => {
    const { container } = render(<Icon icon="star" />);

    expect(container.getElementsByClassName("fa-solid")).toBeDefined();
    expect(container.getElementsByClassName("fa-star")).toBeDefined();
  });

  it("should render icon component with style regular and icon star", () => {
    const { container } = render(<Icon weight="regular" icon="star" />);

    expect(container.getElementsByClassName("fa-regular")).toBeDefined();
    expect(container.getElementsByClassName("fa-star")).toBeDefined();
  });
});
