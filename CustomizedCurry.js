const _ = {};
_.curry = function(func) {
  const arity = func.length;
  var totalArg = [];
  var curriedFunc = function() {
    var argsLength = arguments.length;
    if (argsLength === arity) {
      return func(...arguments);
    } else {
      return curriedFunc.bind(this, ...arguments);
    }
  };
  return curriedFunc;
};

var abc = function(a, b, c) {
  return [a, b, c];
};
var curriedFunc = _.curry(abc);

curriedFunc(1)(2)(3);
