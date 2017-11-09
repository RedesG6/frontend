var ctx = document.getElementById("grafico").getContext('2d');
var grafico = new Chart(ctx, {
    type: 'line'
});

function chartLum() {
    grafico.data = {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
        datasets: [
            {
                label: "Luminosidade",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                fill: false,
                data: [900, 800, 840, 600, 1000, 900, 850],
                lineTension: 0
            }
        ]
    };
    grafico.update();
}

function chartTemp() {
    grafico.data = {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
        datasets: [
            {
                label: "Temperatura",
                backgroundColor: "rgba(200, 30, 30,0.9)",
                borderColor: "rgba(200, 30, 30,0.9)",
                fill: false,
                data: [26.5, 27, 28.5, 27.1, 26, 27.8, 30],
                lineTension: 0
            }
        ]
    };
    grafico.update();
}