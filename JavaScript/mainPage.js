var tituloPacientes = document.querySelector(".tituloTabelaPacientes"); // get class "tituloTabelaPacientes" and tranforming into a variable 

tituloPacientes.textContent = "Tabela IMC de pacientes"; // editing content of variable above





var pacientes = document.querySelectorAll(".paciente"); // get id "Julia" and transforming into a variable
console.log(pacientes) // printing paciente content

for (var i = 0; i < pacientes.length; i++) {
  
        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");     // get clas "info-peso" and transforming into a variable 
        var tdAltura = paciente.querySelector(".info-altura");// get clas "info-altura" and transforming into a variable 
        var tdIMC = paciente.querySelector(".info-imc");// get clas "info-imc" and transforming into a variable 

        var valorPeso = tdPeso.textContent;      // get a text content of "tdPeso" and asigning to a new variable
        var valorAltura = tdAltura.textContent; // get a text content of "tdAltura" and asigning to a new variable
        console.log(valorPeso, valorAltura);

        var pesoValido = true;
        var alturaValida = true;

        if (valorPeso < 2.0 || valorPeso > 500) {
                alert("peso menor ou acima do possível ");
                pesoValido = false;
                tdIMC.textContent = "peso inválido";
               // paciente.style.backgroundColor ="lightcoral";
               paciente.classList.add("infoInvalida")
        }

        if (valorAltura < 0.50 || valorAltura > 2.80) {
                alert("Altura menor ou acima do possível");
                alturaValida = false;
                tdIMC.textContent = "altura inválido";
                paciente.style.backgroundColor ="lightcoral";

        }

        if (pesoValido && alturaValida) {
                var IMC = valorPeso / (valorAltura * valorAltura); // creating a new variable to define IMC
                tdIMC.textContent = IMC.toFixed(.5); // editing content of var and asigning your new value is IMC.

        }



}





