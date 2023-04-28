// querySElector -> selecciona el primero q encuentra
// Seleccionando un elemento del archivo HTML, sea etiqueta, id, class, type ...etc
const h1 = document.querySelector('h1'); 
const p = document.querySelector('p');
const new_parrafo = document.querySelector('.new'); // Para seleccionar clases del html
const new_id = document.querySelector('#new_id');
const input = document.querySelector('input');

// querySelectorAll -> Selecciona toda la lista de un solo elemento, es decir todos los q tengan ese id, o esa clase o esa etiqueta
const p_all= document.querySelectorAll("p");

// getElementByClassName -> Selecciona todos los elementos segun el nombre dado
const select_new = document.getElementsByClassName('new');

// getElementById -> Selecciona el elemento id segun el nombre dado
const select_new_id = document.getElementById('new_id')

// EStre console.log se hace para poder mirar las propiedades del archivo y poder ver cual obketo seleccionamos, DEBUG
console.log({
    h1,
    p,
    new_id,
    new_parrafo,
    input,
    p_all,
    select_new,
    select_new_id
})

// Podemos manejear , extrarer las propiedades(decenas) de los objetos
console.log(input.value)

// Propiedad .innerHTML -> Permite modificar lo q este dentro de la etiqueta, podemos ingresar texto y html principalmente HTML
h1.innerHTML = 'Dieguito <br/> Feo'; // No es bueno hacerlo porque pueden ingresar texto malicioso, forma basica

// Propiedad .innerTEXT -> Permite modificar lo q esta dentro de la etiqueta, he interpretarlo como solo texto
p.innerText = "Texto solamente no traduce <br/> a HTML";

// Propiedad .getAttribute optenemos el atributo q le colocamos a la etiqueta
console.log(h1.getAttribute("pantalla")) // obtener el atributo inventadi pantalla
console.log(h1.getAttribute("class")) // obtener el tributo class del objeto

// Propiedad .setAttribute("nombre_atributo", "valor_tributo") -> "nombre_atributo": nombre atributo inventado o no, "valor_tributo": nuevo valor del atribuo
h1.setAttribute('class', 'rojo');

// Propiedad solo para clases .classList

//* .classlist.add("valor_de_la_clase_agregada") -> Agrega clase
h1.classList.add("amarillo")

//* .classlist.remove("valor_de_la_clase_agregada") -> ELimina clase
h1.classList.remove("rojo")

//* .classlist.toggle("valor_de_la_clase_agregada") -> EStudiar
// h1.classList.toogle("rojo")

//* .classlist.contains("valor_de_la_clase_agregada") -> EStudiar
// h1.classlist.contains("rojo")

// con input.value, podemos modificar segun lo que queramos, sin nesecidad de hacer un getAttribute o un set.Attribute
input.value = "456"

// Crear etiqueta, o crea un elemento, img, hq, iframe... etc
document.createElement('img');
console.log(document.createElement('img'));

console.log(document.createElement('span'));

const img = document.createElement('img');

// colocar atributo al elemento creado
img.setAttribute("src", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4437E3CC8B9CC333FB6A957AE2DEDA2C542737E96664D2B09342F1F6F9170C43/scale?width=1200&aspectRatio=1.78&format=jpeg")
console.log(img);

select_new_id.append(img);// Agrega elemento despues del q ya esta

// * para vaciar el elemento y colocarle uno nuevo
select_new_id.innerHTML = "";
select_new_id.append(img);