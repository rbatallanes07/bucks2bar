let myChart

document.getElementById('downloadBtn').addEventListener('click', function() {
    let canvas = document.getElementById('myChart');
    let dataUrl = canvas.toDataURL('image/png');

    let link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'chart.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.getElementById('chartTab').addEventListener('click', function() {

    let ctx = document.getElementById('myChart').getContext('2d');

    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    let incomeData = [];
    let expensesData = [];

    months.forEach(month => {
        let income = document.getElementById(`${month}-income`).value;
        let expenses = document.getElementById(`${month}-expenses`).value;

        incomeData.push(income);
        expensesData.push(expenses);
    });

    console.log(incomeData, expensesData);

    // If myChart is defined, destroy it
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: expensesData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});