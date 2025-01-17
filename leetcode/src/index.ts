import { isPalindrome } from "./isPalindrome"
import { romanToInt } from "./roman-to-int"
import { mergeTwoLists } from "./sum-of-two"
import { argumentsLength } from "./arguments-length"
import { expect } from './to-be-or-not-to-be';

const roman = romanToInt("XII")
console.log(roman)

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const item3 = new ListNode(4, null)
const item2 = new ListNode(2, item3)
const item1 = new ListNode(1, item2)

const item6 = new ListNode(4, null)
const item5 = new ListNode(3, item6)
const item4 = new ListNode(1, item5)

const nodes = mergeTwoLists(item1, item4)

console.log(isPalindrome(333))

console.log("This is argumentsLength", argumentsLength({}, null, "3"))

console.log("This is to be or not to be", expect(5).notToBe(5))
