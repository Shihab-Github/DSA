var lengthOfLongestSubstring = function (s) {
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;
  let hash = {};

  while (b_pointer < s.length) {
    if (!hash[s[b_pointer]]) {
      hash[s[b_pointer]] = 1;
      max = Math.max(max, Object.keys(hash).length);
      b_pointer++;
    } else {
      delete hash[s[a_pointer]];
      a_pointer++;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcbcbb"));

/* 

sample string abcabcbb

follow the sliding window technique by initializing two pointers I & J

both pointers will start at zero index of the string

start a while loop, 
we are going to slide the window until our requirement is full, 
so i will start at 0 and j will run until the end of the string

maintain a hashmap for chars and also max value that will determine the result

inside loop: 
    check if char is in hashmap. 
    if not present insert in hashmap
    update max by comparing current value and hashmap keys length
    increment j

    if char is found in hashmap
    remove char from hashmap using i
    increment i

    return max
    
*/
