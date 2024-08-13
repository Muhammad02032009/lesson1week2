# Lecture 3
$$ About-string's-methods 
$$

###   __3 namudi ishora kardani string mavjud ast :__
*  __1.__ _tavvasuti noxunaki  yaktaga_
   
    >`  ' '  ` 
    ```javascript
     let str= ' hello world '
     ```

*  __2.__ _tavvasuti noxunaki  dutaga_
   
    >`  " "  ` 
    ```javascript
     let str= " hello world "
     ```

*  __3.__ _tavvasuti noxunaki  backticks_
   
    >`  ${ }  ` 
    ```javascript
     let str= $ { hello world }
     ```


____
## Java script  15-to metod dorad :
__1.__ carAt() 
> indexi harfhoro dar ` for ` muayan mekunad 
```javascript
let str = "hello"
console.log(str.charAt(0)) // h
console.log(str.charAt(1)) // e
```
  
__2.__ at() 
> indexi arfhoro dar ` for ` muayan mekunad va elementi `-`> niz qabul mekunadro 
```javascript
let str = "hello"
console.log(str.at(0)) // h
console.log(str.at(-1)) // o
```

__3.__ concat() 
> concat dar xud yakchand stringro qabul mecunad va onhoro mechasponad 
```javascript
let str = "hello"
let ctr="world"
let join=str.concat(ctr) //"hello world"
```

__4.__ replace() 
> ba xud yak qimatro megirad agr dar veriable qimmati dodai on boshad onro ivaz mekunad
```javascript
let str = "hello world "
let join=str.replase("world","js") //"hello js"
```

__5.__ replaseAll() 
> ba xud yak qimatro megirad agr dar veriable qimmati dodai on yakchandto boshad onhoro ivaz mekunad
```javascript
let str = "hello world world world"
let join=str.replaseAll("world","js") //"hello js js js"
```

__6.__ split() 
> elementhoi massivro az qimmati dodashuda judo mekunad 
```javascript
let str="hello world"
console.log(str.split(" ")) // [ 'hello' , 'world']
```

__7.__ substring() 
> substring qimati indexro megirad va onhoro mebarorad
```javascript
let str = "hello"
console.log(str.substring(1,4)) // ell
```

__8.__ slice() 
> substring qimati indexro megirad va onhoro mebarorad
```javascript
let str = "hello"
console.log(str.substring(1,4)) // ell
```

__9.__ toLowerCase() 
> hamai harfhoi kalonro xurd mekunad
```javascript
let str = "HeLlO"
console.log(str.toLowerCase()) // hello
```

__10.__ toupperCase() 
> hamai harfhoi xurdro kalon mekunad mekunad
```javascript
let str = "HeLlO"
console.log(str.toupperCase()) // HELLO
```

__11.__ trim() 
> baroi nest kardani probelhoi ziyodati az tarafi chap va rost
```javascript
let str = "                       hello              "
console.log(str.trim()) // "hello"
```

__12.__ includes() 
> yak qimatro megirad va agar on dar veriablei dodashuda mavjud boshad `true` va agar naboshad `falsero` medihad 
```javascript
let str = "hello"
console.log(str.includes("hello")) // true
```

__13.__ toString() 
> tipi elementro string mekunad
```javascript
let str = hello
console.log( typof str.tostring()) // 'string'

```

__14.__ indexof() 
> indexi qimmati dodashudaro mebarorad
```javascript
let str = "hello"
console.log(str.indexof(l)) // 2
```

__15.__ repeat() 
>  qimmati dodashudaro takroran mebarorad
```javascript
let str = "hello"
console.log(str.repeat(3)) // "hellohellohello"
```
_____
![alt text](<Снимок экрана 2024-08-10 105607.png>)

