'use strict'

class Shooter extends Hero_Class {

    constructor(strength, intellect, agility) {
        super(strength,intellect,agility);
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        this.spell1 = new Spell("Arrow shot", "Shoot arrow at target", 8);
        this.spell2 = new Spell("Triple arrow shot" , "Shoot three arrows at target", 10);
        this.spell3 = new Spell("Magic arrow shot", "Shoot arrow infused with magic at target", 24);
        this.spell1Dmg = parseInt(this.castSpell1);
        this.spell2Dmg = parseInt(this.castSpell2);
        this.spell3Dmg = parseInt(this.castSpell3);
    }

    get castSpell1() {
        return parseInt((this.agility + this.spell1.rawDmg)) + parseInt((this.strength - (this.strength/2)));
    }

    get castSpell2() {
        return parseInt(this.agility * this.spell2.rawDmg);
    }

    get castSpell3() {
        return parseInt((this.agility * this.spell3.rawDmg)) + parseInt((this.strength - (this.strength/2)));
    }

}