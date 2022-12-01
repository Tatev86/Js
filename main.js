
const arr = [34,1,88, "hello", 8, 0, " ","undefined","test"]
let invalidId = 0;
function filterByID(arr) {
  if (Number.isFinite(arr) && arr !== 0) {
    return true;
  }
  invalidId++;
  return false;
}
const newArr = arr.filter(filterByID);
console.log(newArr);
console.log("Number of Invalid Entries = ", invalidId);