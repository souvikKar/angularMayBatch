// function

// 1 way
function hello(name) {
  console.log('hello', name);
}
hello('raj');

// way 2
const hi = function (name) {
  console.log('hi', name);
};
hi('raj');

// way 3 (arrow function)
// a)
const bye = (name) => {
  console.log('bye', name);
};
bye('raj');

// b)
const bye2 = (name) => {
  console.log('bye2', name);
};
bye2('raj');

// c)
const bye3 = (name) => console.log('bye3', name);
bye3('raj');
