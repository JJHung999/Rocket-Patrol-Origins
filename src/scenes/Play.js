class Play extends Phaser.Scene {
    constructor() {
        super("Play");
    }
    preload(){

        this.load.image('starfield', './assets/starfield.png');
        this.load.image('rocket', './assets/Rocket.png');
        this.load.image('spaceship', './assets/SpaceShip.png');

    }
    create(){
        //background
        this.add.tileSprite(20, 20, game.config.width, game.config.heigh, "starfield").setOrigin(0,0);

        //green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    }

    update() {
        this.starfield.tilePositionX -= 4;
    }
}