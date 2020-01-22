# 100DaysOfCode
Learning FrontEnd Technologies in-depth

## Day 19 of Day100
__CSS GRID__
* To set up a grid, you need to have both a grid container and grid items. The grid container will be a parent element that contains   
  grid items as children and applies overarching styling and positioning to them.
* To turn an HTML element into a grid container, you must set the element’s display property to `grid` (for a block-level grid) or      
  `inline-grid` (for an inline grid). 
* `grid-template-columns` defines the number and sizes of the columns of the grid
* `grid-template-rows` defines the number and sizes of the rows of the grid
* `grid-template` is a shorthand for defining both `grid-template-columns` and `grid-template-rows` in one line
* `grid-gap` puts blank space between rows and/or columns of the grid
* `grid-row-start` and `grid-row-end` makes elements span certain rows of the grid
* `grid-column-start` and `grid-column-end` makes elements span certain columns of the grid
* `grid-area` is a shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`, all in one line
* Examples:
```
 .grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template-columns: 100px 200px;
  grid-template-rows: 10% 20% 350px;
} 
```
* In this example, the first row is 50 pixels tall (10% of 500), the second row is 100 pixels tall (20% of 500), and the third row is 600 pixels tall.

```
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template: 200px 300px / 20% 10% 70%;
}
```
* When using grid-template, the values before the slash will determine the size of each row. The values after the slash determine the 
  size of each column. In this example, we’ve made two rows and three columns of varying sizes.
* By using the fr unit, we can define the size of columns and rows as a fraction of the grid’s length and width. This unit was 
  specifically created for use in CSS Grid. Using fr makes it easier to prevent grid items from overflowing the boundaries of the grid.
  ```
   .grid {
  display: grid;
  width: 100px;
  height: 400px;
  grid-template: 2fr 1fr 1fr / 1fr 60px 1fr;
  }
  ```
* In this example, 60 pixels are taken up by the second column. Therefore the first and third columns have 40 available to split between them. Since each gets one fraction of the total, they both end up being 20 pixels wide.
* The repeat function will duplicate the specifications for rows or columns a given number of times.
```
 grid-template-columns: repeat(3, 100px);
 grid-template-columns: repeat(2, 20px 50px);
 repeat(5, 1fr);
```
* The third example above will create four columns where the first and third columns will be 20 pixels wide and the second and fourth 
  will be 50 pixels wide.
* Sometimes you might want a grid to resize based on the size of your web browser.
  In these situations, you might want to prevent a row or column from getting too big or too small. For example, if you have a 100-pixel   wide image in your grid, you probably don’t want its column to get thinner than 100 pixels! The `minmax()` function can help us solve 
  this problem.
  ```
  .grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
  }
  ```
* In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, 
  however, will vary in size as the overall grid resizes. The second column will always be between 100 and 500 pixels wide.
* Grid tem examples:
  ```
  .item {
  grid-row-start: 4;
  grid-row-end: 6;
  } ====> .item {
  grid-row: 4 / 6;
  }
  
  
  When using these properties, we can use the keyword span to start or end a column or row relative to its other end. Look at how span i   is used in the code below:
  .item {
  grid-column-start: 4;
  grid-column-end: span 2;
  }
  
  This is telling the item element to begin in column four and take up two columns of space.
  
  .item {
  grid-column: 4 / 6; (here 6 is exlcusive)
  }
  
  .item {
  grid-column-start: 4;
  grid-column-end: span 2;
  }
  
  .item {
  grid-area: 2 / 3 / 4 / span 5;
  }
  ```

__CSS COLOR__
_There are four ways to represent color in CSS:_

* Named colors — there are 147 named colors, which you can review here.
* __Hexadecimal or hex colors__
* Hexadecimal is a number system with has sixteen digits, 0 to 9 followed by “A” to “F”.
 Hex values always begin with # and specify values of red, blue and green using hexademical numbers such as #23F41A.
* __RGB__
* RGB colors use the rgb() syntax with one value for red, one value for blue and one value for green.
* RGB values range from 0 to 255 and look like this: rgb(7, 210, 50).
* __HSL__
* HSL stands for hue (the color itself), saturation (the intensity of the color), and lightness (how light or dark a color is).
* Hue ranges from 0 to 360 and saturation and lightness are both represented as percentages like this: hsl(200, 20%, 50%).
* You can add opacity to color in RGB and HSL by adding a fourth value, a, which is represented as a percentage.
* Opacity value can range from 0 to 1 with 0 means completely transperant and 1 means opacque. eg. hsla(240, 30%, 50%, 0.4) or  
  rgba(230,110,55,0.6). It is also called as alpha;

## Day 18 of Day100
__CSS DISPLAY AND POSITIONING__
* The position property allows you to specify the position of an element in three different ways.
* When set to relative, an element’s position is relative to its default position on the page.
* When set to absolute, an element’s position is relative to its closest positioned parent element. It can be pinned to any part of the   web page, but the element will still move with the rest of the document when the page is scrolled.
* When set to fixed, an element’s position can be pinned to any part of the web page. The element will remain in view no matter what.
* The z-index of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements.
* The display property allows you control how an element flows vertically and horizontally a document.
  inline elements take up as little space as possible, and they cannot have manually-adjusted width or height.
  block elements take up the width of their container and can have manually-adjusted heights.
  inline-block elements can have set width and height, but they can also appear next to each other and do not take up their entire   
  container width.
* The float property can move elements as far left or as far right as possible on a web page.
* You can clear an element’s left or right side (or both) using the clear property.

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

__Changing the Box Model__
* In the default box model, box dimensions are affected by border thickness and padding.
* The box-sizing property controls the box model used by the browser.
* The default value of the box-sizing property is content-box.
* The value for the new box model is border-box.
* The border-box model is not affected by border thickness or padding.


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
