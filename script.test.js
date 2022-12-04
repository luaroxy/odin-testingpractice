import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './script';

test('capitalize', () => {
  expect(capitalize("hi")).toBe("Hi");
});

test('reverse string', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('add', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtract', () => {
  expect(calculator.subtract(1,2)).toBe(-1);
});

test('divide', () => {
  expect(calculator.divide(1,2)).toBe(0.5);
});

test('multiply', () => {
  expect(calculator.multiply(1,2)).toBe(2);
});

test('caesar cipher shift 1 unique letter', () => {
  expect(caesarCipher("a",1)).toBe("b");
});

test('caesar cipher shift 1 simple', () => {
  expect(caesarCipher("abcz",1)).toBe("bcda");
});

test('caesar cipher shift 1 with space', () => {
  expect(caesarCipher("defend the east wall of the castle",1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test('caesar cipher shift -1', () => {
  expect(caesarCipher("bcdefghijklmnopqrstuvwxyza",-1)).toBe("abcdefghijklmnopqrstuvwxyz");
});

test('caesar cipher shift -2', () => {
  expect(caesarCipher("abc",-2)).toBe("yza");
});

test('caesar cipher shift +2', () => {
  expect(caesarCipher("alz",2)).toBe("cnb");
});

test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});