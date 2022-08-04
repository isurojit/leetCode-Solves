export const twoSum = (nums, target) => {
  let numberObject = {};
  for (let i = 0; i < nums.length; i++) {
    let pos = target - nums[i];
    if (numberObject[pos] !== undefined) {
      return [numberObject[pos], i];
    }
    numberObject[nums[i]] = i;
  }
};
