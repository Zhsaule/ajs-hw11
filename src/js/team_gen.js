export default class Team_gen {
  constructor() {
    this.characters = [];
  }

  *[Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
  
  addCharacter(character) {
    this.characters.push(character);
  }

}