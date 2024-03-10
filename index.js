// document.getElementById('count-el').innerText = 4;

// let count = 5;

// count = count + 1;
// console.log(count);

// function increment() {
//   count = count + 1;
//   document.getElementById('count-el');.innerText = count;
//   console.log(count);
// }

let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
  count = count + 1;
  countEl.innerText = count;
  save();
}

function save() {
  console.log(count);
}
