// Trae el primer elemento segun su clase o tag o id .. etc
const h1 = document.querySelector('h1'); // Trae el primer h1 q encuentra
const h1_class = document.querySelector('.class_h1')
const input = document.querySelector('input'); // Trae el primer input
console.log(h1);

// Trae todos los elementos segun su clase o tag o id .. etc
const h1s = document.querySelectorAll('h1'); // Trae todos los h1, trae una lista un NodeList
console.log(h1s);

//  traer elementos por la clase
const p_class = document.querySelector('.class_p'); // Trae la primera clase con ese nombre
console.log(p_class);

const h1_get_element_class = document.getElementsByClassName('class_h1'); // Trae tiodas las clases con ese nombre
console.log(h1_get_element_class);

// trae elementos por id
const p_id = document.querySelector('#id_p');
console.log(p_id);

// Trae unicamente los tags con el nombre q solicitemos
const h1_get_element_tag = document.getElementsByTagName('h1');
console.log(h1_get_element_tag);

// Imprime todos y cada uno de los elementos, junto a su posicion y sus propiedades
console.log({
    h1,
    input,
    h1s,
    p_class,
    h1_get_element_class,
    h1_get_element_tag,
    p_id
})

console.log('------------------------------------');
console.log(input.value);

// Insertamos codigo e intrepreta HTML, Pero no es recomendado ya puede utilizarce por ataques por ataques maliciosps
h1.innerHTML = 'Diguito <br/> Feo';

// Insertamos unicamente codigo al elemento, no interpreta HTML
p_class.innerText = 'estO es un parrafo <br/> pero no lee HTML';

// trae el valor del atributo q tomamos del elemento
console.log(h1_class.getAttribute('monitor'));

console.log(h1_class.getAttribute('class'));

// Coloca un nuevo atributo al elemnto con un elemento
h1_class.setAttribute('joder', 'flinpando');

get_node_class = p_class.getAttributeNode('class'); // Optenemos el atributo del elemento su valor

// setAttributeNode son rara vez usados y cloneNode sirve para clonar valor del atributo
nodo_joder = h1_class.setAttributeNode(get_node_class.cloneNode(true)); // realizamos la copia del valor del atributo del elemento y lo colacos en la otra etiqueta
nodo_joder = h1_class.setAttributeNode(get_node_class.cloneNode(true)); // realizamos la copia del valor del atributo del elemento y lo colacos en la otra etiqueta
h1_class.removeAttribute('monitor'); // Elimina atrubuto q le coloquemos 

h1_class.className = 'new_clas'; // remplazamos el valor de la clase
h1_class.classList.add('verde'); // se agrega el atributo class y se le assigna un valor o se le agrega un nuevo valor al atributo

h1_class.classList.remove('new_clas'); // elimina valor q le digamos
h1_class.classList.toggle('violeta'); // Activa y desactiva clases mas utlizados con div o span, bloques y colocar estilos y tambien agregar valores a la clase

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

p_id.append(img);// Agrega elemento despues del q ya esta

// * para vaciar el elemento y colocarle uno nuevo
p_id.innerHTML = "";
p_id.append(img);
