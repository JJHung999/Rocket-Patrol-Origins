class Play extends Phaser.scene {
    constructor() {
        super("Play");
    }
    preload(){
        this.preload.image("starfield","assets/starfield.png")
    }
    create(){
        this.add.tileSprite(20, 20, game.config.width, game.config.heigh, "starfield").setOrigin(0,0)
        this.add.rectangle(100,100, game.config.width, borderUISize * 2, 0xfacade)
        this.add.rectangle(100,100, game.config.width, borderUISize * 2, 0xfacade)
    }

    update() {
        this.bg.tilePositionX -= 4;
    }
}