import CentralMedidas from "./centralmedidas.js";

window.addEventListener("load",init);
const medida1= new CentralMedidas([]);

function init(){
    document.getElementById("guardar").addEventListener("click",insertarMedidas);
    document.getElementById("borrar").addEventListener("click",eliminarCiudad);

}
function insertarMedidas(){
    var medidas=document.getElementById("medidas").value;
    var ciudad=document.getElementById("ciudad").value;

    var check=document.querySelector('input[name="tipo"]:checked').value;
    //Comprobar el check
    if(check=="aleatorio"){
        let aux=false;
        ciudad=ciudad.toUpperCase();
        for(let i=0;i<medida1.length;i++){
            if(ciudad==medida1[i][0])
                aux=true;
        }
        if(!aux)
            medida1.insertarAleatorio(ciudad);
        else
            document.getElementById("errores").textContent="CIUDAD REPETIDA";
        //medida1.insertarMedidas("Oviedo",[20,13,15,17,21,24,28,30,25,19,13,10,7,5,3,-3,1,5,9,15,13,15,20,24,23,27,24,18,20,26]);
    }
    else{
        let aux=false;
        ciudad=ciudad.toUpperCase();
        for(let i=0;i<medida1.length;i++){
            if(ciudad==medida1[i][0])
                aux=true;
        }
        if(!aux){
            medida1.insertarMedidas(ciudad,medidas);
        }
        else
            document.getElementById("errores").textContent="CIUDAD REPETIDA";
    }
    console.log(medida1.length);

        //Tabla
    document.getElementById("tabla-medidas").innerHTML=medida1.toHTML();
    document.getElementById("temperatura-media").textContent=medida1.mediaMediasTotal();
}
function eliminarCiudad(){
    var ciudad=document.getElementById("ciudad");
    medida1.eliminaCiudad(ciudad);
    document.getElementById("errores").textContent="ERROR AL BORRAR";
}
