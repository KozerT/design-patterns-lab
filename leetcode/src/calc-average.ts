export function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  return sum / numbers.length
}
