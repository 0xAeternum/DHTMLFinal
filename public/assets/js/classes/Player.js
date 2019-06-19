'use strict'

class Player {

    constructor(name, hp, dmg, hero_class, socketID, userID) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.hero_class = hero_class;
        this.socketID = socketID;
        this.userID = userID;
        this.classPic = this.hero_class.constructor.name + ".png";
    }

}