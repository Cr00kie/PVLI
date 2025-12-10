
export default class MainMenu extends Phaser.Scene{
    constructor(){
        super({key: 'mainmenu'});
    }

    preload(){
        this.load.image('start', '../../assets/start.png');
        this.load.image('castle', 'assets/castle.gif');
    }

    create(){
        let title = this.add.text(this.scale.width/2, this.scale.height/2-100, 'JUEGO DINO (NO TENEMOS SUFICIENTES INSIGNIAS)').setOrigin(0.5,0.5);
        title.setFontSize(20);
        let button = this.add.image(this.scale.width/2, this.scale.height/2, 'start');
        button.scale = 0.5;
        button.setInteractive();
        button.on('pointerdown', ()=>{this.scene.start('gameplay')});
    }
}