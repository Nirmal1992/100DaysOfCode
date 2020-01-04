/* 
  customized map method that works for both array and object
*/

const _ = {};
_.map = function(list, callBack) {
  const returnedList = [];
  if (Array.isArray(list)) {
    list.forEach((element, index, arr) => {
      returnedList.push(callBack(element, index, arr));
    });
    return returnedList;
  } else {
    for (const key in list) {
      returnedList.push(callBack(list[key], key, list));
    }
    return returnedList;
  }
};

const callBackFn = function(element, index, arr) {
  return `tranformed ${element}`;
};

console.log(_.map({ a: 'A', b: 'B', c: 'C' }, callBackFn));

//expect output: [ 'tranformed A', 'tranformed B', 'tranformed C' ]

console.log(_.map(['A', 'B', 'C'], callBackFn));

//expect output: [ 'tranformed A', 'tranformed B', 'tranformed C' ]
