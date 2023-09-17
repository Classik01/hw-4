// 1

let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// 2

let a = 1;
while (a < 6) {
    console.log(a);
    a++
}

// 3

let b = 7;
while (b < 23) {
    console.log(b);
    b++;
}

// 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// 5

let k = 1000;
let p = 0;
while (k >= 50) {
    k = k / 2;
    p++;
}
console.log(k);
console.log(p);

// 6

let f = 5;
for (let d = f; d <= 31; d += 7 ) {
    console.log(`Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.`);
}
