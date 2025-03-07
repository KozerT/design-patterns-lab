

export function climbStairs(n: number): number {
    //To reach nth step, what could have been your previous steps? (Think about the step sizes)


    // Base case: stopping condition 1 or 2 steps left , then we stop the exec.  How - to calculate that 1,2 left number  [ n%1 or n%2 ]
    
//     Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step // /1 
// 2. 1 step + 2 steps //  
    // 3. 2 steps + 1 step

    // Input : n =4 /  2 +1 +1 ; 2 + 2 ; 1+1+1+1;  1+1+2; 1+2+1;   
    

 // Base case: stopping condition 
    if   (n === 1  )   {
    return 1;
    }  

    if (n === 2) {
       return 2 
    } 

  // Recursive case: function calls itself 
  return climbStairs( n-1 ) + climbStairs( n-2 );

};  


