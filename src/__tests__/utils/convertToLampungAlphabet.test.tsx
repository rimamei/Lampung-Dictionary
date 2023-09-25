import { convertToLampungAlphabet } from "@/utils/convertToLampungAlphabet";

describe("convertToLampungAlphabet", () => {
  it('handles words with "ga" correctly', () => {
    const result = convertToLampungAlphabet("gag");
    expect(result).toBe("ggx");
  });

  it('handles words with "ka" correctly', () => {
    const result = convertToLampungAlphabet("kak");
    expect(result).toBe("kkx");
  });

  it('handles words with "ang" correctly', () => {
    const result = convertToLampungAlphabet("sedang");
    expect(result).toBe("sedX");
  });

  it('handles words with "ny" correctly', () => {
    const result = convertToLampungAlphabet("nyari");
    expect(result).toBe("Yri");
  });

  it('handles words with "gh" correctly', () => {
    const result = convertToLampungAlphabet("gha");
    expect(result).toBe("H");
  });

  it('handles words with "ai" correctly', () => {
    const result = convertToLampungAlphabet("sai");
    expect(result).toBe("sI");
  });

  it('handles words with "an" correctly', () => {
    const result = convertToLampungAlphabet("dengan");
    expect(result).toBe("deGN");
  });

  it('handles words with "ah" correctly', () => {
    const result = convertToLampungAlphabet("fasih");
    expect(result).toBe("fsiA");
  });

  it('handles words with "ar" correctly', () => {
    const result = convertToLampungAlphabet("getar");
    expect(result).toBe("getR");
  });

  it('handles words with "au" correctly', () => {
    const result = convertToLampungAlphabet("sau");
    expect(result).toBe("sU");
  });

  it("handles empty input correctly", () => {
    const result = convertToLampungAlphabet("");
    expect(result).toBe("");
  });
});
