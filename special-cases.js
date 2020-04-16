for (let i = 0; i < 10; i++) {
  console.log(i)
}

// console.log(i);

try {
  // which could fail!
  throw new Error()
} catch (err) {
  var test = 'Does this work?'
  const test2 = 'Does this work??'
  console.log(err)
  console.log(test2)
}

console.log(test2)
console.log(test)
console.log(err)

function printAge(age) {
  console.log('I am ' + age)
  function printName() {
    // ...
    console.log(age)
  }

  printName()
}

printAge(31)
console.log(age)
