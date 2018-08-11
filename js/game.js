// scene called game
let game_scene = new Phaser.Scene("Game");

// config
let config = {
        type: Phaser.AUTO,
        width: 640,
        height: 360,
        scene: game_scene
};

// create game with config
let game = new Phaser.Game(config);
