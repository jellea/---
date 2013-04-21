$(function() {

    graphs = [
        { label: 'open', data: [] },
        { label: 'high', data: [] },
        { label: 'low', data: [] },
        { label: 'close', data: [] },
        { label: 'volume_btc', data: [], yaxis: 2 },
        { label: 'volume_cur', data: [], yaxis: 3 },
        { label: 'price', data: [] }
    ];

    for (var i = 0; i < bitchart.length; i++) {
        for(var ii = 0; ii < graphs.length; ii++) {
            graphs[ii].data.push([bitchart[i][0] + '000', bitchart[i][ii + 1]]);
        }
    }

    plot = $.plot("#placeholder", graphs, {
        series: {
            lines: {
                show: true
            },
            points:{
                show: true
            }
        },
        crosshair: {
            mode: "x"
        },
        grid: {
            hoverable: true,
            clickable: true,
            autoHighlight: false
        },
        xaxes: [ { mode: "time"} ],
        yaxes: [
            { min: 0, max: 300 },
            { min: 0, max: 600000 },
            { min: 0, max: 60000000 }
        ],
        legend: { position: "nw" }
    });

});
