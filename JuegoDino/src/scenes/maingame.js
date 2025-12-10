import { Cactus } from "../enemies/Cactus.js";

/**
 * Escena principal de juego.
 * @extends Phaser.Scene
 */
export default class Gameplay extends Phaser.Scene {
    
    constructor() {
        super({ key: 'gameplay' });
    }
    
    init(){
        
    }

    /**
     * Carga de recursos
     */
    preload(){
        this.load.image('bunny1_walk1', '../../assets/Players/bunny1_walk1.png');
        this.load.image('bunny1_walk2', '../../assets/Players/bunny1_walk2.png');
        this.load.image('platform', '../../assets/Environment/ground_grass.png');
        this.load.image('cactus', '../../assets/Environment/cactus.png');
        this.load.image('grass1', '../../assets/Environment/grass1.png');
        this.load.image('grass2', '../../assets/Environment/grass2.png');
        this.load.image('castle', 'assets/castle.gif');
    }
    
    /**
    * Creación de los elementos de la escena principal de juego
    */
    create() {
        // this.anims.create({
        //     key: "playerWalk",
        //     duration: 100,
        //     frame: [{key: 'bunny1_walk1', frame: 0},{key: 'bunny1_walk2', frame: 1}],
        //     repeat: -1,
        // })
        
        this.player = this.add.sprite(100, 300, "bunny1_walk1", 0).setScale(0.2)
        this.physics.add.existing(this.player, false);
        this.player.play("playerWalk");

        this.platform1 = this.add.sprite(-100, 350, "platform", 0).setScale(5, 0.7).setOrigin(0)
        this.physics.add.existing(this.platform1, true);

        this.cactus1 = new Cactus(this, 700, 300, "cactus", 0);
        this.cactus2 = new Cactus(this, 1000 + Math.random()*300, 300, "grass1", 0);
        this.cactus3 = new Cactus(this, 1300 + Math.random()*300, 300, "grass2", 0);
        

        this.input.on('pointerdown', this.playerJump, this);

        this.physics.add.collider(this.player, this.platform1);
        this.physics.add.collider(this.cactus1, this.platform1);
        this.physics.add.collider(this.cactus2, this.platform1);
        this.physics.add.collider(this.cactus3, this.platform1);
        this.physics.add.collider(this.player, [this.cactus1, this.cactus2, this.cactus3], this.onPlayerHit, null, this);

    }
    
    playerJump(){
        this.player.body.setVelocityY(-300)
    }

    onPlayerHit(){
        this.scene.stop();
        this.scene.start('derrota');
    }

    update(time, dt){

    }
    
}