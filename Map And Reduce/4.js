const strArr = ["Hi","Hello","bye","good","a"];
const maxLen =1;
const outputArr = strArr.map(function(str){
    if(str.length <= maxLen)
        return str;
    else
        return str.substring(0,maxLen);
});
console.log(outputArr);