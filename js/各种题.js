//数据类型与运算符
/* let a = 10 + null + true + [] + undefined + '明明' + null + [] + 10 + false;
console.log(a); */
/*
*
10+null->10+0->10
10+true->10+1->11
11 +[]-> 11+''-> '11' 空数组变为数字,先要经历变为空字符串,遇到字符串,啥都别想了,直接变为字符串拼接

'11undefined明明null10false'
*/



//基本数据类型和引用数据类型
/* 
//题目一：
let a = 12;
let b = a;
b = 13;
console.log(a);

let c = {
    name: '小明'
};
let d = c;
d.name = '大明';
console.log(c.name);
 */
/* 
//题目二：
let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = X;
m[1] = 300;
n[2] = 400;
console.log(n, m, x);
 */
/* 
//题目三：
let a = {
    n: 1
};
let b = a;
a.x = a = {
    n: 1
};
console.logog(a.x);
console.log(b);
 */
/* 
//题目四：
let c = {
    n: 1
};
let d = c;
c.X = d;
 */

/* 
// 循环几次？打印机次？分别是什么？
for (var i = 0; i < 10; i++) {
    if (i >= 2) {
        i += 2;
        continue;
    }
    if (i >= 6) {
        i--;
        break;
    }
    i++;
    console.log(i);
}
console.log(i);
 */


/* // 2.分别写出下列表达式输出的结果(腾讯面试题)
var a = 'abc' + 123 + 456;  // 'abc123456';
var b = '456' - '123';  // 333;
var c = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
// c = (100 + 1 + 21.2 + 0 + NaN) + "Tencent" + "" + "null" + "9" + "false";
// c = NaN + "Tencent" + "" + "null" + "9" + "false";
// C = "NaNTencentnull9false";
console.log(a, b, c); 
*/

/* // 3.写出下列代码的输出结果(腾讯面试题)
var str = 'abc123';
var num = parseInt(str);    // num=NaN;
if (num == NaN) {
    alert(NaN); 
} else if (num == 123) {
    alert(123);
} else if (typeof num == ' number') {   // true;
    alert('number');   // 输出结果；
} else {
    alert('str');
} */

/* // 4.写出下列代码的输出结果( 腾讯面试题)
var a = 0;
var b = a;

b++;
alert(a)// 0;

var o = {};
o.a = 0;

var b = o;
b.a = 10;
alert(o.a)// 10;
 */

// // 5.能输出”1”的有哪些?  A,字符串‘1’
// A. alert(1)
// B. console. Log(parseInt(1.3) )
// C. console. log(1)
// D. console. log(isNaN(1))
// E. console. log(parseInt("1"))


// // 6.下面结果是"undefined"的是：B
// A. console. log(alert(1))
// B. typeof undefined
// C. console. log (par seInt (undefined) )
// D. isNaN(undefined)

/* //7.下面结果能得到true的是：
A. isNaN(null)
B. isNaN(parseInt(null))
C. Number(null)
D. parseFloat(null) */

// // 8.输出下面程序的结果
// parseInt("") // NaN
// Number("")	// 0
// isNaN("")    // false
// parseInt(null)   // NaN
// Number(null) // 0
// isNaN(null)  // false
// parseInt("12px") // 12
// Number("12px")   // NaN,Number()中出现的字符串出现任意一个非有效字符,结果都是NaN
// isNaN("12px")    // true,通过Number()转化成数字,结果为NaN

// // 9.下面程序输出的结果：培训
//  // isNaN(NaN) -> true
//  // "" -> 0 -> false
// if (isNaN(NaN) == "") {  
//     console.log("珠峰")
// } else {
//     console.log("培训")
// }

// // 10.下面程序输出的结果
// let x = [1, 2, 3];
// let y = x;
// let Z = [4, 5, 6];
// // [1, 2, 3]; [4, 5, 6];
// y[0] = 10;
// // [10, 2, 3]; [4, 5, 6];
// y = z;
// z[1] = 20;
// // [10, 2, 3]; [4, 20, 6];
// x[2] = z = 30;
// // x=[10, 2, 30]; y=[4, 20, 6];z=30;
// console.Log(x, y, z);

//将下面的判断改写成三元运算符
// let a = 12;
// if (a >= 0 && a <= 20) {
//     if (a % 2 === 0) {
//         a += 2;
//     }
// } else {
//     a -= 2;
// }
// a >= 0 && a <= 20 ? (a % 2 === 0 ? a += 2 : null) : a -= 2;


