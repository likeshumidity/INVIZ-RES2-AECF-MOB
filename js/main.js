$(function () {
    $('#mdeconomy').highcharts({
        chart: {
            backgroundColor: '#E9F4F2',
            type: 'line'
            }, 
        
        credits: {
            enabled: false
        },
        
        
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
                text: ''
            },
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            color: '#2DA6A1',
            data: [11.8, 13.1, 13.9, 14.1, 13.9]
        }, {
            name: 'United States',
            color: '#808080',
            data: [20, 22, 23, 23, 22]
        }, ]
    });
});

$(function () {
    $('#mdeducation').highcharts({
        chart: {
            backgroundColor: 'rgb(229, 99, 68)',
            }, 

        credits: {
            enabled: false
        },
        title: {
            text: 'Fourth Graders Scoring Below Basic in State Standardized Tests',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Maryland State Department of Education',
            x: -20
        },
        xAxis: {
            categories: ['2005', '2007', '2009', '2011', '2013']
        },
        
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            color: '#F29F31',
            data: [35, 31, 30, 25, 23]
        }, {
            name: 'United States',
            color: '#808080',
            data: [38, 34, 34, 34, 33]
        }, ]
    });
});

$(function () {
    $('#mdhealth').highcharts({
        
        credits: {
            enabled: false
        },
        
        
        title: {
            text: 'Percent of Uninsured Children',
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
                text: ''
            },
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            color: '#E56344',
            data: [5, 5, 5, 4, 4]
        }, {
            name: 'United States',
            color: '#808080',
            data: [9, 8, 7, 7, 7]
        }, ]
    });
});

$(function () {
    $('#mdcommunity').highcharts({
        
        credits: {
            enabled: false
        },
        
        
        title: {
            text: 'Number of Children in Foster Care',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Child Trends analysis of data from the Adoption and Foster Care Analysis and Reporting System (AFCARS), made available through the National Data Archive on Child Abuse and Neglect.',
            x: -20
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            color: '#E5BB5F',
            data: [5, 5, 5, 4, 4]
        }, {
            name: 'United States',
            color: '#808080',
            data: [9, 8, 7, 7, 7]
        }, ]
    });
});

$(function () {
    $('#farms').highcharts({
        
        credits: {
            enabled: false
        },
        
        
        title: {
            text: 'Percent of Children Receiving Free and Reduced Meals',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Maryland Department of Education',
            x: -20
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Maryland',
            color: '#F29F31',
            data: [36, 40, 42, 43, 44]
        }, ]
    });
});