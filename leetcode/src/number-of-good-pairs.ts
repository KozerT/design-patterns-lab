export  function numIdenticalPairs(nums: number[]): number {
  let goodPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                goodPairs += 1
            }
        }
    }
   return goodPairs

}