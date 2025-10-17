import Bat from "../enemies/bat.js";
import Slime from "../enemies/slime.js";


/**
 * Escena principal de juego.
 * @extends Phaser.Scene
 */
export default class Animation extends Phaser.Scene {
    
    constructor() {
        super({ key: 'maingame3' });
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
        
        this.anims.create({
            key: 'slime_idle',
            frames: this.anims.generateFrameNumbers('slime', {start:0, end:3}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'slime_death',
            frames: this.anims.generateFrameNumbers('slime', {start:30, end:39}),
            frameRate: 5,
            repeat: 0
        });

        // this es la escena
        // vamos a posicionarlo en el centro del canvas con this.sys.game.canvas.width*0.5, this.sys.game.canvas.height*0.5
        // nuestro enemigo va a tener 20 de vida y 1 de defensa
        // además vamos a pintarlo con un spritesheet que tendremos que haber cargado antes en el método preload y cuyo id será 'bat'. Lo primero que pintaremos es el primer frame (frame 0)
        let bat1 = new Bat(this, this.scale.width/4, 100);
        let bat2 = new Bat(this, 2*this.scale.width/4, 100);
        let bat3 = new Bat(this, 3*this.scale.width/4, 100);
        let slime = new Slime(this, this.scale.width/2, 300);
        
        bat1.setInteractive();
        bat2.setInteractive();
        bat3.setInteractive();
        slime.setInteractive();

        bat1.scale = 3;
        bat2.scale = 3;
        bat3.scale = 3;
        slime.scale = 3;

        bat1.on("pointerdown", ()=>{bat1.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena
        bat2.on("pointerdown", ()=>{bat2.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena
        bat3.on("pointerdown", ()=>{bat3.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena
        slime.on("pointerdown", ()=>{slime.hit(12)}) //bat es una variable donde hemos guardado el `Bat` instanciado en la escena

        this.physics.add.collider(floor, bat1); //con esto indicamos que suelo y muciélago colisionan, y si sucede, se llama a la función callback pasada como tercer parámetro (prodíamos no pasar función)
        this.physics.add.collider(floor, bat2); //con esto indicamos que suelo y muciélago colisionan, y si sucede, se llama a la función callback pasada como tercer parámetro (prodíamos no pasar función)
        this.physics.add.collider(floor, bat3); //con esto indicamos que suelo y muciélago colisionan, y si sucede, se llama a la función callback pasada como tercer parámetro (prodíamos no pasar función)

        this.enemyCounter = 4;
    }

    update(time, dt){
        
    }

    onEnemyDeath(){
        this.enemyCounter--;
        if(this.enemyCounter == 0){
            // Un delay y ya. Me quiero ir a dormir
            this.time.delayedCall(3000, ()=>{this.scene.start('mainmenu')});
        }
    }
}