class SpaceShip extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        this.moveSpeed = 2;
	    super(scene, x, y, texture, frame);
    }
    update(){
        this.x-=5;
        if (this.x < 0){
            this.x = game.config.width;
        }
    }
}