var removeDuplicates = function (nums) {
  let i = 0;
  while(i < nums.length){
    if(nums[i] === nums[i+1]){
        nums.splice(i+1,1)
    }else
        i++
  }
  console.log('nums')
};

console.log(removeDuplicates([0,0,0,0,3]));
