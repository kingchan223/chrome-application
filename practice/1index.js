//string
/*const a = "Leechanyoung";
console.log(a);  */

//boolean
/*const w = true;
console.log(w);
//위는 불리안 트루 아래는 스트링 트루
const t = "true";
console.log(t);*/

/*array 방식*/
/*const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  55,
  false,
  34.123,
];
console.log(daysOfWeek[2]);*/

/*object방식*/
/*const me = { name: "lee", age: "24", city: "gunpo" };
me.gender = "male"; //젠더 추가
console.log(me.gender);
console.log(me);

//array+object
const leeInfo = {
  name: "lee",
  city: "gunpo",
  favColor: "grey",
  age: 24,
  favMovie: ["Leon", "Prorida project", "carol"],
  birday: "Feb,23",
};

console.log(leeInfo.favMovie);*/

/*function sayHello(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}
sayHello("lee", 15);*/

/*function sayHello(name, age) {
  return `hello ${name} you are ${age} years old`;
}
const greetlee = sayHello("lee", 15);
console.log(greetlee);*/

/*const cal = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const s = cal.plus(5, 5);
const m = cal.minus(5, 5);
const d = cal.divide(5, 5);
const p = cal.power(5, 5);
console.log(s);
console.log(m);
console.log(d);
console.log(p);*/

//const title = document.querySelectorAll(".title");
//console.log(title);
//title.innerHTML = "hohohoho";
//title.style.color = "green";
//console.dir(title);

/*function handleResize() {
    console.log("i hav been resized");
}

window.addEventListener("resize", handleResize);*/
/*const title = document.querySelector(".title");

function handleclick() {
  if ((title.style.color === "black" && "222" === "222"){
    title.style.color = "white";
  } else {
    title.style.color = "black";
  }
}

title.addEventListener("click", handleclick);*/

//const age = prompt("how old are you");
//console.log(age);

/*const title = document.querySelector(".title");

const BASE_COLOR = "green";
const OTHER_COLOR = "yellow";

function handleclick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleclick);
}
init();*/

/*const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //const hasClass = title.classList.contains(CLICKED_CLASS);
  //if (!hasClass) {
  //  title.classList.add(CLICKED_CLASS);
  //} else {
  // title.classList.remove(CLICKED_CLASS);
  //}
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
