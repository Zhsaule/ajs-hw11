// TODO: write your code here
import Team_iter from "./team_iter";
import Team_gen from "./team_gen";
import canIterate from "./caniterate";

console.log('worked');

const person = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

//HW11 1
console.log('Символы & итераторы');
const team_i = new Team_iter();
team_i.addCharacter(person);
team_i.addCharacter(person);
team_i.addCharacter(person);
console.log(team_i);

for (const character of team_i) {
  console.log(character);
}

//HW11 2
console.log('Символы & генераторы');
const team_g = new Team_gen();
team_g.addCharacter(person);
team_g.addCharacter(person);
console.log(team_g);

for (const character of team_g) {
  console.log(character);
}

//HW11 3*
console.log('Генераторы');
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
