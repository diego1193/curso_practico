var nombre = "Diego Mauricio";
var apellido = "Cabrera Pineda";
var nombre_usuario_platzi = "diego1193";
var edad = 23;
var correo = "diegocabrera1193@gmail.com";
var mayor_edad = true;
var dinero_ahorrado = 0;
var deudas = 20000000;

var nombre_completo = nombre + " " + apellido;
var dinero = dinero_ahorrado - deudas;


//// funcion declarativa //////////////
const saludo = function(completeName, nickname){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + " " + lastname;
const nickname = "juandc";
saludo(completeName, nickname);


////// Condicionales //////
const tipoDeSubscripcion = "Basic"

if (tipoDeSubscripcion === "Basic"){
    console.log("Puedes tomar todos los cursos durante un mes");
} else if ( tipoDeSubscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if ( tipoDeSubscripcion === "Expert" ){
    console.log("Puedes tomar casi todos los cursos gratis durante un año");
} else if ( tipoDeSubscripcion === "ExpertPlus" ){
    console.log ("Tu y alguien más puede tomar los cursos gratis durante un año")
}

 ////////////////// ciclos ////////////////
 let i = 0;
 while (i < 5){
    console.log("el valor de i es: " + i);
    i++;
}

let j = 10;
while (j >= 2){
    console.log(" el valor de j es igual a: " +j);
    j--;
}

////////////// ARRAY //////////////////
function primero_lista(lista){
    console.log(lista[0]);
}

function imprime_todo(lista){
    for (let list of lista){
        console.log(list);
    }
}

function imp_obj(objs){
    for (let obj in objs){
        console.log(`${obj} : ${objs[obj]}`);
    }
}

const fruta = ["Melon", "Manzana", "Banano", "Pera"];
primero_lista(fruta);
imprime_todo(fruta);

function obj_fruta(nombre, sabor){
    this.nombre = nombre;
    this.sabor = sabor;
}

let frutas = new obj_fruta("Mora", "Dulce");
imp_obj(frutas);
