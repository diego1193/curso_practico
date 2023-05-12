const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#resultado')
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form')
const div_my = document.querySelector('.class-div')
const window_my = document.querySelector("iframe")
const div_sec = document.querySelector("#div_sec")
const p_iframe = document.querySelector("#p_iframe")
// elemento.addEventListener('<evento al q queramos llamar>', <funcion_sun parentesis>)
// .addEventListener -> Lo q hace es escuchar cualquier evento q pase en ese elemento
// <evento al q queramos llamar> -> Espeficificamos de todos los eventos cual esd el q queremos llamar
//  <funcion_sun parentesis> -> Cundo courra el evento mandamos a llamar una funcion q querramon q llame, (el colo los parentesis)

//btn.addEventListener('click', btnOnClick);
// function btnOnClick() {
//     // input1.value., por defecto guarda todo lo q se escriba como si fuera un script 
//    console.log('entra ')
//    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
//    pResult.innerText = 'Resultado: ' + sumaInput;
// }

//////////////// EVENT 1ERA FORMA ////////////////
// SI EN EL HTML <button id="btnCalcular">Calcular</button>

// form.addEventListener('submit', submitButtom);// Evento con formulario 
// function submitButtom(event){ //se necesita el event, para q funcione como parametro
//     console.log(event)
//     event.preventDefault(); // para q no se recarge la pagina para q no se recague
//     const sumaInput = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = 'Resultado: ' + sumaInput;
// }


//////////////// EVENT segunda FORMA para trabajarlo como un boton////////////////
// SI EN EL HTML <button type="button" id="btnCalcular">Calcular</button>


div_my.addEventListener('mouseover', mauseover); //cuando pasamos el mause encima del div
function mauseover (){
    console.log("Entra");
    div_my.style.backgroundColor = 'yellow';
}

div_my.addEventListener('mouseout', () => { // Cuando quitamos el mouse encima del div
    div_my.style.backgroundColor = 'white';
} )

btn.addEventListener('click', clickButtom);// Evento con formulario con type="buttton"
function clickButtom(){
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInput;
}


window_my.addEventListener('load', () => { // Evnto cuando carga correctamente un iframe, ancla, div, imagen
    console.log("la pagina se a cargado")
})

/* Events fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);// Se especifica q tipo de dato se va a mover o trasportar
    document.getElementById("demo").innerHTML = "Started dragging.";
  });
  
  document.addEventListener("dragend", function(event) {
    document.getElementById("demo").innerHTML = "Finished dragging.";
  });
  
  /* Events fired on the drop target */
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
