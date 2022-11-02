const convert = function(){
    
    var numArabico = document.getElementById('decimal').value;
    var numRomano = document.getElementById('romano').value; 
    var decimal = 0;
    var element = document.getElementById('resposta');

    function convertToRoman(){
        if(isNaN(numArabico)){
            alert('Ops! Insira um número arábico!')
        }
        
        else{
            
            while(numArabico >= 1000){  //milhares
                numArabico = numArabico - 1000; //tira o mil
                numRomano = numRomano + 'M'; // coloca o m no lugar
            }
            
            while(numArabico >= 900 && numArabico < 1000){
                numArabico = numArabico - 900;
                numRomano = numRomano + 'CM';
            }
        
            while(numArabico >= 500 && numArabico < 1000){
                numArabico = numArabico - 500;
                numRomano = numRomano + 'D';
            }
    
            while(numArabico >= 400 && numArabico < 600){   //centenas
                numArabico = numArabico - 400;
                numRomano = numRomano + 'CD';
            }
    
            while(numArabico >= 100 && numArabico < 500){
                numArabico = numArabico - 100;
                numRomano = numRomano + 'C';
            }
    
            while(numArabico >= 90 && numArabico < 200){
                numArabico = numArabico - 90;
                numRomano = numRomano + 'XC';
            }
            
            while(numArabico >= 50 && numArabico < 100){
                numArabico = numArabico - 50;
                numRomano = numRomano + 'L';
            }
            
            while(numArabico >= 40 && numArabico < 100){
                numArabico = numArabico - 40;
                numRomano = numRomano + 'XL';
            }
                
            while(numArabico >= 10 && numArabico < 50){     //dezenas
                numArabico = numArabico - 10;
                numRomano = numRomano + 'X';
            }
            
            while(numArabico >= 9 && numArabico < 20){
                numArabico = numArabico - 9;
                numRomano = numRomano + 'IX';
            }
            
            while(numArabico >= 5 && numArabico < 10){
                numArabico = numArabico - 5;
                numRomano = numRomano + 'V';
            }
            
            while(numArabico >= 4 && numArabico < 10){
                numArabico = numArabico - 4;
                numRomano = numRomano + 'IV';
            }
            
            while(numArabico >= 1 && numArabico < 5){       //unidade
                numArabico = numArabico - 1;
                numRomano = numRomano + 'I';
            }
            
            element.innerHTML= `${numRomano}`;
        }
    }

    function converToDecimal(){
        var romano = numRomano.toUpperCase();

        if(isNaN(numRomano)){
            let romanoArray = romano.split('');
            
            while(romanoArray[0] === 'M'){
                decimal = decimal + 1000;
                romanoArray.shift();
            }
        
            while(romanoArray[0] === 'C' && romanoArray[1] === 'M'){
                decimal = decimal + 900;
                romanoArray.shift();
                romanoArray.shift();
            }
            
            while(romanoArray[0] === 'D'){
                decimal = decimal + 500;
                romanoArray.shift();
            }

            while(romanoArray[0] === 'C' && romanoArray[1] === 'D'){
                decimal = decimal + 400;
                romanoArray.shift();
                romanoArray.shift();
            }

            while(romanoArray[0] === 'C'){
                decimal = decimal + 100;
                romanoArray.shift();
            }

            while(romanoArray[0] === 'X' && romanoArray[1] === 'C'){
                decimal = decimal + 90;
                romanoArray.shift();
                romanoArray.shift();
            }

            while(romanoArray[0] === 'L'){
                decimal = decimal + 50;
                romanoArray.shift();
            }

            while(romanoArray[0] === 'X' && romanoArray[1] === 'L'){
                decimal = decimal + 40;
                romanoArray.shift();
                romanoArray.shift();
            }
                        
            while(romanoArray[0] === 'X'){
                decimal = decimal + 10;
                romanoArray.shift();
            }

            while(romanoArray[0] === 'I' && romanoArray[1] === 'X'){
                decimal = decimal + 9;
                romanoArray.shift();
                romanoArray.shift();
            }

            while(romanoArray[0] === 'V'){
                decimal = decimal + 5;
                romanoArray.shift();
            }

            while(romanoArray[0] === 'I' && romanoArray[1] === 'V'){
                decimal = decimal + 4;
                romanoArray.shift();
                romanoArray.shift();
            }

            while(romanoArray[0] === 'I'){
                decimal = decimal + 1;
                romanoArray.shift();
            }
            
            element.innerHTML= `${decimal}`;
        }
        
        else{
            
            alert('Ops! Digite um númro romano!')
        
        }
    }
   
    if(numArabico == '' && numRomano != ''){
        converToDecimal(); 
        document.getElementById('romano').value = '';      
    }
    
    else if(numRomano == '' && numArabico != undefined){        
        convertToRoman();  
        document.getElementById('decimal').value = '';     
    }

    else{
        alert('Preencha apenas um campo!');        
    }
}
console.log("carregou o script")