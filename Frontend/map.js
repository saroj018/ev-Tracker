let mapPlace={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        name:'National Power Station',
        address:'Bharatpur,ChaubishKothi',
        connectivity:'CCS TESLA SUPER CHARGER',
        charging_level:'level 2(240v,30amp),DC fast charger(tesla super charger)',
        availibility:'true',
        curds:'3',
        description:"National Power Station in Bharatpur, ChaubishKothi, is an EV charging station offering Level 2 (240V, 30Amp) and DC fast charging (Tesla Super Charger). With 3 available curds, the station ensures convenient charging for multiple electric vehicles. It is currently available and supports CCS and Tesla Super Charger connectivity.",
        model:['tesla','kia']
        

      },
      "geometry": {
        "coordinates": [
          80.2002021906224,
          29.73745184987851
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'Green Energy Station',
        address:'Kathmandu, Thamel',
        connectivity:'CHAdeMO, Type 2',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'5',
        description:"Green Energy Station in Kathmandu's Thamel offers Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. Although currently unavailable, it supports CHAdeMO and Type 2 connectivity. With five curds available, it provides convenient charging options for electric vehicle owners in Thamel.",
        model:['hyundai','kia']
      },
      "geometry": {
        "coordinates": [
          81.55039120151542,
          29.09523710167943
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'Power Up Station',
        address:'Pokhara, Lakeside',
        connectivity:'CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:true,
        curds:'4',
        description:"Power Up Station, located in Pokhara's Lakeside area, is an EV charging station that offers both CCS and CHAdeMO connectivity options. It provides Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging capabilities, catering to the charging needs of electric vehicles. The station has a true availability status, indicating that it is operational and accessible for EV charging. With four curds available, Power Up Station allows for the simultaneous charging of up to four vehicles, ensuring convenience and efficient charging for electric vehicle owners in Pokhara's Lakeside.",
        model:['hyundai','bmw','byd']
      },
      "geometry": {
        "coordinates": [
          83.21147899781113,
          28.495841934675383
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'VoltCharge Center',
        address:'Patan, Durbar Square',
        connectivity:'Type 2, Tesla Super Charger',
        charging_level:' Level 2 (240V, 30Amp), DC Fast Charger (Tesla Super Charger)',
        availibility:true,
        curds:'1',
        description:"VoltCharge Center, located near Patan's Durbar Square, is an EV charging center that offers Type 2 and Tesla Super Charger connectivity options. It provides Level 2 charging at 240V and 30Amp, suitable for overnight or extended charging sessions. Additionally, it features a DC Fast Charger with Tesla Super Charger compatibility, enabling faster charging times for Tesla vehicles equipped with this technology.",
        model:['kia','tata','tesla']
      },
      "geometry": {
        "coordinates": [
          84.92586372874882,
          27.987192372195793
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        name:'EnergiFuel Station',
        address:'Janakpur, Ram Mandir ',
        connectivity:'CCS, CHAdeMO',
        charging_level:' Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'3',
        description:"EnergiFuel Station, situated on Kolkata's Park Street, is an electric vehicle charging station offering Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. Although currently unavailable, it provides CCS and CHAdeMO connectivity and has 3 curds for simultaneous charging. EnergiFuel Station aims to support the EV community by providing accessible and efficient charging infrastructure.",
        model:['hyundai','bmw',]
      },
      "geometry": {
        "coordinates": [
          86.10727911327905,
          27.15254363886727
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'PowerCharge Depot',
        address:'Nagarkot, View Tower',
        connectivity:'CCS, Type 2',
        charging_level:'Level 2 (240V, 30Amp), Level 3 (480V, 50Amp)',
        availibility:true,
        curds:'2',
        description:"PowerCharge Depot, located near Nagarkot's View Tower, is an EV charging depot that offers CCS and Type 2 connectivity options. It provides Level 2 charging at 240V and 30Amp, suitable for overnight or extended charging sessions. Additionally, it offers Level 3 charging at 480V and 50Amp, allowing for faster charging times.",
        model:['hyundai','bmw','byd','tata']
      },
      "geometry": {
        "coordinates": [
          84.38690881584199,
          27.616767225323045
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'Ampere Junction',
        address:'Chitwan, Sauraha',
        connectivity:'Type 2, Tesla Super Charger',
        charging_level:'Level 2 (240V, 30Amp), DC Fast Charger (Tesla Super Charger)',
        availibility:true,
        curds:'4',
        description:"Ampere Junction in Chitwan's Sauraha offers Level 2 (240V, 30Amp) and DC Fast Charger (Tesla Super Charger) charging options. With four curds available, it provides convenient and reliable charging for electric vehicle owners. Ampere Junction supports Type 2 and Tesla Super Charger connectivity and has a true availability status.",
        model:['byd','tata']
      },
      "geometry": {
        "coordinates": [
          82.99045373827084,
          28.012133308939113
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'ZapPower Station',
        address:' Itahari, Golchha Chowk',
        connectivity:'CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'2',
        description:"ZapPower Station in Itahari, located at Golchha Chowk, offers Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. However, it is currently unavailable. With two curds available, ZapPower Station provides charging solutions for EV owners in Itahari's Golchha Chowk.",
        model:['kia','byd','tata']
      },
      "geometry": {
        "coordinates": [
          82.10465308715669,
          28.431573304359972
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'CurrentCharge Hub',
        address:' Damak, Main Road',
        connectivity:'CCS, Type 2',
        charging_level:'Level 2 (240V, 30Amp), DC Fast Charger (Tesla Super Charger)',
        availibility:true,
        curds:'5',
        description:"CurrentCharge Hub in Damak, located on the Main Road, offers Level 2 (240V, 30Amp) and DC Fast Charger (Tesla Super Charger) charging. With five curds available, it provides convenient and reliable charging for electric vehicle owners. CurrentCharge Hub supports CCS and Type 2 connectivity and has a true availability status.",
        model:['tata']
      },
      "geometry": {
        "coordinates": [
          80.8930021757555,
          28.784744312822895
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'PowerSpark Station',
        address:' Dharan, Bhanu Chowk',
        connectivity:'CCS, CHAdeMO',
        charging_level:' Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'4',
        description:"PowerSpark Station in Dharan, located at Bhanu Chowk, offers Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. However, it is currently unavailable. With four curds available, PowerSpark Station provides charging solutions for EV owners in Dharan's Bhanu Chowk.",
        model:['hyundai','bmw','kia']
      },
      "geometry": {
        "coordinates": [
          82.03741731476453,
          29.681068045474234
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'ElectroBoost Hub',
        address:'Dhangadhi, Clock Tower Chowk',
        connectivity:'CCS, Type 2',
        charging_level:' Level 2 (240V, 30Amp), Level 3 (480V, 50Amp)',
        availibility:true,
        curds:'2',
        description:"ElectroBoost Hub in Dhangadhi, located at Clock Tower Chowk, offers Level 2 (240V, 30Amp) and Level 3 (480V, 50Amp) charging. With two curds available, it provides convenient and reliable charging for electric vehicle owners. ElectroBoost Hub supports CCS and Type 2 connectivity and has a true availability status.",
        model:['hyundai','bmw','byd','tata']
      },
      "geometry": {
        "coordinates": [
          82.47687673425656,
          29.223931084126193
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'AmpVolt Depot',
        address:'Birgunj, Adarsh Nagar',
        connectivity:'Type 2, Tesla Super Charger',
        charging_level:'Level 2 (240V, 30Amp), DC Fast Charger (Tesla Super Charger)',
        availibility:true,
        curds:'3',
        description:"AmpVolt Depot in Birgunj, located at Adarsh Nagar, offers Level 2 (240V, 30Amp) and DC Fast Charger (Tesla Super Charger) charging. With three curds available, it provides convenient and reliable charging for electric vehicle owners. AmpVolt Depot supports Type 2 and Tesla Super Charger connectivity and has a true availability status.",
        model:['hyundai','kia']
      },
      "geometry": {
        "coordinates": [
          83.88882406501409,
          28.605109645096263
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'ElectraCharge Center',
        address:'Birendranagar, Traffic Chowk        ',
        connectivity:'CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'1',
        description:"ElectraCharge Center in Birendranagar, located at Traffic Chowk, offers Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. However, it is currently unavailable. With one curd available, ElectraCharge Center provides charging solutions for EV owners in Birendranagar's Traffic Chowk.",
        model:['tesla','tata']
      },
      "geometry": {
        "coordinates": [
          83.66318738021863,
          27.770860679391276
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'ElectraCharge Center',
        address:'Hetauda, Bank Road',
        connectivity:'CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'1',
        description:"ElectraCharge Center in Hetauda, located on Bank Road, is an EV charging facility offering Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. Although currently unavailable, it supports CCS and CHAdeMO connectivity and has one available curd for charging. ElectraCharge Center aims to provide convenient charging solutions for electric vehicle owners in Hetauda.",
        model:['bmw','byd']
      },
      "geometry": {
        "coordinates": [
          85.04611106316497,
          27.424493461147634
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:'EnergyCharge Station',
        address:'Gorkha, Tallo Bazaar',
        connectivity:'CHAdeMO, CCS, Type 2',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:true,
        curds:'4',
        description:"EnergyCharge Station, located in Gorkha's Tallo Bazaar, is an EV charging facility offering CHAdeMO, CCS, and Type 2 connectivity options. It provides Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging capabilities. With an availability status of true, this station is operational and accessible for electric vehicle charging. EnergyCharge Station has four curds available, allowing for simultaneous charging of up to four vehicles. It serves as a convenient and reliable charging solution for EV owners in Gorkha.",
        model:['hyundai','bmw','byd','tata','kia']
      },
      "geometry": {
        "coordinates": [
          84.35177474050954,
          28.072410473880026
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:' PowerUp Hub',
        address:'Lalitpur,',
        connectivity:'CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'2',
        description:"PowerUp Hub in Lalitpur is an EV charging hub offering Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. However, it is currently unavailable. With two curds available, PowerUp Hub provides charging solutions for EV owners in Lalitpur.",
        model:['tata','kia']
      },
      "geometry": {
        "coordinates": [
          85.56300377790859,
          27.82024896940952
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:' ElectraCharge Depot',
        address:'Manang, Chame Bazaar',
        connectivity:'CCS, Type 2',
        charging_level:'Level 2 (240V, 30Amp), Level 3 (480V, 50Amp)',
        availibility:true,
        curds:'5',
        description:"ElectraCharge Depot in Manang, located at Chame Bazaar, offers Level 2 (240V, 30Amp) and Level 3 (480V, 50Amp) charging. With five curds available, it provides convenient and reliable charging for electric vehicle owners. ElectraCharge Depot supports CCS and Type 2 connectivity and has a true availability status.",
        model:['kia']
      },
      "geometry": {
        "coordinates": [
          84.6267895861871,
          27.488110508107255
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:' VoltPower Station',
        address:'Palpa, Tansen Bazaar',
        connectivity:' Type 2, Tesla Super Charger',
        charging_level:'Level 2 (240V, 30Amp), DC Fast Charger (Tesla Super Charger)',
        availibility:true,
        curds:'5',
        description:"VoltPower Station in Palpa, located at Tansen Bazaar, offers Level 2 (240V, 30Amp) and DC Fast Charger (Tesla Super Charger) charging. With five curds available, it provides convenient and reliable charging for electric vehicle owners. VoltPower Station supports Type 2 and Tesla Super Charger connectivity and has a true availability status.",
        model:['hyundai','tata']
      },
      "geometry": {
        "coordinates": [
          84.68178745540047,
          27.763726586533934
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        name:' EnergiCharge Hub',
        address:'Manang, Chame Bazaar',
        connectivity:' CCS, CHAdeMO',
        charging_level:'Level 3 (480V, 50Amp), Level 2 (240V, 30Amp)',
        availibility:false,
        curds:'5',
        description:"EnergiCharge Hub in Manang, located at Chame Bazaar, offers Level 3 (480V, 50Amp) and Level 2 (240V, 30Amp) charging. However, it is currently unavailable. With five curds available, EnergiCharge Hub provides charging solutions for EV owners in Manang's Chame Bazaar.",
        model:['bmw','kia']
      },
      "geometry": {
        "coordinates": [
          84.10430982866279,
          27.88532426285819
        ],
        "type": "Point"
      }
    }
  ]
}
    