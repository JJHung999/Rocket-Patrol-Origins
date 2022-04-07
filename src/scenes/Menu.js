class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    create(){
        let menutext = this.add.text(300, 240, "menu goes here")
        menutext.setOrigin(0.5,0.5);

        this.scene.start("Play")
    }
}