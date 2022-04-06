const { Phaser } = require("../lib/phaser");

console.log("Hello from main.js");

let config = {
    type: Phaser.CANVAS,
    width: 640, 
    height: 480,
    scene: [Menu,Play]
};

let borderUISize = game.config.height / 15;
let borderpadding = borderUISize / 3;

let game = new Phaser.Game(config);