

/*  -----Ejercicio 1 --------*/ 
/*
años bisiestos
1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 
2020 ,2028, 2032, 2036, 2040, 2044, 2048, 2052, 
2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088,
 2092 y 2096
*/
console.log("ejercicio 1 ")
function bisiesto(ano) {
    if ((ano < 1900)||(ano >2100)) return false;
    return (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0))
    }

    function bisiesto(ano) {
        if ((ano < 1900)||(ano >2100)) return false;
        return (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0))
        }


    let anio1 = 2020;
    if (bisiesto(anio1)){
        console.log(anio1, "es bisiesto ")
    }else{
        console.log(anio1, "no es bisiesto ")
    }

/*  -----Ejercicio 2 --------*/ 

console.log("ejercicio 2 ")
const operacion="%"; // *
const x=20;
const y=4;

let resultadoCalculadora = 0

if(operacion === "+"){
    resultadoCalculadora = +x + +y;
    console.log("resultado suma: ", resultadoCalculadora)
}else if (operacion === "-"){
    resultadoCalculadora = +x - +y;
    console.log("resultado resta: ", resultadoCalculadora)
}else if (operacion === "*"){
    resultadoCalculadora = +x * +y;
    console.log("resultado multiplicacion: ", resultadoCalculadora)
}else if (operacion === "/"){
    if(+y !== 0){
        resultadoCalculadora = +x / +y;
        console.log("resultado division: ", resultadoCalculadora)
    }else {
        console.warn("el divisor debe ser distinto de cero")
    }
}else if (operacion === "^"){
    resultadoCalculadora = Math.pow(+x, +y);
    console.log("resultado exponenciacion: ", resultadoCalculadora)
}else if (operacion === "%"){
    resultadoCalculadora = +x % +y;
    console.log("resultado residuo: ", resultadoCalculadora)
}else {
    console.error("-1")
}


/*  -----Ejercicio 3 --------*/ 



let nombre1="cerveza 2.50 soles";
let nombre2="papitas 5.00 soles";
let cantidad=3;

function calcularPrecio (nombre, cantidad){

}






