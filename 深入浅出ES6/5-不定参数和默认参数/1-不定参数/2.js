//不定参数只能放在最后一个
function containsAll(haystack1,haystack2,...needles){
    for(var n of needles){
        if(-1===haystack1.indexOf(n)){
            return false;
        }
        if(-1===haystack2.indexOf(n)){
            return false;
        }
    }
    return true;
}

console.log(containsAll('abcd','dcba','a','c'));
console.log(containsAll('abcd','dcba','a','x'));