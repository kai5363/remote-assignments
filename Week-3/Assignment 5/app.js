// Time Complexity O(n) ; Space Complexity O(n)
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const subValue = target - nums[i];
    if (nums[i] in map) {
      return [map[nums[i]], i];
    }
    map[subValue] = i;
  }
  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
