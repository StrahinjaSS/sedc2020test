

// function f (a, b = 1, c = 2) {
//   return a + b + c;
// }

// console.log(f(6));
// console.log(f(6, 19));
// console.log(f(6, 19, 10));
// let arr2 = ['as', 'vs', 'ts'];
// let nums = [1, 5, 5, 5, 3, ...arr2, 4, 5, 6, 7, 8];

// console.log(nums);
// console.log(...nums);
// let str = 'string';
// console.log(...str);
// // f(5);

// function f (x, y, ...a) {
//   console.log(a);
//   return (x + y) * a.length
// }
// f(1, 2, "hello", true, 7) === 9

// let ime = 'strahinja';
// let prezime = 'stamenkovic';

// let obj = {
//   ime,
//   prezime
// }

// console.log(obj);

// let numbers = [1, 2, 3];
// let [ a,  , c] = numbers;

// console.log(a);
// // console.log(b);

// console.log(c);


// let name = strahinja.name;
// let age = strahinja.age;

// console.log(name);
// console.log(age);
// age = age + 10;
// console.log(age);
// console.log(strahinja);

// function logSep ({name, age}) {
//   console.log(name + 'destruct');
//   console.log(age + 10);
// }

// logSep(strahinja);

console.log(this); // window
// window.name = 'Veljko';
function Osoba(name, age) {
  this.name = name;
  this.age = age;
  this.nums = [1, 4, 5, 6, 7, 8, 9];
  this.log = () => {console.log(this)};
  this.logujIme = function() {
    let loguj = () => {
      console.log(this.name);
    };
    loguj();
  }
}

let strahinja = new Osoba('Strahinja', 29);
strahinja.logujIme()
console.log(strahinja);
let { name, age } = strahinja;