export default class CentralMedidas{
    constructor(medidas){
        this.medidas=medidas;
    }
    set Medidas(medidas){
        this.medidas= medidas;
    }
    get Medidas(){
        return this.medidas;
    }

    generaAleatorio(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    insertarMedidas(ciudad, valores){
        let aux=[];
        let repe=false;
        ciudad=ciudad.toUpperCase();
        for(let i=0;i<this.Medidas.length;i++){
            if(ciudad==this.Medidas[i][0]){
                repe=true;
                //document.getElementById("errores").textContent="CIUDAD YA EXISTE";
            }
        }
        if(!repe){  
            aux.push(ciudad);
            valores=valores.split(",");
            for(let j=0;j<valores.length;j++){
                aux.push(valores[j]);
            }
            this.Medidas.push(aux);
            return true;
        }
        else
            return false;
        
    }
     insertarAleatorio(ciudad){
        let aux=false;
        let val=[];
        ciudad=ciudad.toUpperCase();
        for(let i=0;i<this.Medidas.length;i++){
            if(ciudad==this.Medidas[i][0])
                aux=true;
        }
        if(!aux){
            val.push(ciudad);
            for(let i=1;i<=30;i++){
                val.push(this.generaAleatorio(-10,40));
            }
            this.Medidas.push(val);
            return true;
        }
        else
            return false;
    }
    mediaMedidas(ciudad){
        let media=0;
        let val=[];
        let sum=0;
        for(let i=0;i<this.Medidas.length;i++){
            if(ciudad==this.Medidas[i][0]){
                for(let j=1;j<this.Medidas[i].length;j++){
                    sum+=parseInt(this.Medidas[i][j]);
                } 
                media=sum/30;
            }
        }
        return media;
    }
    mediaMediasTotal(){
        let media=0;
        let conta=0;
        let mediaTotal=0;
        for(let i=0;i<this.Medidas.length;i++){
            let sum=0;
            for(let j=1;j<this.Medidas[i].length;j++){
                sum+=parseInt(this.Medidas[i][j]);
            } 
            conta++;
            media=sum/30;
            mediaTotal+=media;
        }
        mediaTotal=mediaTotal/conta;
        return mediaTotal;
    }
    eliminaCiudad(ciudad){
        //this.Medidas = this.Medidas.filter(ciudad => ciudad != ciu);
        for(let i=0;i<this.Medidas.length;i++){
            if(ciudad==this.Medidas[i][0]){
                this.Medidas.splice(i,1);
            }
        }
        return true;
    }
    toConsole(){
        for(let i=0;i<this.Medidas.length;i++){
            console.log("La ciudad: "+this.Medidas[i][0]+" tiene una temperatura media de: "+this.mediaMedidas(this.Medidas[i][0]));
        }
    }
    toHTML(){
        var d = "<table style='width:100%' border='1'>"
        d += "<tr><td></td>";
        for (var j = 1; j < this.Medidas[0].length; j++) {
            d += "<td style='background-color:#d6d6c2'>" + j + "</td>";
        }
        d += "<td style='background-color:#bbbb77'>Media</td>";
        d += "</tr>";
        for (var i = 0; i < this.Medidas.length; i++) {
            d += "<tr><th style='background-color:#d6d6c2'>" + this.Medidas[i][0] + "</th>";
            for (var j = 1; j < this.Medidas[i].length; j++) {
                d += "<td>" + this.Medidas[i][j] + "</td>";
            }
            d += "<td style='background-color:#bbbb77'>" + this.mediaMedidas(this.Medidas[i][0]) + "</td>";
            d += "</tr>";
        }
        d += "</table>";
        return d;
    }

}

/*medidas=[];
medidas.push("Gijon",[23,11,15,18,21,25,27,27,22,15,9,8,4,5,3,-1,1,6,8,14,12,17,21,24,23,26,21,19,24,30]);
console.log(medidas);
var medida2=new CentralMedidas(medidas);
console.log(medida2);

var medida11= new CentralMedidas("Aviles",[23,11,15,18,21,25,27,27,22,15,9,8,4,5,3,-1,1,6,8,14,12,17,21,24,23,26,21,19,24,30]);
console.table(medida11);
//medidas.push(medida1,medida11);*/

/*
var medida1= new CentralMedidas([]);
console.table(medida1);

medida1.insertarMedidas("Luanco",[20,13,15,17,21,24,28,30,25,19,13,10,7,5,3,-3,1,5,9,15,13,15,20,24,23,27,24,18,20,26]);
medida1.insertarMedidas("Oviedo",[23,11,15,18,21,25,27,27,22,15,9,8,4,5,3,-1,1,6,8,14,12,17,21,24,23,26,21,19,24,30]);
medida1.insertarAleatorio("Langreo");   //Al no ser console.log no muestra el true

console.log(medida1.mediaMedidas("Oviedo"));
console.log(medida1.mediaMediasTotal());
console.log(medida1.eliminaCiudad("Langreo"));
medida1.toConsole();
medida1.toHTML();
*/