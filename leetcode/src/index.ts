import { defangIPaddr } from './defanging-an-ip-address'
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

//console.log(isPalindrome(333))

// console.log("This is argumentsLength", argumentsLength({}, null, "3"))

// console.log("This is to be or not to be", expect(5).notToBe(5))

// console.log(
//   "This is length of last word:",
//   lengthOfLastWord("This is to be or not to be")
// )

// console.log("Plus one", plusOne([1, 2, 4]))


// console.log("This is concatenation of array", getConcatenation([1,3,2,1]))

// console.log("Two promises", addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//     .then(console.log))

// console.log('Number of good pairs', numIdenticalPairs ([1,2,3,1,1,3]))

console.log("Defacing IP address", defangIPaddr('1.1.1.1'))