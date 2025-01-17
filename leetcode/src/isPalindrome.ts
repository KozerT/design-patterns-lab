export function isPalindrome(x: number): boolean {
  const reversed = x.toString().split("").reverse().join("")
  if (reversed === x.toString()) {
    return true
  } else {
    return false
  }
}
