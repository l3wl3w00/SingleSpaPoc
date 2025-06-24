import { render } from "@testing-library/react";
import Root from "./root.component";

function setupPath(path: string) {
  window.history.pushState({}, "", path);
}

describe("Root component", () => {
  it("renders comments for a dino", () => {
    setupPath("/dino-details/Tyrannosaurus%20rex");
    const { getByText } = render(<Root />);
    expect(getByText(/Community comments/i)).toBeInTheDocument();
    expect(getByText(/This guy had the most powerful bite!/i)).toBeInTheDocument();
  });

  it("shows placeholder when no dino", () => {
    setupPath("/dino-details");
    const { getByText } = render(<Root />);
    expect(getByText(/Select a dinosaur/i)).toBeInTheDocument();
  });
});
