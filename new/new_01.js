let foo = 1;
let bar='a';

let arr=[12,2,3,4];
console.warn(arr);

let obj={a : 1,b : 2};

function fun () {
    let now=12;
    console.warn(now);
    return;
}

console.warn(obj,bar,foo);
console.warn(obj,bar,foo);
fun();

let reg=new RegExp('[]');
console.warn(reg);

console.warn(`${foo}`);