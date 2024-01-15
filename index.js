// index.js

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Export the function if needed
module.exports = isPalindrome;
