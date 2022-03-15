// Problem: 01 Start;
/*
let bananaPrice = 5;
let breadPrice = 10;

let breakfastPrice = bananaPrice + breadPrice;

console.log(breakfastPrice);
*/

// Problem: 01 End;

// Problem: 02 Start;
/*
// Problem solving for showing messages in the morning, afternoon, evening and night according to the time.

let time = 4;
if (time >= 4 && time < 12) {
  console.log(`Good morning.`);
} else if (time >= 12 && time <= 14) {
  console.log(`Good noon.`);
} else if (time >= 15 && time <= 17) {
  console.log(`Good afternoon.`);
}else if (time >= 18 && time <= 19) {
  console.log(`Good evening.`);
} else {
  console.log(`Good night`);
}
*/
// Problem: 02 End;

// Problem: 03 Start;
// Class 8 , GPA result by mark-sheet number.
/*
let mark = 32;
if (mark >= 80) {
  console.log(`A+`);
} else if (mark <= 79 && mark > 69) {
  console.log(`A`);
} else if (mark <= 69 && mark > 59) {
  console.log(`A-`);
} else if (mark <= 59 && mark > 49) {
  console.log(`B`);
} else if (mark <= 49 && mark >= 33) {
  console.log(`D`);
} else {
   console.log(`Fail`);
}
// Problem: 03 End;


// Problem: 04 Start;

// find odd number and even number among 1 to 50
// for loop
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i + ` even number`);
  } else {
    console.log(i + ` odd number`);
  }
}
c
// while loop
let i = 50;
while (i >= 1) {
  if (i % 2 == 0) {
    console.log(i + ` Even Number`);
  } else {
    console.log(i + ` Odd Number`);
  }
  i--;
}
// Problem: 04 End;
*/

// Problem: 05 Start;

// coffeePrice 100 টাকার কম হলে coffee খাবো না হলে চা খাবো ।

/*

let coffeePrice = 105;

if (coffeePrice < 100) {
  console.log(`I'll drink a cup of Coffee.`);
} else {
  console.log(`I have to drink a cup of Tea`);
}

*/
// Problem: 05 End;

// Problem: 06 Start;

// পকেটে 5000 টাকার বেশি বা সমান থাকলে Cox's Bazar যাবো আর না থাকলে আশুলিয়া যাবো ।

/*

let pocketMoney = 6700;

if (pocketMoney >= 5000) {
  console.log(`I'll visit "Cox's Bazar"`);
} else {
  console.log(`I'll visit Asulia`);
}

*/
// Problem: 06 End;

// Problem: 07 Start;

// iceCreamPrice 50 টাকার কম হলে এবং গরম লাগলে (isHot) ice-Cream খাবো , নচেৎ filtered water খাবো ।

/*

let iceCreamPrice = 40;
isHot = false;

if ((iceCreamPrice < 50) && (isHot = true)) {
  console.log(`I'll buy a "ice Cream"`);
} else {
  console.log(`I've to drink filtered water.`);
}

*/
// Problem: 07 End;

// Problem: 08 Start;

// পরিবারের সদস্যদের নাম নিয়ে একটা array declear করো ।
/*

let family = [`Mustafa Kamal`, `Latifa Helen`,`Mithel Hasan Hira`, `Mehedi Hasan Himel`, `Sabed Ali`, `Ayesha` ];

console.log(family);
*/

// Problem: 08 End;

// Problem: 09 Start;

// পরিবারের সদস্য সংখ্যা কতো ? array এর 2nd position এ কে আছে ?
/*
let family = [
  `Mustafa Kamal`,
  `Latifa Helen`,
  `Mithel Hasan Hira`,
  `Mehedi Hasan Himel`,
  `Sabed Ali`,
  `Ayesha`,
];

let memberOfFamily = family.length;
console.log( `Member of family ` + memberOfFamily);

let position2nd = family[2];
console.log( `2nd position of this array ` + position2nd);
*/
// Problem: 09 End;

// Problem: 10 Start;

// কলি কে বিয়ে করেছি , এখন কলি আমার পরিবারের সদস্য তাই তার নাম family array তে যোগ করতে হবে ।
/* 
let family = [
  `Mustafa Kamal`,
  `Latifa Helen`,
  `Mithel Hasan Hira`,
  `Mehedi Hasan Himel`,
  `Sabed Ali`,
  `Ayesha`,
];

let newMember = family.push(`Koli`) 
console.log(family);
*/
// Problem: 10 End;

// Problem: 11 Start;

// একশবার লিখতে হবে " আমি কলম দিয়ে কাউকে খোঁচা দিবো না " এই লাইন 100  বার print হওয়ার program , while loop দিয়ে লিখতে হবে ।
/*
let poke = 0;

while (poke <100) {
  console.log(`" আমি কলম দিয়ে কাউকে খোঁচা দিবো না "`);
  poke++; 
}
*/
// Problem: 11 End;

// Problem: 12 Start;

// " ঈদ মোবারক " কথা টা 14 জনকে SMS করে পাঠাতে হবে সেই program:
/*
let sms = 1
while (sms <=14) {
  console.log(sms + `" ঈদ মোবারক "`);
  sms++;
}
*/
// Problem: 12 End;

