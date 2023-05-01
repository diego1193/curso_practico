const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#resultado')
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form')
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

btn.addEventListener('click', clickButtom);// Evento con formulario con type="buttton"
function clickButtom(){
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInput;
}