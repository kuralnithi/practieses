const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

for (const key in person) {
  console.log(key, person[key]);
}



const entries = Object.keys(person);

// entries.forEach(([key, value]) => {
//   console.log(`${key}:${value}`);
// });
console.log(entries)    