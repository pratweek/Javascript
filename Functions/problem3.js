let arr =[1,2,3,4,5,6,7,8,9,10];
 arr.forEach( function squareArr(val){
    console.log(val*val);
 });


 //Arrow function
 let nums = [45,28,20];
 let calSqr = (num) =>  {
    console.log(num*num);
 };
 nums.forEach(calSqr);  //another way to solve 