/**
 * @param {number} x
 * @return {boolean}
 * @description https://leetcode.com/problems/palindrome-number/
 */
var isPalindrome = function(x) {
    const arr = [...String(x)];
    for(let i = 0; i < (arr.length / 2) ; i++) {
        if(arr[i] !== arr[arr.length-i-1]) {
            return false;
        }
    }
    return true;
};

// var isPalindrome = function(x) {
//     if(x<0) return false;
//     /*
//     var str=x+"";
//     return str.split("").reverse().join("")==str;
//     */
//     var res=0,num=x;
//     while(num){
//         res=res*10+num%10;
//         num=~~(num/10);
//         console.log(res, num)
//     }
//     return res==x;
// };


// var isPalindrome = function(x) {
//     if (x<0 || (x!=0 && x%10==0)) return false;
//     let rev = 0;
//     while (x>rev){
//         rev = rev*10 + x%10;
//         x = Math.floor(x/10);
//     }
//     // console.log(rev, x, ~~(rev/10)); // Matn.floor === ~~
//     return !!(x==rev || x== ~~(rev/10));
// }