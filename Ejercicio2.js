//hecho por mí
const isPalindrom = (firstWord, secondWord) => {
  console.time(isPalindrom)
  let primeraPalabra = firstWord.toLowerCase().split("");   let segundaPalabra = secondWord.toLowerCase();  let anagrama = [];
  for (i = 1; i <= primeraPalabra.length; i++) {
    anagrama.push(primeraPalabra[primeraPalabra.length - i]);
  }
  anagrama = anagrama.join("");
  console.timeEnd(isPalindrom)
  return anagrama == segundaPalabra;
};
console.log(isPalindrom("arroz", "ZoRRa"));

const isAnagram = (firstWord,secondWord)=>{
  console.time(isAnagram)
  firstWord= firstWord.toLowerCase().split('').sort().join('')
  secondWord=secondWord.toLowerCase().split('').sort().join('')
  console.log(firstWord, secondWord);
  if(firstWord.length == secondWord.length){
    if(firstWord==secondWord) 
    console.timeEnd(isAnagram)
    return true
  } 
  console.timeEnd(isAnagram)
  return false
}
console.log(isAnagram('amor','roma'));
//