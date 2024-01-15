// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr = str.replace(/[^a-z]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return cleanStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("robot"));  // Output: false
console.log(isPalindrome("A man a plan a canal Panama"));  // Output: true

// Additional test cases
console.log(isPalindrome("level"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
