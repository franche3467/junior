
function calcularIMC(elem) {

  let pesoUsuario = document.getElementById("inputPeso").value;
  let estaturaUsuario = document.getElementById("inputEstatura").value

  if (pesoUsuario == '' || estaturaUsuario == '') {
    alert('Ingrese un Peso y Estatura correcta');
    return;
  }

  var calculo = pesoUsuario / (Math.pow(estaturaUsuario, 2))

  calculo = Number(calculo).toFixed(2)
  //console.log(calculo)

  let mensaje = ''

  if (calculo <= 18.50) {
    mensaje = "Por debajo del peso"
  } else if (calculo > 18.50 && calculo < 24.99) {
    mensaje = "Saludable"
  } else if (calculo > 25 && calculo < 29.99) {
    mensaje = "Con sobrepeso"
  } else if (calculo > 30 && calculo < 39.99) {
    mensaje = "Obeso"
  } else {
    mensaje = " Obesidad extrema o de alto riesgo"
  }

  document.getElementById("cardResultado").style.visibility = "visible";

  var texto = document.createTextNode(mensaje)
  let resultadoTexto = document.getElementById("resultadoIMC")
  resultadoTexto.innerHTML = ''
  resultadoTexto.appendChild(texto);

  var valorCalculo = document.createTextNode(calculo)
  let resultadoCalculo = document.getElementById("valorFinal")
  resultadoCalculo.innerHTML = ''
  resultadoCalculo.appendChild(valorCalculo)

  var porcentajeBarra = document.getElementById("porcentajeBarra")
  porcentajeBarra.style.width = Math.round(calculo) + '%'

}
