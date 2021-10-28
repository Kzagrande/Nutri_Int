var tituloPacientes = document.querySelector(".tituloTabelaPacientes"); // get class "tituloTabelaPacientes" and tranforming into a variable 

tituloPacientes.textContent = "Tabela IMC de pacientes"; // editing content of variable above





var pacientes = document.querySelectorAll(".paciente"); // get id "Julia" and transforming into a variable
console.log(pacientes) // printing paciente content

for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];




        var tdNome = paciente.querySelector(".info-nome");     // get clas "info-peso" and transforming into a variable 
        var tdPeso = paciente.querySelector(".info-peso");     // get clas "info-peso" and transforming into a variable 
        var tdAltura = paciente.querySelector(".info-altura");// get clas "info-altura" and transforming into a variable 
        var tdGordura = paciente.querySelector(".info-gordura");// get clas "info-altura" and transforming into a variable 
        var tdSexo = paciente.querySelector(".info-sexo");
        var tdIdade = paciente.querySelector(".info-idade");
        var tdIMC = paciente.querySelector(".info-imc");// get clas "info-imc" and transforming into a variable 




        var valorNome = tdNome.textContent;      // get a text content of "tdPeso" and asigning to a new variable
        var valorPeso = tdPeso.textContent;      // get a text content of "tdPeso" and asigning to a new variable
        var valorAltura = tdAltura.textContent; // get a text content of "tdAltura" and asigning to a new variable
        var valorIdade = tdIdade.textContent;
        var valorSexo = tdSexo.textContent;




        var tipoMasculino = "Masculino"
        var tipoFeminino = "Feminino"

        if (valorSexo == tipoMasculino) {
                valorSexo = 1;
        }
        if (valorSexo == tipoFeminino) {
                valorSexo = 0;
        }
        console.log(valorNome, valorPeso, valorAltura, valorIdade, valorSexo);

        var sexoNumero = valorSexo



        var pesoValido = true;
        var alturaValida = true;
        var idadeValida = true;
        



        if (valorPeso < 2.0 || valorPeso > 500) {
                alert("peso menor ou acima do possível ");
                pesoValido = false;
                tdPeso.textContent = "peso inválido";
                // paciente.style.backgroundColor ="lightcoral";
                paciente.classList.add("infoInvalida")
        }

        if (valorAltura < 0.50 || valorAltura > 2.80) {
                alert("Altura menor ou acima do possível");
                alturaValida = false;
                tdAltura.textContent = "altura inválida";
                paciente.style.backgroundColor = "lightcoral";
        }


                if (valorIdade < 1 || valorIdade > 116) {
                        alert("Idade menor ou acima do possível");
                        idadeValida = false;
                        tdIdade.textContent = "Idade inválida";
                        paciente.style.backgroundColor = "lightcoral";
                }

                        if (pesoValido && alturaValida) {
                                var IMC = valorPeso / (valorAltura * valorAltura); // creating a new variable to define IMC
                                tdIMC.textContent = IMC.toFixed(.5); // editing content of var and asigning your new value is IMC.


                        }
                       

                        
                        if (idadeValida ) {
                                var calculoGordura = (1.20 * IMC) + (0.23 * valorIdade) - (10.8 * sexoNumero) - 5.4;// termina depois// cria classe sexo e idade
                                tdGordura.textContent = calculoGordura.toFixed(.5);

                        } 

                }

        













