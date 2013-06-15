def map = [
    "2013-01-01" :  [
                        "Behandlet" : 100,
                        "Epost" : 10,
                        "Sms" : 0
                    ],
    "2013-01-02" :  [
                        "Behandlet" : 300,
                        "Epost" : 80,
                        "Sms" : 0
                    ],
    "2013-01-03" :  [
                        "Behandlet" : 200,
                        "Epost" : 50,
                        "Sms" : 0
                    ],
    "2013-01-04" :  [
                        "Behandlet" : 400,
                        "Epost" : 80,
                        "Sms" : 0
                    ]
                ]

def flotMap = [
    "behandlet" : map.collect( { date, data -> [Date.parse("yyyy-MM-dd", date).getTime(), data["Behandlet"]] } ),
    "epost" : map.collect( { date, data -> [Date.parse("yyyy-MM-dd", date).getTime(), data["Epost"]] }),
    "sms" : map.collect( { date, data -> [Date.parse("yyyy-MM-dd", date).getTime(), data["Sms"]] })
]

response.contentType = 'application/json'

json(flotMap).toString
