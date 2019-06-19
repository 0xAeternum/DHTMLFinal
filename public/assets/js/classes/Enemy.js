'use strict'

class Enemy {
    
    constructor(name, hp, dmg) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
    }

    getClassPicture() {
        return this.name + ".png";
    }

}