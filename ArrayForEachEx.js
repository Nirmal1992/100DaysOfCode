const array1 = ['a', 'b', 'c'];

array1.forEach(
  function(element, index, arr) {
    console.log(element, index, arr, this);
  },
  { name: 'Nirmal' }
);

// expected output: "a" 0 Array ["a", "b", "c"] Object { name: "Nirmal" }
// expected output: "b" 1 Array ["a", "b", "c"] Object { name: "Nirmal" }
// expected output: "c" 2 Array ["a", "b", "c"] Object { name: "Nirmal" }

array1.forEach(
  (element, index, arr) => {
    console.log(element, index, arr, this);
  },
  { name: 'Nirmal' }
);

// expected output: "a" 0 Array ["a", "b", "c"] [object Window]
// expected output: "b" 1 Array ["a", "b", "c"] [object Window]
// expected output: "c" 2 Array ["a", "b", "c"] [object Window]

/* 
  customized for each method that works for both array and object
*/

const _ = {};
_.each = function(list, callBack) {
  if (Array.isArray(list)) {
    list.forEach((element, index, arr) => callBack(element, index, arr));
  } else {
    for (const key in list) {
      callBack(list[key], key, list);
    }
  }
};

const callBackFn = function(element, index, list) {
  console.log(element, index, list);
};

_.each({ a: 'A', b: 'B', c: 'C' }, callBackFn);

//expect output: 'A' 'a' { a: 'A', b: 'B', c: 'C' }
//expect output: 'B' 'b' { a: 'A', b: 'B', c: 'C' }
//expect output: 'C' 'c' { a: 'A', b: 'B', c: 'C' }

_.each(['A', 'B', 'C'], callBackFn);

//expect output:  'A' 0 [ 'A', 'B', 'C' ]
//expect output:  'B' 1 [ 'A', 'B', 'C' ]
//expect output:  'C' 2 [ 'A', 'B', 'C' ]
