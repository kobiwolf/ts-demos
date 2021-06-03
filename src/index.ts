//! using [] as type
// let a: { c: string; [b: number]: number };
// a = { c: 'a', 5: 6 };
// console.log(a)

//! using read
// let a: { readonly b: string } = { b: 'a' };
// let b:readonly-cant b used
// a.b='c'
// console.log(a);

// !declare obj
let a: object;
a = { c: 'n' };
console.log(a);
let b: Object = { c: 'v' };
console.log(b);
let c: { a: string };
c = { a: 'a' };
console.log(c);
