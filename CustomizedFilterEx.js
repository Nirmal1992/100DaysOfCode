const _ = {};
_.filter = function(list, callBack) {
  let filteredValue = [];
  list.forEach((element, index, list) => {
    callBack(element, index, list) && filteredValue.push(element);
  });
  return filteredValue;
};

var arr = [2, 5, 7, 9, 8];
const filteredValue = _.filter(arr, function(value) {
  return value % 2 === 0;
});

console.log(filteredValue);
//expected output: [ 2, 8 ]