// Problem: 13 Start;

// For loop দিয়ে  1 থেকে 20 পর্যন্ত সবগুলা সংখ্যার output হিসেবে দেখাও ।
/* 
for (let index = 1; index <=20 ; index++) {
  console.log(index);
}
*/
// Problem: 13 End;

// Problem: 14 Start;

// For loop দিয়ে  36 থেকে 63 পর্যন্ত সবগুলা সংখ্যার output হিসেবে দেখাও ।
/*
for (let index = 36; index <= 63; index++) {
  console.log(index);
}
*/
// Problem: 14 End;

// Problem: 15 Start;
// 1 থেকে 100 পর্যন্ত সব সংখ্যার যোগ করার জন্য একটা for loop লেখো ।
/*
let sum = 0;
for (let index = 1; index <=100; index++) {
  sum = sum + index;
  console.log(sum);
}
*/
// Problem: 15 End;

// Problem: 16 Start;
//  friends দের নিয়ে friends নামে একটা array লেখ । তারপর এক এক করে সব friend এর কাছে টাকা ধার চাওয়ার জন্য একটা for loop লেখ ।
/* 
let friends = [`amina`, `jamina`, `karina`, `Sharlin`];
for (let index = 0; index < friends.length; index++) {
  let aFriend = friends[index];
  console.log(aFriend, `Taka Lagbe`);
}
*/
// Problem: 16 End;

// Problem: 17 Start;
// 5 টি বই এর নাম লিখে সেখান থেকে 5 টি বই এর নাম নিয়ে books নাম দিয়ে একটা array লেখো এখন একটা for loop দিয়ে books নামক array এর সব বইয়ের নাম output হিসেবে দেখাও ।
/*
let books = [`হাতে কলমে JavaScript`, `হাবলুদের জন্য প্রোগ্রামিং`, `প্রোগ্রামিংয়ে বলদ টু বস `, `প্রোগ্রামিং এর চৌদ্দ গুষ্ঠি `, `Reacherge your down bettery`]; 

for (let index = 0; index < books.length; index++) {
  let singleBook = books[index]
  console.log( `No`, index + 1, singleBook);
  
}
*/
// Problem: 17 End;

// Problem: 18 Start;
// দুইটা সংখ্যা গুন করার একটি function লেখ । সেই function দুইটা input নাও , তারপর সেই দুইটা input গুন করে গুণফল একটা variable এ রাখো । শেষে গুণফলটা return করো ।
/*
let firstNumber;
let secondNumber;

function gunFol(firstNumber, secondNumber) {
  let gunFol = firstNumber * secondNumber;
  return gunFol;
}

let result = gunFol(50, 100);

console.log(result);
*/
// Problem: 18 End;

// Problem: 19 Start;

// 3 টি সংখ্যা যোগ করার একটি function লেখ ।
/*
let firstNumber;
let secondNumber;
let thirdNumber; 

function gunFol(firstNumber, secondNumber,thirdNumber) {
  let gunFol = firstNumber + secondNumber + thirdNumber;
  return gunFol;
}

let result = gunFol(50, 100, 200);

console.log(result);
*/
// Problem: 19 End;

// Problem: 20 Start;

// seconds থেকে hours convert function.
/* 
function secondsToHours(seconds) {
  let minutes = seconds / 60;
  let hours = minutes / 60;
  return hours;
}

console.log(secondsToHours(7200));
*/
// Problem: 20 End;

// Problem: 21 Start;

// feet to goj function. 3 foot = 1 goj.
/* 
function kotoGoj(inputFeet) {
  let goj = inputFeet / 3;
  return goj
}

console.log(kotoGoj(6));
*/
// Problem: 21 End;

// Problem: 22 Start;

// Goj to mile. 1760 goj = 1 mile.
/*
function kotoMile(kotoGoj) {
  let mile = kotoGoj / 1760;
  return mile;
}

console.log(kotoMile(12000));
*/
// Problem: 22 End;

// Problem: 23 Start;

// feet to mile.

/* 
Practice Start

let averestHeight = 29029;

// 3 feet =  1 goj; 1760 goj = 1 mile;

let mile1 = 1760 * 3;
console.log(`1 mile = ` + mile1 + ` feet`);
let averestHeightInFeet = averestHeight / mile1;
console.log(averestHeightInFeet);

Practice End
*/
/*
function kotoGoj(inputFeet) {
  let goj = inputFeet / 3;
  return goj;
}

function kotoMile(kotoGoj) {
  let mile = kotoGoj / 1760;
  return mile;
}

let feet = 29029;

let goj = kotoGoj(feet);

let avarestMile = kotoMile(goj)

console.log(avarestMile);
*/
// Problem: 23 End;


// Problem: 24 Start;

// Feet to Mile
/*
function feetToMile(feet){
var goj = feet / 3;
var mile = goj / 1760;
return mile;
}
console.log(feetToMile(29029));
*/
// result: 5.497916666666667
// Problem: 24 End;


// Problem: 25 Start;



// Problem: 25 End;
