export function plusOne(digits: number[]): number[] {
  let increment = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum;

    if (i === digits.length - 1) {
      sum = digits[i] + 1;
    } else {
      sum = digits[i] + increment;
    }

    if (sum === 10) {
      digits[i] = 0;
      increment = 1;
    } else {
      digits[i] = sum;
      increment = 0;
    }
  }

  if (increment === 1) {
    return [1, ...digits];
  }

  return digits;
}