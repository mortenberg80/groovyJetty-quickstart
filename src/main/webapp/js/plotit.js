$(function() {
    $.getJSON("stats.groovy", function(data) {
        var behandlet = {data: data["behandlet"], label: "Behandlet"};
        var epost = {data: data["epost"], label: "Epost"};
        var sms = {data: data["sms"], label: "Sms"};

        $.plot("#placeholder", [ behandlet, epost, sms ], {
            xaxis: { mode: "time" }
        });
    });
});
