window.onload = function() {
    var button = this.document.getElementById('summon');
    button.addEventListener('click', function (){
        document.getElementById('kittens').innerHTML += '<img src="https://placekitten.com/g/200/200/" alt="gatito" />'
    });
}