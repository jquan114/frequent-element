Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

var topKFrequent = function(nums, k) {
    // Create a map to store the frequency of each element
  const frequencyMap = new Map();
  for (const num of nums) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Convert the map to an array and sort it in descending order by frequency
  const sortedArray = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);

  // Return the first k elements of the sorted array
  return sortedArray.slice(0, k).map(([num, frequency]) => num);
};
