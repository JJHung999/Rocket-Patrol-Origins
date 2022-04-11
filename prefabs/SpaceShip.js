class SpaceShip extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
	    super(scene, x, y, texture, frame);
        this.moveSpeed = 2;

        // add object to existing scene
	    scene.add.existing(this);
    }
    update(){
        this.x-=5;
        if (this.x < 0){
            this.x = game.config.width;
        }
    }
    reset() {
        this.x = game.config.width;
    }
}