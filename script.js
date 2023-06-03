'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const address = 'Bangalore 3rd cross 1st main';
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 1,
  time: '19:23',
  address,
});
restaurant.orderDelivery({ address });
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu, 'burger'];
console.log(menu);
// const ingrediants = [
//   prompt('Enter ingrediant 1'),
//   prompt('Enter ingrediant 2'),
//   prompt('Enter ingrediant 3'),
// ];
// restaurant.orderPasta(...ingrediants);
// restaurant.orderPizza('mashroom', 'garlic', 'onion', 'tamoto');

console.log('Challenge -1');

for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we Open at ${open}`);
}

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
console.log('Challenge 2:');
//1
for (const [goal, playerName] of game.scored.entries()) {
  console.log(`Goal no. ${goal + 1} - Name: ${playerName}`);
}

//2
let totalOdd = 0;
let no_Odd = 0;
for (const oddValue of Object.values(game.odds)) {
  totalOdd += oddValue;
  no_Odd += 1;
}
console.log(`The average of the odd is: ${totalOdd / no_Odd}`);

//3
for (const [name, value] of Object.entries(game.odds)) {
  const nameStr = name === 'x' ? 'draw' : game[name];
  console.log(`odd of victory ${nameStr}: ${value}`);
}

//Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.log('SETS---');

//sets
const rcb = new Set(['Virat', 'Abd', 'Gayel', 'Siraj', 'Virat']);
console.log(rcb);
console.log(rcb.size);
console.log(rcb.has('Virat'));
console.log(rcb.has('Rahul'));
rcb.add('Karthik');
console.log(rcb);
rcb.delete('Karthik');
//rcb.clear();
console.log(rcb);
const arrayBlock = ['a', 'b', 'b', 'c', 'd', 'a'];
const setBlock = [...new Set(arrayBlock)];
console.log(setBlock);
for (const player of rcb) {
  console.log(player);
}

console.log('MAPs---');
//maps
const hotel = new Map();
hotel.set('name', 'UHI Hotel');
hotel.set(1, 'Banglore');
hotel.set(2, 'Mysore');
console.log(hotel);
hotel
  .set('catagories', ['Dosa', 'Idali', 'ChitraAnna', 'RiceBath'])
  .set('open', 9)
  .set('close', 18)
  .set(true, 'Hotel is Open')
  .set(false, 'Hotel is Closed');

for (const [key, value] of hotel) {
  console.log(key, ':', value);
}
const time = 13;
console.log(hotel.get(time > hotel.get('open') && time < hotel.get('close')));

const question = new Map([
  ['Question', 'Which is best programing language for web devlopment?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(key, value);
}
const answer = Number(prompt('Enter the correct number choice:'));
console.log(question.get(answer === question.get('correct')));

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

console.log('Challenge 3');
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = new Set(gameEvents.values());
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const times = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${times / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}

console.log('Strings');
//Strings
const airplane = 'Tata Air India';
console.log(airplane);
const plane = 'A452';

console.log(plane[0]);
console.log(plane[3]);
console.log('B2345'[2]);
console.log(airplane.slice(3, 8));
console.log(airplane.indexOf('a'));
console.log(airplane.lastIndexOf('a'));
console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seatNum) {
  if (seatNum.slice(-1) === 'B' || seatNum.slice(-1) === 'E')
    console.log('You have got middle set');
  else console.log('Very Lucky, you have got window side');
};

checkMiddleSeat('11B');
checkMiddleSeat('3C');
checkMiddleSeat('5E');
