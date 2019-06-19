'use strict'

class Warrior extends Hero_Class {

    constructor(strength, intellect, agility) {
        super(strength,intellect,agility);
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        this.spell1 = new Spell("Slash", "Slash the target", 6);
        this.spell2 = new Spell("Pierce" , "Pierce the target", 10);
        this.spell3 = new Spell("Triple Slash", "Slash the target 3 times", 20);
        this.spell1Dmg = parseInt(this.castSpell1);
        this.spell2Dmg = parseInt(this.castSpell2);
        this.spell3Dmg = parseInt(this.castSpell3);
    }

    get castSpell1() {
        return parseInt((this.strength + this.spell1.rawDmg)) + parseInt((this.agility - (this.agility/2)));
    }

    get castSpell2() {
        return parseInt(this.strength * this.spell2.rawDmg);
    }


    get castSpell3() {
        return parseInt((this.strength * this.spell3.rawDmg)) + parseInt((this.agility - (this.agility/2)));
    }

}