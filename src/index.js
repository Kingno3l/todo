// import _ from "lodash";
// import printMe from "./print.js";
import './style.css';

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");

//   btn.innerHTML = "Click me and check the console!";
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

/* eslint-disable no-restricted-syntax */
const dataToDoList = [
  {
    description: 'Jumping',
    completed: true,
    index: 0,
  },
  {
    description: 'Running',
    completed: true,
    index: 1,
  },
  {
    description: 'Eating',
    completed: true,
    index: 2,
  },
  {
    description: 'Drinking',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleeping',
    completed: true,
    index: 4,
  },
];

dataToDoList.forEach((n) => {
  const output = n.description;

  const containerList = document.getElementById('list-container');
  containerList.innerHTML += `
      <li class="list-to-do">
        <input type="checkbox" class="to-do">
        ${output}
        <i class="fa-solid fa-trash"></i>
      </li>
      <hr class="line">
    `;
});

// const addListItem = () => {
// const containerList = document.getElementById("list-container");
// dataToDoList.forEach((n) => {
//     containerList.innerHTML += `
//       <li class="list-to-do">
//         <input type="checkbox" class="to-do">
//         ${n.description}
//         <i class="fa-solid fa-trash"></i>
//       </li>
//       <hr class="line">
//     `;
//   })
// };

// const addListItem = () => {
//   const containerList = document.getElementById('list-container');
//   for (const listItem of dataToDoList) {
//     containerList.innerHTML += `
//       <li class="list-to-do">
//         <input type="checkbox" class="to-do">
//         ${dataToDoList}
//         <i class="fa-solid fa-trash"></i>
//       </li>
//       <hr class="line">
//     `;
//   }
// };