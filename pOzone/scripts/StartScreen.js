class StartScreen extends Phaser.Scene {
    constructor() {
        super("startScreen");
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background_menu");
        this.background.setOrigin(0, 0);

        this.add.bitmapText(12, config.height / 2, "pixelFont", "Press space to start", 32);

        //instructions
        this.add.bitmapText(12, config.height -36, "pixelFont", "arrow keys to move", 16);
        this.add.bitmapText(12, config.height - 20, "pixelFont", "space to shoot", 16);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }




    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.start("playGame");
        }
    }
}