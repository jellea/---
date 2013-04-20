$(function() {

    var open = [],
        high = [],
        low = [],
        close = [],
        volume_btc = [],
        volume_cur = [],
        price = [];
    for (var i = 0; i < bitchart.length; i += 1) {
        open.push([i, bitchart[i][1]]);
        high.push([i, bitchart[i][2]]);
        low.push([i, bitchart[i][3]]);
        close.push([i, bitchart[i][4]]);
        volume_btc.push([i, bitchart[i][5]]);
        volume_cur.push([i, bitchart[i][6]]);
        price.push([i, bitchart[i][7]]);
    }

    console.log(open);

    plot = $.plot("#placeholder", [
        { data: open, label: "open"},
        { data: high, label: "high"},
        { data: low, label: "low"},
        { data: close, label: "close"},
        { data: volume_btc, label: "volume_btc"},
        { data: volume_cur, label: "volume_cur"},
        { data: price, label: "price"}
    ], {
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
        yaxis: {
            min: 0,
            max: 500
        }
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