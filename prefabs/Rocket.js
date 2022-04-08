class Rocket extends Phaser.GameObjects.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
	    super(scene, x, y, texture, frame);

	    // add object to existing scene
	    scene.add.existing(this);
    }
    update(){
        if(this.firing){
            this.y -= 10;



        }
    }

    reset(){
        
    }
}