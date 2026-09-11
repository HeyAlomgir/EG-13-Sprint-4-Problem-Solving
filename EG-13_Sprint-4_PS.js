
// 01. Isomorphic Strings


const isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (
            (mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)
        ) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};



// console.log("01. Isomorphic Strings:", isIsomorphic("egg", "add"));







// 02. Word Pattern


const wordPattern = function (pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (
            (patternToWord.has(char) && patternToWord.get(char) !== word) ||
            (wordToPattern.has(word) && wordToPattern.get(word) !== char)
        ) {
            return false;
        }

        patternToWord.set(char, word);
        wordToPattern.set(word, char);
    }

    return true;
};


// console.log(
//   "02. Word Pattern:",
//   wordPattern("abba", "dog cat cat dog")
// );




// 03. Find the Difference


const findTheDifference = function (s, t) {
    let result = 0;

    for (const char of s) {
        result ^= char.charCodeAt(0);
    }

    for (const char of t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
};



// console.log(
//   "03. Find the Difference:",
//   findTheDifference("abcd", "abcde")
// );



// 04. Reverse Linked List


const ListNode = function (val, next = null) {
    this.val = val;
    this.next = next;
};

const reverseList = function (head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        const nextNode = current.next;

        current.next = previous;
        previous = current;
        current = nextNode;
    }

    return previous;
};


// // Test
// const list04 = new ListNode(
//     1,
//     new ListNode(
//         2,
//         new ListNode(
//             3,
//             new ListNode(
//                 4,
//                 new ListNode(5)
//             )
//         )
//     )
// );

// let reversedList04 = reverseList(list04);

// const output04 = [];

// while (reversedList04 !== null) {
//     output04.push(reversedList04.val);
//     reversedList04 = reversedList04.next;
// }

// console.log("04. Reverse Linked List:", output04);








// 05. Middle of Linked List


const middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};


// // Test
// const list05 = new ListNode(
//     1,
//     new ListNode(
//         2,
//         new ListNode(
//             3,
//             new ListNode(
//                 4,
//                 new ListNode(5)
//             )
//         )
//     )
// );

// let middle05 = middleNode(list05);

// const output05 = [];

// while (middle05 !== null) {
//     output05.push(middle05.val);
//     middle05 = middle05.next;
// }

// console.log("05. Middle of the Linked List:", output05);






// 06. Product of Array Except Self


const productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};



// console.log(
//   "06. Product of Array Except Self:",
//   productExceptSelf([1, 2, 3, 4])
// );






// 07. Remove Nth Node From End of List


const removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};


// // Test
// const list07 = new ListNode(
//     1,
//     new ListNode(
//         2,
//         new ListNode(
//             3,
//             new ListNode(
//                 4,
//                 new ListNode(5)
//             )
//         )
//     )
// );

// let result07 = removeNthFromEnd(list07, 2);

// const output07 = [];

// while (result07 !== null) {
//     output07.push(result07.val);
//     result07 = result07.next;
// }

// console.log(
//     "07. Remove Nth Node From End of List:",
//     output07
// );





// 08. Find First and Last Position


const searchRange = function (nums, target) {
  const findFirst = function () {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  const findLast = function () {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  return [findFirst(), findLast()];
};



// console.log(
//   "08. Find First and Last Position:",
//   searchRange([5, 7, 7, 8, 8, 10], 8)
// );
