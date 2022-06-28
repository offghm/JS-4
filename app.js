const board = document.querySelector("#board");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#66fb77",
  "#428ec0",
  "#7cbe32",
  "#4d866d",
  "#d743f2",
  "#8f3858",
  "#ba8fdc",
  "#d4aa68",
]; // [] обозначение массива
const SQUARES_NAMBER = 1000; //большими буквами поменячется коснтакта, неизменное, это хороший тон

for (let i = 0; i < SQUARES_NAMBER; i++) {
  // let тк переменная будет меняться
  const square = document.createElement("div"); // создает елемент
  square.classList.add("square"); //добавляет класс

  square.addEventListener("mouseover", () => setColor(square)); // слшатель который вызывается при наведение мыши функцию

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square); //вставляет квадрат в бород
}

function setColor(element) {
  const color = getRandomCollor(); // присваиваем колору функцию рандомного цвета, и назначем ниже
  element.style.backgroundColor = color; // цвет красный при наведение был, делаем что бы был рандом
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; // работает со стайлом css, что бы добавить такой же цвет что и выше надо поставить обратные кавчки( позволяет передавать динамическое значение)
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d"; // уберается цвет
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomCollor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
// math Большой обьякт с функциям для работы с математийкой
// random выдает рандомную строчку
// чтобы обратиться к индексу масива * colors.length; умножаем на длинну масива
// math.floor что бы было целвм числом, округление в меньшую сторону
// return colors[index] возвращаю масив колорс и динамической индекс который получили

// https://www.youtube.com/watch?v=gX3Ev1ATxfI улучшение
