export default class LifeBar extends Phaser.GameObjects.Rectangle{
    constructor(scene, x, y, width, maxValue){
        super(scene, x, y, width, 8, 0xffff0000) // esto crea un rectángulo rojo de 50x8 px 
        this.maxValue = maxValue;
        this.maxWidth = width;
        scene.add.existing(this) // y lo añadimos a la escena
    }

    preUpdate(t, dt){ //podemos aprovechar este método para crear animaciones de la barra de vida.
        
    }

    updateValue(newValue){
        this.width = this.maxWidth * (newValue/this.maxValue);
    }
}