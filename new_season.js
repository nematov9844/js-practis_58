// Berilgan sonlar massividan juft sonlarni ajratib oling:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Natija: [2, 4, 6, 8, 10]

let new_numbers = numbers.filter((item) => item % 2 == 0);
// console.log(new_numbers);

// Ismlar massividan 5 ta harfdan uzun bo'lgan ismlarni ajratib oling:

const names = ["Ali", "Vali", "Gani", "Salim", "Karima", "Zuhra"];
// Natija: ['Salim', 'Karima']

let new_names = names.filter((item) => item === "Salim" || item === "Karima");
// console.log(new_names);

// Ob'ektlar massividan yoshi 25 dan katta bo'lganlarni ajratib oling:
const peoples = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 30 },
  { name: "Gani", age: 25 },
  { name: "Salim", age: 35 },
];
// Natija: [{name: 'Vali', age: 30}, {name: 'Salim', age: 35}]

// So'zlar massividan 'a' harfi bilan boshlanadigan so'zlarni ajratib oling:

let new_peoples = peoples.filter((item) => item.age > 25);
// console.log(new_peoples);

const words = ["apple", "banana", "avocado", "grape", "apricot", "blueberry"];
// Natija: ['apple', 'avocado', 'apricot']

let new_words = words.filter((item) => item[0].includes("a"));
// console.log(new_words);

// Mahsulotlar massividan narxi 50000 so'mdan yuqori bo'lgan mahsulotlarni ajratib oling:

const products = [
  { name: "Olma", price: 10000 },
  { name: "Anor", price: 20000 },
  { name: "Uzum", price: 40000 },
  { name: "Shaftoli", price: 60000 },
  { name: "Mandarin", price: 80000 },
];
// Natija: [{name: 'Shaftoli', price: 60000}, {name: 'Mandarin', price: 80000}]
let new_products = products.filter((item) => item.price > 50000);
// console.log(new_products)

// Sonlar massivining har bir elementini 2 ga ko'paytiring:

const numbers1 = [1, 2, 3, 4, 5];
// Kutilgan natija: [2, 4, 6, 8, 10]

let new_numbers1 = numbers1.map((item) => item * 2);
// console.log(new_numbers1)

// Ismlar massividagi har bir ismning uzunligini hisoblang:

const names1 = ["Ali", "Vali", "Gani", "Salim", "Karima"];
// Kutilgan natija: [3, 4, 4, 5, 6]

let new_names1 = names1.map((item) => item.length);

// console.log(new_names1)

// Ob'ektlar massividan faqat ism va yoshni ajratib oling:

const people1 = [
  { id: 1, name: "Ali", age: 20, city: "Tashkent" },
  { id: 2, name: "Vali", age: 25, city: "Samarkand" },
  { id: 3, name: "Gani", age: 30, city: "Bukhara" },
];
// Kutilgan natija: [{name: "Ali", age: 20}, {name: "Vali", age: 25}, {name: "Gani", age: 30}]

// let new_people1 = people1.map(item => item.);
// console.log(new_people1);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// setTimeout(() => console.log("salom"), 5000);

setInterval(() => {
  let date = new Date();
  document.querySelector(".time").innerHTML = date.toLocaleTimeString();
  document.querySelector(".date").innerHTML = date.toDateString();
  document.querySelector(".date2").innerHTML = date.toDateString();
}, 1000);

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter:function () {return 2 * Math.PI * this.radius}
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };
let arr = [
  "https://imtihon-2-flame.vercel.app/",
  "https://homework-29-nine.vercel.app/",
  "https://project-mini-js.vercel.app/",
  "https://homework-27.vercel.app/pages/customer.html",
  "https://homework-27.vercel.app/pages/resurs.html",
  "https://homework-31.vercel.app/",
  "https://homework-31.vercel.app/pages/orbitans.html",
  "https://homework-31.vercel.app/pages/artist-pages.html",
];
let count = 0;
let links = document.querySelector(".link");
Object.prototype.soat = function () {
  setInterval(() => {
    let count = Math.floor(Math.random() * 8);
    links.src = `${arr[count]}`;
    console.log(links.src);
  }, 4000);
};

console.log(soat());
// console.log(this);

// console.log();
