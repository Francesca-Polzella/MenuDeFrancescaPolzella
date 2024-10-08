// realizar una calculadores que tenga esta opciones 
//1.- suma 
//2.- resta 
//3.- multiplicacion 
//4.- divicion 
//5.-salir 

//tener en cuenta que el menu se debe repetir hasta que el usuario indique la opcion salir// 

//definir las variables 

let op, n1 ,n2 , resultado, rep=true//let es para crear variables en JS



do{

    op=parseInt(prompt("calculadora:\n1.suma\n2.resta\n3.multiplicacion\n4.divicion\n5.salir"))
    //console.log(op)

    switch(op){
    case 1:
        //console.log("suma")
        n1=parseFloat(prompt("Por favor ingrese el primer numero:"))
        n2=parseFloat(prompt("Por favor ingrese el segundo numero:"))
        resultado= n1+n2
        alert(`El resultado es: ${resultado}`)
     break;
    
    case 2:
        //console.log ("resta")
        n1=parseFloat(prompt("Por favor ingrese el primer numero:"))
        n2=parseFloat(prompt("Por favor ingrese el segundo numero:"))
        resultado= n1-n2
        alert(`El resultado es: ${resultado}`)
        break;
    case 3:
        //console.log("multiplicacion")
        n1=parseFloat(prompt("Por favor ingrese el primer numero:"))
        n2=parseFloat(prompt("Por favor ingrese el segundo numero:"))
        resultado= n1*n2
        alert(`El resultado es: ${resultado}`)
        break;
    
    case 4:
        //console.log("divicion")
        n1=parseFloat(prompt("Por favor ingrese el primer numero:"))
        n2=parseFloat(prompt("Por favor ingrese el segundo numero:"))
        resultado= n1/n2
        alert(`El resultado es: ${resultado}`)
        break;     
    
    case 5:
        //console.log("salir")
        prompt('Has salido de la Calculadora')
        rep=false
        break;
        
        default:
        console.log ("opcion invalida")
        break; 
    } 

}while(rep);
// otra forma de hacer lo de arriba solos las opciones
//if (op==1){}
//else if(op==2){}
//else if (op==3){}
// "do  and while" es para crear bucles 





