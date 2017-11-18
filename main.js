///////////// CONFIGURACAO ///////////////////
var intervaloAtualizacao = 60000;
var nomeEndpoint = "data";



var ctx = document.getElementById("grafico").getContext('2d');
var grafico = new Chart(ctx, {
    type: 'line'
});
var selecionado = "luminosidade";

setInterval(updateGrafico, intervaloAtualizacao);
function updateGrafico() {
    selecionado === "luminosidade" ? chartLum() : chartTemp();
}

function chartLum() {
    getData(function(data) {
        selecionado = "luminosidade";
        var listaLabels = data.map(function(item) {
            return item.dataLog.substr(11, 5);
        });
        var listaDados = data.map(function(item) {
            return item.luminosidade;
        });
        grafico.data = {
            labels: listaLabels,
            datasets: [
                {
                    label: "Luminosidade",
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    fill: false,
                    data: listaDados,
                    lineTension: 0
                }
            ]
        };
        grafico.update();
    });
}

function getData(onGet) {
    var request = new XMLHttpRequest();
    request.open("post", nomeEndpoint);
    var body = {
        realtime: true,
        quantidade: document.getElementById("quantity").value
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
    request.onload = function() {
        data = JSON.parse(request.responseText);
        onGet(data);
    }
}

function chartTemp() {
    getData(function(data) {
        selecionado = "temperatura";
        var listaLabels = data.map(function(item) {
            return item.dataLog.substr(11, 5);
        });
        var listaDados = data.map(function(item) {
            return item.temperatura;
        });
        grafico.data = {
            labels: listaLabels,
            datasets: [
                {
                    label: "Temperatura",
                    backgroundColor: "rgba(200, 30, 30,0.9)",
                    borderColor: "rgba(200, 30, 30,0.9)",
                    fill: false,
                    data: listaDados,
                    lineTension: 0
                }
            ]
        };
        grafico.update();
    });
}