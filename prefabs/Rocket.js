class Rocket extends Phaser.GameObjects.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        this.moveSpeed = 2;
	    super(scene, x, y, texture, frame);

	    // add object to existing scene
	    scene.add.existing(this);
    }
    update(){
        //if(this.firing){
            //this.y -= 10;
	    // TODO: only move if not firing
        // TODO: clamp to visible area
        if(keyLEFT.isDown) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown) {
            this.x += this.moveSpeed;
        }
    
    
        //}
    }

    reset(){
        
    }

}
