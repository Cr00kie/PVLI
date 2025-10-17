import Bat from "../enemies/bat.js";
import Slime from "../enemies/slime.js"
import LifeBar from "../enemies/lifebar.js";


/**
 * Escena principal de juego.
 * @extends Phaser.Scene
 */
export default class Animation extends Phaser.Scene {
    
    constructor() {
        super({ key: 'maingame2' });
    }
    
    init(){
        
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
        this.add.image(0, 0, 'castle').setOrigin(0, 0);

        let floor = this.add.rectangle(this.scale.width * 0.5, this.scale.height * 0.83, this.sys.game.canvas.width, 10, 111, 0);
        this.physics.add.existing(floor, true);

        this.anims.create({
            key: 'bat_idle',
            frames: this.anims.generateFrameNumbers('bat', {start:0, end:3}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'bat_death',
            frames: this.anims.generateFrameNumbers('batDeath', {start:0, end:4}),
            frameRate: 5,
            repeat: 0
        });

        // this es la escena
        // vamos a posicionarlo en el centro del canvas con this.sys.game.canvas.width*0.5, this.sys.game.canvas.height*0.5
        // nuestro enemigo va a tener 20 de vida y 1 de defensa
        // además vamos a pintarlo con un spritesheet que tendremos que haber cargado antes en el método preload y cuyo id será 'bat'. Lo primero que pintaremos es el primer frame (frame 0)
        let bat = new Bat(this, this.scale.width/3, 100);
        let bat2 = new Bat(this, 2*this.scale.width/3, 100);
        
        bat.setInteractive();
        bat2.setInteractive();

        bat.scale = 3;
        bat2.scale = 3;

        bat.on("pointerdown", ()=>{bat.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena
        bat2.on("pointerdown", ()=>{bat2.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena
        

        this.physics.add.collider(floor, bat); //con esto indicamos que suelo y muciélago colisionan, y si sucede, se llama a la función callback pasada como tercer parámetro (prodíamos no pasar función)
        this.physics.add.collider(floor, bat2); //con esto indicamos que suelo y muciélago colisionan, y si sucede, se llama a la función callback pasada como tercer parámetro (prodíamos no pasar función)

        this.enemyCounter = 2;
    }

    update(time, dt){
        
    }

    onEnemyDeath(){
        this.enemyCounter--;
        if(this.enemyCounter == 0){
            // Un delay y ya. Me quiero ir a dormir
            this.time.delayedCall(3000, ()=>{this.scene.start('maingame3')});
        }
    }
}