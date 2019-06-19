class LevelFactory {

    static createLevel(level) {

        var enemies = [];

        switch (level) {

            case 1:
                enemies.push(new Enemy("Goblin", 40, 15));
                break;
            case 2:
                enemies.push(new Enemy("Goblin", 40, 15));
                enemies.push(new Enemy("Goblin", 40, 15));
                enemies.push(new Enemy("Goblin", 40, 15));
                break;
            case 3:
                enemies.push(new Enemy("Goblin", 40, 15));
                enemies.push(new Enemy("Orc", 80, 40));
                enemies.push(new Enemy("Goblin", 40, 15));
                break;
            case 4:
                enemies.push(new Enemy("Orc", 80, 40));
                enemies.push(new Enemy("Orc", 80, 40));
                enemies.push(new Enemy("Orc", 80, 40));
                break;
            case 5:
                enemies.push(new Enemy("Werewolf", 180, 80));
                break;
            case 6:
                enemies.push(new Enemy("Goblin", 40, 15));
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Goblin", 40, 15));
                break;
            case 7:
                enemies.push(new Enemy("Orc", 80, 40));
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Orc", 80, 40));
                break;
            case 8:
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Werewolf", 180, 80));
                break;
            case 9:
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Werewolf", 180, 80));
                break;
            case 10:
                enemies.push(new Enemy("Boss1", 500, 100));
                break;
            case 11:
                enemies.push(new Enemy("Goblin", 40, 15));
                enemies.push(new Enemy("Boss1", 500, 100));
                enemies.push(new Enemy("Goblin", 40, 15));
                break;
            case 12:
                enemies.push(new Enemy("Orc", 80, 40));
                enemies.push(new Enemy("Boss1", 500, 100));
                enemies.push(new Enemy("Orc", 80, 40));
                break;
            case 13:
                enemies.push(new Enemy("Werewolf", 180, 80));
                enemies.push(new Enemy("Boss1", 500, 100));
                enemies.push(new Enemy("Werewolf", 180, 80));
                break;
            case 14:
                enemies.push(new Enemy("Boss", 500, 100));
                enemies.push(new Enemy("Boss", 500, 100));
                enemies.push(new Enemy("Boss", 500, 100));
                break;
            case 15:
                enemies.push(new Enemy("Final Boss", 2500, 400));
                break;
            default:
                break;

        }

        return enemies;

    }

}