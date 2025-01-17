import { isPalindrome } from "./isPalindrome"
import { romanToInt } from "./roman-to-int"
import { mergeTwoLists } from "./sum-of-two"

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
