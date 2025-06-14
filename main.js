Task 1

let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");

son1 = Number(son1);
son2 = Number(son2);

if (son1 > son2) {
    console.log("Birinchi son katta:", son1);
} else if (son1 < son2) {
    console.log("Ikkinchi son katta:", son2);
} else {
    console.log("Ikkala son teng.");
}

Task 2

let son = -5;

if (son > 0) {
    console.log("Bu son musbat.");
} else if (son < 0) {
    console.log("Bu son manfiy.");
} else {
    console.log("Bu son nolga teng.");
}

Task 3

let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");
let amal = prompt("Amalni kiriting (+, -, *, /):");

son1 = Number(son1);
son2 = Number(son2);

switch (amal) {
    case "+":
        console.log("Natija:", son1 + son2);
        break;
    case "-":
        console.log("Natija:", son1 - son2);
        break;
    case "*":
        console.log("Natija:", son1 * son2);
        break;
    case "/":
        if (son2 !== 0) {
            console.log("Natija:", son1 / son2);
        } else {
            console.log("Xatolik: 0 ga bo‘lish mumkin emas!");
        }
        break;
    default:
        console.log("Noto‘g‘ri amal kiritildi.");
}

Task 4

let son = prompt("Faktorialini hisoblash uchun son kiriting:");
son = Number(son);

let faktorial = 1;
let i = 1;

if (son < 0) {
    console.log("Manfiy sonlarning faktoriali mavjud emas.");
} else {
    while (i <= son) {
        faktorial *= i;
        i++;
    }
    console.log(son + " sonining faktoriali: " + faktorial);
}

Task 5

let n = prompt("Nechta Fibonacci soni kerak?");
n = Number(n);

let a = 0, b = 1;

console.log("Fibonacci ketma-ketligi:");
for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

Task 6

let son = prompt("Son kiriting:");
son = Number(son);

if (son % 2 === 0) {
    console.log(son + " — juft son.");
} else {
    console.log(son + " — toq son.");
}

Task 7

let son = prompt("Uch xonali son kiriting:");
son = Number(son);

let raqamlar = son.toString().split('');

let kubYigindi = 0;

for (let i = 0; i < raqamlar.length; i++) {
    kubYigindi += Math.pow(Number(raqamlar[i]), 3);
}

if (kubYigindi === son) {
    console.log(son + " — Armstrong soni.");
} else {
    console.log(son + " — Armstrong soni emas.");
}

Task 8

let matn = prompt("So'z kiriting:");
 
let teskariMatn = matn.split('').reverse().join('');

if (matn === teskariMatn) {
    console.log(matn + " — palindrom.");
} else {
    console.log(matn + " — palindrom emas.");
}

Task 9

let son = prompt("Son kiriting:");

son = Number(son);

console.log(son + " sonining ko'paytma jadvali:");

for (let i = 1; i <= 10; i++) {
    console.log(son + " * " + i + " = " + (son * i));
}

Task 10

let arr = [23, 5, 67, 1, 34];

let engKichik = arr[0];
let engKatta = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < engKichik) {
        engKichik = arr[i];
    }
    if (arr[i] > engKatta) {
        engKatta = arr[i];
    }
}

console.log("Eng kichik element:", engKichik);
console.log("Eng katta element:", engKatta);

Task 11

let jumla = prompt("Gap yoki so‘z kiriting:");

let sozlar = jumla.split(' ');

let engUzunSoz = '';
let maxUzunlik = 0;

for (let i = 0; i < sozlar.length; i++) {
    if (sozlar[i].length > maxUzunlik) {
        engUzunSoz = sozlar[i];
        maxUzunlik = sozlar[i].length;
    }
}

console.log("Eng uzun so'z:", engUzunSoz);

Task 12

let ishSoatlari = prompt("Ish soatlaringizni kiriting:");
let soatlikHaq = prompt("Soatlik ish haqi (dollarda) ni kiriting:");

ishSoatlari = Number(ishSoatlari);
soatlikHaq = Number(soatlikHaq);

let asosiyHaqq = 0;
let ortiqchaHaqq = 0;
let umumiyHaqq = 0;

if (ishSoatlari <= 40) {
    asosiyHaqq = ishSoatlari * soatlikHaq;
    umumiyHaqq = asosiyHaqq;
} else {
    asosiyHaqq = 40 * soatlikHaq;
    ortiqchaHaqq = (ishSoatlari - 40) * (soatlikHaq * 1.5);
    umumiyHaqq = asosiyHaqq + ortiqchaHaqq;
}

console.log("Asosiy haq: " + asosiyHaqq + " so'm");
console.log("Ortiqcha haq: " + ortiqchaHaqq + " so'm");
console.log("Umumiy haq: " + umumiyHaqq + " so'm");

Task 13

let arr = [4, 7, 10, 15, 20];

let yigindi = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        yigindi += arr[i];
    }
}

console.log("Juft sonlarning yig'indisi:", yigindi);

Task 14

let arr = prompt("Massivni kiriting (vergul bilan ajratilgan raqamlar):").split(',').map(Number);

let teskariArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    teskariArr.push(arr[i]);
}

console.log("Massiv teskari tartibda (for sikli bilan):", teskariArr);

Task 15

let randomSon = Math.floor(Math.random() * 100) + 1;
let foydalanuvchiSon;
let urinishlar = 0;

do {
    foydalanuvchiSon = prompt("1 dan 100 gacha bo'lgan sonni kiriting:");

    foydalanuvchiSon = Number(foydalanuvchiSon);
    urinishlar++;

    if (foydalanuvchiSon > randomSon) {
        console.log("Kichikroq son kiriting.");
    } else if (foydalanuvchiSon < randomSon) {
        console.log("Kattaroq son kiriting.");
    } else {
        console.log("Tabriklayman! Siz " + urinishlar + " urinishda to'g'ri topdingiz.");
    }
} while (foydalanuvchiSon !== randomSon);

