var myAge = 31 // global scope

function greet() {
  var myName = 'Max' // local scope (function scope)
  console.log('Hello ' + myName)
}

console.log(myAge)
greet()
