# 100DaysOfCode
Learning FrontEnd Technologies in-depth

## Day 11 of Day100
__Currying__
* Currying is when you create a function that can later be called multiple times with different arguments.
```
  var abc = function(a,b,c){
    return [a,b,c];
  }
  var curried = _.curry(abc);
  curried(1)(2)(3) //[1, 2, 3]
  curried(1,2)(3)  //[1, 2, 3]
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
