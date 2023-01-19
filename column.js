Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Pineapple', 'Grapefruit', 'Strawberries', 'Kiwi', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Richard',
        data: [1, -4, 8, 4, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});