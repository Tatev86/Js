
const arr = [34, "hello",8,"test"]
const  rev = (arr) => {
    const newArr= [];
    for (let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
    }
return newArr  ;
}
 const reverse=rev(arr);
  console.log (reverse);





