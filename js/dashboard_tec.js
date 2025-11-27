const ctxLine = document.getElementById('graficoSemanal').getContext('2d');

new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
        datasets: [{
            label: 'Horas Extras',
            data: [18, 32, 12, 28, 35],
            borderColor: '#ff9933',
            borderWidth: 3,
            fill: false,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: '#ff9933'
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxPie = document.getElementById('graficoPizza').getContext('2d');

new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Horas Extras', 'Horas Normais'],
        datasets: [{
            data: [12, 48],
            backgroundColor: ['#ff9933', '#003366']
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        cutout: '60%'
    }
});