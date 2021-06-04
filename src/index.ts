//! using [] as type which means it's not required
// let a: { c: string; [b: number]: number };
// a = { c: 'a', 5: 6 };
// console.log(a)

// !declare obj
// let a: object = {};
// a = { c: 'n' };
// console.log(a);
// let b: Object = { c: 'v' };
// console.log(b);
// let c: { a: string };
// c = { a: 'a' };
// console.log(c);

//! using readonly
// let a: { readonly b: string } = { b: 'a' };
// let b:readonly-cant b used
// a.b='c'
// console.log(a);

// ! declare type
// let a = String;
// type a = number;
// console.log(a);
// c = '5';

//! union and intersection
// type Cat = { name: string; purrs: boolean };
// type Dog = { name: string; barks: boolean; wags: boolean };
// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;
// let a: Cat | Dog;
// let b: Cat & Dog;
// a={name:'wow',purrs:true}
// b={name:'wow',barks:true}

// ! Array
// let a = [1, 2, 3, 'a'];
// a.push('a');
// let b: (string | number)[];
// b = [];
// b.push(1);
// b.push('1');
// console.log(b);
// let d: readonly any[] = [1, 2, 3, 4];
// console.log(d);
// d.push(2)  //! wont work becUSE it's read only
// let b: readonly (number | string)[] = [1, '2'];

// ! tapuls
// let a:[number,string,number]
// a=[1,'v',4]
// let b:[number,string?,number]
// let c:[number,boolean,...string[]] //! important to notice the ...
// c=[1,true]
// c.push('a')
// let r: [3] = [3];

// ! enums
// enum Color {
//   word = 'word',
//   letter = 'letter',
// }
// let a: Color.word;
// let a = Color.word;
// console.log(a);
// console.log(Color.word);

// ! null
// let h = null;
// console.log(h);
// let status: { [key: string]: number } = { name: 1 };
// let a: status.name;

//! ex
// let a = 1042; //number
// let b = 'apples and oranges'; //string
// const c = 'pineapples'; //'pineapple
// let d = [true, true, false]; //boolian[]
// let e = { type: 'ficus' }; // {type:string}
// let f = [1, false]; //(number|bollian)[]
// const g = [3]; // number[]

// ! functions
// function a(a:number):number{
//   let b='a'
//   return b
// }
// a(2)
// let a = (a?: number): number => 5;
// let a=(a='a')=>5
//!type of func
// type a=(a:number)=>number
// let a:a=(num)=>num+1
// a(2)

//! bind call apply
// const a = function () {
//   console.log(`hi ${this}`);
// };
