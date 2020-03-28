var arr = [1, 2, [3, 4], [5, [6]]];
/*
Implementation of flat utility function to
flatten any array.
*/
function flatArray(arr) {
  var output = [];
  arr.map(elem => {
    if (!Array.isArray(elem)) {
      output.push(elem);
    } else {
      output.push(...flatArray(elem));
    }
  });
  return output;
}

console.log(flatArray(arr));
//OUTPUT: [ 1, 2, 3, 4, 5, 6 ]
