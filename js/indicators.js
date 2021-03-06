$(function () {

    $('#populationContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [7],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [-10],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment',
            data: [3],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-3],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [13],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [-5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [10.54],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [21.81],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-26.37],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [5.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-1.23],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [-6.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [7.06],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [1],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-14.75],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-0.13],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-25.68],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [9.97],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [5.33],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [1.04],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-9.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-2.43],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-20.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [13.12],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [10.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [13.42],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [46.57],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [12.57],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-1.64],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [6.19],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [3.53],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [15.27],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [15.16],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-10.54],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-25.25],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [7.83],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#trendBethesda').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Bethesda - Chevy Chase'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [18703,20675]
        },{
            name: 'Median Household Income',
            data: [127290.65,155056.24]
        },
        {
            name: 'Unemployment',
            data: [474,349]
        },
        {
            name: 'Housing Units',
            data: [9643,10175]
        },
        {
            name: 'Median Housing Value',
            data: [752200.18,742941.35]
        },
        {
            name: 'Median Housing Rent',
            data: [1737.65,1625.47]
        }
        ]
        
    });
});


$(function () {
    $('#trendIC').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'International Corridor'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [55257,59160]
        },{
            name: 'Median Household Income',
            data: [62694.45, 63307.97]
        },
        {
            name: 'Unemployment',
            data: [3940, 3359]
        },
        {
            name: 'Housing Units',
            data: [18168,18145]
        },
        {
            name: 'Median Housing Value',
            data: [321622.58, 239038.71]
        },
        {
            name: 'Median Housing Rent',
            data: [985.23, 1083.48]
        }
        ]
        
    });
});

$(function () {
    $('#trendRiverdale').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Riverdale - New Carrolton'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [29108, 30659]
        },{
            name: 'Median Household Income',
            data: [60961, 61594.74]
        },
        {
            name: 'Unemployment',
            data: [1960, 1774]
        },
        {
            name: 'Housing Units',
            data: [10467, 10213]
        },
        {
            name: 'Median Housing Value',
            data: [264015.8, 210010.53]
        },
        {
            name: 'Median Housing Rent',
            data: [934.37, 1056.95]
        }
        ]
        
    });
});

$(function () {
    $('#trendSS').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Silver Spring'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [31493, 34795]
        },{
            name: 'Median Household Income',
            data: [78662.12, 89217.44]
        },
        {
            name: 'Unemployment',
            data: [1065, 1561]
        },
        {
            name: 'Housing Units',
            data: [16252, 18295]
        },
        {
            name: 'Median Housing Value',
            data: [369992, 363924]
        },
        {
            name: 'Median Housing Rent',
            data: [1282.44, 1361.88]
        }
        ]
        
    });
});

$(function () {
    $('#trendUM').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'University of Maryland'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [21277, 22029]
        },{
            name: 'Median Household Income',
            data: [50710.22, 58455.56]
        },
        {
            name: 'Unemployment',
            data: [950, 1094]
        },
        {
            name: 'Housing Units',
            data: [3756, 3360]
        },
        {
            name: 'Median Housing Value',
            data: [370466.67, 276933.33]
        },
        {
            name: 'Median Housing Rent',
            data: [1119.56, 1207.22]
        }
        ]
        
    });
});

$(function () {
    $('#trendCorridor').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Corridor'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total Population',
            data: [155838, 167318]
        },{
            name: 'Median Household Income',
            data: [76125.5, 84409.3]
        },
        {
            name: 'Unemployment',
            data: [8389, 8137]
        },
        {
            name: 'Housing Units',
            data: [58286, 60188]  
        },
        {
            name: 'Median Housing Value',
            data: [399584.2, 352682.21]
        },
        {
            name: 'Median Housing Rent',
            data: [1187.84, 1249.65]
        }
        ]
        
    });
});

function showDiv(id){
    if(id == 1) {
        document.getElementById('trendBethesda').style.display = "block"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "block";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 2) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "block";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "block";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 3) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "block";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "block";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 4) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "block";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "block";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 5) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "block";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "block";
    }
    if(id == 6) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "block";
        document.getElementById('corridorData').style.display = "block";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
}

function setViewFunction() {
    document.getElementById('trendBethesda').style.display = "none"; 
    document.getElementById('trendSS').style.display = "none";
    document.getElementById('trendIC').style.display = "none";
    document.getElementById('trendUM').style.display = "none";
    document.getElementById('trendRiverdale').style.display = "none";
    document.getElementById('trendCorridor').style.display = "block";
    document.getElementById('corridorData').style.display = "block";
    document.getElementById('BData').style.display = "none";
    document.getElementById('SSData').style.display = "none";
    document.getElementById('ICData').style.display = "none";
    document.getElementById('UMData').style.display = "none";
    document.getElementById('RCData').style.display = "none";
}
