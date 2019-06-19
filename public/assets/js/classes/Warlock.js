'use strict'

class Warlock extends Hero_Class {

    constructor(strength, intellect, agility) {
        super(strength,intellect,agility);
        this.strength = parseInt(strength);
        this.intellect = parseInt(intellect);
        this.agility = parseInt(agility);
        this.spell1 = new Spell("Shadow Bolt", "Send shadow bolts at target", 10);
        this.spell2 = new Spell("Poison" , "Poison the target", 12);
        this.spell3 = new Spell("Meteor", "Make meteors fall from the sky and hit the target", 50);
        this.spell1Dmg = parseInt(this.castSpell1);
        this.spell2Dmg = parseInt(this.castSpell2);
        this.spell3Dmg = parseInt(this.castSpell3);
    }
    //TODO: change values later
    get castSpell1() {
        return Math.floor((this.intellect + this.spell1.rawDmg)) + this.agility;
    }

    get castSpell2() {
        return this.intellect * this.spell2.rawDmg;
    }

    get castSpell3() {
        return (this.intellect * this.spell3.rawDmg) + (this.agility - (this.agility/2));
    }


}