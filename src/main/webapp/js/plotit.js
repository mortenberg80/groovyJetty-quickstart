$(function() {
    $.getJSON("stats.groovy", function(data) {
        $.plot("#placeholder", [ data["behandlet"], data["epost" ], data["sms"] ], {
            xaxis: { mode: "time" }
        });
    });
});
