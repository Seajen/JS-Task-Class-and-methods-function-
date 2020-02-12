// // function print(cb) {
// //     return cb()
// // }
// // print(()=>{
// //     console.log('ПРИВЕТ!');
// // });
//
// // function hello(text,cb) {
// //     return cb(text)
// // }
// //
// // hello("Hello World",(x)=>{
// //     console.log(x);
// // });
//
// // 3. Функция принимает 2 числа и колбек,и выводит результат арифметического действия над этими числами.действие описывается в колбеке
//
// // function f(a,b,cb) {
// //     return cb(a,b)
// // }
// // let f1 = f(2,3,(z, x)=>{
// //     return 2+3
// // });
// // console.log(f1);
// //
//
// // 4. Функция принимает масиив и колбек.Вывести данный массив при помощи колбека (по возрастанию и по убыванию)
// // function f(a,cb) {
// //     return cb(a)
// // }
// // f([2,3,5,44,1,4,7],( x)=>{
// //     x.sort((a,b)=>a-b)
// //     x.forEach(i=>{
// //         console.log(i)
// //     });
// //     console.log('--------------------------------------')
// //     x.sort((a,b)=>b-a)
// //     x.forEach(i=>{
// //         console.log(i)
// //     })
// // });
// //
//
// 6. Вычисление факториала числа с использованием цикла
//
// let m = 10;
// let x = factorial(m);
// console.log(x);
//
// function factorial(n){
//     if(n <= 1) return 1;
//     let result = 2; // result - переменная для результата
//     for (i = 3; i <=n; i++) {
//         result = result*i;
//     }
//     return result;
// }
// 7. Вычисление факториала числа через рекурсию.
//     let m = 10;
// let x = factorial(m);
// console.log(x);
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// 8.  Написать функцию рекурсию для вычисления первых n чисел ряда Фибоначчи
// пример: для первых 6 чисел ряда (результат: 5 + 3 = 8):
// элементы числовой последовательности
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
//
// let fib = n => (n > 2) ? fib(n-1) + fib(n-2) : 1;






// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
//     індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
//     це в новий масив (первинний масив залишиться без змін)
//     -відсортувати його за індентифікатором

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let lll = users.map((value, index) => {
//     value.id = index + 1;
//     return value
// });
// console.log(users);
// console.log(lll);



////////////////////////////////////////////////////////////////////////////
// Отфильтровать по :
//         двигун більше 3х літрів
//         двигун = 2л
//         виробник мерс
//         двигун більше 3х літрів + виробник мерседес
//         двигун більше 3х літрів + виробник субару
//         сили більше ніж 300
//         сили більше ніж 300 + виробник субару
//         мотор серіі ej
//         сили більше ніж 300 + виробник субару + мотор серіі ej
//         двигун меньше 3х літрів + виробник мерседес
//         двигун більше 2л + сили більше 250
//         сили більше 250  + виробник бмв

// class Car{
//     constructor(brand, model, year, color, type, engine, capacity, power){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.type = type;
//         this.engine = engine;
//         this.capacity = capacity;
//         this.power = power;
//     };
// };

// let cars = [
//     new Car("subaru", "wrx", 2010, "blue", "s017, "red", "sedan", "eng25", 2.5, 230),
// // ];
// //
// // console.log(cars.filter(p => p.engine.includes('ej') && p.power > 300));
//
// //============================================================================================
//
// //- Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//
//  let a = [1, 2, 3, 4, 5];
// // let aa = a.splice(1,2);
// // console.log(a);
//
// // - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//
// // let aa = a.splice(1,3);edan", "ej204x", 2, 400),
//     new Car("subaru", "legacy", 2007, "silver", "sedan", "ez30", 3, 250),
//     new Car("subaru", "tribeca", 2011, "white", "jeep", "ej20", 2, 300),
//     new Car("subaru", "leone", 1998, "yellow", "sedan", "ez20x", 2, 140),
//     new Car("subaru", "impreza", 2014, "red", "sedan", "ej204x", 2, 200),
//     new Car("subaru", "outback", 2014, "red", "hachback", "ej204", 2, 165),
//     new Car("bmw", "115", 2013, "red", "hachback", "f15", 1.5, 120),
//     new Car("bmw", "315", 2010, "white", "sedan", "f15", 1.5, 120),
//     new Car("bmw", "650", 2009, "black", "coupe", "f60", 6, 350),
//     new Car("bmw", "320", 2012, "red", "sedan", "f20", 2, 180),
//     new Car("mercedes", "e200", 1990, "silver", "sedan", "eng200", 2, 180),
//     new Car("mercedes", "e6.3", 2017, "yellow", "sedan", "amg6.3", 6, 400),
//     new Car("mercedes", "c250", 2
// console.log(aa);

// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let aa = a.splice(3,0, 'a', 'b', 'c');
// console.log(a);

// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let aa = a.splice(1, 0, 'a', 'b');
// let aaaa = a.splice(6, 0, 'c');
// let aaa = a.splice(8, 0, 'e');
// console.log(a);


// - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
// let b = [3, 4, 1, 2, 7];
// b.sort();
// console.log(b);
// - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
//
// let q = a.join();
// console.log(q);
//

//
// class Human {
//     constructor(name, gender, age) {
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }
//
//     greeting() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }
//
// let xxx = new Human('Dima', 'male', 49);
// let user2 = new Human('Vova', 'male', 22);
//
//  xxx.greeting();
//  user2.greeting();