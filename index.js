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
let saveEl = document.getElementById('save-el');

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let enteries = count + '-';
  saveEl.innerText += enteries;
  console.log(enteries);
}
