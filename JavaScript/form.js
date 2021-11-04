var enviarForm = document.querySelector(".enviarFormulario")

enviarForm.addEventListener("click", function(event) {
    event.preventDefault();


    var form = document.querySelector(".formNovoPaciente");


    var coletaPaciente = registraFormPaciente(form);

    var montaPacienteTr = montaTr(coletaPaciente);


    if (!validaPaciente(coletaPaciente.peso)) {
        alert("paciente invalido")
        return;
    }




    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(montaPacienteTr);

    form.reset();


});


function registraFormPaciente(form) {

    var coletaPaciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        idade: form.idade.value,
        sexo: form.sexo.value,
        imc: calculoImc(form.peso.value, form.altura.value),
        gordura: calculoGordura(calculoImc(form.peso.value, form.altura.value), form.idade.value, form.sexo.value)

    }
    return coletaPaciente;

}

function montaTr(coletaPaciente) {


    // create and add patient Tr and TD
    var montaPacienteTr = document.createElement("tr");
    montaPacienteTr.classList.add("paciente");

    var nomeTd = montaTd(coletaPaciente.nome, "info-nome");
    var pesoTd = montaTd(coletaPaciente.peso, "info-peso");
    var alturaTd = montaTd(coletaPaciente.altura, "info-altura");
    var gorduraTd = montaTd(coletaPaciente.gordura, "info-gordura");
    var idadeTd = montaTd(coletaPaciente.idade, "info-idade");
    var sexoTd = montaTd(coletaPaciente.sexo, "info-sexo");
    var imcTd = montaTd(coletaPaciente.imc, "info-imc");

    // tranfor"Masculino and Feminino" in numbers

    //  Create IMC variable so we can calculate "calculoGordura"


    montaPacienteTr.appendChild(nomeTd);
    montaPacienteTr.appendChild(pesoTd);
    montaPacienteTr.appendChild(alturaTd);
    montaPacienteTr.appendChild(gorduraTd);
    montaPacienteTr.appendChild(idadeTd);
    montaPacienteTr.appendChild(sexoTd);
    montaPacienteTr.appendChild(imcTd);

    return montaPacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(coletaPaciente) {

    if (validaPeso(coletaPaciente.peso)) {;
        return true;
    } else {
        return false;
    }




}
// formatar os ifs da para calcular a gorduta em uma função e fazer funcionar