// //计算输出结果
// let a = typeof typeof typeof [12, 23];
// // typeof [12,23] ; -> typeof "object"
// // typeof typeof typeof "object" -> "string"
// console.log(a);// string

// let a = '10';
// a == 10 ? a++ : a--;
// console.log(a);// a=11

// let b = '10';
// switch (b) {
//     case 10:
//         b++;
//         break;
//     default:
//         b--;
// }
// console.log(b);// b=9


// // 出道题(i++与++i):
//     let i=3;
//     console.log(5+(++i)+(i++)+3-2+(--i)+(i--)-2 );// 20
//     console.log(i);// 3


// //扩展:“变态题”(锻炼数据类型基础知识)
//     console.log();
// // 题目一：只有 0、NaN、''、null、undefined 五个值转换为 FALSE, 其余都转换为 TRUE
//     ! (!"Number (undefined) ");// false
// // 题目二：
//     isNaN (parseInt(new Date())) + Number([1]) + typeof undefined;
// // 题目三：
//     Boolean(Number("")) + !isNaN (Number (null)) + Boolean("parseInt([] )") + typeof ! (nu11 );
// // 题目四：
//     parseFloat("1.6px") + parseInt("1.2px") + typeof parseInt(nu11);
// // 题目五：
//     isNaN (Number(! !Number(parseInt("0.8"))));
// // 题目六：
//     console. log(1 + "2" + "2");
// // 题目七：
//     !typeof parseFloat("0");
// // 题目八：
//     Number("");
// // 题目九：
//     typeof "parseInt(null)"+ 12 + !!Number (NaN);
// // 题目十：
//     !typeof (isNaN("")) + parseInt (NaN) ;
// // 题目十一：
//     typeof ! parseInt(null) + ! isNaN(null);





// // 作用域&变量提升
// // 题目一：
// f = function () {
//     return true;
// }
// g = function () {
//         return false;
//     }

// ~function () {
//     console.log('typeof g :' + typeof g); // typeof g :undefined
//     console.log('typeof f :' + typeof f + ', f='+f()); // typeof f :function, f=true
//     if (g() && [] == ![]) { // Uncaught TypeError: g is not a function
//         f = function () {
//             return false;
//         }

//         function g() {
//             return true;
//         }
//     }
// }();
// console.log(f());
// console.log(g());



// // 题目二：
// console.log(a, b, c); 
// // 269: undefined undefined undefined
// var a = 12,
//     b = 13,
//     c = 14;

// function fn(a) {
//     console.log(a, b, c); // 276: 10 13 14
//     a = 100;
//     c = 200;
//     console.log(a, b, c); // 279: 100 13 200
// }
// b = fn(10); // 无返回值默认返回undefined

// console.log(a, b, c); 
// // 285: 12 undefined 200



// // 题目三：
// var ary = [12, 23]; 

// function fn(ary) {
//     console.log(ary); // [12, 23]
//     ary[0] = 100; // [100, 23]
//     ary = [100]; // 创造了一个新的堆内存
//     ary[0] = 0; // 现在改变的是新的堆内存中的值
//     console.log(ary); // [0]
// }
// fn(ary); 
// // 将数组的堆地址传递给fn，所以fn中改变的是该地址指向的堆内存中的值
// console.log(ary); // [100, 23]



// // 题目四：写出下面代码输出的结果(如何查找上级作用域和堆栈内存释放问题)
// var n = 1;

// function fn() {
//     var n = 2;

//     function f() {
//         n--; // fn() => n--
//         console.log(n);
//     }
//     f();
//     return f; // 
// }
// var x = fn(); // fn() => n=1
// x(); // fn() => n=0
// console.log(n); // 1



// // 题目五：
// var i = 0;

// function A() {
//     var i = 10;

//     function x() {
//         console.log(i);
//     }
//     return x;
// }
// var y = A();
// y(); // 10

// function B() {
//     var i = 20;
//     y();
// }
// B(); // 10



// // 题目六：
// var i = 5;

// function fn(i) {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
// var f = fn(1);
// f(2);       // 4
// fn(3)(4);   // 8
// fn(5)(6);   // 12
// f(7);       // 10
// //f占用fn(1)开辟的私有作用域地址，fn未消毁i，再次++i=3；
// console.log(i); // 5




// 题目七：
var i = 20;

function fn() {
    i -= 2;
    return function (n) {
        console.log((++i) - n);
    }
}
var f = fn();
f(1); // 18
f(2); // 18

fn()(3); // 16
fn()(4); // 14
f(5); // 14
console.log(i); // 19











//
