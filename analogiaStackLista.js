/*
ANALOGIA DEL STACK
----------------------

OBSERVADOR DEL STACK

|    Direccion de la vista del observador (cenital)
v

Elemento 7 // Ultimo elemento en haber entrado = Unico elemento observable actualmente
Elemento 6
Elemento 5
Elemento 4
Elemento 3
Elemento 2
Elemento 1
Elemento 0
Fondo del stack

----------------------
PRINCIPIOS DE LA IMPLEMENTACION DE UN STACK

1. LIFO, EL ULTIMO EN ENTRAR ES EL PRIMERO EN SALIR DEL STACK
2. EL USUARIO NO TIENE LA OPCION DE DECIDIR QUE ELEMENTO ELIMINAR DEL STACK, SOLO PODRA ELIMINAR EL ULTIMO
3. SE PUEDE INGRESAR ELEMENTOS AL STACK
4. LA UNICA INFORMACION QUE EL STACK PUEDE PROPORCIONAR AL USUARIO ES SU LONGITUD y SU ULTIMO ELEMENTO, mas obviamente ver la totalidad de los elementos sin embargo este metodo muestra en si todo el stack, no hay forma de ver un elemento en especifico a parte del ultimo.

// LA IMPLEMENTACION SE BASARA EN ESTOS 4 PRINCIPIOS QUE YO HE ENTENDIDO HASTA EL MOMENTO XD
// LES AGRADEZCO SI VEN ALGUN ERROR

*/

// HASTA DONDE SE HAY 3 FORMAS DE REALIZAR IMPLEMENTACIONES DE STACK
// 1. CON POINTERS/FLECHAS (ESTAS MANTIENEN UNA UNION ENTRE ULTIMO Y ANTERIOR) SIN EMBARGO SE ME HACEN DEMASIADO SIMILARES A UNA LISTA ENLAZADA POR LO QUE NO LAS IMPLEMENTARE
// 2. CON LISTAS (ESTAS SON LAS MAS SECILLAS SEGUN YO, NOS PERMITEN USAR METODOS DE LISTA PARA AGREGAR ELIMINAR Y BUSCAR ELEMENTOS DE DICHA LISTA LA CUAL HARA DE RECIPIENTE PARA NUESTRO STACK)
// 3. CON OBJETOS (ESTAS NOS PERMITEN INGRESAR DE MANERA MAS ORGANIZADA LA INFORMACION POR ELEMENTO, ES DECIR PARA ELEMENTOS MUY COMPLEJOS CON PROPIEDADES PROPIAS (XD), SE USARIA ESTA IMPLEMENTACION, DE RESTO ES MEJOR NO USARLA PUES CARECE DE METODOS A DIFERENCIA DE LA LISTA)


// IMPLEMENTACION DE STACK CON LISTAS
//

class Stack {
    constructor(){
        // Declaramos el stack como una lista vacia
        this.stack = [];
        // Se declara que el observador al inicio ve al fondo del stack, pues este esta vacio
        // Top significa el elemento observado
        this.top = null; // Null == Fondo del stack, solo cuando el observador ve a al fondo significa que el stack esta vacio
    }   
    // Metodo para agregar elementos al stack

    // ACLARACION
    // this.stack hace referencia a la lista de la linea 45 por lo que a this.stack se le pueden usar metodos de listas convencionales, los usaremos mas adelante.
    // Todos los metodos hacen uso de return y un valor, no console.log por lo tanto para poder ver en consola dichos valores sera necesario llamar a los metodos dentro de un console.log(stack.metodo())
    push(element){
        const newElement = new Node(element); // Se crea declara un nuevo elemento, que contendra de valor (element) y se ingresa a la pila, tendra el valor de (element)
        this.stack.push(newElement); // Este push NO es el push de antes, es el metodo de las listas para agregar un nuevo item, pues this.stack es una lista. (No confundir)
        this.top = newElement; // Una vez ingresado el elemento a la lista, se declara al elemento nuevo como el elemento observado
    }
    peek() { // Devolver el ultimo elemento del stack, como no se permite al usuario elejir no hace falta ningun argumento
        return this.top;
    }
    pop() { // Eliminamos el ultimo elemnento del stack, como no se permite al usuario elejir cual eliminar no hace falta ningun argumento
        if (this.top != null){// Solo en caso de que el stack NO este vacio, es decir que vea un elemento diferente del fondo
            return this.stack.pop(); // Eliminamos el ultimo elemento del la lista stack, es decir nuesto stack. Para ello usamos el metodo de las listas pop que nos elimina el ultimo item.
        }
    }
    size(){
        return this.stack.length; // En este caso la forma mas sencilla es simplemente usar el metodo de length para saber el largo de la lista stack, nuestro Stack y devolverlo al usuario
    }
    log() { // Cambio de vista cenital (desde arriba) a horizontal (verlo de lado)
        return this.stack // Retornamos el stack en su totalidad al usuario, esta sera la unica forma en la que el usuario podra ver todos los elementos, en analogia seria como si cambiase de vista cenital (desde arriba) a verlo de forma horizontal. Sin embargo mantiene su incapacidad de sacar elementos diferentes al ultimo de la pila.
    }
    isEmpty() { // Verificamos si el stack esta vacio
        if ((this.size()) == 0) { // En caso de que este vacio
            return true; // Se da la confirmacion
        }
        else { return false; } // De lo contrario, se da la negacion
    }

}


// El nodo es el elemento, asi se le llaman a los elementos en los stacks (nodos)
class Node {
    constructor(value){
        this.value = value  // Cada nodo va a tener un valor, se ingresa al momento de llamar la clase ej new Node(23), ese nuevo nodo tendra el valor de 23
    }
}

// Ejemplo de un caso en el que se puede usar este stack
// Se pide al alumno crear un stack que al ingresar un numero, el stack contenga cada caracter de dicho numero como nodos en el stack


stackInicial = new Stack(); // Creamos un stack basado en la clase Stack que creamos antes
const numero = '123456'; // Simulamos una entrada del usuario con un numero, como las entradas serian string esta declaracion tambien sera string

for (n of numero){ // Por cada caracter del string
    stackInicial.push(n) // Ingresamos el elemento de esta iteracion
    // console.log(stackInicial) // Imprimimos como se ve el stack en cada iteracion
}
console.log('Log de stack completado'); // Hacemos una diferenciacion entre console.log's
console.log(stackInicial); // Imprimimos como se veria el stack al final de la operacion
console.log('Log de peek');
console.log(stackInicial.peek());
console.log('Log de pop');
console.log(stackInicial.pop());
console.log('Log del stack luego de pop');
console.log(stackInicial); // Verificamos si se elimino correctamente el ultimo elemento (6)
console.log(stackInicial.size());
console.log('Log de log');
console.log(stackInicial.log());
console.log('Log de empty');
console.log(stackInicial.isEmpty());

//if (this.top != null){// Solo en caso de que el stack NO este vacio, es decir que vea un elemento diferente del fondo