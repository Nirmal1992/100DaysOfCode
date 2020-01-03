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
