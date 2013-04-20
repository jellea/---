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
            }
        },
        crosshair: {
            mode: "x"
        },
        grid: {
            hoverable: true,
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

    // var legends = $("#placeholder .legendLabel");

    // legends.each(function () {
    //     // fix the widths so they don't jump around
    //     $(this).css('width', $(this).width());
    // });

    // var updateLegendTimeout = null;
    // var latestPosition = null;

    // function updateLegend() {

    //     updateLegendTimeout = null;

    //     var pos = latestPosition;

    //     var axes = plot.getAxes();
    //     if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
    //         pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
    //         return;
    //     }

    //     var i, j, dataset = plot.getData();
    //     for (i = 0; i < dataset.length; ++i) {

    //         var series = dataset[i];

    //         // Find the nearest points, x-wise

    //         for (j = 0; j < series.data.length; ++j) {
    //             if (series.data[j][0] > pos.x) {
    //                 break;
    //             }
    //         }

    //         // Now Interpolate

    //         var y,
    //             p1 = series.data[j - 1],
    //             p2 = series.data[j];

    //         if (p1 === null) {
    //             y = p2[1];
    //         } else if (p2 === null) {
    //             y = p1[1];
    //         } else {
    //             y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
    //         }

    //         legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
    //     }
    // }

    // $("#placeholder").bind("plothover",  function (event, pos, item) {
    //     latestPosition = pos;
    //     if (!updateLegendTimeout) {
    //         updateLegendTimeout = setTimeout(updateLegend, 50);
    //     }
    // });
});