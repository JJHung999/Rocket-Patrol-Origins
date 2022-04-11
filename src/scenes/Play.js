class Play extends Phaser.Scene {

    constructor() {
        super("Play");
    }
    preload(){

        // loading images/tile sprites
        this.load.image('rocket', './assets/Rocket.png');
        this.load.image('spaceship', './assets/SpaceShip.png');
        this.load.image('starfield', './assets/starfield.png');

        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});

    }
    create(){

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
        //background
        this.starfield = this.add.tileSprite(20, 20, game.config.width, game.config.height, "starfield").setOrigin(0,0);

        // add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket').setOrigin(0, 0);
        this.p1Rocket.reset();

        //green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // add ship
        this.shipA = new SpaceShip(this,300,300, 'spaceship');
        this.shipB = new SpaceShip(this,400,150, 'spaceship');
        this.shipC = new SpaceShip(this,100,200, 'spaceship');



        //explosion animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            framerate:30
        });

        // initialize score
        this.p1Score = 0;

    }

    
    update() {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();

        this.shipA.update();
        this.shipB.update();
        this.shipC.update();

        if(Phaser.Input.Keyboard.JustDown(keyF)){
            console.log("Key Down")
            this.p1Rocket.firing =true;
        }


        // check collisions
        if(this.checkCollision(this.p1Rocket, this.shipC)) {
            this.p1Rocket.reset();
            this.shipExplode(this.shipC);   
        }
        if (this.checkCollision(this.p1Rocket, this.shipB)) {
            this.p1Rocket.reset();
            this.shipExplode(this.shipB);
        }
        if (this.checkCollision(this.p1Rocket, this.shipA)) {
            this.p1Rocket.reset();
            this.shipExplode(this.shipA);
        }

    }
    //collision check goes here if it could work
    checkCollision(Rocket, SpaceShip) {
        if (Rocket.x < SpaceShip.x + SpaceShip.width && 
            Rocket.x + Rocket.width > SpaceShip.x && 
            Rocket.y < SpaceShip.y + SpaceShip.height &&
            Rocket.height + Rocket.y > SpaceShip. y) {
                return true;
                console.log("hit")
        } else {
            return false;
        }
    }
    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          ship.reset();                         // reset ship position
          ship.alpha = 1;                       // make ship visible again
          boom.destroy();                       // remove explosion sprite
        });       
      } 
}
