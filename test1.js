const marks=[90,92,94,99,100,44]
const arr = new Array(100).fill('').map((i,index)=>({
name:'Name '+index,
marks: marks[index%6],
id:index
}));


//1. Create a new Array updating marks by it square

let updatedArray=arr.map((val)=>
{
   return{
    ...val,
    marks:val.marks*val.marks
   } 
});
console.log("Array of object having updated marks : ");
console.log(updatedArray);




//2.  Fetch first element with mark 44 with index

 let findElement=arr.find((val)=>
   {
     return val.marks==44
   });
 console.log(findElement);
 const index =arr.findIndex(val =>
   {
   return val.marks === 44;
   });
   
 console.log(index);
 //var findIndex=arr.indexOf(findElement);
// console.log("Index of the Element : "+findIndex);

//3.Write a function which take a mark as parameter and fetch all items with same marks.

 let fetchItem=(marksParam,arr)=>{
 return arr.filter((val)=>{
 return val.marks==marksParam
 });
}
 var myArray=fetchItem(94,arr)
 if(myArray.length==0){
 console.log("There are no any students with entered marks");
 }
 else{ 
    console.log(myArray);   
 }


//4.Findout items with marks equal to 100 and get last element of that array.

 /*var arrOfTheElement=arr.filter((val,index)=>{
 return val.marks==100 || index==arr.length-1;
 })
 console.log(arrOfTheElement);*/

 const arrayof100=arr.filter((i)=>i.marks===100)
 const lastElement = arrayof100[arrayof100.length-1]
 console.log(arrayof100);
 console.log(lastElement);