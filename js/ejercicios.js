
//alumna: Julia Benavides , ejercicios js

/*---------Ejercicio 1 ----------*/ 
/*  años bisiestos
1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 
2020 ,2028, 2032, 2036, 2040, 2044, 2048, 2052, 
2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088,
 2092 y 2096  */

function bisiesto() {
    let anio1 = document.getElementById('anio'); 
    if (((+anio1.value % 4 == 0) && (+anio1.value % 100 != 0)) || (+anio1.value % 400 == 0)) {   
        document.getElementById("container1").innerText = `${anio1.value} es un año bisiesto `;
    }
    else{
        document.getElementById("container1").innerText = `${anio1.value} no es un año bisiesto `;
    }
}


/*  --------------- Ejercicio 2 -------------*/ 
function calcularOperacion() {

    const x = parseFloat(document.getElementById('numero1').value); 
    const y = parseFloat(document.getElementById('numero2').value); 
    const operacion = document.getElementById("selecoper").value; 
    let resultadoCalculadora=0;

    if(operacion === "+"){
        resultadoCalculadora = x + y;
        
    }else if (operacion === "-"){
        resultadoCalculadora = x - y;
    }else if (operacion === "*"){
        resultadoCalculadora = x * y;
    }else if (operacion === "/"){
        if( y !== 0)
            resultadoCalculadora = x / y;
        else
            resultadoCalculadora = "el divisor debe ser distinto de cero";
    }else if (operacion === "^"){
        resultadoCalculadora = Math.pow(x,y);
    }else if (operacion === "%"){
        resultadoCalculadora = x % y;
    }

    document.getElementById("container2").innerText = `El resultado de la operacion es: ${resultadoCalculadora}`;
 
}


/*  --------------------- Ejercicio 3 -------------------*/ 
function calcularPrecioTotal(){
    var precio1=0, precio2=0, precio3=0;
    let sumaTotal;
    if(document.querySelector('input[name="checkbox1"]:checked')){
        precio1 = parseFloat(document.getElementById("checkbox1").value) * parseFloat(document.getElementById("cantidad1").value);   
    };
    if(document.querySelector('input[name="checkbox2"]:checked')){
        precio2 = parseFloat(document.getElementById("checkbox2").value) * parseFloat(document.getElementById("cantidad2").value);
    };
    if(document.querySelector('input[name="checkbox3"]:checked')){
        precio3 = parseFloat(document.getElementById("checkbox3").value) * parseFloat(document.getElementById("cantidad3").value);
    };
    sumaTotal = precio1 + precio2 + precio3;     
    document.getElementById("container3").innerText = `El precio total es: ${sumaTotal}`;
}