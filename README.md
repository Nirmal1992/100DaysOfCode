# 100DaysOfCode
Learning FrontEnd Technologies in-depth

## Day 11 of Day100
__Currying__
* Currying is when you create a function that can later be called multiple times with different arguments.
```
  var abc = function(a,b,c){
    return [a,b,c];
  }
  var curried = _.curry(abc); // can be called  at least arity number of arguments which is function length
  curried(1)(2)(3) //[1, 2, 3]
  curried(1,2)(3)  //[1, 2, 3]
  
  const cury1 = curried(1);
  const cury2 = cury1(2);
  const cury3 = cury2(3);
  console.log(cury1,cury2,cury3) // fn, fn, [1, 2, 3]
 ``` 
 __Composing__
 * Composing is when you take two or more function and combine them esentially where each function consumes the return value of the function that follows.
 ```
  var greet    = function(name){ return "hi: " + name; };
  var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
  var welcome = _.compose(greet, exclaim);
  welcome('nirmal');
  // 'hi: NIRMAL!'
 ```

## Day 10 of Day100
__Difference between null and undefined__
* A value is `undefined` when a variable is declared and value is yet assigned. 
* `typeof` `undefined` is `undefined` in javascript which is a primitive value.
* You can explicity define a variable as `undefined` as below:
  1. By declaring a variable as `undeinfed` 
  ```
    var temp = undefined
  ```
  2. All the non-existant property of objects are also undefined
  ```
   var temp = {}
   console.log(temp.a) // undefined
  ```
 * `null` is an explicit value which means nothing. When we want a value to be empty we declare it as `null`
 * `typeof` `null` is `object` which is a bug in javascript from long time.
 * `undefined !== null`
 * But `undefined == null`
## Day7 of Day100
_Implemented Customised Map method for both array and object._
_Anatomy of Javascript function_
![JavaScript Function](/images/function_anatomy.png)
