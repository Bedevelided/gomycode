let sentence = "hello world."

let vowels = ["a" , "e" , "i" , "o" , "u"];
let NumVowels = 0;
let totalsum = 0;
for(var i = 0 ; i < sentence.length ; i++){
    console.log(sentence.charAt(i))
    totalsum = totalsum + 1
    if(sentence[i] === "a"){
        NumVowels++
    }
    if(sentence[i] === "e"){
        NumVowels++
    }
    if(sentence[i] === "i"){
        NumVowels++
    }
    if(sentence[i] === "o"){
        NumVowels++
    }
    if(sentence[i] === "u"){
        NumVowels++ 
    }
}
