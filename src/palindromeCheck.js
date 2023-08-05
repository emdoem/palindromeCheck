export function palindromeCheck(string) {
  let isPalindrome = null;
  const letters = /^[A-Za-z]+$/;
  const stringToCheck = string
    .split("")
    .filter((char) => (char.match(letters) ? char : null))
    .join("")
    .toLowerCase();
  // console.log(stringToCheck);
  for (let i = 0; i < stringToCheck.length; i++) {
    const otherEnd = stringToCheck.length - 1 - i;
    if (stringToCheck[i] === stringToCheck[otherEnd]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    return `"${string}" is a palindrome`;
  } else {
    return `"${string}" is not a palindrome`;
  }
}

/*
Write a program to determine if a given phrase (provided in a String) is a palindrome.

i.e.
  String phrase = "level";
  output:
  'level' is a palindrome
---- or ----
  String phrase = "hello";
  output:
  'hello' is not a palindrome
---- or ----
  String phrase = "LevEl";
  output:
  'LevEl' is a palindrome
---- or ----
  String phrase = "In Girum Imus Nocte Et Consumimur Igni";  
  output:
  'In Girum Imus Nocte Et Consumimur Igni' is a palindrome
---- or ----
  String phrase = "Was it a car or a cat I saw?";
  output:
  'Was it a car or a cat I saw?' is a palindrome
---- or ----
  String phrase = "Eva, can I stab bats in a cave?";
  output:
  'Eva, can I stab bats in a cave?' is a palindrome
  */
