var tituloPacientes = document.querySelector(".tituloTabelaPacientes"); // AE ANTES DE QUALQUER COISA COMENTA TUDO AMANHÃ PQ FOI DIFICIL DE ENTEDER HJ VLW CHEGA

        tituloPacientes.textContent = "Tabela nutricional de pacientes";

 var pacienteJulia = document.querySelector("#Julia");
console.log(pacienteJulia );

var tdPeso = pacienteJulia.querySelector(".info-peso");
var tdAltura = pacienteJulia.querySelector(".info-altura");
var tdIMC = pacienteJulia.querySelector(".info-imc");

var valorPeso = tdPeso.textContent;
var valorAltura = tdAltura.textContent;
console.log(valorPeso, valorAltura);

var IMC = valorPeso/(valorAltura* valorAltura);
console.log(IMC);

tdIMC.textContent = IMC;










