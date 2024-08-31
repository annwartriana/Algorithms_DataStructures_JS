/*
ANAGRAMS
Given two strings, write a function to determine if the 
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the 
letters of another, such as cinema, formed from iceman.
*/

function validAnagram(str1, str2){

    if(str1.length != str2.length) return false;

    let str1LowerCase = str1.toLowerCase();
    let str2LowerCase = str2.toLowerCase();

    let objFromStr1Letters = {}    

    for (let index in str1LowerCase){
        objFromStr1Letters[str1LowerCase[index]] = (objFromStr1Letters[str1LowerCase[index]] || 0) + 1;            
    }    

    for ( let index in str2LowerCase ){
        if (!(str2LowerCase[index] in objFromStr1Letters)){
            return false;
        }else{
            if(objFromStr1Letters[str2LowerCase[index]]<1) return false;
            objFromStr1Letters[str2LowerCase[index]] -= 1;         
        }      
    }
    return true;
}
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) 
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
