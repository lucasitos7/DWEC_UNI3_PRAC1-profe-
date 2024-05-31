import CentralMedidas from "./centralmedidas.js";

window.addEventListener("load",init);
const medida1= new CentralMedidas([]);

function init(){
    document.getElementById("guardar").addEventListener("click",insertarMedidas);
    document.getElementById("borrar").addEventListener("click",eliminarCiudad);
    document.getElementById("medidas_aleatorio").addEventListener("click",quitarMedidas);
    document.getElementById("medidas_manual").addEventListener("click",ponerMedidas);

}

//INSERTAR MEDIDAS
function insertarMedidas(){
    var medidas=document.getElementById("medidas").value;
    var ciudad=document.getElementById("ciudad").value;
    var valores=medidas.split(",");

    var check=document.querySelector('input[name="tipo"]:checked').value;
    //Comprobar el check
    if(check=="aleatorio"){
        if((medida1.insertarAleatorio(ciudad))==false)
            document.getElementById("errores").textContent="CIUDAD REPETIDA";
        else{
            document.getElementById("errores").textContent="Errores";
            medida1.insertarAleatorio(ciudad);
        }
            
        //medida1.insertarMedidas("Oviedo",[20,13,15,17,21,24,28,30,25,19,13,10,7,5,3,-3,1,5,9,15,13,15,20,24,23,27,24,18,20,26]);
    }
    else{
        if(valores.length==30){
            if((medida1.insertarMedidas(ciudad,medidas))==false)
                document.getElementById("errores").textContent="CIUDAD REPETIDA";
            else{
                document.getElementById("errores").textContent="Errores";
                medida1.insertarMedidas(ciudad,medidas);
            }
        }
        else
            document.getElementById("errores").textContent="NUMERO DE MEDIDAS DISTINTO DE 30 (30 valores separados por comas(,))"
    }

        //Tabla
    document.getElementById("tabla-medidas").innerHTML=medida1.toHTML();
    document.getElementById("temperatura-media").textContent=medida1.mediaMediasTotal();
}

//ELIMINAR CIUDAD
function eliminarCiudad(){
    var ciudad=document.getElementById("ciudad").value;
    ciudad=ciudad.toUpperCase();
    //falla si solo hay una ciudad
    if(medida1.eliminaCiudad(ciudad)==true){
        //medida1.eliminaCiudad(ciudad);
        document.getElementById("errores").textContent="CIUDAD BORRADA :)";
    }
    else
        document.getElementById("errores").textContent="CIUDAD NO ENCONTRADA :(";
        //Tabla
    if(medida1.length==0){
        document.getElementById("tabla-medidas").value="";
    }
    else{
        document.getElementById("tabla-medidas").innerHTML=medida1.toHTML();
        document.getElementById("temperatura-media").textContent=medida1.mediaMediasTotal();
    }

}

//BLOQUEAR CUADRO MEDIDAS
function quitarMedidas(){
    document.getElementById("medidas").value="";
    //comprobar boton radio
    var check=document.querySelector('input[name="tipo"]:checked').value;
    if(check=="aleatorio")
        document.getElementById("medidas").disabled=true;
    /*si fuera borrarlo seria:
        document.getElementById("medidas").style.display="none";*/
}
function ponerMedidas(){
    document.getElementById("medidas").value="";
    //comprobar boton radio
    var check=document.querySelector('input[name="tipo"]:checked').value;
    if(check=="manual")
    document.getElementById("medidas").disabled=false;
/*si fuera borrarlo seria:
        document.getElementById("medidas").style.display="block";*/
}
