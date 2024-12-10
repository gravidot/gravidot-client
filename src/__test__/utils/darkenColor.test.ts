import { darkenColor } from "@/shared/utils/darkenColor";

describe("darkenColor 함수", () => {
  test("기본 값(50)만큼 RGB 색상을 어둡게 변환해야 한다", () => {
    const color = "rgb(200, 150, 100)";
    const result = darkenColor(color);
    expect(result).toBe("rgba(150, 100, 50, 0.5)");
  });

  test("지정된 값만큼 RGB 색상을 어둡게 변환해야 한다", () => {
    const color = "rgb(100, 80, 60)";
    const result = darkenColor(color, 30);
    expect(result).toBe("rgba(70, 50, 30, 0.5)");
  });

  test("RGB 값이 0 이하로 내려가지 않아야 한다", () => {
    const color = "rgb(40, 30, 20)";
    const result = darkenColor(color, 50);
    expect(result).toBe("rgba(0, 0, 0, 0.5)");
  });

  test("잘못된 형식의 입력은 원본 값을 반환해야 한다", () => {
    const invalidColor = "invalid-color";
    const result = darkenColor(invalidColor);
    expect(result).toBe(invalidColor);
  });

  test("RGBA 색상 입력도 올바르게 어둡게 변환해야 한다", () => {
    const color = "rgba(200, 100, 50, 1)";
    const result = darkenColor(color, 20);
    expect(result).toBe("rgba(180, 80, 30, 0.5)");
  });
});