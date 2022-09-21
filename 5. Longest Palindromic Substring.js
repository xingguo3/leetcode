/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // not a very classic dp problem
  // palindrome could be odd number or even number
  if (s.length == 1) return s;
  let result = s[0];
  let start = 0,
    end = 0;

  // for even string
  for (let i = 0; i < s.length; i++) {
    start = i - 1;
    end = i + 1;
    while (start > -1 && end < s.length) {
      if (s[start] == s[end]) {
        if (end - start + 1 > result.length) {
          result = s.substring(start, end + 1);
        }
        start--;
        end++;
      } else {
        break;
      }
    }
    // if(i==s.length - result.length/2 + 1){
    //     break;
    // }
  }
  //for odd string
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i + 1] == s[i]) {
      if (result.length < 2) {
        result = s.substring(i, i + 2);
      }
      start = i - 1;
      end = i + 2;
      while (start > -1 && end < s.length) {
        if (s[start] == s[end]) {
          if (end - start + 1 > result.length) {
            result = s.substring(start, end + 1);
          }
          start--;
          end++;
        } else {
          break;
        }
      }
    }
  }
  return result;
};
