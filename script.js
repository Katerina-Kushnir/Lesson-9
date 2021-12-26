//task 1
/*let i = 3;
while (i) {
    alert(i--); //выведет сначала 3, затем 2 и затем 1
}

//task 2
let a, b, c;
a=2;
b=3;
c=4;
if (a < b && b < c) {
    a *=2;
    b *=2;
    c *=2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
console.log(a, b, c);

//task 3
let a, b, c;
a=5;
b=3;
c=4;
if (a < b && b < c || a > b && b > c) {
    a *=2;
    b *=2;
    c *=2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
console.log(a, b, c);

//task 4
let A, B, C;
A = 2;
B = 6;
C = 4;
if ((B - A) > (C - A)) {
    console.log("К координате точки А ближе точка С и имеет расстояние", "-", C-A);
} else {
    console.log("К координате точки А ближе точка B и имеет расстояние", "-", B-A);
}

//task 5
let ox = prompt("Введите координату точки по оси Х");
let oy = prompt("Введите координату точки по оси Y");

if (ox == 0 && oy == 0) {
    alert(0);
} else if (ox > 0 && oy == 0 || ox < 0 && oy == 0) {
    alert(1)
} else if (oy > 0 && ox == 0 || oy < 0 && ox == 0) {
    alert(2);
} else {
    alert(3);
}

//task 6
let ox = prompt("Введите координату точки по оси Х, не равную 0");
let oy = prompt("Введите координату точки по оси Y, не равную 0");

if (ox > 0 && oy > 0) {
    alert("Координата вашей точки в I координатной четверти");
} else if (ox < 0 && oy > 0) {
    alert("Координата вашей точки в II координатной четверти");
} else if (ox < 0 && oy < 0) {
    alert("Координата вашей точки в III координатной четверти");
} else {
    alert("Координата вашей точки в IV координатной четверти");
}

//task 7
let x1, x2, x3, x4, y1, y2, y3, y4;
x1 = prompt("Введите координату первой вершины по оси Х");
y1 = prompt("Введите координату первой вершины по оси Y");
x2 = prompt("Введите координату второй вершины по оси Х");
y2 = prompt("Введите координату второй вершины по оси Y");
x3 = prompt("Введите координату третьей вершины по оси Х");
y3 = prompt("Введите координату третьей вершины по оси Y");

if (x1 == x2) {
    x4 = x3;
} else if (x1 == x3) {
    x4 = x2;
} else {
    x4 = x1;
}
alert (`Координата четвертой вершины по оси Х - ${x4}`);

if (y1 == y2) {
    y4 = y3;
} else if (y1 == y3) {
    y4 = y2;
} else {
    y4 = y1;
}
alert (`Координата четвертой вершины по оси Y - ${y4}`);


//task 8
let year = prompt("Введите любой год");

if (year % 4 != 0) {
    alert("В этом году 365 дней");
} else if (year % 100 == 0 && year % 400 != 0) {
    alert("В этом году 365 дней");
} else {
    alert("В этом году 366 дней");
}


//task 9
let number = prompt("Введите любое целое число");
if (number == 0) {
    alert("Вы ввели число 0");
} else if (number > 0 && number % 2 == 0) {
    alert("Вы ввели положительное четное число");
} else if (number > 0 && number % 2 != 0) {
    alert("Вы ввели положительное нечетное число");
} else if (number < 0 && number % 2 == 0) {
    alert("Вы ввели отрицательное четное число");
} else {
    alert("Вы ввели отрицательное нечетное число");
} 


//task 10
let number = prompt("Введите любое целое число от 1 до 999");
if (number < 10 && number > 0 && number % 2 != 0) {
    alert("Вы ввели нечетное однозначное число");
} else if (number < 10 && number > 0 && number % 2 == 0) {
    alert("Вы ввели четное однозначное число");
} else if (number >= 10 && number < 100 && number % 2 != 0) {
    alert("Вы ввели нечетное двузначное число");
} else if (number >= 10 && number < 100 && number % 2 == 0) {
    alert("Вы ввели четное двузначное число");
} else if (number >= 100 && number < 1000 && number % 2 != 0) {
    alert("Вы ввели нечетное трехзначное число");
} else if (number >= 100 && number < 1000 && number % 2 == 0) {
    alert("Вы ввели четное трехзначное число");
} else {
    alert("Вы ввели число, которое не входит в указанный диапазон")
}


//task 11
let i = 0; 
while (++i < 5) alert( i ); //выведет 1, 2, 3, 4

let i = 0; 
while (i++ < 5) alert( i ); //выведет 1, 2, 3, 4, 5


//task 12
for (let i = 0; i < 5; i++) alert( i ); //выведет 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); //выведет 0, 1, 2, 3, 4


//task 13
for (let i = 2; i <= 10; i++) {
    alert(i);
}

//task 14
for (let i = 0; i < 3; i++) {   
    alert(`number ${i}!`); 
}
//заменяем  for на while
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}


//task 15
let number;
do {
    number = prompt ("Введите число больше 100");
} while (number <= 100 && number);


//task 16
let n = 20
next:
for (let i = 2; i <= n;  i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue next;
    }
    alert(i);
}


//task 17
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

c = (Number(a) + Number(b)) / 2;
alert(`Среднее арифметическое введенных чисел равно - ${c}`);


//task 18
let a = prompt("Введите любое число");

b = Math.pow(a, 2);
alert(`Kвадрат введённого числа - ${b}`);


//task 19 (ЕЩЕ НЕ РЕШЕНО!!!!!!!!)
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let c = prompt("Введите третье число");
let max;
let min;

if (Number(a) > Number(b) && Number(a) > Number(c)) {
    max = a;
} 
if (Number(b) > Number(a) && Number(b) > Number(c)) {
    max = b; 
} 
if (Number(c) > Number(a) && Number(c) > Number(b)) {
    max = c; 
} 

if (Number(a) < Number(b) && Number(a) < Number(c)) {
    min = a;
} 
if (Number(b) < Number(a) && Number(b) < Number(c)) {
    min = b;
} 
if (Number(c) < Number(a) && Number(c) < Number(b)) {
    min = c;
} 

let rezult = (Number(max) - Number(min));
alert(rezult);


//task 20
let number = prompt ("Введите число");
if (number % 2 == 0) {
    alert("Вы ввыели четное число");
} else {
    alert("Вы ввели нечетное число");
}


//task 21
let number = prompt("Введите любое число до 100");
let sum;

if (number < 10 ) {
    alert("1 цифрa");
} else {
    alert("2 цифры");
    sum = Math.floor(number/10) + (number%10);
    alert(sum);
}


//task 22
let rezult;
let number = prompt("Введите число, которое нужно перевести");
let key = prompt("Введить 1 чтоб перевести дюймы в сантиметры или 2 чтоб перевести сантиметры в дюймы!");
let inch = number * 2.54;
let centimeter = number * 0.3937;

switch (key) {
    case '1':
        alert(inch);
        break;
    case '2':
        alert(centimeter);
        break;
    default:
        alert("Вы ввели неверное значение");
}


//task 23
let number = prompt("Введите любое трехзначное число");
let rezult;
let a, b, c;
a = Math.floor(number/100);
b = Math.floor((number/10) % 10);
c = number % 10;

if (number % 2 == 0) {
    rezult = a + b + c;
    alert(rezult);
} else {
    rezult = a * b * c;
    alert(rezult);
}


//task 24
let a = prompt("Введите сторону А треугольника");
let b = prompt("Введите сторону B треугольника");
let c = prompt("Введите сторону C треугольника");


if (Number(b) + Number(c) > Number(a) && 
    Number(a) + Number(c) > Number(b) && 
    Number(b) + Number(a) > Number(c)) {
        alert("Такой треугольник может существовать");
} else {
    alert("Такой треугольник не может существовать");
}


//task 25
let ax = 4;
let ay = 9;
let radius = 10;

let a = Math.sqrt(ax**2 + ay**2);

if (a <= radius) {
    alert("Точка принадлежит кругу");
} else {
    alert ("Точка НЕ принадлежит кругу");
}


//task 26
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
console.log(user);
delete user.name;


//task 27
const user = {   
    name: "John" 
}; 
user.name = "Pete"; //это будет работать, так как при const нельзя менять ссылку на объект, но содержимое объекта менять можно
console.log(user);


//task 28
let salaries = {   
    John: 100,   
    Ann: 160,   
    Pete: 130 
};

let sum = 0;
for(let key in salaries) {
    sum += salaries[key]
}
alert(sum);
*/

//task 29
/*let i = 0; 
while (i != 10) {   
    i += 0.2; 
} */ 
//Этот цикл – бесконечный. Он никогда не завершится из-за потери точности, при прибавлении таких дробей как 0.2.
