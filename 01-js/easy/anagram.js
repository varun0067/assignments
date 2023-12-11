/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false
  }

   let arrangedStr1=str1.toLowerCase().replace(" ","").split("").sort().join()
   let arrangedStr2=str2.toLowerCase().replace(" ","").split("").sort().join()

   for(let i=0;i<arrangedStr1.length;i++){
    if(arrangedStr1[i]!==arrangedStr2[i])
    {
      return false
    }
   }
   return true
}

module.exports = isAnagram;
