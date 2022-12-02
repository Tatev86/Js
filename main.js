
const arr = [null,34, "hello", 8, 0,"",null,"test"]
const filterByID =(arr) => {
    const newArray =[];
    for (let i=0; i< arr.length; i++)
  if ((arr[i] !== null) && (arr[i] !== ""){
      newArray.push(arr[i]);
      }
    return newArray;
}
const newArr = filterByID(arr);
console.log (arr);
console.log(newArr);