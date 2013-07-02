function labelFormatter(label, series) {
    // return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + series.data[0][1] + "</div>";
}

function plotPie(placeholder, data) {
    $.plot(placeholder, data, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3/4,
                    formatter: labelFormatter,
                    background: { 
                        opacity: 0.5,
                        color: '#000'
                    }
                }
            } 
        },
        legend: {
            show: false,
        }
    });
}


function printDaychart(day) {
    $.getJSON("day-stats.groovy?day=" + day, function(data) {
        var behandlet = data["behandlet"]
        var epost = data["epost"]
        var sms = data["sms"]

        plotPie("#behandletDag", behandlet)
        plotPie("#epostDag", epost)
        plotPie("#smsDag", sms)
    });
    $('#statsDag').html("Varselfordeling for " + day);
}

function printBarchart() {
    $.getJSON("stats.groovy", function(data) {
        var behandlet = {data: data["behandlet"], label: "Behandlet", bars: { show: true, align: "left", barWidth: 8*60*60*1000}};
        var epost = {data: data["epost"], label: "Epost",  bars: { show: true, align: "center", barWidth: 8*60*60*1000}};
        var sms = {data: data["sms"], label: "Sms", bars: { show: true, align: "right", barWidth: 8*60*60*1000}};

        $.plot("#placeholder", [ behandlet, epost, sms ], {
            xaxis: { mode: "time" },
            yaxes: [ {position: "left" }, {position: "right"} ]
        });
    });
}

$(document).on('click', '.datorad', function() {
    var datoString = $(this).find('td.dato').html();
    var datoParts = datoString.split('-');
    printDaychart(datoParts[0] + datoParts[1] + datoParts[2]);
});

$(function() {
    printBarchart();
    printDaychart("20130603");
});
