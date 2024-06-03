
//alumna: Julia Benavides , ejercicios js

/*---------Ejercicio 1 ----------*/ 

/*  años bisiestos
1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 
2020 ,2028, 2032, 2036, 2040, 2044, 2048, 2052, 
2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088,
 2092 y 2096  */

//.......declaracion de Funciones

function bisiesto(ano) {
    if ((+ano < 1900)||(+ano >2100)) return false;
    return (((+ano % 4 == 0) && (+ano % 100 != 0)) || (+ano % 400 == 0))
}




//.....declaracion de Variables

    let anio1 = document.getElementById('anio'); 
    const btncomprobar = document.getElementById("btncomprobar")
    let container =document.getElementById("container");
    let h2=document.querySelector("h2");
    let p1 = document.createElement("p1");

    btncomprobar.addEventListener("click", function (event) {
        event.preventDefault()
        p1.innerText = " ";
        if(anio1.value)  {
            if (bisiesto(anio1.value)){
                p1.innerText =anio1.value + " es un año bisiesto";
                container.insertBefore(p1, h2);
            }else{
                p1.innerText =anio1.value + " No es un año bisiesto ";
                container.insertBefore(p1,h2);
            }
        }else {
            p1.innerText ="ingrese un año ";
        }    
    })



/*  --------------- Ejercicio 2 -------------*/ 

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


/*  --------------------- Ejercicio 3 -------------------*/ 

console.log(".....ejercicio 3 .......")

let nombre1="cerveza 2.50 soles";
let nombre2="papitas 5.00 soles";

console.log("cerveza 2.50 soles");
console.log("papitas 5.00 soles");

function calcularPrecio (nombre, cantidad){
    var subcadena;
    var indice1, indice2; 
    indice1 = nombre.indexOf(" ")+1;
    console.log(indice1);
    subcadena1= nombre.substring(indice1, nombre.length);
    console.log(subcadena1);
    indice2 = subcadena1.indexOf(" ")+1;
    subcadena2= subcadena1.substring( 0, indice2);
    
    return (+subcadena2)*cantidad;
}
let cantidad1=2;
let cantidad2=3;
console.log("cantidades respectivamente ",cantidad1 ,"  ",cantidad2);
let suma = calcularPrecio (nombre1, cantidad1) + calcularPrecio (nombre2, cantidad2)
console.log("precio total "+ suma);





