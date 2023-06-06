class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        // Get the actual date
        const currentDate = new Date()
        console.log(currentDate)
        // Get the expiration Date of the Dni
        const expirationDate = new Date(this.caducidad)
        console.log(expirationDate)
        // Return true or false if the currenDat
        return expirationDate > currentDate

        // const currentYear = new Date().getFullYear()
        // const dniYear = this.caducidad.slice(0,4)

        // //console.log(dniYear, currentYear)
        // return dniYear < currentYear
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {

        // What is a valid DNI number? The DNI format is 8 digits followed by a letter.
        // In what format the DNI is given? String "1234567A"
        // True if the string is a valid format.
            // How can I know if a string has a number or digits? 
            // We can use RegEx and test the following pattern [0-9]{8}[A-Z]{1}
        
        // 1. Create a variable holding the pattern value
        const pattern = new RegExp('[0-9]{8}[A-Z]{1}')
        //console.log(pattern)
        // 1. How to Check Whether a String Matches a RegEx
        return (pattern.test(this.numero) ? 'El DNI es válido.' : 'Formato de DNI incorrecto, favor de corregirlo.')

    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
       // Dividir el número completo de nuestro DNI entre 23 sin sacar decimales, redondeando el resultado.  
       
       

    }
}

const midni = new DNI("Pedro Vallés", "70973021N", "2025-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
midni.calculaLetraDni('70973021N')
