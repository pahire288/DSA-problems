
// Problem: Reverse Words in a String



let Input = "I love React";
// Output: "React love I"

let str = "";
let newarray = [];

for (let i = 0; i <= Input.length; i++) {
    if (Input[i] === " " || i === Input.length) { 
        newarray.push(str);
        str = "";
    } else {
        str += Input[i];
    }
}

for (let i = newarray.length - 1; i >= 0; i--) {
    console.log(newarray[i]);
}
