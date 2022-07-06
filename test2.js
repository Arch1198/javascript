const marks=[90,92,94,99,100,44]
const arr = new Array(100).fill('').map((i,index)=>({
name:'Name '+index,
marks: marks[index%6],
id:index
}));
let result; 
let func=(num)=>{ 
    
result={   //result created as array of object
  ...result  ,  //spreat operat(to store previous elements)              
   [num.marks]:arr.filter((val)=>{ //create key  dynamically 
   return num.marks==val.marks;
   })     
 }
}
//console.log(arr);
arr.forEach((element) => {
  func(element);  
});
console.log(result);



//output
//92:[{},{},{}]
