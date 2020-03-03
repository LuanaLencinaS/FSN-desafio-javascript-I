var data = new Date(); 
console.log(data); //2020-02-03T16:32:15.205Z
//Mon Mar 02 2020 18:25:34 GMT-0300 (GMT-03:00)

function imprimeDataFormatada(data) {
    let arrayData = data.split("-"); 
    //console.log(arrayData); 
    //[ '2019', '1', '11' ] 
    let dia = arrayData[2]; 
    let mes = arrayData[1]; 
    let ano = arrayData[0]; 
    let dataFormatada = [dia, mes, ano] 
    let stringDataFormatada = dataFormatada.join("/"); 
    console.log(stringDataFormatada); 
}

imprimeDataFormatada(data); //11/1/2019






/*
const data = new Date();
console.log(data);
//2020-02-03T16:32:15.205Z

//getDay : dia da semana
console.log(data.getDay());
//1 = segunda

//getMonth : numero do mes
console.log(data.getMonth());
//1 = Fevereiro
console.log(data.getMonth() + 1);
//1 + 1 = 2 = Fevereiro

//fullYear
console.log(data.getFullYear());
//2020

//getDate : data do dia
console.log(data.getDate());
//3
*/

/*
//OU...
const data = new Date("2019-01-12");
console.log(data);
//2019-01-12T00:00:00.000Z

console.log(data.getMonth());
//0 = Janeiro, pois está referente a data criada no date (2019-01-12)


function imprimeDataFormatada (data) {
    let arrayData = data.split("-");
    //console.log(arrayData);
    //[ '2019', '1', '11' ]
    let dia = arrayData[2];
    let mes = arrayData[1];
    let ano = arrayData[0];
    let dataFormatada = [dia, mes, ano]
    let stringDataFormatada = dataFormatada.join("/");
    console.log(stringDataFormatada);
}
let stringData = data.toLocaleDateString();
console.log(stringData);
//2019-1-11
imprimeDataFormatada(stringData);
//11/1/2019
*/

/*
//set
let data = new Date();
console.log(data);
//2020-02-03T17:58:37.593Z
data.setYear(2000);
data.setMonth(9);
data.setDate(8);
console.log(data);
//2000-10-08T16:58:37.593Z
*/





