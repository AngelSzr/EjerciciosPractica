//hecho por mí
/*const isAnagram = (firstWord, secondWord) => {
  let primeraPalabra = firstWord.toLowerCase().split("");   let segundaPalabra = secondWord.toLowerCase();  let anagrama = [];
  for (i = 1; i <= primeraPalabra.length; i++) {
    anagrama.push(primeraPalabra[primeraPalabra.length - i]);
  }
  anagrama = anagrama.join("");
  return anagrama == segundaPalabra;
};
console.log(isAnagram("arroz", "ZoRRa"));*/

const isAnagram = (firstWord,secondWord)=>{
    firstWord= firstWord.toLowerCase().split('').sort().join('')
    secondWord=secondWord.toLowerCase().split('').sort().join('')
    console.log(firstWord, secondWord);
    if(firstWord.length == secondWord.length){
      if(firstWord==secondWord) return true
    } return false
}
console.log( isAnagram('amor','roma'));
//