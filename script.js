const possibilidades =["Pedra","Papel","Tesoura"] 


//                              OPONENTE                                                                      //
function random0a3(){ 
    return Math.floor(Math.random()*(3)) + 0                           //gera numeros aleatorios (0 a 2)para indice
  } 

function gerarAleatoriamente(array){
  let output ="" ;                                                      // retorna aleatoriamente o array possibilidades
  for(let i=0; i<=possibilidades.length; i++){
      let numero1 = possibilidades[random0a3()] 
       output=numero1 
    } 
   return output
} 
gerarAleatoriamente(possibilidades)  

const resultadoFuncao = gerarAleatoriamente(possibilidades)               // acessando funcao para gerar aleatoriamente array 
console.log(resultadoFuncao)
let texto = document.createTextNode(resultadoFuncao)                    // criando o texto com o resultado
const div = document.getElementById("possibilidade")                   // acessando div possibilidade


function retornoClickOponente(){ 
div.innerHTML= ""  
div.appendChild(texto)                                              // inserindo texto na DIV  
console.log(resultadoFinal())    
}   


//inserindo evento de click nas imagem do OPONENTE:  
const AcessandoImgOponente =document.getElementById("oponente") 
AcessandoImgOponente.addEventListener("click",retornoClickOponente)


//                              USUARIO                                                                     //
let retornoUsuario = ""
function retornoClickPedra(){  
    let divPedra=document.getElementById("resultado-usuario")   //acessar o elemento DIV 
    let textoPedra =document.createTextNode("Pedra")           // criando o texto
    divPedra.innerHTML= ""                                    // deixando sem repeticao o texto da DIV
    divPedra.appendChild(textoPedra)     
    retornoUsuario="Pedra"                                                            
  }  
  
function retornoClickPapel(){
     let divPapel=document.getElementById("resultado-usuario") ;
     let textoPapel =document.createTextNode("Papel")  
     divPapel.innerHTML= ""
     divPapel.appendChild(textoPapel) 
     retornoUsuario="Papel"
  } 

function retornoClickTesoura(){
    let divTesoura=document.getElementById("resultado-usuario") ;
    let textoTesoura =document.createTextNode("Tesoura")  
    divTesoura.innerHTML= ""
    divTesoura.appendChild(textoTesoura) 
     retornoUsuario="Tesoura"
  }  

//inserindo evento de click nas imagens :
const AcessandoImgPedra =document.getElementById("pedra") 
const AcessandoImgPapel =document.getElementById("papel")  
const AcessandoImgTesoura =document.getElementById("tesoura") 

AcessandoImgPedra.addEventListener("click",retornoClickPedra) 
AcessandoImgPapel.addEventListener("click",retornoClickPapel) 
AcessandoImgTesoura.addEventListener("click",retornoClickTesoura)

//                                              FUNCAO RESULTADO FINAL                               //

function resultadoFinal(){   

  let textoOponente = resultadoFuncao       // resultado OPONENTE  ok  
  console.log(textoOponente,typeof(textoOponente))  
  console.log(retornoUsuario , typeof(retornoUsuario))
  // retornoUsuario = document.getElementById(resultado-usuario)   // como acessar o resultado do usuario ?   

  let resultado = "" 

   if (retornoUsuario ==="Pedra" && textoOponente ==="Tesoura"){ 
     resultado = "Parabéns! você ganhou !!" 
   }  
   if (retornoUsuario ==="Pedra" && textoOponente ==="Papel"){
     resultado = " Que pena, seu oponente venceu.."
  } 
  if ( retornoUsuario ==="Pedra" && textoOponente ==="Pedra"){
     resultado ="Empate, jogue novamente!"
  } 
  if (retornoUsuario ==="Papel"  && textoOponente ==="Tesoura"){  
     resultado ="Que pena, seu oponente venceu.."
   } 
   if (retornoUsuario ==="Papel"  && textoOponente ==="Pedra"){  
     resultado ="Parabéns! você ganhou !!" 
  } 
  if (retornoUsuario ==="Papel"  && textoOponente ==="Papel"){  
     resultado ="Empate, jogue novamente!" 
  }
   if (retornoUsuario ==="Tesoura" && textoOponente ==="Pedra"){   
     resultado ="Que pena, seu oponente venceu.."
   } 
   if ( ( retornoUsuario ==="Tesoura")&& (textoOponente ==="Papel")){   
    resultado ="Parabéns! você ganhou !!" 
   }  
   if ( ( retornoUsuario ==="Tesoura")&& (textoOponente ==="Tesoura")){   
    resultado ="Empate, jogue novamente!" 
   } 
   let Divresultado = document.getElementById("resultado")   // DIV ONDE SERA INSERIDA O RESULTADO   
   
   Divresultado.appendChild(document.createTextNode(resultado))
   return resultado  
   

  }  


//                FUNCAO APAGAR RESULTADOS E JOGAR NOVAMENTE                                   //  

function Jogarnovamente(){ 
  //apaga conteudo usuario //
let acessandoDiv =document.getElementById("resultado-usuario") ; 
let texto = document.createTextNode("")
acessandoDiv.innerHTML=""    
acessandoDiv.appendChild (texto)  

 //apaga conteudo oponente //

 //let aceDivOPonente =document.getElementById("possibilidade") ; 
 let textooponente = document.createTextNode("")
 div.innerHTML=""    
 div.appendChild (textooponente)   

//Apaga conteudo resultado 
let acessandoDivResultado =document.getElementById("resultado") ; 
acessandoDivResultado.innerHTML=""  
acessandoDivResultado(texto)

}

const acessarBtn = document.getElementById("btn-Jogarnovamente") 
acessarBtn.addEventListener("click",Jogarnovamente) 
