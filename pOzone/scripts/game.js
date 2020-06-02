var gameSettings = {
    playerSpeed: 200
}

var config = {
    width: 256,
    height: 272,
    backgroundColor: 0x0000000,
    scene: [Menu, StartScreen, PlayingGame, GameOver],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);