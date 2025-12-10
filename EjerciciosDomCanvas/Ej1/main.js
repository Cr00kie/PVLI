console.log("Hola, mundo!");

window.onload = function() {
    document.body.innerHTML = '<h1>Hola, mundo!</h1>';
}

// Respuesta a la pregunta del ejercicio 1:
// # Ejercicio 1
// ## ¿Porqué sucede esto? (No se modifica el DOM si no te subscribes a `window.onload`)
// En el archivo `main.js`, accedemos al DOM de la página web con `document.body.innerHTML`. 
//      No obstante, el script `main.js` se carga en `<head>`, esto quiere decir que el resto del 
//      DOM todavía no se ha cargado, y por tanto no tenemos acceso al `body` porque todavía no existe. 
//      Es por eso que no imprime nada.

// Al subscribirnos al evento `window.onload`, garantizamos que el código se ejecute después de que la 
//      página se termine de cargar. `window.onload` es un evento que se llama cuando el DOM ya se ha cargado. 
//      En [mdn_](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) recomiendan solo usar 
//      el evento `load` para esperar por recursos externos. También se puede usar `defer` 
//      en `<script src="main.js" defer>` para hacer que el script se cargue después del DOM.