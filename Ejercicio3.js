let posicion=1001;

//forma en la que lo hice, mostrando los primeros 50 números
let guardado = [0, 1];
const myWay = () => {
    console.time(myWay)
  for (let i = 0; guardado.length <= posicion; i++) {
    guardado.push(guardado[i] + guardado[i + 1]);
  }
  console.timeEnd(myWay)
  return guardado[posicion]
};
console.log(myWay());

//que sólo me arroje un número
let n1=0;
let n2=1;
let n3;
const posicionFibonacci=(posicionSerie)=>{
    console.time(posicionFibonacci)
    for(let i=1;i<=posicionSerie;i++){
        n3=n1+n2
        n1=n2
        n2=n3
    }
    console.timeEnd(posicionFibonacci)
    return n3
}

console.log(posicionFibonacci(posicion-1));