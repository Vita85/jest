const ageClassification = require("./age");

describe("ageClassification", () => {
  test('якщо вік менше 0, поверне null', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  test('якщо вік 0, поверне null', () => {
    expect(ageClassification(0)).toBe(null);
  });

  test('якщо вік від 1 до 24, поверне "Дитинство" ', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
    // expect(ageClassification(24.01)).toBe('Молодість');
  });

  test('якщо вік від 25 до 44, поверне "Молодість" ', () => {
    expect(ageClassification(25)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
    // expect(ageClassification(44.01)).toBe('Зрілість');
  });

  test('якщо вік від 45 до 65, поверне "Зрілість"', () => {
    expect(ageClassification(45)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
    // expect(ageClassification(65.01)).toBe('Старість');
  });

  test('якщо вік від 66 до 75, поверне "Старість" ', () => {
    expect(ageClassification(66)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
    // expect(ageClassification(75.01)).toBe('Довголіття');
  });

  test('якщо вік від 76 до 90, поверне "Довголіття" ', () => {
    expect(ageClassification(76)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
    // expect(ageClassification(90.01)).toBe('Рекорд');
  });

  test('якщо вік від 91 до 122, поверне "Рекорд" ', () => {
    expect(ageClassification(91)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
    // expect(ageClassification(122.01)).toBe(null);
  });

  test('якщо вік більше 122, поверне null ', () => {
    expect(ageClassification(123)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});


// ==============
// console.log('    -1 :', ageClassification(-1)) // -1 : null
// console.log('     0 :', ageClassification(0)) // 0 : null
// console.log('     1 :', ageClassification(1)) // 1 : Дитинство
// console.log('    24 :', ageClassification(24)) // 24 : Дитинство
// console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
// console.log('    44 :', ageClassification(44)) // 44 : Молодість
// console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
// console.log('    65 :', ageClassification(65)) // 65 : Зрілість
// console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
// console.log('    75 :', ageClassification(75)) // 75 : Старість
// console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
// console.log('    90 :', ageClassification(90)) // 90 : Довголіття
// console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
// console.log('   122 :', ageClassification(122)) // 122 : Рекорд
// console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
// console.log('   150 :', ageClassification(150)) // 150 : null
