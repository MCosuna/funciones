//************************************************************************************* */
//6. Crea una función para calcular 
//potencias de un modo recursivo.

function potencia(b, e){
    if(e==0){
        return 1;
    }else if(e==1){
        return b;
    }else{
        return b*potencia(b, e-1);
    }
}
// alert(potencia(2,3));
//************************************************************************************* */
//2.Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
//define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
function aleatorio(){
    var num = parseInt(Math.random()*6)+1
    return num;
}
// alert (aleatorio())
function lanzamientoMejorado() {
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    var cont4 = 0;
    var cont5 = 0;
    var cont6 = 0;
    for (let i = 0; i < 6000; i++) {

        var num = parseInt(Math.random() * 6) + 1;
        if (num == 1) {
            cont1++;
        } else if (num == 2) {
            cont2++;
        } else if (num == 3) {
            cont3++;
        } else if (num == 4) {
            cont4;
        } else if (num == 5) {
            cont5++;
        } else if (num == 6) {
            cont6++;
        }
    }
    document.write("1: "+cont2+"<br>2: "+cont3+"<br>3: "+cont3+"<br>4: "+cont4+"<br>5: "+cont5+"<br>6: "+cont6);
}
// lanzamientoMejorado();
//4. Crea una web para calcular el volumen de una esfera. Para ello diseña una función
// que dado el radio de ésta devuelva el volumen.
function esfera(radio){
    var volumen = 4/3*Math.PI*Math.pow(radio, 3);
    var area = Math.PI*Math.pow(radio, 2);
    document.write("El volumen de esta esfera es: "+volumen+" y su area es: "+area);
}

// esfera(3);

function factorial_recursiva(num){
    var num = parseInt(prompt("Introduce un número para calcular la factorial: "));
    if(num!=0){
        return 1;
    }
     return num * factorial_recursiva (num-1);
}
// alert(factorial_recursiva());

