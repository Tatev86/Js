
const fname = prompt("Input Name");
const lname = prompt("Input Surname");
const userage = Number(prompt("Input age"));

const user = (firstname, lastname, age) => {

    if (isNaN(userage) === true) {
        console.log("Enter Number!")
    }

    while (!true); {
        Number(prompt("Input age"));
        if (userage) {
            break;
        }
    }

    const obj = {
        firstname: firstname,
        lastname: lastname,
        age: age
    }
    return obj;

}

const data = user(fname, lname, userage);
console.log(data);





// function repet (text = "Hello", count = 4){
//     let a = "";
//     for (let i = 0; i <= count; i++){
//         a += text;
//        }
//     return a;
// }
// const rest = repet ("Hi" , 2);
// console.log (rest)