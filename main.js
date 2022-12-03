function compare (a){
    return function (b){
        if (a>b){
            return true;
        }
        if (a<b){
            return false;
        }
         return null;
    }
}
let comp= compare(20);
console.log(comp(10));
console.log(comp(20));
console.log(comp(35))