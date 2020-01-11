const _ = {};
_.compose = function() {
  var args = arguments;
  let i = arguments.length - 1;
  var composedFunc = function() {
    // we have used apply here because we are passing array
    var result = args[i].apply(this, arguments);
    while (i--) {
      // we have used call here because we are passing individual result of
      // previous fn as arguments.
      result = args[i].call(this, result);
    }
    return result;
  };
  return composedFunc;
};

var sayHi = function(name) {
  return 'Hi ' + name;
};
var capitalize = function(str) {
  return str.toUpperCase();
};
var composedFunc = _.compose(capitalize, sayHi);

var result = composedFunc('Nirmal');
console.log(result); // expected output: HI NIRMAL;
