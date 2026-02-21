//Final price after 10 percent discount of items
 let initialPrice = [250,645,300,900,50];
// let idx = 0;
// for(let val of initialPrice){
//     let offer = val/10;
//   let finalPrice = initialPrice[idx] - offer;
//   console.log(`The value of index ${idx} = ${finalPrice}`);

//   idx++;
// }



//Another Method
for(let i=0; i < initialPrice.length; i++){
    let offer = initialPrice[i]/10;
   initialPrice[i] -= offer; 
}
console.log(initialPrice);
