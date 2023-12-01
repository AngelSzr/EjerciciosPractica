  //hecha por mí
  const fizzbuzz = () => {
    for(i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz');
        }else if(i%3===0){
            console.log('fizz');
        }else if(i%5===0){
            console.log('buzz');
        }else{
          console.log(i);
        }
    }
  };


  //solución encontrada en internet, usando operador ternario
  //de acuerdo a esto: https://flexiple.com/javascript/fizzbuzz-javascript
  const fizzbuzz2=()=>{
  for(i=1;i<=100;i++) console.log((i %3 ? '' :'fizz')+(i%5?'':'buzz') || i);
  console.log('hasta aquí el reporte');
}

fizzbuzz2()