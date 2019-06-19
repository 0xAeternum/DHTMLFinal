'use strict'

class Mage extends Hero_Class {

    constructor(strength, intellect, agility) {
        super(strength,intellect,agility);
        this.strength = parseInt(strength);
        this.intellect = parseInt(intellect);
        this.agility = parseInt(agility);
        this.spell1 = new Spell("Frost bolt", "Send a bolt of frost at target", 8);
        this.spell2 = new Spell("Ice Shatters" , "Send shattered ice particles at target", 13);
        this.spell3 = new Spell("Freeze", "Freeze the target", 19);
        this.spell1Dmg = parseInt(this.castSpell1);
        this.spell2Dmg = parseInt(this.castSpell2);
        this.spell3Dmg = parseInt(this.castSpell3);
    }

    get castSpell1() {
        return (this.intellect + this.spell1.rawDmg) + this.agility/2;
    }

    get castSpell2() {
        return this.intellect * this.spell2.rawDmg;
    }

    get castSpell3() {
        return (this.intellect * this.spell3.rawDmg) + (this.agility - (this.agility/2));
    }

}