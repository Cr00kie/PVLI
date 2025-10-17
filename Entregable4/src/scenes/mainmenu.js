
export default class MainMenu extends Phaser.Scene{
    constructor(){
        super({key: 'mainmenu'});
    }

    preload(){
        this.load.image('start', '../../assets/start.png');
        this.load.image('castle', 'assets/castle.gif');
        this.load.spritesheet('bat', 'assets/batIdle.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('batDeath', 'assets/batDeath.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('slime', 'assets/greenSlime.png', {frameWidth: 48, frameHeight: 48});
    }

    create(){
        let title = this.add.text(this.scale.width/2, this.scale.height/2-100, 'TENGO SUEÑO').setOrigin(0.5,0.5);
        title.setFontSize(64);
        let button = this.add.image(this.scale.width/2, this.scale.height/2, 'start');
        button.scale = 0.5;
        button.setInteractive();
        button.on('pointerdown', ()=>{this.scene.start('maingame')});
    }
}