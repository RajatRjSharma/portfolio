import { getProjectPageSize } from "./useProjectPageSize";

function mockMatchMedia({ mobile = false, tablet = false } = {}) {
  window.matchMedia = (query) => ({
    matches: query.includes("767px")
      ? mobile
      : query.includes("1023px")
        ? tablet
        : false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
}

describe("getProjectPageSize", () => {
  const original = window.matchMedia;

  afterEach(() => {
    window.matchMedia = original;
  });

  it("returns 3 cards on mobile", () => {
    mockMatchMedia({ mobile: true, tablet: true });
    expect(getProjectPageSize()).toBe(3);
  });

  it("returns 4 cards on tablet", () => {
    mockMatchMedia({ mobile: false, tablet: true });
    expect(getProjectPageSize()).toBe(4);
  });

  it("returns 6 cards on larger screens", () => {
    mockMatchMedia({ mobile: false, tablet: false });
    expect(getProjectPageSize()).toBe(6);
  });
});
