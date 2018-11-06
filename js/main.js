/**
 * Class representing a Warrior
 */
class Warrior {

  /**
   * Create a Warrior
   * @param {string} name
   * @param {number} attack
   * @param {number} hp
   */
  constructor(name, attack, hp) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
  }

  /**
   * Fight another Warrior
   * @param {Warrior} Guerrier
   */
  fight(Warrior) {
    Warrior.hp -= this.attack;
    if (Warrior.hp < 0) {
      Warrior.hp = 0;
    }
    alert(this.name + ' a infligé ' + this.attack + ' dégats à ' + Warrior.name + '.' + Warrior.name + ' a ' + Warrior.hp + ' pv');
  }
}

/**
 * Class representing a Wizard
 */
class Wizard extends Warrior {

  /**
   * Create a Wizard
   * @param {string} name
   * @param {number} attack
   * @param {number} hp
   * @param {number} power
   */
  constructor(name, attack, hp, power) {
    super(name, attack, hp);
    this.power = power;
  }

  /**
   * Spell that regen 20 hp
   */
  heal() {
    if (this.power >= 20) {
      this.hp += 10;
      this.power -= 20;
      alert(this.name + ' s\'est soigné de 20 pv. ' + this.name + ' a ' + this.hp + ' pv.');
    }
    else {
      alert(this.name + ' n\'a pas assez de magie pour se soigner, il passe son tour!');
    }
  }
}

let gladiator = new Warrior('Gladiator', 20, 100);
let garen = new Warrior('Garen', 35, 60);
let gandalf = new Wizard('Gandalf', 30, 300, 40);

while (gandalf.hp > 0) {
  gladiator.fight(gandalf);
  gandalf.heal();
  garen.fight(gandalf);
  gandalf.heal();
}

alert(gandalf.name + ' est mort !!!!!!');
