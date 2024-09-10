import { Button } from "./button";

import { render, screen } from "../../__tests__/setup";

describe("[Components]: Button", () => {
  it("renders without crash", () => {
    render(<Button type={'primary'}>Hello World</Button>);
    const component = screen.getByText("Hello World");
    expect(component).toBeDefined();
  });
});
