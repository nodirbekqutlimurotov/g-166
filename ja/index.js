/*
Math.round
Math.pow
Math.sqrt
Math.cbrt
Math.min
Math.max
Math.floor
Math.ceil
Math.abs
Math.random
Math.log
*/

//comparison operators

let $num1 = 23;
let $num2 = 43;
let $result = $num1 == $num2 || 5 == 4;

const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0

console.log('a is: ',a, 'b is: ',b,'c is:',c);

// const orginal = 3.14;
// const fake = orginal & 1;
// console.log('Fake is: ',fake)

console.log('RESULT: ',$result);
// console.log('DATA TYPE: ',Number.isInteger(result));