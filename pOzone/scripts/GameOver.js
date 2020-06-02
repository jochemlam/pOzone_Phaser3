class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background_menu");
        this.background.setOrigin(0, 0);

        this.add.bitmapText(32, config.height / 2 - 16, "pixelFont", "Press space to", 32);
        this.add.bitmapText(32, config.height / 2 + 16, "pixelFont", "start over", 32);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }




    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.start("playGame");
        }
    }
}