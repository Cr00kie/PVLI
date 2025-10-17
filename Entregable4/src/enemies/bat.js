import Enemy from "./enemy.js";

export default class Bat extends Enemy{
    constructor(scene, x, y){
        super(scene, x, y, 20, 1, 'bat', 0); //Todos nuestros murciélagos tendrán 20 de vida y 1 de defensa. Estamos llamando al constructor de Enemy, que a su vez llamará al de Sprite de Phaser
        this.play('bat_idle');
        this.setInteractive();
        this.scene.physics.add.existing(this); //this es la escena
        this.body.setSize(16,16) //this es el objeto murciélago
        this.body.setAllowGravity(false); //this es el objeto murciélago
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        //Aquí podríamos dar un movimiento especial a nuestro murciélago
    }

    die(){
        super.die();
        this.body.setAllowGravity(true); //this es el objeto murciélago
        this.play('bat_death');
        this.disableInteractive();
    }
}