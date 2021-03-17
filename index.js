let nikolinaVariabla = 1245;
let nekistring = `svasta nesto ${nikolinaVariabla}
                  asdsdsa
                  "adsadasdas" \`
                  asdasdas
                  `;
let nekidrugistring = "svasta nesto " + nikolinaVariabla + "\n asdsdsa \"adsadasda\"  asdasdas";
let str = '""""""""""""""';
console.log(nekistring);
console.log(nekidrugistring)

let arrow = () => value;

let arrow1 = param => {
  param = 'krompiri';
  console.log(param);
}
arrow1();
let arrow2 = (a, b) => a + b;

let arrow3 = () => ({ v: 1, b: 2 });

let fn = function() {
  return value;
}
let fn1 = function(param) {
  param = 'krompiri';
  console.log(param);
  return param;
}

let fn2 = function(a, b) {
  return a + b;
}

arr.filter(function(el) {
  return el.name === 'krompir';
});

arr.filter(el => el.name === 'krompir');

arr.find(el => el.id === id);

