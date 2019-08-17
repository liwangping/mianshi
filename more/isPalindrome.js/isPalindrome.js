// A man, a plan, a canal:Panama
function isVaild(c){
    const charCode = c.charCodeAt(0);
    const isDigit = charCode >= "0".charCodeAt(0) && "9".charCodeAt(0);
    const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);
    return isDigit || isChar;
}
// 1.  忽略大小写 tolower
// 2.  特殊字符串忽略 ++  
// 3.  left right
 var isPalindrome = function(s)  {
    s = s.toLowerCase();
    let left = 0;
        right = s.length - 1;

    while (left < right) {
        if (!isVaild[s[left]]){
            left++;
            continue;
        }
        if (!isVaild[s[right]]){
            right--;
            continue;
        }

        if (s[left] === s[right]){
            left++;
            right--;
        }else {
            break;
        }
    }
    return right <= left;
}

console.log(isPalindrome)