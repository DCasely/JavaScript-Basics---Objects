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

// var posts = [
//   {
//     title: 'Cats are mediocre',
//     author: 'Colt',
//     comments: ['Awesome post', 'terrible post']
//   },
//   {
//     title: 'Cats are actually awesome',
//     author: 'Cat Luvr',
//     comments: ['<3', 'Go to hell I hat you']
//   }
// ];

// console.log(posts[1].comments[1]);

// Objects Quiz
// =====================================

// var someObject = {};

// someObject._name = 'Hedwig';

// someObject.age = 6;

// var prop = 'color';
// someObject[prop] = 'red';

// console.log(someObject);

// var someObject = {
//   friends: [{ name: 'Malfoy' }, { name: 'Crabbe' }, { name: 'Goyle' }],
//   color: 'baby blue',
//   isEvil: true
// };

// console.log(someObject.friends[0].name);

var movieDB = [
  { title: 'Training Day', rating: '5', hasWatched: true },
  { title: 'Ad Astra', rating: '4', hasWatched: false },
  { title: 'Bad Boys', rating: '5', hasWatched: true },
  { title: 'Scarlet', rating: '3', hasWatched: false }
];

console.log(movieDB);

// My Solution Using a FOR LOOP
function moviesWatched(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].hasWatched === true) {
      console.log(
        'You have watched "' +
          array[i].title +
          '" - ' +
          array[i].rating +
          ' stars'
      );
    } else
      console.log(
        'You have not seen "' +
          array[i].title +
          '" - ' +
          array[i].rating +
          ' stars'
      );
  }
}

moviesWatched(movieDB);

// Colt Steele's Solution
console.log('***** Colt Solution *****');

var movies = [
  {
    title: 'In Bruges',
    hasWatched: true,
    rating: 5
  },
  {
    title: 'Frozen',
    hasWatched: false,
    rating: 4.5
  },
  {
    title: 'Les Meserable',
    hasWatched: false,
    rating: 3.5
  }
];

movies.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = 'You have ';
  if (movie.hasWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + ' stars';
  return result;
}
