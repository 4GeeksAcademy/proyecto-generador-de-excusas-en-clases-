/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // let generadorExcusas = () => {

  // declaracion de Array

  let subject = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let possetion = ["my homework", "the keys", "the car"];
  let where = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // indice aletorios de los arrays(formula matematica randon)

  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  // LET espacio de memorio generado

  // sin espacio de memoria
  // subject[Math.floor(Math.random() * subject.length)];
  // action[Math.floor(Math.random() * action.length)];
  // possetion[Math.floor(Math.random() * possetion.length)];
  // where[Math.floor(Math.random() * where.length)];

  // el espeacio de memoria esta creado pero no esta siendo utilizado cuando no esta encendido el array

  document.getElementById("excuse").innerHTML =
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex];
};

// return (
//   subject[subjIndex] +
//   " " +
//   action[actionIndex] +
//   " " +
//   possetion[possetionIndex] +
//   " " +
//   where[whereIndex]
// };
