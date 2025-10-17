import Enemy from "./enemy.js";

export default class Slime extends Enemy{
    constructor(scene, x, y){
        super(scene, x, y, 40, 4, 'slime', 0); 
        this.play('slime_idle')
        this.setInteractive();
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        
    }

    die(){
        super.die();
        this.play('slime_death');
        this.disableInteractive();
    }
}