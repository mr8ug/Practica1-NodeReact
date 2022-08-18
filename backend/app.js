"use strict";

//cargar modulos de node 4 servidor
var express = require("express");

var bodyparser = require("body-parser");

//ejecutar express http
var app = express();

const max_fibonacci = 35;
const fibonacci_array = [];


// cargar  ficheros de rutas



//middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Prefijos de rutas / cargar rutas

//CARGA INFORMACION DE GRUPO
app.get("/", (req, res) => {
    return res.status(200).send({
        name : "Analisis y Diseño 1 ",
        website: "Practica 1 - Grupo #7",
        
        1:{nombre: "Jairo Sebastian Ramírez Palacios",carnet: "201800712"},
        2:{nombre: "José Francisco Santos Salazar",carnet: "201643762"},
        3:{nombre: "W Guay Sen Rafael Herrador Reyes",carnet: "200714200"},
        4:{nombre: "Carlos Emilio Campos Morán",carnet: "201612332"}
        
    })

});


 //RETORNA SI NUMERO ES PAR O IMPAR
app.post("/PAROIMPAR/:NUMERO", (req, res) => {
    //console.log('Hola mundo')
    var numero = req.params.NUMERO;
    //funcion par o impar
    var resultado = (numero % 2 == 0) ? "par" : "impar";
    
    return res.status(200).send({
        resultado: numero +" es "+resultado
        
    });
});


//funcion de fibonacci
function fibonacci(numero){
    if(numero == 0){
        return 0;
    }
    if(numero == 1){
        return 1;
    }
    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

//RETORNA FIBONACCI
app.get("/fibo/:NUMERO", (req, res) => {
    
    var numero = req.params.NUMERO;
    //calcular fibonacci
    var resultado = fibonacci(numero);

    return res.status(200).send({
        resultado:  resultado
    });

});

//RETORNA PALABRA ALREVEZ
app.get("/ALREVEZ/:PALABRA", (req, res) => {
    var palabra = req.params.PALABRA;
    //calcular fibonacci
    var resultado = palabra.split("").reverse().join("");
    


    return res.status(200).send({
        resultado:  resultado.toLowerCase()
    });

});


//RETORNA POTENCIA CUBICA
app.get("/potencia/:NUMERO", (req, res) => {
    var numero = req.params.NUMERO;
    //calcular cubo
    var resultado = Math.pow(numero,3);

    return res.status(200).send({
        resultado:  resultado
    });
});


//RETORNA RAIZ CUBICA
app.get("/raiz/:NUMERO", (req, res) => {
    var numero = req.params.NUMERO;
    //calcular raiz
    var resultado = Math.cbrt(numero);

    return res.status(200).send({
        resultado:  resultado
    });
});

//RETORNA DIVISION
app.get("/division/:NUMERO1/:NUMERO2", (req, res) => {
    var numero1 = req.params.NUMERO1;
    var numero2 = req.params.NUMERO2;
    //calcular division
    var resultado = numero1 / numero2;

    
    if(numero2 == "0"){
        return res.status(200).send({
            resultado:  "No se puede dividir por 0"
        });
    }else{
        return res.status(200).send({
            resultado:  resultado
        });
    }
        
    
}
);

//RETORNA DIVISION
app.get("/multiplicacion/:NUMERO1/:NUMERO2", (req, res) => {
    var numero1 = req.params.NUMERO1;
    var numero2 = req.params.NUMERO2;
    //calcular division
    var resultado = numero1 * numero2;

    return res.status(200).send({
        resultado:  resultado
    });
}
);

//exportar modulo (fichero actual)
module.exports = app;
