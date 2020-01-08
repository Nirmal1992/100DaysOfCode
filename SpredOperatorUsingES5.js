function conditionalFunc(condition, fn1, fn2) {
  const args = [].slice.call(arguments, 3);
  condition ? fn1.apply(this, args) : fn2.apply(this, args);
}
function foo() {
  const args = [].slice.call(arguments, 0);
  console.log('foo function called');
  console.log(args);
  console.log(arguments);
}

function bar() {
  const args = [].slice.call(arguments);
  console.log('bar function called');
  console.log(args);
  console.log(arguments);
}

conditionalFunc(true, foo, bar, 'arg1', 'arg2');
console.log('========================================');
conditionalFunc(false, foo, bar, 'arg1', 'arg2');

/* Expected Output
foo function called
[ 'arg1', 'arg2' ]
[Arguments] { '0': 'arg1', '1': 'arg2' }
========================================
bar function called
[ 'arg1', 'arg2' ]
[Arguments] { '0': 'arg1', '1': 'arg2' }
*/
