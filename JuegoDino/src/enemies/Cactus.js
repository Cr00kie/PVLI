export class Cactus extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this, false);
        this.body.setVelocityX(-200);
        this.setScale(0.2).setOrigin(1);
        console.log(texture);
    }
    preUpdate(t, dt){
        super.preUpdate(t, dt);

        if(this.x < -50){
            this.x = 700 + Math.random()*300
        }
        
    }
}