class Rocket extends Phaser.GameObjects.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        this.moveSpeed = 2;
	    super(scene, x, y, texture, frame);
        this.firing = false;

	    // add object to existing scene
	    scene.add.existing(this);
    }
    update(){
        const movementspeed = 4; 
        if(keyLEFT.isDown){
            this.x -= movementspeed;
        }
        if(keyRIGHT.isDown){
            this.x += movementspeed;
        }
        if(this.firing){
            this.y -= 10;

            if(this.y < 0){
                this.reset();
            }
        }
    }

    reset(){
        this.y = 431;
        this.firing = false;
    }

}
