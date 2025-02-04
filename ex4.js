// Implementa el tipo de dato 'Array' que ofrece JavaScript; y algunos de sus métodos

// El constructor no tiene parámetros, sin embargo, debe inicializar una propiedad, por ejemplo this.elements como un valor de tipo array vació.

// Método 'addNew'. Añade un nuevo elemento al array. Puedes utilizar el método 'push' de JavaScript

// Implementa el método 'findIndex'. El método findIndex devuelve la posición un elemento se encuentra dentro del array. En caso de no estar, devuelve un -1. NO puedes utilizar el método 'findIndex' de JavaScript!

// Implementa el método 'join'. El método 'join' devuelve un string, con todos los elementos del array concatenadors por un separados, que debes pasar como argumento

class Array {
    constructor(){
        this.array = []
    }
    addNew (element){
        this.array.push(element)
    }

    findIndex(element){ // Cuki
        for (let i = 0; i <= this.array.length - 1; i++){
            if (element === this.array[i]){
                return i
            }
            }
            return -1
        }
        //let indexOfElement;

        // this.array.forEach((e, index) => {
        //     if (e === element){
        //         indexOfElement = index
        //     }else{
        //         indexOfElement = -1
        //     }
            
        // })
        // return indexOfElement
    }


// PRUEBAS
const gatos = new Array()
gatos.addNew('Michi')
gatos.addNew('Cuki')
gatos.addNew('Loki')

console.log(gatos)


// Debe devolver un 1
console.log(gatos.findIndex('Cuki'))


// Debe devolver 'Michi-Cuki-Loki'
// console.log(gatos.join('-'))