var age = 22;
/* var should be avoided because it is not a scope declaration*/
{
  var age = 2;
  console.log("(var) Inside the scope", age);
}
console.log("(var) Outside the scope", age);

/* let should be instead of var because it is block scope. And with let the variable value can be change it's not constant*/
let age1 = 2;
{
  let age1 = 22;
  console.log("(let) Inside the scope", age1);
  let age2;
  console.log("(let) without initialization inside the scope", age2);
  age2 = 23;
  console.log("(let) after initialization inside the scope", age2);
}
console.log("(let) outside the scope", age1);

/*const is also block scope and the variable value remains constant and never changes after assigned and we have to quickly assign the value unlike let where we can first declare and later assign the value*/
const final_age = 26;
{
  const final_age = 24;
  console.log("(const) Inside the scope", final_age);
}
console.log("(const) outside the scope", final_age);


/* comments (single line) */
/* multiline comments
 * line 1
 * line 2
 * line n */