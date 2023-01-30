// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321

function reverseAnumber(p) {
    return p.toString().split("").reverse().join("")
 }
  
 console.log(reverseAnumber(5678))
 
 
 
 // 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 // Note: Assume punctuation, numbers and symbols are not included in the passed string.
 // “Webmaster” -&gt; “abeemrstw”
 
 function alpha(p2) {
     return p2.toLowerCase().split("").sort().join("")
 }
 
 console.log(alpha("Romana"))
 
 // 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
 // rearranging the letters so they are sorted from A to Z.
 // &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;
 
 function Alfa(p3) {
  
    var splitedStr = p3.split(" ")
     splitedStr.forEach((e,index) => {
        var splitedWord = e.split("").sort()
        splitedStr[index] = splitedWord.join("")
       
     });
     return splitedStr.join(" ")
 }
 
 console.log(Alfa("Republic Of Serbia"))
 // 4. Write a function to split a string and convert it into an array of words.
 // &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]
 
 function splitStringAndConvertInArray(p4) {
     return p4.split(" ")
 }
 
 console.log(splitStringAndConvertInArray("John Show"))
 // 5. Write a function to convert a string to its abbreviated form.
 // &quot;John Snow&quot; -&gt; &quot;John S.&quot;
 
 function stringToAbbreviatedForm(p5) {
 
     var newArr = p5.split(" ")
  for (var index = 0; index < newArr.length; index++) {
     
     return `${newArr[0]} ${newArr[1].substring(1, -1)}. `
  }
 }
 
 console.log(stringToAbbreviatedForm("John Show"))
 // 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
 // &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
 // &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;
 
 function addString(string, add, side) {
     var str1 =string.length
     var str2 =add.length
     var deff = str2-str1
    
    if (side==="left") {
     return `${add}${str.slice(deff)}`
    } else if (side==="right") {
     return `${string.slice(0,deff)}${add}`
    }
 }
 
 console.log(addString("012312", "950", "right"))
 
 
 // 7. Write a function to capitalize the first letter of a string and returns modified string.
 // &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;
 
 function FirstLetter(p6) {
    return `${p6[0].toUpperCase()}${p6.slice(1)}`
 }
 
 console.log(FirstLetter("js string exercises"))
 // 8. Write a function to hide email addresses to protect them from unauthorized users.
 // &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;
 
 function hideEmail(p7) {       
    var newEmail = p7.slice(4, p7.indexOf("@"))
    return p7.replace(newEmail,"*****")
 }
 console.log(hideEmail("somerandomaddress@example.com"))
 // 9. Write a program that accepts a string as input and swaps the case of each character. For
 // example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
 // var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
 // var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
 // &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;
 
 function lowerAndUpper(params) {
     var upper = params.toUpperCase()
     var lower = params.toLowerCase()
     var output = ""
     console.log(upper,lower)
     for (var index = 0; index < params.length; index++) {
      if (upper[index]===params[index]) {
         output += params[index].toLowerCase();
     }else {
         output += params[index].toUpperCase();
     }
 }
 return output;
 }
 
 console.log(lowerAndUpper("The Quick Brown Fox"))