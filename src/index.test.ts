import { getNextGeneration } from "./index";

describe("getNextGeneration logic", () => {
  it("Должна оживлять мертвую клетку с 3 соседями", () => {
    expect(getNextGeneration(false, 3)).toBe(true);
  });

  it("Должна убивать живую клетку с 4 соседями", () => {
    expect(getNextGeneration(true, 4)).toBe(false);
  });
});
