export const problems = [
  {
    id: '1',
    title: 'Two Sum',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers...',
    code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}`,
    difficulty: 'Easy',
  },
];
