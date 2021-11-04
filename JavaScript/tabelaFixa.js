var tituloPacientes = document.querySelector(".tituloTabelaPacientes"); // get class "tituloTabelaPacientes" and tranforming into a variable 

tituloPacientes.textContent = "Tabela IMC de pacientes"; // editing content of variable above



var pacientes = document.querySelectorAll(".paciente"); // get class "paciente and transforming into a variable
console.log(pacientes) // printing paciente content

for (var i = 0; i < pacientes.length; i++) { // creating a loop to add data to all items 

    var paciente = pacientes[i];



    var tdNome = paciente.querySelector(".info-nome"); // get clas "info-peso" and transforming into a variable 
    var tdPeso = paciente.querySelector(".info-peso"); // get clas "info-peso" and transforming into a variable 
    var tdAltura = paciente.querySelector(".info-altura"); // get clas "info-altura" and transforming into a variable 
    var tdGordura = paciente.querySelector(".info-gordura"); // get clas "info-altura" and transforming into a variable 
    var tdSexo = paciente.querySelector(".info-sexo");
    var tdIdade = paciente.querySelector(".info-idade");
    var tdIMC = paciente.querySelector(".info-imc"); // get clas "info-imc" and transforming into a variable 


    var valorNome = tdNome.textContent; // get a text content of "tdPeso" and asigning to a new variable
    var valorPeso = tdPeso.textContent; // get a text content of "tdPeso" and asigning to a new variable
    var valorAltura = tdAltura.textContent; // get a text content of "tdAltura" and asigning to a new variable
    var valorIdade = tdIdade.textContent;
    var valorSexo = tdSexo.textContent;


    var pesoValido = validaPeso(valorPeso);
    var alturaValida = validaAltura(valorAltura);
    var idadeValida = validaIdade(valorIdade);



    if (!pesoValido) {
        alert("peso menor ou acima do possível ");
        pesoValido = false;
        tdPeso.textContent = "peso inválido";
        // paciente.style.backgroundColor ="lightcoral";
        paciente.classList.add("infoInvalida")
    }

    if (!alturaValida) {
        alert("Altura menor ou acima do possível");
        alturaValida = false;
        tdAltura.textContent = "altura inválida";
        paciente.style.backgroundColor = "lightcoral";
    }


    if (!idadeValida) {
        alert("Idade menor ou acima do possível");
        idadeValida = false;
        tdIdade.textContent = "Idade inválida";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (pesoValido && alturaValida) {
        var IMC = calculoImc(valorPeso, valorAltura); // creating a new variable to define IMC
        tdIMC.textContent = IMC; // editing content of var and asigning your new value is IMC.


    }

    if (idadeValida) {
        var gorduraCorporal = calculoGordura(IMC, valorIdade, valorSexo); // termina depois// cria classe sexo e idade
        tdGordura.textContent = gorduraCorporal;

    }

}




function validaPeso(peso) {

    if (peso >= 2.0 && peso <= 500) {

        return true;

    } else {
        return false;
    }


}

function validaAltura(altura) {

    if (altura >= 0.50 && altura <= 2.80) {

        return true;

    } else {
        return false;
    }


}


function validaIdade(idade) {

    if (idade >= 1 && idade <= 116) {

        return true;

    } else {
        return false;
    }

}

function calculoImc(valorPeso, valorAltura) {

    var IMC = 0;
    IMC = valorPeso / (valorAltura * valorAltura);

    return IMC.toFixed(.5);


}

function calculoGordura(IMC, valorIdade, valorSexo) {


    var gorduraCorporal = 0;

    var tipoMasculino = "Masculino"
    var tipoFeminino = "Feminino"

    if (valorSexo == tipoMasculino) {
        valorSexo = 1;
    }
    if (valorSexo == tipoFeminino) {
        valorSexo = 0;
    }

    gorduraCorporal = (1.20 * IMC) + (0.23 * valorIdade) - (10.8 * valorSexo) - 5.4;

    return gorduraCorporal.toFixed(0.5);


}