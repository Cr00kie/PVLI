

/**
 * Escena principal de juego.
 * @extends Phaser.Scene
 */
export default class Derrota extends Phaser.Scene {
    
    constructor() {
        super({ key: 'derrota' });
    }

    /**
     * Carga de recursos
     */
    preload(){
        
    }
    
    /**
    * Creación de los elementos de la escena principal de juego
    */
    create() {
        let title = this.add.text(this.scale.width/2, this.scale.height/2-100, 'HAS PERDIDO').setOrigin(0.5,0.5);
        title.setFontSize(20);
        let button = this.add.image(this.scale.width/2, this.scale.height/2, 'start');
        button.scale = 0.5;
        button.setInteractive();
        button.on('pointerdown', ()=>{this.scene.start('mainmenu')});
    }

    update(time, dt){
        
    }
}