class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
	    super(scene, x, y, texture, frame);
        this.moveSpeed = 2;
        this.firing = false;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        //music var
        this.music = scene.sound.add('music');

	    // add object to existing scene
	    scene.add.existing(this);
        this.music.play();
    }
    
    update(){
        
        const movementspeed = 4; 
        if(keyLEFT.isDown){
            if (this.x < 40){
                this.x = 40;
            }
            else{
                this.x -= movementspeed;
            }
        }
        if(keyRIGHT.isDown){
            if (this.x > game.config.width-45){
                this.x = game.config.width-45;
            }
            else{
                this.x += movementspeed;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.firing) {
            this.firing = true;
            this.sfxRocket.play();  // play sfx
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
