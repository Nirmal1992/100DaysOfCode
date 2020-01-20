# 100DaysOfCode
Learning FrontEnd Technologies in-depth

## Day 17 of Day100
__CSS Selectors__
* CSS can change the look of HTML elements. In order to do this, CSS must select HTML elements, then apply styles to them.
* CSS can select HTML elements by tag, class, or ID.
* Multiple CSS classes can be applied to one HTML element.
* Classes can be reusable, while IDs can only be used once.
* IDs are more specific than classes, and classes are more specific than tags. That means IDs will override any styles from a class, and   classes will override any styles from a tag selector.
* Multiple selectors can be chained together to select an element. This raises the specificity, but can be necessary.
* Nested elements can be selected by separating selectors with a space.
* The !important flag will override any style, however it should almost never be used, as it is extremely difficult to override.
* Multiple unrelated selectors can receive the same styles by separating the selector names with commas.

__The Box Model__
* The box model comprises a set of properties used to create space around and between HTML elements.
* The height and width of a content area can be set in pixels or percentage.
* Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS      
  properties.
* Padding is the space between the content area and the border. It can be set in pixels or percent.
* Margin is the amount of spacing outside of an element’s border.
* Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one  
  element and the left margin of the adjacent element.
* Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
  margin: 0 auto horizontally centers an element inside of its parent content area, if it has a width.
* The overflow property can be set to display, hide, or scroll, and dictates how HTML will render content that overflows its parent’s c   content area.
* The visibility property can hide or show elements.


## Day 14 of Day100
__Render React on the Server with renderToString__
* So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use   cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run           JavaScript on the server with Node, this is possible. In fact, React provides a `renderToString()` method you can use for this    
  purpose.

* There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps       would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not   be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML   markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by       search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript     code of the entire app. React will still be able to recognize your app and manage it after the initial load.

* The `renderToString()` method is provided on ReactDOMServer, which is available here as a global object. 
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);
```
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
