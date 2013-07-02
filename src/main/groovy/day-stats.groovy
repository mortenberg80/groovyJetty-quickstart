def day = request.getParameter("day")
def dayDate
try {
    dayDate = Date.parse("yyyyMMdd", day)
} catch(Exception e) {
    dayDate = new Date();
}

def sakerOpprettet = 
    [
        date: dayDate.format('yyyy-MM-dd'),
        behandlet: [
            [label: 'SAK_OPRETTET', data: 35],
            [label: 'SAK_FERDIG', data: 100],
            [label: 'OPPLYSNINGER_MOTTATT', data: 67],
            [label: 'PURRE_OPPLYSNINGER', data: 33]
        ],
        epost: [
            [label: 'SAK_OPRETTET', data: 35],
            [label: 'SAK_FERDIG', data: 100],
            [label: 'OPPLYSNINGER_MOTTATT', data: 67],
            [label: 'PURRE_OPPLYSNINGER', data: 33]
        ],
        sms: [
            [label: 'SAK_OPRETTET', data: 35],
            [label: 'SAK_FERDIG', data: 100],
            [label: 'OPPLYSNINGER_MOTTATT', data: 67],
            [label: 'PURRE_OPPLYSNINGER', data: 33]
        ]
    ]

// println "Hei, ${dayDate.format('yyyy-MM-dd')}"
response.contentType = 'application/json'
json(sakerOpprettet)
