const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDescendriptar(){
    const textoDescencriptado = descencriptar(textarea.value)
    mensaje.value = textoDescencriptado
    textarea.value = ""
}

const btnCopiar = async () => {
    try {
        await navigator.clipboard.writeText(mensaje.value)
        alert("El texto se ha copiado")
    } catch (error) {
       alert("Error al copiar", error) 
    }
    
}

const sacarAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()
    stringEncriptado = sacarAcentos(stringEncriptado)

    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function descencriptar(stringDescencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    //stringDescencriptado = stringDescencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringDescencriptado.includes(matrizCodigo[0][i])){
            stringDescencriptado = stringDescencriptado.replaceAll(matrizCodigo[0][i],matrizCodigo[1][i])
        }
    }
    return stringDescencriptado;
}



