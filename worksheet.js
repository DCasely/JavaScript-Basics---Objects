// var person = {
//   name: 'Cindy',
//   age: 32,
//   city: 'Missoula'
// };
// var person2 = {
//   name: 'Travis',
//   age: 21,
//   city: 'LA'
// };

// // UPDATING DATA IN OBJECTS
// person2.age++;
// person['city'] = 'London';

// console.log(person, person2);

// // BRACKET NOTATION
// console.log(person['name']);

// // DOT NOTATION
// console.log(person.name);

// var dog = {
//   name: 'Rusty',
//   breed: 'Mutt',
//   age: 3
// };

// console.log(dog);

// var str = name;
// console.log(dog.str);
// console.log(dog['str']);

// ARRAYS VS OBJECTS
// =========================================

// array
// var dogs = ['Rusty', 'Lucky', 'Bubba'];
// console.log(dogs);
// console.log(dogs[1]);
// dogs.push('Wyatt');
// console.log(dogs);
// console.log(dogs[1]); // Lucky
// dogs[1] = 'Lucy'; // Reassigned to Lucy
// console.log(dogs);

// // object
// var dog = {
//   name: 'Bubba',
//   breed: 'Lab'
// };
// console.log(dog);
// console.log(dog['name']); // console.log(dog.name);
// dog['age'] = 6; // dog.age = 6;
// console.log(dog);
// dog.breed = 'Black Lab'; // dog['breed'] = 'Black Lab';
// console.log(dog);

var posts = [
  {
    title: 'Cats are mediocre',
    author: 'Colt',
    comments: ['Awesome post', 'terrible post']
  },
  {
    title: 'Cats are actually awesome',
    author: 'Cat Luvr',
    comments: ['<3', 'Go to hell I hat you']
  }
];

console.log(posts[1].comments[1]);
