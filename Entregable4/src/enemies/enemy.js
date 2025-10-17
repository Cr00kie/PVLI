import LifeBar from "./lifebar.js";

export default class Enemy extends Phaser.GameObjects.Sprite {
    /**
     * Constructor de Enemigo
     * @param {Scene} scene - escena en la que aparece
     * @param {number} x - coordenada x
     * @param {number} y - coordenada y
     * @param {number} y - coordenada y
     */
    constructor(scene, x, y, life, defense, texture, frame) {
        super(scene, x, y, texture, frame); //En la doc de Phaser (https://newdocs.phaser.io/docs/3.86.0/Phaser.GameObjects.Sprite) veremos que
        
        this.lifeBar = new LifeBar(this.scene, this.x, this.y-50, 50, life);
        this.life = life; //La vida total que tendrá el enemigo.
        this.defense = defense; //La defensa que tendrá el enemigo, reducirá el daño de cada ataque.

        this.scene.add.existing(this); //Nos añadimos a la escena para ser mostrados.
    }

    /**
     * Bucle principal del personaje, actualizamos su posición y ejecutamos acciones según el Input
     * @param {number} t - Tiempo total
     * @param {number} dt - Tiempo entre frames
     */
    preUpdate(t, dt) {
        // Es muy imporante llamar al preUpdate del padre (Sprite), sino no se ejecutará la animación
        super.preUpdate(t, dt); 
    }

    /**
     * Método al que se llamará cuando muera el enemigo
     */
    die(){
        this.lifeBar.destroy();
        this.scene.onEnemyDeath();
    }

    /**
    * Método llamado para golpear al enemigo. 
    * @param {number} damage - daño recibido, al que se aplicará una reducción por la defensa que tengamos.
    */
    hit(damage){
        this.life -= (damage - this.defense);
        this.lifeBar.updateValue(this.life);
        console.log(this.life);
        if(this.life <= 0) this.die();
        this.setTint(0xffff0000) //color ARGB
        this.scene.time.addEvent({
            delay: 500,
            callback: ()=>{this.setTint(0xffffffff)}  //después de 0.5 segundos modificamos a un tinte blanco que dejará la imagen igual
        })
    }
}