const _ = {};
var arr = [];
_.from = function(arguments) {
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
};

function sayHi() {
  const arr = _.from(arguments);
  console.log(arr);
}

sayHi('Nirmal', 'Jain');

//expected output: ['Nirmal', 'Jain']
