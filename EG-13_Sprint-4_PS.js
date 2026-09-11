
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


// Test
const list04 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
);

let reversedList04 = reverseList(list04);

const output04 = [];

while (reversedList04 !== null) {
    output04.push(reversedList04.val);
    reversedList04 = reversedList04.next;
}

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


// Test
const list05 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
);

let middle05 = middleNode(list05);

const output05 = [];

while (middle05 !== null) {
    output05.push(middle05.val);
    middle05 = middle05.next;
}

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


