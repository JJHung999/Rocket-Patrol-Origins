//Part of first renditions of this code, but not in later ones. Also caused errors
//const { Phaser } = require("../lib/phaser");

console.log("Hello from main.js");

let config = {
    type: Phaser.CANVAS,
    width: 640, 
    height: 480,
    scene: [Menu,Play]
};

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderpadding = borderUISize / 3;
