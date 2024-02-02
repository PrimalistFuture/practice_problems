"use strict";

// Running Sum of 1d Array:

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

//     Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].

//     Example 2:
// Input: nums = [1, 1, 1, 1, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].

//     Example 3:
// Input: nums = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]

// Constraints:

// 1 <= nums.length <= 1000
//     - 10 ^ 6 <= nums[i] <= 10 ^ 6

function runningSum(arr) {
    let total = arr[0];
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            sums.push(arr[0]);
        } else {
            total += arr[i];
            sums.push(total);
        }
    }
    return sums;
}

// Thoughts:
// Could write this such that we start at i = 1 and just push in arr[0] when we initialize the array.


// Shuffle the Array:

// Given the array nums consisting of 2n elements in the form[x1, x2,..., xn, y1, y2,...,yn].
// Return the array in the form[x1, y1, x2, y2,..., xn, yn].

// Example 1:
// Input: nums = [2, 5, 1, 3, 4, 7], n = 3
// Output: [2, 3, 5, 4, 1, 7]
// Explanation: Since x1 = 2, x2 = 5, x3 = 1, y1 = 3, y2 = 4, y3 = 7 then the answer is[2, 3, 5, 4, 1, 7].

// Example 2:
// Input: nums = [1, 2, 3, 4, 4, 3, 2, 1], n = 4
// Output: [1, 4, 2, 3, 3, 2, 4, 1]

// Example 3:
// Input: nums = [1, 1, 2, 2], n = 2
// Output: [1, 2, 1, 2]

// Constraints:

// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10 ^ 3

function shuffleArray(arr, n) {
    let firstHalf = arr.slice(0, n);
    let secondHalf = arr.slice(n);
    let shuffled = [];
    for (let i = 0; i < firstHalf.length; i++) {
        shuffled.push(firstHalf[i], secondHalf[i]);
    };
    return shuffled;
}

// Thoughts:
// Creating the halves is probably more costly than it needs to be. 

// Refactored:

function shuffleArraySlick(arr, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(arr[i], arr[n + 1]);
    }
    return res;
}

// Same idea, but without the created halves.


// Sum of Unique Elements:

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

//     Example 1:
// Input: nums = [1, 2, 3, 2]
// Output: 4
// Explanation: The unique elements are[1, 3], and the sum is 4.

// Example 2:
// Input: nums = [1, 1, 1, 1, 1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.

// Example 3:
// Input: nums = [1, 2, 3, 4, 5]
// Output: 15
// Explanation: The unique elements are[1, 2, 3, 4, 5], and the sum is 15.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

function sumUniques(arr) {
    let freqs = freqCounter(arr);
    let sum = 0;
    for (let item of freqs) {
        if (freqs[item] === 1) {
            sum += freqs[item];
        }
    }
    return sum;
}

function freqCounter(arr) {
    let freqs = {};
    for (let item in arr) {
        (freqs[arr[item]] === undefined)
            ? freqs[arr[item]] = 1 : freqs[arr[item]]++;
    }
    return freqs;
}

// Thoughts:
// I tried a few different things until I realized this was an easy frequencyCounter.


// How Many Numbers are Smaller than the current number:

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

//     Example 1:

// Input: nums = [8, 1, 2, 2, 3]
// Output: [4, 0, 1, 1, 3]
// Explanation:
// For nums[0] = 8 there exist four smaller numbers than it(1, 2, 2 and 3).
// For nums[1] = 1 does not exist any smaller number than it.
// For nums[2] = 2 there exist one smaller number than it(1).
// For nums[3] = 2 there exist one smaller number than it(1).
// For nums[4] = 3 there exist three smaller numbers than it(1, 2 and 2).

//     Example 2:
// Input: nums = [6, 5, 4, 8]
// Output: [2, 1, 0, 3]

// Example 3:
// Input: nums = [7, 7, 7, 7]
// Output: [0, 0, 0, 0]

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// Pseudo:
// I don't see any clear way to avoid O(N)^2
// iterate through array i
// iterate through array again j
// check if the current j === i
// if not and if less than i
// increment some count,
// push into an array
// return array

function countLessThan(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i && arr[j] < arr[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
};

// Thoughts:
// Pseudo let me see the j !== i issue quickly.
// Quick issue of pushing into result at the end of each j iteration, rather than at the completion of j 


// Sum of Absolute Differences in a Sorted Array:

// You are given an integer array nums sorted in non - decreasing order.
// Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.
// In other words, result[i] is equal to sum(| nums[i] - nums[j] |) where 0 <= j < nums.length and j != i(0 - indexed).

//     Example 1:
// Input: nums = [2, 3, 5]
// Output: [4, 3, 5]
// Explanation: Assuming the arrays are 0 - indexed, then
// result[0] = | 2 - 2 | + | 2 - 3 | + | 2 - 5 | = 0 + 1 + 3 = 4,
//     result[1] = | 3 - 2 | + | 3 - 3 | + | 3 - 5 | = 1 + 0 + 2 = 3,
//         result[2] = | 5 - 2 | + | 5 - 3 | + | 5 - 5 | = 3 + 2 + 0 = 5.

// Example 2:
// Input: nums = [1, 4, 6, 8, 10]
// Output: [24, 15, 13, 15, 21]

// Constraints:

// 2 <= nums.length <= 105
// 1 <= nums[i] <= nums[i + 1] <= 104

// Psuesdo:
// create result array
// iterate through array i
// create counter
// iterate through array j
// counter += i - j
// absolute the counter
// push counter into result
// return result

function sumAbsolute(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                counter += Math.abs(arr[i] - arr[j]);
            }
        }
        result.push(counter);
    }
    return result;
}

// Thoughts: 
// I knew there would be a solution better than my O(N)^2.
// Here is a pretty good one.
var getSumAbsoluteDifferences = function (nums) {
    let res = [];
    let prefixSum = 0;
    let suffixSum = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < nums.length; i++) {
        let leftSum = (nums[i] * i) - prefixSum;
        let rightSum = suffixSum - (nums[i] * (nums.length - i));
        let totalSum = leftSum + rightSum;

        res.push(totalSum);

        prefixSum += nums[i];
        suffixSum -= nums[i];
    }

    return res;
};
