const weapons = document.getElementsByClassName('weapon');
const consumables = document.getElementsByClassName('consumable');
const miscs = document.getElementsByClassName('misc');

let weaponsButton = document.getElementById('weapons-button');
weaponsButton.onclick = () => {
    ToggleElements(weapons);
    ToggleButton(weaponsButton);
};

let consumablesButton = document.getElementById('consumables-button');
consumablesButton.onclick = () => {
    ToggleElements(consumables);
    ToggleButton(consumablesButton);
};

let miscsButton = document.getElementById('misc-button');
miscsButton.onclick = () => {
    ToggleElements(miscs);
    ToggleButton(miscsButton);
};

function ToggleElements(array){
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = array[i].style.display === 'none' ? 
            'table-row' : 'none';
    }
}

function ToggleButton(button){
    button.style.color = button.style.color === 'rgba(255, 255, 255, 0.3)' ? 'whitesmoke' : 'rgba(255, 255, 255, 0.3)';
}