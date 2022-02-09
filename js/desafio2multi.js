
//Franco Urra

let num1 = parseInt(prompt("Ingrese Numero para crear la tabla de Multiplicar:"));

if (num1>0 && num1<20 ) {
    function Multiplicar(j) {
        document.write("<h2>Tabla de multiplicar del " + j + "</h2>");
        
        document.write("<ul>");       
        
        for (i = 1; i <= num1; i++) {
            
            console.log(num1 + " x " + i + " = " + num1 * i  );
            
            //calculando Factorial
            for (let x = 0; x < j; x++) {
                
                console.log(` El factorial de ${j} es ${x} `);
            }
            
        }
    }
    
    Multiplicar(num1);
} else {
    alert('Favor ingresar un numero entre 1 y 20')
}

/* function Multiplicar(j) {
    document.write("<h2>Tabla de multiplicar del " + j + "</h2>");
    
    document.write("<ul>");       
    
    for (i = 1; i <= num1; i++) {
        
        console.log(num1 + " x " + i + " = " + num1 * i  );
        
        //calculando Factorial
        for (let x = 0; x < j; x++) {
            
            console.log(` El factorial de ${j} es ${x} `);
        }
        
    }
}

Multiplicar(num1);
 */