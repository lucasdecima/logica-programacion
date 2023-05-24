const texto1 = document.querySelector(".text1");
const texto2 = document.querySelector(".text2");


function btnEncriptar() {
  const textoEncriptado = encriptar(texto1.value)
  texto2.value = textoEncriptado
  texto2.style.backgroundImage = " none"
  texto1.value = ""


}

function encriptar (stringencriptado) {
  let matrizCodigo = [["e", "enter"], ["i","imes"] ,["a" ,"ai"] , ["o" , "ober"] ,["u", "ufat"] ] ;

  stringencriptado = stringencriptado.toLowerCase();


  for( let i = 0 ; i < matrizCodigo.length;  i++){
  if(stringencriptado.includes(matrizCodigo[i][0])) {
  stringencriptado = stringencriptado.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1])
  } 
  }
  return stringencriptado;
}



function btnDesencriptar() {
  const textoEncriptado = desencriptar(texto1.value)
  texto2.value = textoEncriptado
  texto1.value = ""


}


function desencriptar (stringDesencriptado) {
  let matrizCodigo = [["a", "ai"], ["e","enter"] ,["i" ,"imes"] , ["o" , "ober"] ,["u", "ufat"] ] ;

  stringDesencriptado = stringDesencriptado.toLowerCase();


  for( let i = 0 ; i < matrizCodigo.length;  i++){
  if(stringDesencriptado.includes(matrizCodigo[i][1])) {
  stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
  } 
  }
  return stringDesencriptado;
}

function copiar() {
  texto2.select()
  navigator.clipboard.writeText(texto2.value)
  texto2.value = "" 
  alert("texto copiado")
}