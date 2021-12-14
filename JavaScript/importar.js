var botaoImportar = document.querySelector(".botaoImportar");

botaoImportar.addEventListener("click", function() {
    console.log("importanto......")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", " https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {


        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        console.log(pacientes);

        var peso = pacientes.peso;
        console.log(peso);




        /*  pacientes.forEach(function(paciente) {
             adicionaPacientenaTabela(paciente);
         }) */





    });

    xhr.send();

});