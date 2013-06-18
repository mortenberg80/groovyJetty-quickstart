$(function() {
    $.getJSON("stats.groovy", function(data) {
        var behandlet = {data: data["behandlet"], label: "Behandlet", bars: { show: true, align: "left", barWidth: 8*60*60*1000}};
        var epost = {data: data["epost"], label: "Epost",  bars: { show: true, align: "center", barWidth: 8*60*60*1000}};
        var sms = {data: data["sms"], label: "Sms", bars: { show: true, align: "right", barWidth: 8*60*60*1000}};

        $.plot("#placeholder", [ behandlet, epost, sms ], {
            xaxis: { mode: "time" },
            yaxes: [ {position: "left" }, {position: "right"} ]
        });
    });
});
