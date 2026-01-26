// Airport Database - 400+ airports worldwide
// Focus: USA (especially Arizona training airports), Germany, Europe
// Format: { code: { icao, iata, name, city, country, lat, lon } }

export const airports = {
  // =====================
  // ARIZONA TRAINING AIRPORTS (Priority)
  // =====================
  "GYR": { icao: "KGYR", iata: "GYR", name: "Phoenix Goodyear Airport", city: "Goodyear", country: "USA", lat: 33.4225, lon: -112.3761 },
  "KGYR": { icao: "KGYR", iata: "GYR", name: "Phoenix Goodyear Airport", city: "Goodyear", country: "USA", lat: 33.4225, lon: -112.3761 },
  "DVT": { icao: "KDVT", iata: "DVT", name: "Phoenix Deer Valley Airport", city: "Phoenix", country: "USA", lat: 33.6883, lon: -112.0825 },
  "KDVT": { icao: "KDVT", iata: "DVT", name: "Phoenix Deer Valley Airport", city: "Phoenix", country: "USA", lat: 33.6883, lon: -112.0825 },
  "BXK": { icao: "KBXK", iata: "BXK", name: "Buckeye Municipal Airport", city: "Buckeye", country: "USA", lat: 33.4204, lon: -112.6862 },
  "KBXK": { icao: "KBXK", iata: "BXK", name: "Buckeye Municipal Airport", city: "Buckeye", country: "USA", lat: 33.4204, lon: -112.6862 },
  "GBN": { icao: "KGBN", iata: "", name: "Gila Bend Municipal Airport", city: "Gila Bend", country: "USA", lat: 32.9603, lon: -112.6792 },
  "KGBN": { icao: "KGBN", iata: "", name: "Gila Bend Municipal Airport", city: "Gila Bend", country: "USA", lat: 32.9603, lon: -112.6792 },
  "CHD": { icao: "KCHD", iata: "CHD", name: "Chandler Municipal Airport", city: "Chandler", country: "USA", lat: 33.2691, lon: -111.8111 },
  "KCHD": { icao: "KCHD", iata: "CHD", name: "Chandler Municipal Airport", city: "Chandler", country: "USA", lat: 33.2691, lon: -111.8111 },
  "FFZ": { icao: "KFFZ", iata: "FFZ", name: "Falcon Field", city: "Mesa", country: "USA", lat: 33.4608, lon: -111.7283 },
  "KFFZ": { icao: "KFFZ", iata: "FFZ", name: "Falcon Field", city: "Mesa", country: "USA", lat: 33.4608, lon: -111.7283 },
  "IWA": { icao: "KIWA", iata: "AZA", name: "Phoenix-Mesa Gateway Airport", city: "Mesa", country: "USA", lat: 33.3078, lon: -111.6556 },
  "KIWA": { icao: "KIWA", iata: "AZA", name: "Phoenix-Mesa Gateway Airport", city: "Mesa", country: "USA", lat: 33.3078, lon: -111.6556 },
  "SDL": { icao: "KSDL", iata: "SDL", name: "Scottsdale Airport", city: "Scottsdale", country: "USA", lat: 33.6229, lon: -111.9106 },
  "KSDL": { icao: "KSDL", iata: "SDL", name: "Scottsdale Airport", city: "Scottsdale", country: "USA", lat: 33.6229, lon: -111.9106 },
  "CGZ": { icao: "KCGZ", iata: "CGZ", name: "Casa Grande Municipal Airport", city: "Casa Grande", country: "USA", lat: 32.9549, lon: -111.7668 },
  "KCGZ": { icao: "KCGZ", iata: "CGZ", name: "Casa Grande Municipal Airport", city: "Casa Grande", country: "USA", lat: 32.9549, lon: -111.7668 },
  "PRC": { icao: "KPRC", iata: "PRC", name: "Prescott Regional Airport", city: "Prescott", country: "USA", lat: 34.6545, lon: -112.4196 },
  "KPRC": { icao: "KPRC", iata: "PRC", name: "Prescott Regional Airport", city: "Prescott", country: "USA", lat: 34.6545, lon: -112.4196 },
  "PHX": { icao: "KPHX", iata: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "USA", lat: 33.4373, lon: -112.0078 },
  "KPHX": { icao: "KPHX", iata: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "USA", lat: 33.4373, lon: -112.0078 },
  "TUS": { icao: "KTUS", iata: "TUS", name: "Tucson International Airport", city: "Tucson", country: "USA", lat: 32.1161, lon: -110.9410 },
  "KTUS": { icao: "KTUS", iata: "TUS", name: "Tucson International Airport", city: "Tucson", country: "USA", lat: 32.1161, lon: -110.9410 },
  "RYN": { icao: "KRYN", iata: "", name: "Ryan Field", city: "Tucson", country: "USA", lat: 32.1422, lon: -111.1750 },
  "KRYN": { icao: "KRYN", iata: "", name: "Ryan Field", city: "Tucson", country: "USA", lat: 32.1422, lon: -111.1750 },
  "SEZ": { icao: "KSEZ", iata: "SDX", name: "Sedona Airport", city: "Sedona", country: "USA", lat: 34.8486, lon: -111.7884 },
  "KSEZ": { icao: "KSEZ", iata: "SDX", name: "Sedona Airport", city: "Sedona", country: "USA", lat: 34.8486, lon: -111.7884 },
  "FLG": { icao: "KFLG", iata: "FLG", name: "Flagstaff Pulliam Airport", city: "Flagstaff", country: "USA", lat: 35.1385, lon: -111.6712 },
  "KFLG": { icao: "KFLG", iata: "FLG", name: "Flagstaff Pulliam Airport", city: "Flagstaff", country: "USA", lat: 35.1385, lon: -111.6712 },

  // =====================
  // GERMANY - Major Airports
  // =====================
  "FRA": { icao: "EDDF", iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", lat: 50.0333, lon: 8.5706 },
  "EDDF": { icao: "EDDF", iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", lat: 50.0333, lon: 8.5706 },
  "MUC": { icao: "EDDM", iata: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", lat: 48.3538, lon: 11.7861 },
  "EDDM": { icao: "EDDM", iata: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", lat: 48.3538, lon: 11.7861 },
  "BER": { icao: "EDDB", iata: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany", lat: 52.3514, lon: 13.4939 },
  "EDDB": { icao: "EDDB", iata: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany", lat: 52.3514, lon: 13.4939 },
  "DUS": { icao: "EDDL", iata: "DUS", name: "Duesseldorf Airport", city: "Duesseldorf", country: "Germany", lat: 51.2895, lon: 6.7668 },
  "EDDL": { icao: "EDDL", iata: "DUS", name: "Duesseldorf Airport", city: "Duesseldorf", country: "Germany", lat: 51.2895, lon: 6.7668 },
  "HAM": { icao: "EDDH", iata: "HAM", name: "Hamburg Airport", city: "Hamburg", country: "Germany", lat: 53.6304, lon: 9.9882 },
  "EDDH": { icao: "EDDH", iata: "HAM", name: "Hamburg Airport", city: "Hamburg", country: "Germany", lat: 53.6304, lon: 9.9882 },
  "CGN": { icao: "EDDK", iata: "CGN", name: "Cologne Bonn Airport", city: "Cologne", country: "Germany", lat: 50.8659, lon: 7.1427 },
  "EDDK": { icao: "EDDK", iata: "CGN", name: "Cologne Bonn Airport", city: "Cologne", country: "Germany", lat: 50.8659, lon: 7.1427 },
  "STR": { icao: "EDDS", iata: "STR", name: "Stuttgart Airport", city: "Stuttgart", country: "Germany", lat: 48.6899, lon: 9.2220 },
  "EDDS": { icao: "EDDS", iata: "STR", name: "Stuttgart Airport", city: "Stuttgart", country: "Germany", lat: 48.6899, lon: 9.2220 },
  "HAJ": { icao: "EDDV", iata: "HAJ", name: "Hannover Airport", city: "Hannover", country: "Germany", lat: 52.4611, lon: 9.6850 },
  "EDDV": { icao: "EDDV", iata: "HAJ", name: "Hannover Airport", city: "Hannover", country: "Germany", lat: 52.4611, lon: 9.6850 },
  "NUE": { icao: "EDDN", iata: "NUE", name: "Nuremberg Airport", city: "Nuremberg", country: "Germany", lat: 49.4987, lon: 11.0780 },
  "EDDN": { icao: "EDDN", iata: "NUE", name: "Nuremberg Airport", city: "Nuremberg", country: "Germany", lat: 49.4987, lon: 11.0780 },
  "LEJ": { icao: "EDDP", iata: "LEJ", name: "Leipzig/Halle Airport", city: "Leipzig", country: "Germany", lat: 51.4324, lon: 12.2416 },
  "EDDP": { icao: "EDDP", iata: "LEJ", name: "Leipzig/Halle Airport", city: "Leipzig", country: "Germany", lat: 51.4324, lon: 12.2416 },
  "DRS": { icao: "EDDC", iata: "DRS", name: "Dresden Airport", city: "Dresden", country: "Germany", lat: 51.1328, lon: 13.7672 },
  "EDDC": { icao: "EDDC", iata: "DRS", name: "Dresden Airport", city: "Dresden", country: "Germany", lat: 51.1328, lon: 13.7672 },
  "BRE": { icao: "EDDW", iata: "BRE", name: "Bremen Airport", city: "Bremen", country: "Germany", lat: 53.0475, lon: 8.7867 },
  "EDDW": { icao: "EDDW", iata: "BRE", name: "Bremen Airport", city: "Bremen", country: "Germany", lat: 53.0475, lon: 8.7867 },
  "DTM": { icao: "EDLW", iata: "DTM", name: "Dortmund Airport", city: "Dortmund", country: "Germany", lat: 51.5183, lon: 7.6122 },
  "EDLW": { icao: "EDLW", iata: "DTM", name: "Dortmund Airport", city: "Dortmund", country: "Germany", lat: 51.5183, lon: 7.6122 },
  "FMO": { icao: "EDDG", iata: "FMO", name: "Muenster Osnabrueck Airport", city: "Muenster", country: "Germany", lat: 52.1346, lon: 7.6848 },
  "EDDG": { icao: "EDDG", iata: "FMO", name: "Muenster Osnabrueck Airport", city: "Muenster", country: "Germany", lat: 52.1346, lon: 7.6848 },
  "PAD": { icao: "EDLP", iata: "PAD", name: "Paderborn Lippstadt Airport", city: "Paderborn", country: "Germany", lat: 51.6141, lon: 8.6163 },
  "EDLP": { icao: "EDLP", iata: "PAD", name: "Paderborn Lippstadt Airport", city: "Paderborn", country: "Germany", lat: 51.6141, lon: 8.6163 },
  "FDH": { icao: "EDNY", iata: "FDH", name: "Friedrichshafen Airport", city: "Friedrichshafen", country: "Germany", lat: 47.6713, lon: 9.5115 },
  "EDNY": { icao: "EDNY", iata: "FDH", name: "Friedrichshafen Airport", city: "Friedrichshafen", country: "Germany", lat: 47.6713, lon: 9.5115 },
  "FKB": { icao: "EDSB", iata: "FKB", name: "Karlsruhe/Baden-Baden Airport", city: "Karlsruhe", country: "Germany", lat: 48.7794, lon: 8.0805 },
  "EDSB": { icao: "EDSB", iata: "FKB", name: "Karlsruhe/Baden-Baden Airport", city: "Karlsruhe", country: "Germany", lat: 48.7794, lon: 8.0805 },
  "HHN": { icao: "EDFH", iata: "HHN", name: "Frankfurt-Hahn Airport", city: "Hahn", country: "Germany", lat: 49.9487, lon: 7.2639 },
  "EDFH": { icao: "EDFH", iata: "HHN", name: "Frankfurt-Hahn Airport", city: "Hahn", country: "Germany", lat: 49.9487, lon: 7.2639 },
  "SCN": { icao: "EDDR", iata: "SCN", name: "Saarbruecken Airport", city: "Saarbruecken", country: "Germany", lat: 49.2146, lon: 7.1095 },
  "EDDR": { icao: "EDDR", iata: "SCN", name: "Saarbruecken Airport", city: "Saarbruecken", country: "Germany", lat: 49.2146, lon: 7.1095 },
  "ERF": { icao: "EDDE", iata: "ERF", name: "Erfurt-Weimar Airport", city: "Erfurt", country: "Germany", lat: 50.9798, lon: 10.9581 },
  "EDDE": { icao: "EDDE", iata: "ERF", name: "Erfurt-Weimar Airport", city: "Erfurt", country: "Germany", lat: 50.9798, lon: 10.9581 },

  // =====================
  // EUROPE - Major Airports
  // =====================
  // UK
  "LHR": { icao: "EGLL", iata: "LHR", name: "London Heathrow Airport", city: "London", country: "UK", lat: 51.4700, lon: -0.4543 },
  "EGLL": { icao: "EGLL", iata: "LHR", name: "London Heathrow Airport", city: "London", country: "UK", lat: 51.4700, lon: -0.4543 },
  "LGW": { icao: "EGKK", iata: "LGW", name: "London Gatwick Airport", city: "London", country: "UK", lat: 51.1481, lon: -0.1903 },
  "EGKK": { icao: "EGKK", iata: "LGW", name: "London Gatwick Airport", city: "London", country: "UK", lat: 51.1481, lon: -0.1903 },
  "STN": { icao: "EGSS", iata: "STN", name: "London Stansted Airport", city: "London", country: "UK", lat: 51.8850, lon: 0.2350 },
  "EGSS": { icao: "EGSS", iata: "STN", name: "London Stansted Airport", city: "London", country: "UK", lat: 51.8850, lon: 0.2350 },
  "LTN": { icao: "EGGW", iata: "LTN", name: "London Luton Airport", city: "London", country: "UK", lat: 51.8747, lon: -0.3683 },
  "EGGW": { icao: "EGGW", iata: "LTN", name: "London Luton Airport", city: "London", country: "UK", lat: 51.8747, lon: -0.3683 },
  "MAN": { icao: "EGCC", iata: "MAN", name: "Manchester Airport", city: "Manchester", country: "UK", lat: 53.3537, lon: -2.2750 },
  "EGCC": { icao: "EGCC", iata: "MAN", name: "Manchester Airport", city: "Manchester", country: "UK", lat: 53.3537, lon: -2.2750 },
  "EDI": { icao: "EGPH", iata: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "UK", lat: 55.9500, lon: -3.3725 },
  "EGPH": { icao: "EGPH", iata: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "UK", lat: 55.9500, lon: -3.3725 },
  "BHX": { icao: "EGBB", iata: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "UK", lat: 52.4539, lon: -1.7480 },
  "EGBB": { icao: "EGBB", iata: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "UK", lat: 52.4539, lon: -1.7480 },

  // France
  "CDG": { icao: "LFPG", iata: "CDG", name: "Paris Charles de Gaulle Airport", city: "Paris", country: "France", lat: 49.0097, lon: 2.5479 },
  "LFPG": { icao: "LFPG", iata: "CDG", name: "Paris Charles de Gaulle Airport", city: "Paris", country: "France", lat: 49.0097, lon: 2.5479 },
  "ORY": { icao: "LFPO", iata: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France", lat: 48.7233, lon: 2.3794 },
  "LFPO": { icao: "LFPO", iata: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France", lat: 48.7233, lon: 2.3794 },
  "NCE": { icao: "LFMN", iata: "NCE", name: "Nice Cote d'Azur Airport", city: "Nice", country: "France", lat: 43.6584, lon: 7.2159 },
  "LFMN": { icao: "LFMN", iata: "NCE", name: "Nice Cote d'Azur Airport", city: "Nice", country: "France", lat: 43.6584, lon: 7.2159 },
  "LYS": { icao: "LFLL", iata: "LYS", name: "Lyon-Saint Exupery Airport", city: "Lyon", country: "France", lat: 45.7256, lon: 5.0811 },
  "LFLL": { icao: "LFLL", iata: "LYS", name: "Lyon-Saint Exupery Airport", city: "Lyon", country: "France", lat: 45.7256, lon: 5.0811 },
  "MRS": { icao: "LFML", iata: "MRS", name: "Marseille Provence Airport", city: "Marseille", country: "France", lat: 43.4393, lon: 5.2214 },
  "LFML": { icao: "LFML", iata: "MRS", name: "Marseille Provence Airport", city: "Marseille", country: "France", lat: 43.4393, lon: 5.2214 },
  "TLS": { icao: "LFBO", iata: "TLS", name: "Toulouse-Blagnac Airport", city: "Toulouse", country: "France", lat: 43.6291, lon: 1.3639 },
  "LFBO": { icao: "LFBO", iata: "TLS", name: "Toulouse-Blagnac Airport", city: "Toulouse", country: "France", lat: 43.6291, lon: 1.3639 },
  "BOD": { icao: "LFBD", iata: "BOD", name: "Bordeaux-Merignac Airport", city: "Bordeaux", country: "France", lat: 44.8283, lon: -0.7156 },
  "LFBD": { icao: "LFBD", iata: "BOD", name: "Bordeaux-Merignac Airport", city: "Bordeaux", country: "France", lat: 44.8283, lon: -0.7156 },

  // Netherlands
  "AMS": { icao: "EHAM", iata: "AMS", name: "Amsterdam Schiphol Airport", city: "Amsterdam", country: "Netherlands", lat: 52.3086, lon: 4.7639 },
  "EHAM": { icao: "EHAM", iata: "AMS", name: "Amsterdam Schiphol Airport", city: "Amsterdam", country: "Netherlands", lat: 52.3086, lon: 4.7639 },
  "RTM": { icao: "EHRD", iata: "RTM", name: "Rotterdam The Hague Airport", city: "Rotterdam", country: "Netherlands", lat: 51.9569, lon: 4.4372 },
  "EHRD": { icao: "EHRD", iata: "RTM", name: "Rotterdam The Hague Airport", city: "Rotterdam", country: "Netherlands", lat: 51.9569, lon: 4.4372 },
  "EIN": { icao: "EHEH", iata: "EIN", name: "Eindhoven Airport", city: "Eindhoven", country: "Netherlands", lat: 51.4501, lon: 5.3745 },
  "EHEH": { icao: "EHEH", iata: "EIN", name: "Eindhoven Airport", city: "Eindhoven", country: "Netherlands", lat: 51.4501, lon: 5.3745 },

  // Belgium
  "BRU": { icao: "EBBR", iata: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium", lat: 50.9014, lon: 4.4844 },
  "EBBR": { icao: "EBBR", iata: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium", lat: 50.9014, lon: 4.4844 },
  "CRL": { icao: "EBCI", iata: "CRL", name: "Brussels South Charleroi Airport", city: "Charleroi", country: "Belgium", lat: 50.4592, lon: 4.4538 },
  "EBCI": { icao: "EBCI", iata: "CRL", name: "Brussels South Charleroi Airport", city: "Charleroi", country: "Belgium", lat: 50.4592, lon: 4.4538 },

  // Switzerland
  "ZRH": { icao: "LSZH", iata: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", lat: 47.4647, lon: 8.5492 },
  "LSZH": { icao: "LSZH", iata: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", lat: 47.4647, lon: 8.5492 },
  "GVA": { icao: "LSGG", iata: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland", lat: 46.2381, lon: 6.1089 },
  "LSGG": { icao: "LSGG", iata: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland", lat: 46.2381, lon: 6.1089 },
  "BSL": { icao: "LFSB", iata: "BSL", name: "EuroAirport Basel-Mulhouse-Freiburg", city: "Basel", country: "Switzerland", lat: 47.5896, lon: 7.5299 },
  "LFSB": { icao: "LFSB", iata: "BSL", name: "EuroAirport Basel-Mulhouse-Freiburg", city: "Basel", country: "Switzerland", lat: 47.5896, lon: 7.5299 },

  // Austria
  "VIE": { icao: "LOWW", iata: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria", lat: 48.1103, lon: 16.5697 },
  "LOWW": { icao: "LOWW", iata: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria", lat: 48.1103, lon: 16.5697 },
  "SZG": { icao: "LOWS", iata: "SZG", name: "Salzburg Airport", city: "Salzburg", country: "Austria", lat: 47.7933, lon: 13.0043 },
  "LOWS": { icao: "LOWS", iata: "SZG", name: "Salzburg Airport", city: "Salzburg", country: "Austria", lat: 47.7933, lon: 13.0043 },
  "INN": { icao: "LOWI", iata: "INN", name: "Innsbruck Airport", city: "Innsbruck", country: "Austria", lat: 47.2602, lon: 11.3440 },
  "LOWI": { icao: "LOWI", iata: "INN", name: "Innsbruck Airport", city: "Innsbruck", country: "Austria", lat: 47.2602, lon: 11.3440 },
  "GRZ": { icao: "LOWG", iata: "GRZ", name: "Graz Airport", city: "Graz", country: "Austria", lat: 46.9911, lon: 15.4396 },
  "LOWG": { icao: "LOWG", iata: "GRZ", name: "Graz Airport", city: "Graz", country: "Austria", lat: 46.9911, lon: 15.4396 },

  // Italy
  "FCO": { icao: "LIRF", iata: "FCO", name: "Rome Fiumicino Airport", city: "Rome", country: "Italy", lat: 41.8003, lon: 12.2389 },
  "LIRF": { icao: "LIRF", iata: "FCO", name: "Rome Fiumicino Airport", city: "Rome", country: "Italy", lat: 41.8003, lon: 12.2389 },
  "MXP": { icao: "LIMC", iata: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy", lat: 45.6306, lon: 8.7231 },
  "LIMC": { icao: "LIMC", iata: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy", lat: 45.6306, lon: 8.7231 },
  "LIN": { icao: "LIML", iata: "LIN", name: "Milan Linate Airport", city: "Milan", country: "Italy", lat: 45.4456, lon: 9.2767 },
  "LIML": { icao: "LIML", iata: "LIN", name: "Milan Linate Airport", city: "Milan", country: "Italy", lat: 45.4456, lon: 9.2767 },
  "VCE": { icao: "LIPZ", iata: "VCE", name: "Venice Marco Polo Airport", city: "Venice", country: "Italy", lat: 45.5053, lon: 12.3519 },
  "LIPZ": { icao: "LIPZ", iata: "VCE", name: "Venice Marco Polo Airport", city: "Venice", country: "Italy", lat: 45.5053, lon: 12.3519 },
  "NAP": { icao: "LIRN", iata: "NAP", name: "Naples International Airport", city: "Naples", country: "Italy", lat: 40.8860, lon: 14.2908 },
  "LIRN": { icao: "LIRN", iata: "NAP", name: "Naples International Airport", city: "Naples", country: "Italy", lat: 40.8860, lon: 14.2908 },
  "FLR": { icao: "LIRQ", iata: "FLR", name: "Florence Airport", city: "Florence", country: "Italy", lat: 43.8100, lon: 11.2051 },
  "LIRQ": { icao: "LIRQ", iata: "FLR", name: "Florence Airport", city: "Florence", country: "Italy", lat: 43.8100, lon: 11.2051 },
  "BGY": { icao: "LIME", iata: "BGY", name: "Milan Bergamo Airport", city: "Bergamo", country: "Italy", lat: 45.6739, lon: 9.7042 },
  "LIME": { icao: "LIME", iata: "BGY", name: "Milan Bergamo Airport", city: "Bergamo", country: "Italy", lat: 45.6739, lon: 9.7042 },
  "BLQ": { icao: "LIPE", iata: "BLQ", name: "Bologna Guglielmo Marconi Airport", city: "Bologna", country: "Italy", lat: 44.5354, lon: 11.2887 },
  "LIPE": { icao: "LIPE", iata: "BLQ", name: "Bologna Guglielmo Marconi Airport", city: "Bologna", country: "Italy", lat: 44.5354, lon: 11.2887 },

  // Spain
  "MAD": { icao: "LEMD", iata: "MAD", name: "Madrid-Barajas Airport", city: "Madrid", country: "Spain", lat: 40.4936, lon: -3.5668 },
  "LEMD": { icao: "LEMD", iata: "MAD", name: "Madrid-Barajas Airport", city: "Madrid", country: "Spain", lat: 40.4936, lon: -3.5668 },
  "BCN": { icao: "LEBL", iata: "BCN", name: "Barcelona-El Prat Airport", city: "Barcelona", country: "Spain", lat: 41.2971, lon: 2.0785 },
  "LEBL": { icao: "LEBL", iata: "BCN", name: "Barcelona-El Prat Airport", city: "Barcelona", country: "Spain", lat: 41.2971, lon: 2.0785 },
  "PMI": { icao: "LEPA", iata: "PMI", name: "Palma de Mallorca Airport", city: "Palma de Mallorca", country: "Spain", lat: 39.5517, lon: 2.7388 },
  "LEPA": { icao: "LEPA", iata: "PMI", name: "Palma de Mallorca Airport", city: "Palma de Mallorca", country: "Spain", lat: 39.5517, lon: 2.7388 },
  "AGP": { icao: "LEMG", iata: "AGP", name: "Malaga Airport", city: "Malaga", country: "Spain", lat: 36.6749, lon: -4.4991 },
  "LEMG": { icao: "LEMG", iata: "AGP", name: "Malaga Airport", city: "Malaga", country: "Spain", lat: 36.6749, lon: -4.4991 },
  "ALC": { icao: "LEAL", iata: "ALC", name: "Alicante-Elche Airport", city: "Alicante", country: "Spain", lat: 38.2822, lon: -0.5582 },
  "LEAL": { icao: "LEAL", iata: "ALC", name: "Alicante-Elche Airport", city: "Alicante", country: "Spain", lat: 38.2822, lon: -0.5582 },
  "VLC": { icao: "LEVC", iata: "VLC", name: "Valencia Airport", city: "Valencia", country: "Spain", lat: 39.4893, lon: -0.4816 },
  "LEVC": { icao: "LEVC", iata: "VLC", name: "Valencia Airport", city: "Valencia", country: "Spain", lat: 39.4893, lon: -0.4816 },
  "SVQ": { icao: "LEZL", iata: "SVQ", name: "Seville Airport", city: "Seville", country: "Spain", lat: 37.4180, lon: -5.8932 },
  "LEZL": { icao: "LEZL", iata: "SVQ", name: "Seville Airport", city: "Seville", country: "Spain", lat: 37.4180, lon: -5.8932 },
  "IBZ": { icao: "LEIB", iata: "IBZ", name: "Ibiza Airport", city: "Ibiza", country: "Spain", lat: 38.8729, lon: 1.3731 },
  "LEIB": { icao: "LEIB", iata: "IBZ", name: "Ibiza Airport", city: "Ibiza", country: "Spain", lat: 38.8729, lon: 1.3731 },
  "TFS": { icao: "GCTS", iata: "TFS", name: "Tenerife South Airport", city: "Tenerife", country: "Spain", lat: 28.0445, lon: -16.5725 },
  "GCTS": { icao: "GCTS", iata: "TFS", name: "Tenerife South Airport", city: "Tenerife", country: "Spain", lat: 28.0445, lon: -16.5725 },
  "LPA": { icao: "GCLP", iata: "LPA", name: "Gran Canaria Airport", city: "Gran Canaria", country: "Spain", lat: 27.9319, lon: -15.3866 },
  "GCLP": { icao: "GCLP", iata: "LPA", name: "Gran Canaria Airport", city: "Gran Canaria", country: "Spain", lat: 27.9319, lon: -15.3866 },

  // Portugal
  "LIS": { icao: "LPPT", iata: "LIS", name: "Lisbon Humberto Delgado Airport", city: "Lisbon", country: "Portugal", lat: 38.7813, lon: -9.1359 },
  "LPPT": { icao: "LPPT", iata: "LIS", name: "Lisbon Humberto Delgado Airport", city: "Lisbon", country: "Portugal", lat: 38.7813, lon: -9.1359 },
  "OPO": { icao: "LPPR", iata: "OPO", name: "Porto Airport", city: "Porto", country: "Portugal", lat: 41.2481, lon: -8.6814 },
  "LPPR": { icao: "LPPR", iata: "OPO", name: "Porto Airport", city: "Porto", country: "Portugal", lat: 41.2481, lon: -8.6814 },
  "FAO": { icao: "LPFR", iata: "FAO", name: "Faro Airport", city: "Faro", country: "Portugal", lat: 37.0144, lon: -7.9659 },
  "LPFR": { icao: "LPFR", iata: "FAO", name: "Faro Airport", city: "Faro", country: "Portugal", lat: 37.0144, lon: -7.9659 },

  // Greece
  "ATH": { icao: "LGAV", iata: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece", lat: 37.9364, lon: 23.9445 },
  "LGAV": { icao: "LGAV", iata: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece", lat: 37.9364, lon: 23.9445 },
  "SKG": { icao: "LGTS", iata: "SKG", name: "Thessaloniki Airport", city: "Thessaloniki", country: "Greece", lat: 40.5197, lon: 22.9709 },
  "LGTS": { icao: "LGTS", iata: "SKG", name: "Thessaloniki Airport", city: "Thessaloniki", country: "Greece", lat: 40.5197, lon: 22.9709 },
  "HER": { icao: "LGIR", iata: "HER", name: "Heraklion International Airport", city: "Heraklion", country: "Greece", lat: 35.3397, lon: 25.1803 },
  "LGIR": { icao: "LGIR", iata: "HER", name: "Heraklion International Airport", city: "Heraklion", country: "Greece", lat: 35.3397, lon: 25.1803 },
  "RHO": { icao: "LGRP", iata: "RHO", name: "Rhodes International Airport", city: "Rhodes", country: "Greece", lat: 36.4054, lon: 28.0862 },
  "LGRP": { icao: "LGRP", iata: "RHO", name: "Rhodes International Airport", city: "Rhodes", country: "Greece", lat: 36.4054, lon: 28.0862 },
  "CFU": { icao: "LGKR", iata: "CFU", name: "Corfu International Airport", city: "Corfu", country: "Greece", lat: 39.6019, lon: 19.9117 },
  "LGKR": { icao: "LGKR", iata: "CFU", name: "Corfu International Airport", city: "Corfu", country: "Greece", lat: 39.6019, lon: 19.9117 },
  "JMK": { icao: "LGMK", iata: "JMK", name: "Mykonos Airport", city: "Mykonos", country: "Greece", lat: 37.4351, lon: 25.3481 },
  "LGMK": { icao: "LGMK", iata: "JMK", name: "Mykonos Airport", city: "Mykonos", country: "Greece", lat: 37.4351, lon: 25.3481 },
  "JTR": { icao: "LGSR", iata: "JTR", name: "Santorini Airport", city: "Santorini", country: "Greece", lat: 36.3992, lon: 25.4793 },
  "LGSR": { icao: "LGSR", iata: "JTR", name: "Santorini Airport", city: "Santorini", country: "Greece", lat: 36.3992, lon: 25.4793 },

  // Scandinavia
  "CPH": { icao: "EKCH", iata: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark", lat: 55.6180, lon: 12.6508 },
  "EKCH": { icao: "EKCH", iata: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark", lat: 55.6180, lon: 12.6508 },
  "OSL": { icao: "ENGM", iata: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway", lat: 60.1939, lon: 11.1004 },
  "ENGM": { icao: "ENGM", iata: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway", lat: 60.1939, lon: 11.1004 },
  "ARN": { icao: "ESSA", iata: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden", lat: 59.6519, lon: 17.9186 },
  "ESSA": { icao: "ESSA", iata: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden", lat: 59.6519, lon: 17.9186 },
  "HEL": { icao: "EFHK", iata: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki", country: "Finland", lat: 60.3172, lon: 24.9633 },
  "EFHK": { icao: "EFHK", iata: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki", country: "Finland", lat: 60.3172, lon: 24.9633 },
  "BGO": { icao: "ENBR", iata: "BGO", name: "Bergen Airport Flesland", city: "Bergen", country: "Norway", lat: 60.2934, lon: 5.2181 },
  "ENBR": { icao: "ENBR", iata: "BGO", name: "Bergen Airport Flesland", city: "Bergen", country: "Norway", lat: 60.2934, lon: 5.2181 },
  "GOT": { icao: "ESGG", iata: "GOT", name: "Gothenburg Landvetter Airport", city: "Gothenburg", country: "Sweden", lat: 57.6628, lon: 12.2798 },
  "ESGG": { icao: "ESGG", iata: "GOT", name: "Gothenburg Landvetter Airport", city: "Gothenburg", country: "Sweden", lat: 57.6628, lon: 12.2798 },

  // Eastern Europe
  "PRG": { icao: "LKPR", iata: "PRG", name: "Prague Vaclav Havel Airport", city: "Prague", country: "Czech Republic", lat: 50.1008, lon: 14.2600 },
  "LKPR": { icao: "LKPR", iata: "PRG", name: "Prague Vaclav Havel Airport", city: "Prague", country: "Czech Republic", lat: 50.1008, lon: 14.2600 },
  "WAW": { icao: "EPWA", iata: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland", lat: 52.1657, lon: 20.9671 },
  "EPWA": { icao: "EPWA", iata: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland", lat: 52.1657, lon: 20.9671 },
  "KRK": { icao: "EPKK", iata: "KRK", name: "Krakow John Paul II Airport", city: "Krakow", country: "Poland", lat: 50.0777, lon: 19.7848 },
  "EPKK": { icao: "EPKK", iata: "KRK", name: "Krakow John Paul II Airport", city: "Krakow", country: "Poland", lat: 50.0777, lon: 19.7848 },
  "BUD": { icao: "LHBP", iata: "BUD", name: "Budapest Ferenc Liszt Airport", city: "Budapest", country: "Hungary", lat: 47.4369, lon: 19.2556 },
  "LHBP": { icao: "LHBP", iata: "BUD", name: "Budapest Ferenc Liszt Airport", city: "Budapest", country: "Hungary", lat: 47.4369, lon: 19.2556 },
  "OTP": { icao: "LROP", iata: "OTP", name: "Bucharest Henri Coanda Airport", city: "Bucharest", country: "Romania", lat: 44.5711, lon: 26.0850 },
  "LROP": { icao: "LROP", iata: "OTP", name: "Bucharest Henri Coanda Airport", city: "Bucharest", country: "Romania", lat: 44.5711, lon: 26.0850 },
  "SOF": { icao: "LBSF", iata: "SOF", name: "Sofia Airport", city: "Sofia", country: "Bulgaria", lat: 42.6952, lon: 23.4062 },
  "LBSF": { icao: "LBSF", iata: "SOF", name: "Sofia Airport", city: "Sofia", country: "Bulgaria", lat: 42.6952, lon: 23.4062 },

  // Ireland
  "DUB": { icao: "EIDW", iata: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", lat: 53.4213, lon: -6.2701 },
  "EIDW": { icao: "EIDW", iata: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", lat: 53.4213, lon: -6.2701 },
  "SNN": { icao: "EINN", iata: "SNN", name: "Shannon Airport", city: "Shannon", country: "Ireland", lat: 52.7020, lon: -8.9248 },
  "EINN": { icao: "EINN", iata: "SNN", name: "Shannon Airport", city: "Shannon", country: "Ireland", lat: 52.7020, lon: -8.9248 },
  "ORK": { icao: "EICK", iata: "ORK", name: "Cork Airport", city: "Cork", country: "Ireland", lat: 51.8413, lon: -8.4911 },
  "EICK": { icao: "EICK", iata: "ORK", name: "Cork Airport", city: "Cork", country: "Ireland", lat: 51.8413, lon: -8.4911 },

  // Turkey
  "IST": { icao: "LTFM", iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", lat: 41.2608, lon: 28.7419 },
  "LTFM": { icao: "LTFM", iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", lat: 41.2608, lon: 28.7419 },
  "SAW": { icao: "LTFJ", iata: "SAW", name: "Istanbul Sabiha Gokcen Airport", city: "Istanbul", country: "Turkey", lat: 40.8986, lon: 29.3092 },
  "LTFJ": { icao: "LTFJ", iata: "SAW", name: "Istanbul Sabiha Gokcen Airport", city: "Istanbul", country: "Turkey", lat: 40.8986, lon: 29.3092 },
  "AYT": { icao: "LTAI", iata: "AYT", name: "Antalya Airport", city: "Antalya", country: "Turkey", lat: 36.8987, lon: 30.8005 },
  "LTAI": { icao: "LTAI", iata: "AYT", name: "Antalya Airport", city: "Antalya", country: "Turkey", lat: 36.8987, lon: 30.8005 },
  "ADB": { icao: "LTBJ", iata: "ADB", name: "Izmir Adnan Menderes Airport", city: "Izmir", country: "Turkey", lat: 38.2924, lon: 27.1570 },
  "LTBJ": { icao: "LTBJ", iata: "ADB", name: "Izmir Adnan Menderes Airport", city: "Izmir", country: "Turkey", lat: 38.2924, lon: 27.1570 },

  // =====================
  // USA - Major Airports
  // =====================
  "JFK": { icao: "KJFK", iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA", lat: 40.6413, lon: -73.7781 },
  "KJFK": { icao: "KJFK", iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA", lat: 40.6413, lon: -73.7781 },
  "LAX": { icao: "KLAX", iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA", lat: 33.9425, lon: -118.4081 },
  "KLAX": { icao: "KLAX", iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA", lat: 33.9425, lon: -118.4081 },
  "ORD": { icao: "KORD", iata: "ORD", name: "Chicago O'Hare International Airport", city: "Chicago", country: "USA", lat: 41.9742, lon: -87.9073 },
  "KORD": { icao: "KORD", iata: "ORD", name: "Chicago O'Hare International Airport", city: "Chicago", country: "USA", lat: 41.9742, lon: -87.9073 },
  "DFW": { icao: "KDFW", iata: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "USA", lat: 32.8998, lon: -97.0403 },
  "KDFW": { icao: "KDFW", iata: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "USA", lat: 32.8998, lon: -97.0403 },
  "DEN": { icao: "KDEN", iata: "DEN", name: "Denver International Airport", city: "Denver", country: "USA", lat: 39.8561, lon: -104.6737 },
  "KDEN": { icao: "KDEN", iata: "DEN", name: "Denver International Airport", city: "Denver", country: "USA", lat: 39.8561, lon: -104.6737 },
  "SFO": { icao: "KSFO", iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA", lat: 37.6213, lon: -122.3790 },
  "KSFO": { icao: "KSFO", iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA", lat: 37.6213, lon: -122.3790 },
  "SEA": { icao: "KSEA", iata: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "USA", lat: 47.4502, lon: -122.3088 },
  "KSEA": { icao: "KSEA", iata: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "USA", lat: 47.4502, lon: -122.3088 },
  "MIA": { icao: "KMIA", iata: "MIA", name: "Miami International Airport", city: "Miami", country: "USA", lat: 25.7932, lon: -80.2906 },
  "KMIA": { icao: "KMIA", iata: "MIA", name: "Miami International Airport", city: "Miami", country: "USA", lat: 25.7932, lon: -80.2906 },
  "ATL": { icao: "KATL", iata: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "USA", lat: 33.6407, lon: -84.4277 },
  "KATL": { icao: "KATL", iata: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "USA", lat: 33.6407, lon: -84.4277 },
  "BOS": { icao: "KBOS", iata: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "USA", lat: 42.3656, lon: -71.0096 },
  "KBOS": { icao: "KBOS", iata: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "USA", lat: 42.3656, lon: -71.0096 },
  "EWR": { icao: "KEWR", iata: "EWR", name: "Newark Liberty International Airport", city: "Newark", country: "USA", lat: 40.6895, lon: -74.1745 },
  "KEWR": { icao: "KEWR", iata: "EWR", name: "Newark Liberty International Airport", city: "Newark", country: "USA", lat: 40.6895, lon: -74.1745 },
  "LGA": { icao: "KLGA", iata: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA", lat: 40.7769, lon: -73.8740 },
  "KLGA": { icao: "KLGA", iata: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA", lat: 40.7769, lon: -73.8740 },
  "MCO": { icao: "KMCO", iata: "MCO", name: "Orlando International Airport", city: "Orlando", country: "USA", lat: 28.4312, lon: -81.3081 },
  "KMCO": { icao: "KMCO", iata: "MCO", name: "Orlando International Airport", city: "Orlando", country: "USA", lat: 28.4312, lon: -81.3081 },
  "CLT": { icao: "KCLT", iata: "CLT", name: "Charlotte Douglas International Airport", city: "Charlotte", country: "USA", lat: 35.2140, lon: -80.9431 },
  "KCLT": { icao: "KCLT", iata: "CLT", name: "Charlotte Douglas International Airport", city: "Charlotte", country: "USA", lat: 35.2140, lon: -80.9431 },
  "LAS": { icao: "KLAS", iata: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "USA", lat: 36.0840, lon: -115.1537 },
  "KLAS": { icao: "KLAS", iata: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "USA", lat: 36.0840, lon: -115.1537 },
  "MSP": { icao: "KMSP", iata: "MSP", name: "Minneapolis-Saint Paul International Airport", city: "Minneapolis", country: "USA", lat: 44.8848, lon: -93.2223 },
  "KMSP": { icao: "KMSP", iata: "MSP", name: "Minneapolis-Saint Paul International Airport", city: "Minneapolis", country: "USA", lat: 44.8848, lon: -93.2223 },
  "DTW": { icao: "KDTW", iata: "DTW", name: "Detroit Metropolitan Airport", city: "Detroit", country: "USA", lat: 42.2124, lon: -83.3534 },
  "KDTW": { icao: "KDTW", iata: "DTW", name: "Detroit Metropolitan Airport", city: "Detroit", country: "USA", lat: 42.2124, lon: -83.3534 },
  "PHL": { icao: "KPHL", iata: "PHL", name: "Philadelphia International Airport", city: "Philadelphia", country: "USA", lat: 39.8729, lon: -75.2437 },
  "KPHL": { icao: "KPHL", iata: "PHL", name: "Philadelphia International Airport", city: "Philadelphia", country: "USA", lat: 39.8729, lon: -75.2437 },
  "IAH": { icao: "KIAH", iata: "IAH", name: "George Bush Intercontinental Airport", city: "Houston", country: "USA", lat: 29.9902, lon: -95.3368 },
  "KIAH": { icao: "KIAH", iata: "IAH", name: "George Bush Intercontinental Airport", city: "Houston", country: "USA", lat: 29.9902, lon: -95.3368 },
  "DCA": { icao: "KDCA", iata: "DCA", name: "Ronald Reagan Washington National Airport", city: "Washington D.C.", country: "USA", lat: 38.8512, lon: -77.0402 },
  "KDCA": { icao: "KDCA", iata: "DCA", name: "Ronald Reagan Washington National Airport", city: "Washington D.C.", country: "USA", lat: 38.8512, lon: -77.0402 },
  "IAD": { icao: "KIAD", iata: "IAD", name: "Washington Dulles International Airport", city: "Washington D.C.", country: "USA", lat: 38.9531, lon: -77.4565 },
  "KIAD": { icao: "KIAD", iata: "IAD", name: "Washington Dulles International Airport", city: "Washington D.C.", country: "USA", lat: 38.9531, lon: -77.4565 },
  "SAN": { icao: "KSAN", iata: "SAN", name: "San Diego International Airport", city: "San Diego", country: "USA", lat: 32.7336, lon: -117.1897 },
  "KSAN": { icao: "KSAN", iata: "SAN", name: "San Diego International Airport", city: "San Diego", country: "USA", lat: 32.7336, lon: -117.1897 },
  "SLC": { icao: "KSLC", iata: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City", country: "USA", lat: 40.7884, lon: -111.9778 },
  "KSLC": { icao: "KSLC", iata: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City", country: "USA", lat: 40.7884, lon: -111.9778 },
  "PDX": { icao: "KPDX", iata: "PDX", name: "Portland International Airport", city: "Portland", country: "USA", lat: 45.5898, lon: -122.5951 },
  "KPDX": { icao: "KPDX", iata: "PDX", name: "Portland International Airport", city: "Portland", country: "USA", lat: 45.5898, lon: -122.5951 },
  "HNL": { icao: "PHNL", iata: "HNL", name: "Daniel K. Inouye International Airport", city: "Honolulu", country: "USA", lat: 21.3187, lon: -157.9225 },
  "PHNL": { icao: "PHNL", iata: "HNL", name: "Daniel K. Inouye International Airport", city: "Honolulu", country: "USA", lat: 21.3187, lon: -157.9225 },
  "ANC": { icao: "PANC", iata: "ANC", name: "Ted Stevens Anchorage International Airport", city: "Anchorage", country: "USA", lat: 61.1743, lon: -149.9962 },
  "PANC": { icao: "PANC", iata: "ANC", name: "Ted Stevens Anchorage International Airport", city: "Anchorage", country: "USA", lat: 61.1743, lon: -149.9962 },
  "FAI": { icao: "PAFA", iata: "FAI", name: "Fairbanks International Airport", city: "Fairbanks", country: "USA", lat: 64.8151, lon: -147.8561 },
  "PAFA": { icao: "PAFA", iata: "FAI", name: "Fairbanks International Airport", city: "Fairbanks", country: "USA", lat: 64.8151, lon: -147.8561 },

  // =====================
  // OTHER INTERNATIONAL
  // =====================
  // Canada
  "YYZ": { icao: "CYYZ", iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", lat: 43.6777, lon: -79.6248 },
  "CYYZ": { icao: "CYYZ", iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", lat: 43.6777, lon: -79.6248 },
  "YVR": { icao: "CYVR", iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", lat: 49.1967, lon: -123.1815 },
  "CYVR": { icao: "CYVR", iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", lat: 49.1967, lon: -123.1815 },
  "YUL": { icao: "CYUL", iata: "YUL", name: "Montreal-Trudeau International Airport", city: "Montreal", country: "Canada", lat: 45.4706, lon: -73.7408 },
  "CYUL": { icao: "CYUL", iata: "YUL", name: "Montreal-Trudeau International Airport", city: "Montreal", country: "Canada", lat: 45.4706, lon: -73.7408 },
  "YYC": { icao: "CYYC", iata: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada", lat: 51.1215, lon: -114.0076 },
  "CYYC": { icao: "CYYC", iata: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada", lat: 51.1215, lon: -114.0076 },

  // Asia
  "NRT": { icao: "RJAA", iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan", lat: 35.7647, lon: 140.3864 },
  "RJAA": { icao: "RJAA", iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan", lat: 35.7647, lon: 140.3864 },
  "HND": { icao: "RJTT", iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", lat: 35.5494, lon: 139.7798 },
  "RJTT": { icao: "RJTT", iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", lat: 35.5494, lon: 139.7798 },
  "KIX": { icao: "RJBB", iata: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan", lat: 34.4347, lon: 135.2441 },
  "RJBB": { icao: "RJBB", iata: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan", lat: 34.4347, lon: 135.2441 },
  "PEK": { icao: "ZBAA", iata: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", lat: 40.0799, lon: 116.6031 },
  "ZBAA": { icao: "ZBAA", iata: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", lat: 40.0799, lon: 116.6031 },
  "PVG": { icao: "ZSPD", iata: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China", lat: 31.1434, lon: 121.8052 },
  "ZSPD": { icao: "ZSPD", iata: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China", lat: 31.1434, lon: 121.8052 },
  "HKG": { icao: "VHHH", iata: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong", lat: 22.3080, lon: 113.9185 },
  "VHHH": { icao: "VHHH", iata: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong", lat: 22.3080, lon: 113.9185 },
  "SIN": { icao: "WSSS", iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", lat: 1.3644, lon: 103.9915 },
  "WSSS": { icao: "WSSS", iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", lat: 1.3644, lon: 103.9915 },
  "ICN": { icao: "RKSI", iata: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea", lat: 37.4602, lon: 126.4407 },
  "RKSI": { icao: "RKSI", iata: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea", lat: 37.4602, lon: 126.4407 },
  "BKK": { icao: "VTBS", iata: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", lat: 13.6900, lon: 100.7501 },
  "VTBS": { icao: "VTBS", iata: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", lat: 13.6900, lon: 100.7501 },
  "DEL": { icao: "VIDP", iata: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India", lat: 28.5562, lon: 77.1000 },
  "VIDP": { icao: "VIDP", iata: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India", lat: 28.5562, lon: 77.1000 },
  "BOM": { icao: "VABB", iata: "BOM", name: "Chhatrapati Shivaji International Airport", city: "Mumbai", country: "India", lat: 19.0896, lon: 72.8656 },
  "VABB": { icao: "VABB", iata: "BOM", name: "Chhatrapati Shivaji International Airport", city: "Mumbai", country: "India", lat: 19.0896, lon: 72.8656 },
  "DXB": { icao: "OMDB", iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "UAE", lat: 25.2528, lon: 55.3644 },
  "OMDB": { icao: "OMDB", iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "UAE", lat: 25.2528, lon: 55.3644 },
  "AUH": { icao: "OMAA", iata: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "UAE", lat: 24.4330, lon: 54.6511 },
  "OMAA": { icao: "OMAA", iata: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "UAE", lat: 24.4330, lon: 54.6511 },
  "DOH": { icao: "OTHH", iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", lat: 25.2731, lon: 51.6081 },
  "OTHH": { icao: "OTHH", iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", lat: 25.2731, lon: 51.6081 },
  "TLV": { icao: "LLBG", iata: "TLV", name: "Ben Gurion Airport", city: "Tel Aviv", country: "Israel", lat: 32.0055, lon: 34.8854 },
  "LLBG": { icao: "LLBG", iata: "TLV", name: "Ben Gurion Airport", city: "Tel Aviv", country: "Israel", lat: 32.0055, lon: 34.8854 },

  // Australia & New Zealand
  "SYD": { icao: "YSSY", iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", lat: -33.9399, lon: 151.1753 },
  "YSSY": { icao: "YSSY", iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", lat: -33.9399, lon: 151.1753 },
  "MEL": { icao: "YMML", iata: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", lat: -37.6690, lon: 144.8410 },
  "YMML": { icao: "YMML", iata: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", lat: -37.6690, lon: 144.8410 },
  "BNE": { icao: "YBBN", iata: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia", lat: -27.3842, lon: 153.1175 },
  "YBBN": { icao: "YBBN", iata: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia", lat: -27.3842, lon: 153.1175 },
  "AKL": { icao: "NZAA", iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", lat: -37.0082, lon: 174.7850 },
  "NZAA": { icao: "NZAA", iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", lat: -37.0082, lon: 174.7850 },

  // South America
  "GRU": { icao: "SBGR", iata: "GRU", name: "Sao Paulo-Guarulhos International Airport", city: "Sao Paulo", country: "Brazil", lat: -23.4356, lon: -46.4731 },
  "SBGR": { icao: "SBGR", iata: "GRU", name: "Sao Paulo-Guarulhos International Airport", city: "Sao Paulo", country: "Brazil", lat: -23.4356, lon: -46.4731 },
  "EZE": { icao: "SAEZ", iata: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lon: -58.5358 },
  "SAEZ": { icao: "SAEZ", iata: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lon: -58.5358 },
  "SCL": { icao: "SCEL", iata: "SCL", name: "Santiago International Airport", city: "Santiago", country: "Chile", lat: -33.3930, lon: -70.7858 },
  "SCEL": { icao: "SCEL", iata: "SCL", name: "Santiago International Airport", city: "Santiago", country: "Chile", lat: -33.3930, lon: -70.7858 },
  "BOG": { icao: "SKBO", iata: "BOG", name: "El Dorado International Airport", city: "Bogota", country: "Colombia", lat: 4.7016, lon: -74.1469 },
  "SKBO": { icao: "SKBO", iata: "BOG", name: "El Dorado International Airport", city: "Bogota", country: "Colombia", lat: 4.7016, lon: -74.1469 },
  "LIM": { icao: "SPJC", iata: "LIM", name: "Jorge Chavez International Airport", city: "Lima", country: "Peru", lat: -12.0219, lon: -77.1143 },
  "SPJC": { icao: "SPJC", iata: "LIM", name: "Jorge Chavez International Airport", city: "Lima", country: "Peru", lat: -12.0219, lon: -77.1143 },
  "MEX": { icao: "MMMX", iata: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico", lat: 19.4363, lon: -99.0721 },
  "MMMX": { icao: "MMMX", iata: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico", lat: 19.4363, lon: -99.0721 },
  "CUN": { icao: "MMUN", iata: "CUN", name: "Cancun International Airport", city: "Cancun", country: "Mexico", lat: 21.0365, lon: -86.8771 },
  "MMUN": { icao: "MMUN", iata: "CUN", name: "Cancun International Airport", city: "Cancun", country: "Mexico", lat: 21.0365, lon: -86.8771 },

  // Africa
  "JNB": { icao: "FAOR", iata: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa", lat: -26.1392, lon: 28.2460 },
  "FAOR": { icao: "FAOR", iata: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa", lat: -26.1392, lon: 28.2460 },
  "CPT": { icao: "FACT", iata: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", lat: -33.9649, lon: 18.6017 },
  "FACT": { icao: "FACT", iata: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", lat: -33.9649, lon: 18.6017 },
  "CAI": { icao: "HECA", iata: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt", lat: 30.1219, lon: 31.4056 },
  "HECA": { icao: "HECA", iata: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt", lat: 30.1219, lon: 31.4056 },
  "CMN": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "GMMN": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "NBO": { icao: "HKJK", iata: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", lat: -1.3192, lon: 36.9278 },
  "HKJK": { icao: "HKJK", iata: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", lat: -1.3192, lon: 36.9278 },
  "ADD": { icao: "HAAB", iata: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia", lat: 8.9779, lon: 38.7993 },
  "HAAB": { icao: "HAAB", iata: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia", lat: 8.9779, lon: 38.7993 },
  "LOS": { icao: "DNMM", iata: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria", lat: 6.5774, lon: 3.3212 },
  "DNMM": { icao: "DNMM", iata: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria", lat: 6.5774, lon: 3.3212 },

  // Russia
  "SVO": { icao: "UUEE", iata: "SVO", name: "Sheremetyevo International Airport", city: "Moscow", country: "Russia", lat: 55.9726, lon: 37.4146 },
  "UUEE": { icao: "UUEE", iata: "SVO", name: "Sheremetyevo International Airport", city: "Moscow", country: "Russia", lat: 55.9726, lon: 37.4146 },
  "DME": { icao: "UUDD", iata: "DME", name: "Moscow Domodedovo Airport", city: "Moscow", country: "Russia", lat: 55.4088, lon: 37.9063 },
  "UUDD": { icao: "UUDD", iata: "DME", name: "Moscow Domodedovo Airport", city: "Moscow", country: "Russia", lat: 55.4088, lon: 37.9063 },
  "LED": { icao: "ULLI", iata: "LED", name: "Pulkovo Airport", city: "Saint Petersburg", country: "Russia", lat: 59.8003, lon: 30.2625 },
  "ULLI": { icao: "ULLI", iata: "LED", name: "Pulkovo Airport", city: "Saint Petersburg", country: "Russia", lat: 59.8003, lon: 30.2625 },
  "KJA": { icao: "UNKL", iata: "KJA", name: "Krasnoyarsk Yemelyanovo Airport", city: "Krasnoyarsk", country: "Russia", lat: 56.1729, lon: 92.4933 },
  "UNKL": { icao: "UNKL", iata: "KJA", name: "Krasnoyarsk Yemelyanovo Airport", city: "Krasnoyarsk", country: "Russia", lat: 56.1729, lon: 92.4933 },

  // Kazakhstan
  "ALA": { icao: "UAAA", iata: "ALA", name: "Almaty International Airport", city: "Almaty", country: "Kazakhstan", lat: 43.3521, lon: 77.0405 },
  "UAAA": { icao: "UAAA", iata: "ALA", name: "Almaty International Airport", city: "Almaty", country: "Kazakhstan", lat: 43.3521, lon: 77.0405 },
  "NQZ": { icao: "UACC", iata: "NQZ", name: "Nursultan Nazarbayev International Airport", city: "Astana", country: "Kazakhstan", lat: 51.0222, lon: 71.4669 },
  "UACC": { icao: "UACC", iata: "NQZ", name: "Nursultan Nazarbayev International Airport", city: "Astana", country: "Kazakhstan", lat: 51.0222, lon: 71.4669 },
  "TAS": { icao: "UTTT", iata: "TAS", name: "Tashkent International Airport", city: "Tashkent", country: "Uzbekistan", lat: 41.2579, lon: 69.2812 },
  "UTTT": { icao: "UTTT", iata: "TAS", name: "Tashkent International Airport", city: "Tashkent", country: "Uzbekistan", lat: 41.2579, lon: 69.2812 },

  // =====================
  // ADDITIONAL USA AIRPORTS
  // =====================
  "AMA": { icao: "KAMA", iata: "AMA", name: "Rick Husband Amarillo International Airport", city: "Amarillo", country: "USA", lat: 35.2194, lon: -101.7059 },
  "KAMA": { icao: "KAMA", iata: "AMA", name: "Rick Husband Amarillo International Airport", city: "Amarillo", country: "USA", lat: 35.2194, lon: -101.7059 },
  "APA": { icao: "KAPA", iata: "APA", name: "Centennial Airport", city: "Denver", country: "USA", lat: 39.5701, lon: -104.8493 },
  "KAPA": { icao: "KAPA", iata: "APA", name: "Centennial Airport", city: "Denver", country: "USA", lat: 39.5701, lon: -104.8493 },
  "BIL": { icao: "KBIL", iata: "BIL", name: "Billings Logan International Airport", city: "Billings", country: "USA", lat: 45.8077, lon: -108.5429 },
  "KBIL": { icao: "KBIL", iata: "BIL", name: "Billings Logan International Airport", city: "Billings", country: "USA", lat: 45.8077, lon: -108.5429 },
  "BLH": { icao: "KBLH", iata: "BLH", name: "Blythe Airport", city: "Blythe", country: "USA", lat: 33.6192, lon: -114.7168 },
  "KBLH": { icao: "KBLH", iata: "BLH", name: "Blythe Airport", city: "Blythe", country: "USA", lat: 33.6192, lon: -114.7168 },
  "CNO": { icao: "KCNO", iata: "CNO", name: "Chino Airport", city: "Chino", country: "USA", lat: 33.9747, lon: -117.6368 },
  "KCNO": { icao: "KCNO", iata: "CNO", name: "Chino Airport", city: "Chino", country: "USA", lat: 33.9747, lon: -117.6368 },
  "CVG": { icao: "KCVG", iata: "CVG", name: "Cincinnati/Northern Kentucky International Airport", city: "Cincinnati", country: "USA", lat: 39.0488, lon: -84.6678 },
  "KCVG": { icao: "KCVG", iata: "CVG", name: "Cincinnati/Northern Kentucky International Airport", city: "Cincinnati", country: "USA", lat: 39.0488, lon: -84.6678 },
  "CYS": { icao: "KCYS", iata: "CYS", name: "Cheyenne Regional Airport", city: "Cheyenne", country: "USA", lat: 41.1557, lon: -104.8118 },
  "KCYS": { icao: "KCYS", iata: "CYS", name: "Cheyenne Regional Airport", city: "Cheyenne", country: "USA", lat: 41.1557, lon: -104.8118 },
  "E63": { icao: "E63", iata: "", name: "Gila Bend Air Force Auxiliary Field", city: "Gila Bend", country: "USA", lat: 32.8881, lon: -112.7197 },
  "EYW": { icao: "KEYW", iata: "EYW", name: "Key West International Airport", city: "Key West", country: "USA", lat: 24.5561, lon: -81.7596 },
  "KEYW": { icao: "KEYW", iata: "EYW", name: "Key West International Airport", city: "Key West", country: "USA", lat: 24.5561, lon: -81.7596 },
  "FLL": { icao: "KFLL", iata: "FLL", name: "Fort Lauderdale-Hollywood International Airport", city: "Fort Lauderdale", country: "USA", lat: 26.0726, lon: -80.1527 },
  "KFLL": { icao: "KFLL", iata: "FLL", name: "Fort Lauderdale-Hollywood International Airport", city: "Fort Lauderdale", country: "USA", lat: 26.0726, lon: -80.1527 },
  "FXE": { icao: "KFXE", iata: "FXE", name: "Fort Lauderdale Executive Airport", city: "Fort Lauderdale", country: "USA", lat: 26.1973, lon: -80.1707 },
  "KFXE": { icao: "KFXE", iata: "FXE", name: "Fort Lauderdale Executive Airport", city: "Fort Lauderdale", country: "USA", lat: 26.1973, lon: -80.1707 },
  "ILN": { icao: "KILN", iata: "ILN", name: "Wilmington Air Park", city: "Wilmington", country: "USA", lat: 39.4279, lon: -83.7921 },
  "KILN": { icao: "KILN", iata: "ILN", name: "Wilmington Air Park", city: "Wilmington", country: "USA", lat: 39.4279, lon: -83.7921 },
  "PSP": { icao: "KPSP", iata: "PSP", name: "Palm Springs International Airport", city: "Palm Springs", country: "USA", lat: 33.8303, lon: -116.5067 },
  "KPSP": { icao: "KPSP", iata: "PSP", name: "Palm Springs International Airport", city: "Palm Springs", country: "USA", lat: 33.8303, lon: -116.5067 },
  "PUB": { icao: "KPUB", iata: "PUB", name: "Pueblo Memorial Airport", city: "Pueblo", country: "USA", lat: 38.2891, lon: -104.4966 },
  "KPUB": { icao: "KPUB", iata: "PUB", name: "Pueblo Memorial Airport", city: "Pueblo", country: "USA", lat: 38.2891, lon: -104.4966 },
  "SAF": { icao: "KSAF", iata: "SAF", name: "Santa Fe Municipal Airport", city: "Santa Fe", country: "USA", lat: 35.6171, lon: -106.0883 },
  "KSAF": { icao: "KSAF", iata: "SAF", name: "Santa Fe Municipal Airport", city: "Santa Fe", country: "USA", lat: 35.6171, lon: -106.0883 },
  "SDM": { icao: "KSDM", iata: "SDM", name: "Brown Field Municipal Airport", city: "San Diego", country: "USA", lat: 32.5723, lon: -116.9801 },
  "KSDM": { icao: "KSDM", iata: "SDM", name: "Brown Field Municipal Airport", city: "San Diego", country: "USA", lat: 32.5723, lon: -116.9801 },
  "VGT": { icao: "KVGT", iata: "VGT", name: "North Las Vegas Airport", city: "Las Vegas", country: "USA", lat: 36.2107, lon: -115.1944 },
  "KVGT": { icao: "KVGT", iata: "VGT", name: "North Las Vegas Airport", city: "Las Vegas", country: "USA", lat: 36.2107, lon: -115.1944 },
  "YUM": { icao: "KNYL", iata: "YUM", name: "Yuma International Airport", city: "Yuma", country: "USA", lat: 32.6566, lon: -114.6060 },
  "KNYL": { icao: "KNYL", iata: "YUM", name: "Yuma International Airport", city: "Yuma", country: "USA", lat: 32.6566, lon: -114.6060 },
  "KGYI": { icao: "KGYI", iata: "", name: "North Texas Regional Airport", city: "Sherman", country: "USA", lat: 33.7141, lon: -96.6737 },
  "KE60": { icao: "KE60", iata: "", name: "Eloy Municipal Airport", city: "Eloy", country: "USA", lat: 32.8069, lon: -111.5867 },

  // =====================
  // ADDITIONAL EUROPE
  // =====================
  // Spain
  "ACE": { icao: "GCRR", iata: "ACE", name: "Lanzarote Airport", city: "Lanzarote", country: "Spain", lat: 28.9455, lon: -13.6052 },
  "GCRR": { icao: "GCRR", iata: "ACE", name: "Lanzarote Airport", city: "Lanzarote", country: "Spain", lat: 28.9455, lon: -13.6052 },
  "FUE": { icao: "GCFV", iata: "FUE", name: "Fuerteventura Airport", city: "Fuerteventura", country: "Spain", lat: 28.4527, lon: -13.8638 },
  "GCFV": { icao: "GCFV", iata: "FUE", name: "Fuerteventura Airport", city: "Fuerteventura", country: "Spain", lat: 28.4527, lon: -13.8638 },
  "BIO": { icao: "LEBB", iata: "BIO", name: "Bilbao Airport", city: "Bilbao", country: "Spain", lat: 43.3011, lon: -2.9106 },
  "LEBB": { icao: "LEBB", iata: "BIO", name: "Bilbao Airport", city: "Bilbao", country: "Spain", lat: 43.3011, lon: -2.9106 },

  // France
  "AJA": { icao: "LFKJ", iata: "AJA", name: "Ajaccio Napoleon Bonaparte Airport", city: "Ajaccio", country: "France", lat: 41.9236, lon: 8.8029 },
  "LFKJ": { icao: "LFKJ", iata: "AJA", name: "Ajaccio Napoleon Bonaparte Airport", city: "Ajaccio", country: "France", lat: 41.9236, lon: 8.8029 },

  // Italy
  "BRI": { icao: "LIBD", iata: "BRI", name: "Bari Karol Wojtyla Airport", city: "Bari", country: "Italy", lat: 41.1389, lon: 16.7606 },
  "LIBD": { icao: "LIBD", iata: "BRI", name: "Bari Karol Wojtyla Airport", city: "Bari", country: "Italy", lat: 41.1389, lon: 16.7606 },
  "CAG": { icao: "LIEE", iata: "CAG", name: "Cagliari Elmas Airport", city: "Cagliari", country: "Italy", lat: 39.2515, lon: 9.0543 },
  "LIEE": { icao: "LIEE", iata: "CAG", name: "Cagliari Elmas Airport", city: "Cagliari", country: "Italy", lat: 39.2515, lon: 9.0543 },
  "CTA": { icao: "LICC", iata: "CTA", name: "Catania Fontanarossa Airport", city: "Catania", country: "Italy", lat: 37.4668, lon: 15.0664 },
  "LICC": { icao: "LICC", iata: "CTA", name: "Catania Fontanarossa Airport", city: "Catania", country: "Italy", lat: 37.4668, lon: 15.0664 },
  "GOA": { icao: "LIMJ", iata: "GOA", name: "Genoa Cristoforo Colombo Airport", city: "Genoa", country: "Italy", lat: 44.4133, lon: 8.8375 },
  "LIMJ": { icao: "LIMJ", iata: "GOA", name: "Genoa Cristoforo Colombo Airport", city: "Genoa", country: "Italy", lat: 44.4133, lon: 8.8375 },
  "PMO": { icao: "LICJ", iata: "PMO", name: "Palermo Falcone-Borsellino Airport", city: "Palermo", country: "Italy", lat: 38.1760, lon: 13.0910 },
  "LICJ": { icao: "LICJ", iata: "PMO", name: "Palermo Falcone-Borsellino Airport", city: "Palermo", country: "Italy", lat: 38.1760, lon: 13.0910 },
  "PSA": { icao: "LIRP", iata: "PSA", name: "Pisa International Airport", city: "Pisa", country: "Italy", lat: 43.6839, lon: 10.3927 },
  "LIRP": { icao: "LIRP", iata: "PSA", name: "Pisa International Airport", city: "Pisa", country: "Italy", lat: 43.6839, lon: 10.3927 },
  "TRN": { icao: "LIMF", iata: "TRN", name: "Turin Caselle Airport", city: "Turin", country: "Italy", lat: 45.2008, lon: 7.6497 },
  "LIMF": { icao: "LIMF", iata: "TRN", name: "Turin Caselle Airport", city: "Turin", country: "Italy", lat: 45.2008, lon: 7.6497 },
  "TRS": { icao: "LIVT", iata: "TRS", name: "Trieste Friuli Venezia Giulia Airport", city: "Trieste", country: "Italy", lat: 45.8275, lon: 13.4722 },
  "LIVT": { icao: "LIVT", iata: "TRS", name: "Trieste Friuli Venezia Giulia Airport", city: "Trieste", country: "Italy", lat: 45.8275, lon: 13.4722 },

  // Greece
  "CHQ": { icao: "LGSA", iata: "CHQ", name: "Chania International Airport", city: "Chania", country: "Greece", lat: 35.5317, lon: 24.1497 },
  "LGSA": { icao: "LGSA", iata: "CHQ", name: "Chania International Airport", city: "Chania", country: "Greece", lat: 35.5317, lon: 24.1497 },
  "KGS": { icao: "LGKO", iata: "KGS", name: "Kos Island International Airport", city: "Kos", country: "Greece", lat: 36.7933, lon: 26.9406 },
  "LGKO": { icao: "LGKO", iata: "KGS", name: "Kos Island International Airport", city: "Kos", country: "Greece", lat: 36.7933, lon: 26.9406 },

  // UK
  "EMA": { icao: "EGNX", iata: "EMA", name: "East Midlands Airport", city: "Nottingham", country: "UK", lat: 52.8311, lon: -1.3281 },
  "EGNX": { icao: "EGNX", iata: "EMA", name: "East Midlands Airport", city: "Nottingham", country: "UK", lat: 52.8311, lon: -1.3281 },
  "GLA": { icao: "EGPF", iata: "GLA", name: "Glasgow Airport", city: "Glasgow", country: "UK", lat: 55.8719, lon: -4.4331 },
  "EGPF": { icao: "EGPF", iata: "GLA", name: "Glasgow Airport", city: "Glasgow", country: "UK", lat: 55.8719, lon: -4.4331 },

  // Scandinavia
  "EBJ": { icao: "EKEB", iata: "EBJ", name: "Esbjerg Airport", city: "Esbjerg", country: "Denmark", lat: 55.5259, lon: 8.5534 },
  "EKEB": { icao: "EKEB", iata: "EBJ", name: "Esbjerg Airport", city: "Esbjerg", country: "Denmark", lat: 55.5259, lon: 8.5534 },
  "FRO": { icao: "ENFL", iata: "FRO", name: "Flora Airport", city: "Flora", country: "Norway", lat: 61.5836, lon: 5.0247 },
  "ENFL": { icao: "ENFL", iata: "FRO", name: "Flora Airport", city: "Flora", country: "Norway", lat: 61.5836, lon: 5.0247 },
  "FBU": { icao: "ENFB", iata: "FBU", name: "Oslo Fornebu Airport", city: "Oslo", country: "Norway", lat: 59.8958, lon: 10.6172 },
  "ENFB": { icao: "ENFB", iata: "FBU", name: "Oslo Fornebu Airport", city: "Oslo", country: "Norway", lat: 59.8958, lon: 10.6172 },

  // Eastern Europe
  "BEG": { icao: "LYBE", iata: "BEG", name: "Belgrade Nikola Tesla Airport", city: "Belgrade", country: "Serbia", lat: 44.8184, lon: 20.3091 },
  "LYBE": { icao: "LYBE", iata: "BEG", name: "Belgrade Nikola Tesla Airport", city: "Belgrade", country: "Serbia", lat: 44.8184, lon: 20.3091 },
  "KBP": { icao: "UKBB", iata: "KBP", name: "Boryspil International Airport", city: "Kyiv", country: "Ukraine", lat: 50.3450, lon: 30.8947 },
  "UKBB": { icao: "UKBB", iata: "KBP", name: "Boryspil International Airport", city: "Kyiv", country: "Ukraine", lat: 50.3450, lon: 30.8947 },
  "KTW": { icao: "EPKT", iata: "KTW", name: "Katowice Pyrzowice Airport", city: "Katowice", country: "Poland", lat: 50.4743, lon: 19.0800 },
  "EPKT": { icao: "EPKT", iata: "KTW", name: "Katowice Pyrzowice Airport", city: "Katowice", country: "Poland", lat: 50.4743, lon: 19.0800 },
  "LJU": { icao: "LJLJ", iata: "LJU", name: "Ljubljana Joze Pucnik Airport", city: "Ljubljana", country: "Slovenia", lat: 46.2237, lon: 14.4576 },
  "LJLJ": { icao: "LJLJ", iata: "LJU", name: "Ljubljana Joze Pucnik Airport", city: "Ljubljana", country: "Slovenia", lat: 46.2237, lon: 14.4576 },
  "MSQ": { icao: "UMMS", iata: "MSQ", name: "Minsk National Airport", city: "Minsk", country: "Belarus", lat: 53.8825, lon: 28.0307 },
  "UMMS": { icao: "UMMS", iata: "MSQ", name: "Minsk National Airport", city: "Minsk", country: "Belarus", lat: 53.8825, lon: 28.0307 },
  "RIX": { icao: "EVRA", iata: "RIX", name: "Riga International Airport", city: "Riga", country: "Latvia", lat: 56.9236, lon: 23.9711 },
  "EVRA": { icao: "EVRA", iata: "RIX", name: "Riga International Airport", city: "Riga", country: "Latvia", lat: 56.9236, lon: 23.9711 },
  "ZAG": { icao: "LDZA", iata: "ZAG", name: "Zagreb Franjo Tudman Airport", city: "Zagreb", country: "Croatia", lat: 45.7429, lon: 16.0688 },
  "LDZA": { icao: "LDZA", iata: "ZAG", name: "Zagreb Franjo Tudman Airport", city: "Zagreb", country: "Croatia", lat: 45.7429, lon: 16.0688 },

  // Austria
  "LNZ": { icao: "LOWL", iata: "LNZ", name: "Linz Airport", city: "Linz", country: "Austria", lat: 48.2332, lon: 14.1875 },
  "LOWL": { icao: "LOWL", iata: "LNZ", name: "Linz Airport", city: "Linz", country: "Austria", lat: 48.2332, lon: 14.1875 },

  // Cyprus
  "LCA": { icao: "LCLK", iata: "LCA", name: "Larnaca International Airport", city: "Larnaca", country: "Cyprus", lat: 34.8751, lon: 33.6249 },
  "LCLK": { icao: "LCLK", iata: "LCA", name: "Larnaca International Airport", city: "Larnaca", country: "Cyprus", lat: 34.8751, lon: 33.6249 },
  "PFO": { icao: "LCPH", iata: "PFO", name: "Paphos International Airport", city: "Paphos", country: "Cyprus", lat: 34.7180, lon: 32.4857 },
  "LCPH": { icao: "LCPH", iata: "PFO", name: "Paphos International Airport", city: "Paphos", country: "Cyprus", lat: 34.7180, lon: 32.4857 },

  // Malta
  "MLA": { icao: "LMML", iata: "MLA", name: "Malta International Airport", city: "Valletta", country: "Malta", lat: 35.8575, lon: 14.4775 },
  "LMML": { icao: "LMML", iata: "MLA", name: "Malta International Airport", city: "Valletta", country: "Malta", lat: 35.8575, lon: 14.4775 },

  // Turkey
  "ESB": { icao: "LTAC", iata: "ESB", name: "Esenboga International Airport", city: "Ankara", country: "Turkey", lat: 40.1281, lon: 32.9951 },
  "LTAC": { icao: "LTAC", iata: "ESB", name: "Esenboga International Airport", city: "Ankara", country: "Turkey", lat: 40.1281, lon: 32.9951 },
  "ISL": { icao: "LTBA", iata: "ISL", name: "Istanbul Ataturk Airport", city: "Istanbul", country: "Turkey", lat: 40.9769, lon: 28.8146 },
  "LTBA": { icao: "LTBA", iata: "ISL", name: "Istanbul Ataturk Airport", city: "Istanbul", country: "Turkey", lat: 40.9769, lon: 28.8146 },

  // Germany (historic/closed)
  "SXF": { icao: "EDDB", iata: "SXF", name: "Berlin Schonefeld Airport", city: "Berlin", country: "Germany", lat: 52.3800, lon: 13.5225 },
  "TXL": { icao: "EDDT", iata: "TXL", name: "Berlin Tegel Airport", city: "Berlin", country: "Germany", lat: 52.5597, lon: 13.2877 },
  "EDDT": { icao: "EDDT", iata: "TXL", name: "Berlin Tegel Airport", city: "Berlin", country: "Germany", lat: 52.5597, lon: 13.2877 },

  // =====================
  // MIDDLE EAST
  // =====================
  "BAH": { icao: "OBBI", iata: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain", lat: 26.2708, lon: 50.6336 },
  "OBBI": { icao: "OBBI", iata: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain", lat: 26.2708, lon: 50.6336 },
  "DMM": { icao: "OEDF", iata: "DMM", name: "King Fahd International Airport", city: "Dammam", country: "Saudi Arabia", lat: 26.4712, lon: 49.7979 },
  "OEDF": { icao: "OEDF", iata: "DMM", name: "King Fahd International Airport", city: "Dammam", country: "Saudi Arabia", lat: 26.4712, lon: 49.7979 },
  "JED": { icao: "OEJN", iata: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia", lat: 21.6796, lon: 39.1565 },
  "OEJN": { icao: "OEJN", iata: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia", lat: 21.6796, lon: 39.1565 },
  "KWI": { icao: "OKBK", iata: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait", lat: 29.2267, lon: 47.9689 },
  "OKBK": { icao: "OKBK", iata: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait", lat: 29.2267, lon: 47.9689 },
  "RUH": { icao: "OERK", iata: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia", lat: 24.9576, lon: 46.6988 },
  "OERK": { icao: "OERK", iata: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia", lat: 24.9576, lon: 46.6988 },
  "SHJ": { icao: "OMSJ", iata: "SHJ", name: "Sharjah International Airport", city: "Sharjah", country: "UAE", lat: 25.3286, lon: 55.5172 },
  "OMSJ": { icao: "OMSJ", iata: "SHJ", name: "Sharjah International Airport", city: "Sharjah", country: "UAE", lat: 25.3286, lon: 55.5172 },
  "IKA": { icao: "OIIE", iata: "IKA", name: "Imam Khomeini International Airport", city: "Tehran", country: "Iran", lat: 35.4161, lon: 51.1522 },
  "OIIE": { icao: "OIIE", iata: "IKA", name: "Imam Khomeini International Airport", city: "Tehran", country: "Iran", lat: 35.4161, lon: 51.1522 },

  // =====================
  // ADDITIONAL ASIA
  // =====================
  // Japan
  "NGO": { icao: "RJGG", iata: "NGO", name: "Chubu Centrair International Airport", city: "Nagoya", country: "Japan", lat: 34.8584, lon: 136.8049 },
  "RJGG": { icao: "RJGG", iata: "NGO", name: "Chubu Centrair International Airport", city: "Nagoya", country: "Japan", lat: 34.8584, lon: 136.8049 },

  // South Korea
  "GMP": { icao: "RKSS", iata: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea", lat: 37.5583, lon: 126.7906 },
  "RKSS": { icao: "RKSS", iata: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea", lat: 37.5583, lon: 126.7906 },
  "PUS": { icao: "RKPK", iata: "PUS", name: "Gimhae International Airport", city: "Busan", country: "South Korea", lat: 35.1795, lon: 128.9382 },
  "RKPK": { icao: "RKPK", iata: "PUS", name: "Gimhae International Airport", city: "Busan", country: "South Korea", lat: 35.1795, lon: 128.9382 },

  // China
  "CAN": { icao: "ZGGG", iata: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China", lat: 23.3924, lon: 113.2988 },
  "ZGGG": { icao: "ZGGG", iata: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China", lat: 23.3924, lon: 113.2988 },
  "SHA": { icao: "ZSSS", iata: "SHA", name: "Shanghai Hongqiao International Airport", city: "Shanghai", country: "China", lat: 31.1979, lon: 121.3363 },
  "ZSSS": { icao: "ZSSS", iata: "SHA", name: "Shanghai Hongqiao International Airport", city: "Shanghai", country: "China", lat: 31.1979, lon: 121.3363 },
  "XMN": { icao: "ZSAM", iata: "XMN", name: "Xiamen Gaoqi International Airport", city: "Xiamen", country: "China", lat: 24.5440, lon: 118.1278 },
  "ZSAM": { icao: "ZSAM", iata: "XMN", name: "Xiamen Gaoqi International Airport", city: "Xiamen", country: "China", lat: 24.5440, lon: 118.1278 },

  // India
  "BLR": { icao: "VOBL", iata: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India", lat: 13.1986, lon: 77.7066 },
  "VOBL": { icao: "VOBL", iata: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India", lat: 13.1986, lon: 77.7066 },
  "CCU": { icao: "VECC", iata: "CCU", name: "Netaji Subhas Chandra Bose International Airport", city: "Kolkata", country: "India", lat: 22.6547, lon: 88.4467 },
  "VECC": { icao: "VECC", iata: "CCU", name: "Netaji Subhas Chandra Bose International Airport", city: "Kolkata", country: "India", lat: 22.6547, lon: 88.4467 },
  "HYD": { icao: "VOHS", iata: "HYD", name: "Rajiv Gandhi International Airport", city: "Hyderabad", country: "India", lat: 17.2313, lon: 78.4299 },
  "VOHS": { icao: "VOHS", iata: "HYD", name: "Rajiv Gandhi International Airport", city: "Hyderabad", country: "India", lat: 17.2313, lon: 78.4299 },
  "MAA": { icao: "VOMM", iata: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India", lat: 12.9941, lon: 80.1709 },
  "VOMM": { icao: "VOMM", iata: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India", lat: 12.9941, lon: 80.1709 },

  // Pakistan
  "ISB": { icao: "OPRN", iata: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan", lat: 33.5605, lon: 72.8496 },
  "OPRN": { icao: "OPRN", iata: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan", lat: 33.5605, lon: 72.8496 },
  "KHI": { icao: "OPKC", iata: "KHI", name: "Jinnah International Airport", city: "Karachi", country: "Pakistan", lat: 24.9065, lon: 67.1608 },
  "OPKC": { icao: "OPKC", iata: "KHI", name: "Jinnah International Airport", city: "Karachi", country: "Pakistan", lat: 24.9065, lon: 67.1608 },
  "LHE": { icao: "OPLA", iata: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan", lat: 31.5216, lon: 74.4036 },
  "OPLA": { icao: "OPLA", iata: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan", lat: 31.5216, lon: 74.4036 },

  // Southeast Asia
  "CGK": { icao: "WIII", iata: "CGK", name: "Soekarno-Hatta International Airport", city: "Jakarta", country: "Indonesia", lat: -6.1256, lon: 106.6559 },
  "WIII": { icao: "WIII", iata: "CGK", name: "Soekarno-Hatta International Airport", city: "Jakarta", country: "Indonesia", lat: -6.1256, lon: 106.6559 },
  "KUL": { icao: "WMKK", iata: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lon: 101.7099 },
  "WMKK": { icao: "WMKK", iata: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lon: 101.7099 },
  "MNL": { icao: "RPLL", iata: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines", lat: 14.5086, lon: 121.0197 },
  "RPLL": { icao: "RPLL", iata: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines", lat: 14.5086, lon: 121.0197 },
  "PEN": { icao: "WMKP", iata: "PEN", name: "Penang International Airport", city: "Penang", country: "Malaysia", lat: 5.2972, lon: 100.2769 },
  "WMKP": { icao: "WMKP", iata: "PEN", name: "Penang International Airport", city: "Penang", country: "Malaysia", lat: 5.2972, lon: 100.2769 },

  // Sri Lanka
  "CMB": { icao: "VCBI", iata: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka", lat: 7.1808, lon: 79.8841 },
  "VCBI": { icao: "VCBI", iata: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka", lat: 7.1808, lon: 79.8841 },

  // =====================
  // AFRICA
  // =====================
  "CAS": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "CMN": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "GMMN": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "TNG": { icao: "GMTT", iata: "TNG", name: "Tangier Ibn Battouta Airport", city: "Tangier", country: "Morocco", lat: 35.7269, lon: -5.9169 },
  "GMTT": { icao: "GMTT", iata: "TNG", name: "Tangier Ibn Battouta Airport", city: "Tangier", country: "Morocco", lat: 35.7269, lon: -5.9169 },
  "DKR": { icao: "GOOY", iata: "DKR", name: "Leopold Sedar Senghor International Airport", city: "Dakar", country: "Senegal", lat: 14.7397, lon: -17.4902 },
  "GOOY": { icao: "GOOY", iata: "DKR", name: "Leopold Sedar Senghor International Airport", city: "Dakar", country: "Senegal", lat: 14.7397, lon: -17.4902 },
  "HRE": { icao: "FVHA", iata: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe", lat: -17.9318, lon: 31.0928 },
  "FVHA": { icao: "FVHA", iata: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe", lat: -17.9318, lon: 31.0928 },
  "HRG": { icao: "HEGN", iata: "HRG", name: "Hurghada International Airport", city: "Hurghada", country: "Egypt", lat: 27.1783, lon: 33.7994 },
  "HEGN": { icao: "HEGN", iata: "HRG", name: "Hurghada International Airport", city: "Hurghada", country: "Egypt", lat: 27.1783, lon: 33.7994 },
  "TIP": { icao: "HLLT", iata: "TIP", name: "Tripoli International Airport", city: "Tripoli", country: "Libya", lat: 32.6635, lon: 13.1590 },
  "HLLT": { icao: "HLLT", iata: "TIP", name: "Tripoli International Airport", city: "Tripoli", country: "Libya", lat: 32.6635, lon: 13.1590 },

  // Tunisia
  "DJE": { icao: "DTTJ", iata: "DJE", name: "Djerba-Zarzis International Airport", city: "Djerba", country: "Tunisia", lat: 33.8750, lon: 10.7755 },
  "DTTJ": { icao: "DTTJ", iata: "DJE", name: "Djerba-Zarzis International Airport", city: "Djerba", country: "Tunisia", lat: 33.8750, lon: 10.7755 },
  "MIR": { icao: "DTMB", iata: "MIR", name: "Monastir Habib Bourguiba International Airport", city: "Monastir", country: "Tunisia", lat: 35.7581, lon: 10.7547 },
  "DTMB": { icao: "DTMB", iata: "MIR", name: "Monastir Habib Bourguiba International Airport", city: "Monastir", country: "Tunisia", lat: 35.7581, lon: 10.7547 },
  "TUN": { icao: "DTTA", iata: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia", lat: 36.8510, lon: 10.2272 },
  "DTTA": { icao: "DTTA", iata: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia", lat: 36.8510, lon: 10.2272 },

  // =====================
  // LATIN AMERICA
  // =====================
  "GDL": { icao: "MMGL", iata: "GDL", name: "Guadalajara International Airport", city: "Guadalajara", country: "Mexico", lat: 20.5218, lon: -103.3111 },
  "MMGL": { icao: "MMGL", iata: "GDL", name: "Guadalajara International Airport", city: "Guadalajara", country: "Mexico", lat: 20.5218, lon: -103.3111 },
  "GIG": { icao: "SBGL", iata: "GIG", name: "Rio de Janeiro Galeao International Airport", city: "Rio de Janeiro", country: "Brazil", lat: -22.8100, lon: -43.2506 },
  "SBGL": { icao: "SBGL", iata: "GIG", name: "Rio de Janeiro Galeao International Airport", city: "Rio de Janeiro", country: "Brazil", lat: -22.8100, lon: -43.2506 },
  "VCP": { icao: "SBKP", iata: "VCP", name: "Viracopos International Airport", city: "Campinas", country: "Brazil", lat: -23.0074, lon: -47.1345 },
  "SBKP": { icao: "SBKP", iata: "VCP", name: "Viracopos International Airport", city: "Campinas", country: "Brazil", lat: -23.0074, lon: -47.1345 },
  "MVD": { icao: "SUMU", iata: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay", lat: -34.8384, lon: -56.0308 },
  "SUMU": { icao: "SUMU", iata: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay", lat: -34.8384, lon: -56.0308 },
  "POP": { icao: "MDPP", iata: "POP", name: "Gregorio Luperon International Airport", city: "Puerto Plata", country: "Dominican Republic", lat: 19.7579, lon: -70.5700 },
  "MDPP": { icao: "MDPP", iata: "POP", name: "Gregorio Luperon International Airport", city: "Puerto Plata", country: "Dominican Republic", lat: 19.7579, lon: -70.5700 },
  "PUJ": { icao: "MDPC", iata: "PUJ", name: "Punta Cana International Airport", city: "Punta Cana", country: "Dominican Republic", lat: 18.5674, lon: -68.3634 },
  "MDPC": { icao: "MDPC", iata: "PUJ", name: "Punta Cana International Airport", city: "Punta Cana", country: "Dominican Republic", lat: 18.5674, lon: -68.3634 },

  // =====================
  // OCEANIA
  // =====================
  "PPT": { icao: "NTAA", iata: "PPT", name: "Faa'a International Airport", city: "Papeete", country: "French Polynesia", lat: -17.5537, lon: -149.6064 },
  "NTAA": { icao: "NTAA", iata: "PPT", name: "Faa'a International Airport", city: "Papeete", country: "French Polynesia", lat: -17.5537, lon: -149.6064 },

  // =====================
  // MISC CODES (used in data)
  // =====================
  "MUX": { icao: "OPMT", iata: "MUX", name: "Multan International Airport", city: "Multan", country: "Pakistan", lat: 30.2032, lon: 71.4191 },
  "OPMT": { icao: "OPMT", iata: "MUX", name: "Multan International Airport", city: "Multan", country: "Pakistan", lat: 30.2032, lon: 71.4191 },
  "TAN": { icao: "FWCL", iata: "TAN", name: "Tangier alternate", city: "Tangier", country: "Morocco", lat: 35.7269, lon: -5.9169 }
};

// Lookup function - tries both ICAO and IATA codes
export function getAirport(code) {
  if (!code) return null;
  const upperCode = code.toUpperCase().trim();
  return airports[upperCode] || null;
}

// Get coordinates for a code
export function getCoordinates(code) {
  const airport = getAirport(code);
  if (!airport) return null;
  return { lat: airport.lat, lon: airport.lon };
}

// Check if airport exists
export function airportExists(code) {
  return getAirport(code) !== null;
}

// Get airport display name
export function getAirportName(code) {
  const airport = getAirport(code);
  if (!airport) return code;
  return `${airport.city} (${code})`;
}
