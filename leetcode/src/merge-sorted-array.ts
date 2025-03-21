/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let endIndex = nums1.length - 1;

    while (m > 0 || n > 0) {
        if (m === 0) {
            nums1[endIndex] = nums2[endIndex];
            n--;
            continue;
        }

        if (n === 0) {
            nums2[endIndex] = nums1[endIndex];
            m--;
            continue;
        }

        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[endIndex] = nums1[m - 1];
            m--;
        } else {
            nums1[endIndex] = nums2[n - 1];
            n--;
        }

        endIndex--;
    }

    console.log(nums1)
}