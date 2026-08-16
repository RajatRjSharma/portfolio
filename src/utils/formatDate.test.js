import { formatDate, formatDateRange } from "./formatDate";

describe("formatDate", () => {
  it("returns an empty string for missing values", () => {
    expect(formatDate()).toBe("");
    expect(formatDate("")).toBe("");
  });

  it("normalizes present regardless of case", () => {
    expect(formatDate("present")).toBe("Present");
    expect(formatDate("Present")).toBe("Present");
  });

  it("abbreviates month names without timezone shifting", () => {
    expect(formatDate("September 2025")).toBe("Sep 2025");
    expect(formatDate("Jul 2026")).toBe("Jul 2026");
    expect(formatDate("April 2020")).toBe("Apr 2020");
  });

  it("leaves unrecognized values unchanged", () => {
    expect(formatDate("2024")).toBe("2024");
  });
});

describe("formatDateRange", () => {
  it("joins start and end dates", () => {
    expect(formatDateRange("Aug 2020", "Oct 2020")).toBe("Aug 2020 - Oct 2020");
    expect(formatDateRange("September 2025", "present")).toBe(
      "Sep 2025 - Present"
    );
  });
});
