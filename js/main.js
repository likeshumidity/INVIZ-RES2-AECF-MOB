$(function () {
    $('#mdeconomy').highcharts({
        title: {
            text: 'Children Living in Poverty',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: American Community Survey',
            x: -20
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            title: {
                text: 'Percent (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#2DA6A1'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            data: [11.8, 13.1, 13.9, 14.1, 13.9]
        }, {
            name: 'United States',
            data: [20, 22, 23, 23, 22]
        }, ]
    });
});