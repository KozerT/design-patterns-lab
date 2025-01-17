class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let currentNode = list1
  let nextNode = list2
  let endResultArray = []

  while (currentNode?.next) {
    currentNode = currentNode.next
    endResultArray.push(currentNode?.val)
  }

  while (nextNode?.next) {
    nextNode = nextNode.next
    endResultArray.push(nextNode?.val)
  }

  endResultArray.push(currentNode?.val)

  console.log(endResultArray)

  return null
}
