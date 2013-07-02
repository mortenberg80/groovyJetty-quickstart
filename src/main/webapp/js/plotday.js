function labelFormatter(label, series) {
    // return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + series.data[0][1] + "</div>";
}

$(function() {
    $.getJSON("day-stats.groovy", function(data) {
        var daydata = data["stats"]
        // var data2 = [
        //    {label: "SAK_OPPRETTET", data: 90},
        //    {label: "SAK_FERDIG", data: 110},
        //    {label: "OPPLYSNINGER_MOTTATT", data: 65},
        //    {label: "PURRE_OPPLYSNINGER", data: 30}
        //]

        $.plot("#placeholder", daydata, {
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
    });
});
