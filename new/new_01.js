let foo = 1;
let bar='a';

let arr=[12,2,3,4];
console.warn(arr);

let obj={ a : 1, b : 2};

function fun() {
    let aa=12;
    console.warn(aa);
    return;
}

console.warn(obj,bar,foo);
console.warn(obj,bar,foo);
fun();

let reg=new RegExp('[]');
console.warn(reg);

// let obj2={a:1};
// delete foo;

console.warn(`${foo}`);