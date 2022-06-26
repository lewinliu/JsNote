/*
 * @Author: LLW
 * @Date: 2022-06-26 08:16:07
 * @Description: 正则表达式
 */

let str = "good good study ，day day up!";
//=> 学正则就是用来制定规则 (是否包含数字)
let reg = /\d+/;
reg.test(str); //=> false

str = "2022-06-26";
reg.exec(str); //=> ['2022', index: 0, input: '2022-06-26', groups: undefined]


//=>字面量创建方式(两个斜杠之间包起来的，都是用来描述规则的元字符)
let reg1 = /\d+/;
//=>构造函数模式创建 两个参数:元字符字符串，修饰符字符串
let reg2 = new RegExp("\\d+");


/*
	常用的元字符
*/

//=> 1.量词元字符:设置出现的次数

/*

* 		零到多次
+		一到多次
? 		零次或者一次
{n}      出现n次
{n,} 	出现n到多次
{n, m} 	出现n到m次 
*/

//=>2.特殊元字符:单个或者组合在一起代表特殊的含义
/**

\       转义字符(普通 -> 特殊 -> 普通) 
.       除'\n' (换行符)以外的任意字符
^       以哪一个元字符作为开始
$       以哪一个元字符作为结束
\n      换行符
\d      0~9 之间的一个数字
\D      非数字(大写和小写的意思是相反的)
\w      数字、字母、下划线中的任意一一个字符
\s      一个空白字符(包含空格、制表符、换页符等)
\t      一个制表符(一个TAB键: 四个空格)
x|y     x或者y中的一个字符
[xyz]   x或者y或者z中的一个字符
[^xy]   除了x/y以外的字符
[a-z]   指定a-z这个范围中的任意字符，[0-9a-ZA-Z_]===\w
[^a-z]  上一个的取反“非”
()      正则中的分组符号
(?:)    只匹配不捕获
(?=)    正向预查
(?!)    负向预查
*/

/*正则表达式常用的修饰符: img*/
/**
i => ignoreCase 忽略单词大小写匹配
m => multiline  可以进行多行匹配
g => global     全局匹配

/A/.test('lalala') => false
/A/i.test('lalala') => true
*/

