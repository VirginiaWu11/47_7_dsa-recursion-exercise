/** product: calculate the product of an array of numbers. */

// function product(nums, i = 0) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   if (i === nums.length) {
//     return 1;
//   }
//   console.log(i);
//   return nums[i] * product(nums, i + 1);
// }

function product(nums, i = 0, currentProduct = 1) {
  if (nums.length === 0) {
    return 0;
  }
  if (i === nums.length) {
    return 1;
  }
  currentProduct = nums[i] * product(nums, i + 1);
  return currentProduct;
}

console.log(product([2, 3, 4]));
/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length) {
    return 0;
  }

  return words[i].length > longest(words, i + 1)
    ? words[i].length
    : longest(words, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) {
    return "";
  }
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i === Math.floor(str.length / 2)) {
    return true;
  }
  return str[i] === str[str.length - 1 - i] && isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) {
    return;
  }
  if (arr[i] === val) {
    return i;
  }

  return findIndex(arr, val, i + 1) || -1;
}

/** revString: return a copy of a string, but in reverse. */

// function revString(str) {
//   return str.split("").reverse().join("");
// }

function revString(str, i = str.length - 1) {
  if (i < 0) {
    return "";
  }
  return str[i] + revString(str, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] === val) {
    return midIndex;
  }
  if (arr[midIndex] > val) {
    return binarySearch(arr, val, leftIndex, (rightIndex = midIndex - 1));
  }
  if (arr[midIndex] < val) {
    return binarySearch(arr, val, (leftIndex = midIndex + 1), rightIndex);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
