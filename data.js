var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorderseite",
      "name": "Vorderseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8917928933333581,
          "pitch": 0.02679743708275595,
          "rotation": 5.497787143782138,
          "target": "1-garten"
        },
        {
          "yaw": -0.5729777028714516,
          "pitch": 0.052332338996667005,
          "rotation": 0,
          "target": "5-flur-erdgeschoss-eingang"
        },
        {
          "yaw": -0.08320935962750653,
          "pitch": 0.018270013884780667,
          "rotation": 5.497787143782138,
          "target": "4-trauben"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garten",
      "name": "Garten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6092968979763658,
          "pitch": 0.05078434452033953,
          "rotation": 0,
          "target": "0-vorderseite"
        },
        {
          "yaw": 0.17495621144840712,
          "pitch": 0.16574812476175538,
          "rotation": 5.497787143782138,
          "target": "2-terasse"
        },
        {
          "yaw": -0.5364310041567641,
          "pitch": 0.10732037034505026,
          "rotation": 0,
          "target": "3-hochbeet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terasse",
      "name": "Terasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.146795449395821,
        "pitch": 0.09625499569477292,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": 0.6499239154300032,
          "pitch": 0.21908855598297805,
          "rotation": 0,
          "target": "1-garten"
        },
        {
          "yaw": -1.6925962756135107,
          "pitch": 0.05583243641406632,
          "rotation": 0,
          "target": "0-vorderseite"
        },
        {
          "yaw": 2.3329062885934526,
          "pitch": 0.2534896897926746,
          "rotation": 0.7853981633974483,
          "target": "3-hochbeet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hochbeet",
      "name": "Hochbeet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.8778060494633113,
        "pitch": -0.07651016750228301,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": -2.2429350571175792,
          "pitch": 0.10263310317191454,
          "rotation": 0,
          "target": "1-garten"
        },
        {
          "yaw": -2.7469206087684874,
          "pitch": 0.10862414576720703,
          "rotation": 11.780972450961727,
          "target": "2-terasse"
        },
        {
          "yaw": 2.9885305495299272,
          "pitch": 0.04027429602283128,
          "rotation": 5.497787143782138,
          "target": "15-wohnzimmer"
        },
        {
          "yaw": 1.0215863278006232,
          "pitch": 0.14198870350187676,
          "rotation": 0,
          "target": "4-trauben"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-trauben",
      "name": "Trauben",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.9293851112872424,
        "pitch": -0.013240703650492236,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": 1.6090461261616626,
          "pitch": 0.17332575383084325,
          "rotation": 0,
          "target": "3-hochbeet"
        },
        {
          "yaw": 0.13414582943508435,
          "pitch": 0.04162405537581293,
          "rotation": 0,
          "target": "0-vorderseite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15423052766846013,
          "pitch": -1.2894448148948197,
          "title": "Trauben",
          "text": "Zum Schutz vor Vögel und Wespen sind die meisten Trauben eingetütet"
        }
      ]
    },
    {
      "id": "5-flur-erdgeschoss-eingang",
      "name": "Flur Erdgeschoss Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9103084606202856,
          "pitch": 0.17028007428848824,
          "rotation": 0,
          "target": "0-vorderseite"
        },
        {
          "yaw": 0.11688959070430727,
          "pitch": 0.10928772838503065,
          "rotation": 0,
          "target": "10-flur-erdgeschoss"
        },
        {
          "yaw": 1.6379345882134029,
          "pitch": 0.7708592487012833,
          "rotation": 3.9269908169872414,
          "target": "6-flur-keller"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-flur-keller",
      "name": "Flur Keller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32751868941334905,
          "pitch": -0.42820891840757724,
          "rotation": 0.7853981633974483,
          "target": "5-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 1.7041236255264511,
          "pitch": 0.24850881276204717,
          "rotation": 0,
          "target": "9-werkstatt"
        },
        {
          "yaw": -3.0129934494662294,
          "pitch": 0.31858334246957654,
          "rotation": 0,
          "target": "8-hobbyraum"
        },
        {
          "yaw": -1.5450356123636748,
          "pitch": 0.18578715054040273,
          "rotation": 0,
          "target": "7-waschraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.403111077243798,
          "pitch": -0.24851143420085542,
          "title": "Mond",
          "text": "Die Lampe ist eigtl. ein Mond. Leider auf dem Bild nicht zu erkennen."
        }
      ]
    },
    {
      "id": "7-waschraum",
      "name": "Waschraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8618328355203086,
          "pitch": 0.34047709993068764,
          "rotation": 0,
          "target": "6-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07593398953370212,
          "pitch": 0.003105147221059923,
          "title": "Geheimtür",
          "text": "Keiner weiß, wohin die Tür führt, denn sie ist verriegelt und der Schlüssel nicht auffindbar ;)"
        }
      ]
    },
    {
      "id": "8-hobbyraum",
      "name": "Hobbyraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.025311838206569348,
          "pitch": 0.086379506427118,
          "rotation": 0,
          "target": "11-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.46493722344580135,
          "pitch": -0.03706185286787367,
          "title": "Zeitreise",
          "text": "So sah der Keller mal aus. Wie eine Baustelle... Gehen wir nochmal in den Flur und anschließend zurück in den Hobbyraum."
        }
      ]
    },
    {
      "id": "9-werkstatt",
      "name": "Werkstatt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8159703030977798,
          "pitch": 0.41507411201908084,
          "rotation": 0,
          "target": "6-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.910044645337047,
          "pitch": 0.07305457793013481,
          "title": "Zeitreise",
          "text": "Hier sieht es aber noch leer aus...<br>Schauen wir mal im Hobbyraum vorbei."
        }
      ]
    },
    {
      "id": "10-flur-erdgeschoss",
      "name": "Flur Erdgeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5330729202119642,
          "pitch": 0.2200097886833703,
          "rotation": 5.497787143782138,
          "target": "5-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 1.1922806335142635,
          "pitch": 0.38698610830439506,
          "rotation": 0.7853981633974483,
          "target": "14-hauswirtschaftsraum"
        },
        {
          "yaw": 2.471686675672392,
          "pitch": 0.32325702277933566,
          "rotation": 0.7853981633974483,
          "target": "15-wohnzimmer"
        },
        {
          "yaw": -1.740012783521916,
          "pitch": 0.2481096134948917,
          "rotation": 0,
          "target": "16-arbeitszimmer"
        },
        {
          "yaw": -0.3119879032499284,
          "pitch": -0.5358191520045885,
          "rotation": 0.7853981633974483,
          "target": "17-flur-obergeschoss-fenster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-flur-keller",
      "name": "Flur Keller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.559316014868454,
          "pitch": -0.6111575645741762,
          "rotation": 0.7853981633974483,
          "target": "5-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 1.7576928055194827,
          "pitch": 0.032799264834174835,
          "rotation": 0,
          "target": "13-werkstatt-2025"
        },
        {
          "yaw": 3.062379325218531,
          "pitch": 0.2205274700232689,
          "rotation": 0,
          "target": "12-hobbyraum-2024"
        },
        {
          "yaw": -1.8487496084814428,
          "pitch": 0.14210883580336287,
          "rotation": 0,
          "target": "7-waschraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.027920647393856,
          "pitch": -0.05364988627942857,
          "title": "Zeitreise Werkstatt",
          "text": "Auch die Werkstatt hat sich verändert. Schauen wir nochmal rein!"
        },
        {
          "yaw": 3.0174887520986733,
          "pitch": -0.1254491256415271,
          "title": "Sonderbar",
          "text": "Die Türe war doch gerade noch offen..."
        }
      ]
    },
    {
      "id": "12-hobbyraum-2024",
      "name": "Hobbyraum 2024",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0897020860393134,
          "pitch": 0.07060066379901464,
          "rotation": 0,
          "target": "11-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4775972288889605,
          "pitch": -0.23100737956728423,
          "title": "Über New York",
          "text": "Hier geht es weiter durch New York"
        },
        {
          "yaw": 1.5070689779842166,
          "pitch": -0.30397360235123827,
          "title": "12.000 Teile",
          "text": "<div>Das unfassbare Mammutprojekt.</div><div>12.000 Teile Puzzle von New York!</div>"
        },
        {
          "yaw": 2.4384506859012482,
          "pitch": -0.30058990562960375,
          "title": "Heimkino",
          "text": "Hier ist die ausziehbare Leinwand fürs Heimkino"
        }
      ]
    },
    {
      "id": "13-werkstatt-2025",
      "name": "Werkstatt 2025",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18740100050591835,
          "pitch": -0.08018880483603041,
          "rotation": 1.5707963267948966,
          "target": "11-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.064018718739762,
          "pitch": -0.5841431727613013,
          "title": "Der Wechselrichter",
          "text": "Der riesen Kasten ist der Wechselrichter unserer Photovolatikanlage"
        },
        {
          "yaw": 1.9797986696306333,
          "pitch": -0.22553845651663096,
          "title": "10 KW Batteriespeicher",
          "text": "Der Turm ist die Batterie, das einzige aus China (BYD), da die anderen Hersteller unbezahlbar und witzigerweise auch gar nicht mit dem Wechselrichter kompatibel gewesen wären."
        },
        {
          "yaw": 0.15544918700989108,
          "pitch": -1.0952210963119615,
          "title": "Neue Lampe",
          "text": "Der große Schrank hatte den Raum stark verdunkelt. Die Deckenlampe vertreibt nun die Dunkelheit ;)"
        },
        {
          "yaw": -2.222684646247231,
          "pitch": -0.3870156660141415,
          "title": "Notstromsicherungskasten",
          "text": "In diesem extra angebrachten Stromkasten sind die Sicherungen für die 3 Kreisläufe die eine Notstromversorgung über die Photovoltaik abdecken."
        }
      ]
    },
    {
      "id": "14-hauswirtschaftsraum",
      "name": "Hauswirtschaftsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6141098201795572,
          "pitch": 0.28750665119896723,
          "rotation": 0,
          "target": "10-flur-erdgeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6761997337050207,
          "pitch": -0.2665665129632373,
          "title": "Heizung / Wärmepumpe",
          "text": "Die Wärmepumpe ist leider im Winter nicht so effizient, heizt aber trotzdem zuverlässig."
        },
        {
          "yaw": 0.10749423200610408,
          "pitch": 0.4874478187310274,
          "title": "Entkalkungsanlage",
          "text": "Wegen des sehr hohen Kalkanteils im Leitungswasser mussten wir uns eine Entkalkungsanlage anschaffen."
        },
        {
          "yaw": -2.875307427608142,
          "pitch": -0.014550288392660704,
          "title": "Lüftung",
          "text": "Alle Räume haben entweder eine Zu- oder Abluft (Außnahme die Flure)"
        }
      ]
    },
    {
      "id": "15-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23652963381987746,
          "pitch": 0.14842480683125459,
          "rotation": 0,
          "target": "10-flur-erdgeschoss"
        },
        {
          "yaw": 2.3719528708797473,
          "pitch": 0.08934037219876245,
          "rotation": 0.7853981633974483,
          "target": "3-hochbeet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-arbeitszimmer",
      "name": "Arbeitszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6140500678916823,
          "pitch": 0.11435564614304283,
          "rotation": 0,
          "target": "10-flur-erdgeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-flur-obergeschoss-fenster",
      "name": "Flur Obergeschoss Fenster",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.046021679149784944,
          "pitch": 0.3011234490284025,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        },
        {
          "yaw": 1.6061227795460704,
          "pitch": 0.6462312528711252,
          "rotation": 3.9269908169872414,
          "target": "10-flur-erdgeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-flur-obergeschoss",
      "name": "Flur Obergeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16607157847005816,
          "pitch": 0.2054020335717972,
          "rotation": 0,
          "target": "17-flur-obergeschoss-fenster"
        },
        {
          "yaw": 1.044177166015345,
          "pitch": 0.2404626275491637,
          "rotation": 0.7853981633974483,
          "target": "19-spasszimmer"
        },
        {
          "yaw": 2.712808609156342,
          "pitch": 0.3035408005583182,
          "rotation": 0.7853981633974483,
          "target": "20-bad-licht"
        },
        {
          "yaw": -2.0910156204861075,
          "pitch": 0.2733855390908939,
          "rotation": 5.497787143782138,
          "target": "22-schlafzimmer"
        },
        {
          "yaw": -1.5895278196905167,
          "pitch": -1.1600203044410229,
          "rotation": 0,
          "target": "24-dachboden"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6714439547420117,
          "pitch": -0.148399623964119,
          "title": "Bildwand",
          "text": "<div>Hier fehlen noch viele Portraits.</div><div>Schickt uns Bilder von euch!</div>"
        },
        {
          "yaw": -1.6850819858695072,
          "pitch": -0.5548208041250486,
          "title": "Oben",
          "text": "Schaut mal nach Oben!"
        }
      ]
    },
    {
      "id": "19-spasszimmer",
      "name": "Spasszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4977124512952713,
          "pitch": 0.21558518596737386,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bad-licht",
      "name": "Bad (Licht)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5738849066635563,
        "pitch": 0.12484092013288972,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": 1.3071900180705782,
          "pitch": 0.05225764969850566,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        },
        {
          "yaw": 1.5072619864487544,
          "pitch": 0.03131534540921699,
          "rotation": 3.141592653589793,
          "target": "21-bad-wow"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6604779855998872,
          "pitch": -0.028191922584786866,
          "title": "Lichtschalter",
          "text": "Noch mehr WOW zum Universum!"
        }
      ]
    },
    {
      "id": "21-bad-wow",
      "name": "Bad (WOW)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4659342544933383,
        "pitch": -0.0017272283578471104,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": 1.5227147440463558,
          "pitch": 0.03282832730278962,
          "rotation": 3.141592653589793,
          "target": "20-bad-licht"
        },
        {
          "yaw": 1.2981160231115574,
          "pitch": 0.027399626316231718,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.8975977370620569,
        "pitch": 0.07187810553105578,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": 1.276015686093963,
          "pitch": 0.04760240700249874,
          "rotation": 0.7853981633974483,
          "target": "23-ankleide"
        },
        {
          "yaw": 1.670529873162172,
          "pitch": 0.08956348419353333,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-ankleide",
      "name": "Ankleide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.7324486663637373,
        "pitch": 0.034555646282848684,
        "fov": 1.4281044651564287
      },
      "linkHotspots": [
        {
          "yaw": -0.03399024333466372,
          "pitch": 0.12954782358866623,
          "rotation": 0,
          "target": "22-schlafzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12335468214466516,
          "pitch": -0.09374607821492731,
          "title": "Schiebetür",
          "text": "Da hat jemand hinter euch die Glasschiebetür zu gemacht ;)"
        }
      ]
    },
    {
      "id": "24-dachboden",
      "name": "Dachboden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15202629020914316,
          "pitch": 1.21230671035676,
          "rotation": 0,
          "target": "18-flur-obergeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8160917720242171,
          "pitch": 0.296820816931211,
          "title": "Lankabel mit Buchse",
          "text": "ALs wir noch Internet über die LTE-Antenne bekamen, wurde über diese LAN-Buchse das Haus versorgt."
        },
        {
          "yaw": -0.3823923357992953,
          "pitch": 0.13427068046150836,
          "title": "Stromkabel für die PV-Anlage",
          "text": "Hier kommt das Kabel raus für die PV-Anlage. das andere Ende ist im Keller am Stromkasten."
        },
        {
          "yaw": 0.3195486750689085,
          "pitch": 0.5454120472402817,
          "title": "Stromanschluss",
          "text": "Das Stromkabel mit angeschlossener Steckdose."
        },
        {
          "yaw": 1.6596708904661117,
          "pitch": 0.39633628461336734,
          "title": "Dachziegel",
          "text": "Das Lager unserer Ersatzdachziegel"
        },
        {
          "yaw": 1.2126741419518439,
          "pitch": 0.5565191719969373,
          "title": "Vynilplatten",
          "text": "Lager der Vynilplatten"
        }
      ]
    }
  ],
  "name": "Home Sweet Home",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
