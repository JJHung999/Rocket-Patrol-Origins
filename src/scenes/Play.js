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

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
        //background
        this.starfield = this.add.tileSprite(20, 20, game.config.width, game.config.height, "starfield").setOrigin(0,0);

        //green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // add rocket (p1)
        this.p1Rocket = new Rocket (this, game.config.width/2, 431, 'rocket').setOrigin(0.5, 0);
        this.p1Rocket.reset();

        // add ship
        this.shipA = new SpaceShip (this,300,300, 'ship');
        this.shipB = new SpaceShip (this,400,150, 'ship');
        this.shipC = new SpaceShip (this,100,200, 'ship');
    }

    
    update() {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();

        this.shipA.update();
        this.shipB.update();
        this.shipC.update();

        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.p1Rocket.firing =true;
        }
    }
}