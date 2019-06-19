class ClassFactory {

    static createWarrior(strength, intellect, agility) {
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        return new Warrior(this.strength, this.intellect, this.agility);
    }

    static createShooter(strength, intellect, agility) {
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        return new Shooter(this.strength, this.intellect, this.agility);
    }

    static createMage(strength, intellect, agility) {
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        return new Mage(this.strength, this.intellect, this.agility);
    }

    static createWarlock(strength, intellect, agility) {
        this.strength = strength;
        this.intellect = intellect;
        this.agility = agility;
        return new Warlock(this.strength, this.intellect, this.agility);
    }

}