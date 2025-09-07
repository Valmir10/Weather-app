import React from "react";
import { render } from "@testing-library/react";

test("smoke: basic JSX renders", () => {
  const { container } = render(<div>hello</div>);
  console.log("SMOKE HTML:", container.innerHTML);
  expect(container.textContent).toBe("hello");
});
