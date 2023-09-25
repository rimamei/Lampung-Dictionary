import { cn } from "@/utils/style";

describe("cn", () => {
  it("merges class names correctly", () => {
    const result = cn("bg-red-500", "text-white", "font-bold");

    expect(result).toBe("bg-red-500 text-white font-bold");
  });

  it("handles empty input correctly", () => {
    const result = cn();

    expect(result).toBe("");
  });

  it("handles falsy values correctly", () => {
    const result = cn("bg-red-500", null, undefined, false, "text-white");

    expect(result).toBe("bg-red-500 text-white");
  });

  it("merges Tailwind classes correctly", () => {
    const result = cn("bg-red-500", "hover:bg-blue-500");

    expect(result).toBe("bg-red-500 hover:bg-blue-500");
  });
});
