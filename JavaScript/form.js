var enviarForm = document.querySelector(".enviarFormulario")

enviarForm.addEventListener("click", function(event) {
    event.preventDefault();


    var form = document.querySelector(".formNovoPaciente");

    // Extract patient information from the form
    var valorNome = form.nome.value;
    var valorPeso = form.peso.value;
    var valorAltura = form.altura.value;
    var valorIdade = form.idade.value;
    var valorSexo = form.sexo.value;


    // tranfor"Masculino and Feminino" in numbers
    var tipoMasculino = "Masculino"
    var tipoFeminino = "Feminino"


    if (valorSexo == tipoMasculino) {
        valorSexo = 1;
    }

    if (valorSexo == tipoFeminino) {
        valorSexo = 0;
    }




    // create and add patient Tr and TD
    var novoPacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var idadeTd = document.createElement("td");
    var sexoTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = valorNome;
    pesoTd.textContent = valorPeso;
    alturaTd.textContent = valorAltura;
    idadeTd.textContent = valorIdade;
    imcTd.textContent = calculoImc(valorPeso, valorAltura);

    //  Create IMC variable so we can calculate "calculoGordura"
    var IMC = calculoImc(valorPeso, valorAltura);
    gorduraTd.textContent = calculoGordura(IMC, valorIdade, valorSexo);


    // Transform the number in "masculino ou feminino " again and add sexoTd.
    if (valorSexo == 1) {
        valorSexo = tipoMasculino;
    }

    if (valorSexo == 0) {
        valorSexo = tipoFeminino;
    }

    sexoTd.textContent = valorSexo;


    novoPacienteTr.appendChild(nomeTd);
    novoPacienteTr.appendChild(pesoTd);
    novoPacienteTr.appendChild(alturaTd);
    novoPacienteTr.appendChild(gorduraTd);
    novoPacienteTr.appendChild(idadeTd);
    novoPacienteTr.appendChild(sexoTd);
    novoPacienteTr.appendChild(imcTd);


    // add a new patient to the table
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(novoPacienteTr);




});