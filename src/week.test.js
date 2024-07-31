const weekFn = require("./week");

describe("weekFn", () => {
  test('якщо значення 1, поверне "Понеділок"', () => {
    expect(weekFn(1)).toBe("Понеділок");
  });
  test('якщо значення 2, поверне "Вівторок"', () => {
    expect(weekFn(2)).toBe("Вівторок");
  });
  test('якщо значення 3, поверне "Середа"', () => {
    expect(weekFn(3)).toBe("Середа");
  });
  test('якщо значення 4, поверне "Четвер"', () => {
    expect(weekFn(4)).toBe("Четвер");
  });
  test('якщо значення 5, поверне "П\'ятниця"', () => {
    expect(weekFn(5)).toBe("П\'ятниця");
  });
  test('якщо значення 6, поверне "Субота"', () => {
    expect(weekFn(6)).toBe("Субота");
  });
  test('якщо значення 7, поверне "Неділя"', () => {
    expect(weekFn(7)).toBe("Неділя");
  });
  test('якщо значення менше 1, поверне null', () => {
    expect(weekFn(0)).toBe(null);
  });
  test('якщо значення більше 7, поверне null', () => {
    expect(weekFn(8)).toBe(null);
  });
  test('якщо значення не число, поверне null', () => {
    expect(weekFn("")).toBe(null);
    expect(weekFn("string")).toBe(null);
    expect(weekFn(null)).toBe(null);
    expect(weekFn(undefined)).toBe(null);
  });
  
});