// // Bu yerda kodingizning vazifasini tushuntiring

// // Agar tsikl kerak bo'lsa, quyidagi formatlardan foydalaning:
// for (let i = 0; i < shartingiz; i++) {
//     // Tsikl ichidagi kodingizni yozing
// }

// // Yoki
// let i = 0;
// while (shartingiz) {
//     // Tsikl ichidagi kodingizni yozing
//     i++;
// }

// // Yoki
// do {
//     // Tsikl ichidagi kodingizni yozing
// } while (shartingiz);

// // Agar funksiya kerak bo'lsa, quyidagi formatni ishlatishingiz mumkin:
// function funktsiyaNomi(parametrlar) {
//     // Funksiya ichidagi kodingizni yozing
//     return natija;
// }

// Ob'ekt yaratish uchun:
const obyekt = {
  userName: "Jeki",
  mailName: "jeki2004114r@gmail.com",
  password: "JEKI_707",
};

// console.log(obyekt.password);

// // Agar array kerak bo'lsa, quyidagi formatni ishlatishingiz mumkin:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array.slice(array.length-1));

// // Massiv yaratish uchun:
// const massiv = [element1, element2, ...];

// // Agar arifmetik amallar kerak bo'lsa, quyidagi formatni ishlatishingiz mumkin:
// const natija = amal1 + amal2 - amal3 * amal4 / amal5;

// // Agar shart kerak bo'lsa, quyidagi formatni ishlatishingiz mumkin:
// if (shart1) {
//     // Shart bajarilganda bajariluvchi kod
// } else if (shart2) {
//     // Shart bajarilganda bajariluvchi kod
// } else {
//     // Hech qanday shart bajarilmaganda bajariluvchi kod
// }

// // Agar takrorlanuvchi kod bo'lsa, quyidagi formatni ishlatishingiz mumkin:
// for (let i = 0; i < massiv.length; i++) {
//     // Massiv elementlari bilan ishlash
// }

// // Yoki
// massiv.forEach(function(element) {
//     // Massiv elementlari bilan ishlash
// });

// let son = prompt("son kiriting")

// if (son == 5) {
//     alert("alo")
// } else if(son == 4){
//     alert("yaxshi")
// }else if (son == 3) {
//     alert("yomon")
// }else{
//     alert("🤢🤢🦶🦶")
// }

let ismlar = ["anvar", "sardor", "timur", "ozod"];
let newIsmlar = [];
ismlar.forEach(function (ism) {
  newIsmlar.push(
    ism.charAt().toUpperCase() + ism.slice(1).toLocaleLowerCase() + "bek"
  );
});
// console.log(newIsmlar)

// Masala 1: Berilgan sonlar massivining har bir elementi uchun uning kvadratini hisoblovchi funksiyani yozing va natijani yangi massivga joylang.

const sonlar = [1, 2, 3, 4, 5];
// Natija: [1, 4, 9, 16, 25]

sonlar.forEach(function (son) {
  // console.log(son * son);
});

// Masala 2: Berilgan matnlar massividan faqat
// 5 ta harfdan iborat bo'lgan matnlarni ajratib
// oling va natijani yangi massivga joylang.

const matnlar = ["Salom", "Hayr", "Bahor", "Yomgir", "Quyosh"];
// Natija: ["Salom", "Hayr"]

matnlar.forEach(function (matn) {
  if (matn.length == 5) {
    // console.log(matn);
  }
});

// Masala 3: Berilgan ob'ektlar massividagi har
//bir ob'ektning "yosh" xossasini 1 ga oshiring va
//natijani yangi massivga joylang.

const odamlar = [
  { ism: "Alisher", yosh: 25 },
  { ism: "Zarina", yosh: 30 },
  { ism: "Bobur", yosh: 20 },
];
// Natija: [
//   { ism: "Alisher", yosh: 26 },
//   { ism: "Zarina", yosh: 31 },
//   { ism: "Bobur", yosh: 21 }
// ]

odamlar.forEach(function (odam) {
  odam.yosh++;
  // console.log(odam);
});

// Masala 4: Berilgan matnlar massividagi har bir matnni
//teskari tartibda yozing va natijani yangi massivga joylang.

const matnlar2 = ["Hello", "World", "JavaScript"];
// Natija: ["olleH", "dlroW", "tpircsavaJ"]

matnlar2.forEach(function (matn) {
  // console.log(matn.slice(0).split("").reverse().join(""));
});

// Masala 5: Berilgan sonlar massividagi toq sonlarni ajratib oling va natijani yangi massivga joylang.

const sonlar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Natija: [1, 3, 5, 7, 9]

const newToqSonlar = [];

sonlar2.forEach(function (son) {
  if (son % 2 !== 0) {
    newToqSonlar.push(son);
  }
});
// console.log(newToqSonlar);

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

const merge = function (...nums) {
  let numss = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      numss.push(nums[i][j]);
      numss.sort();
    }
  }
  return numss;
};
// console.log(merge(nums1, nums2));

// Kirish: nums1 = [1], m = 1, nums2 = [], n = 0
//  Chiqish: [1]
//  Izoh: Biz birlashtirayotgan massivlar [1] va [].
// Birlashtirish natijasi [1].

let num1 = [1];
let num2 = 1;

function editNum(...array) {
  let element = [];
  let numbers;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "object") {
      for (let n = 0; n < array[i].length; n++) {
        numbers = array[i][n];
      }
    } else if (!element.includes(array[i])) {
      if (numbers !== array[i]) {
        element.push(array[i]);
      }
    }
  }
  element.push(numbers);
  console.log(numbers);
  return element;
}
// console.log(editNum(num1, num2));

// ixtiyoriy array yarating va uni ichidagi eng katta sonni toping

let arr = [2, 5, 9, 7, 6, 5, 3, 5];

function bigNumber(num) {
  let newArr = [0];
  for (let i = 0; i < num.length; i++) {
    if (newArr < num[i]) {
      newArr = num[i];
    }
  }
  return newArr;
}
// console.log(bigNumber(arr));

let arrr = [0];
arr.forEach(function (i) {
  if (arrr < i) {
    arrr = i;
  }
});
// console.log(arrr);

let arrayrevers = [];
arr.forEach(function (i) {
  arrayrevers.unshift(i);
});
// console.log(arrayrevers);

function revernum(num) {
  let newArr = [];
  for (let i = num.length - 1; i >= 0; i--) {
    newArr.push(num[i]);
  }
  return newArr;
}
// console.log(revernum(arr));


// Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:



let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dublicate(num){
  let newArr = [];
  for (let i = 0; i < num.length; i++) {
    if(!newArr.includes(num[i])){
      newArr.push(num[i])
    }
  }
  return newArr;
}
console.log(dublicate(arrs));

let aris =[]

arrs.forEach(function (i) {
  if(!aris.includes(i)){
    aris.push(i)
  }
})
console.log(aris)
