// function getValues() {
//   const numbers = [];
//   const inps = document.querySelectorAll("input");
//   for (let i = 0; i < inps.length; i++) {
//     numbers.push(+inps[i].value);
//   }
//   return numbers;
// }

// const btn = document.querySelector("button");

// btn.onclick = function () {
//   const numbers = getValues(); //得到文本框中的所有数字形成的数组
//   spanmax.innerText = Math.max(...numbers); //将数组展开
//   spanmin.innerText = Math.min(...numbers);
// };

function getValues() {
  let numbers = [];
  const inps = document.querySelectorAll("input");
  inps.forEach((item) => {
    numbers.push(item.value);
  });
  return numbers;
}

const btn = document.querySelector("button");
btn.onclick = function () {
  const numbers = getValues();
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
};
