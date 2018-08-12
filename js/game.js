// scene called game
let game_scene = new Phaser.Scene("Game");

// config
let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: game_scene
};

// create game with config
let game = new Phaser.Game(config);

// loads all assets for game
game_scene.preload = function() {
    this.load.image('background', 'assets/background.png');
    this.load.image('spaceship', 'assets/spaceship.png');
};

// executes once after all assets loaded
game_scene.create = function() {
    // create background
    let bg = this.add.sprite(0, 0, "background");
    let ship = this.add.sprite(0, 0, "spaceship");
    // change origin
    bg.setOrigin(0, 0);
    ship.setOrigin(-9, -5);
};
