export default class Team_iter {
  constructor() {
    this.characters = [];
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if (index < characters.length) {
          return { done: false, value: characters[index++] };
        } else {
          return { done: true };
        }
      }
    };
  }

  addCharacter(character) {
    this.characters.push(character);
  }
}