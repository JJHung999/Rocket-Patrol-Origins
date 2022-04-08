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
        let p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket').setOrigin(0.5, 0);
        this.add.existing(p1Rocket);
        
    }

    update() {
        // TODO: only move if not firing
        // TODO: clamp to visible area
	    if(keyLEFT.isDown) {
    	    this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown) {
    	    this.x += this.moveSpeed;
        }

        if (Phaser.Input.keyboard.JustDown()){
            debugger;
        }
        this.starfield.tilePositionX -= 4;
    }
}