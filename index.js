const STYLES = [  {    "featureType": "all",    "elementType": "geometry",    "stylers": [      {        "color": "#e7e7e7"      }    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#90c36c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
   {
  "featureType": "poi.business",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},             
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
const cities = [
{ lat: 41.01223644670021, lng:  28.98055260745804},
{ lat: 39.932530965348334, lng:  32.84374709959737},
{ lat: 36.91411416946395, lng:  30.713639125961578},
{ lat: 38.418129680231544, lng:  27.13875786356032},
{ lat: 37.2272673624289, lng:  28.364896379392466},
{ lat: 48.77912418347227, lng:  9.182699252424356},
{ lat: 49.40094449657018, lng:  8.677372852498275},
{ lat: 49.48746780297353, lng:  8.472540405848905},
{ lat: 49.009008810319635, lng:  8.39785180575563},
{ lat: 48.402317371985454, lng:  9.988387268224011},
{ lat: 49.14342667327433, lng:  9.207961369113363},
{ lat: 48.522059185917726, lng:  9.056700636565385},
{ lat: 48.493737743817604, lng:  9.201017536754517},
{ lat: 47.6778340144737, lng:  9.171616882614039},
{ lat: 49.44013701918562, lng:  11.863099595118861},
{ lat: 49.300710297016224, lng:  10.572127692781155},
{ lat: 49.966894912415015, lng:  9.151225534581897},
{ lat: 48.36926313015696, lng:  10.90262974591933},
{ lat: 49.899773208446554, lng:  10.903558663051127},
{ lat: 49.94485781200779, lng:  11.57532564673918},
{ lat: 50.261195796023166, lng:  10.962468105800111},
{ lat: 49.58893345844894, lng:  11.010230546299166},
{ lat: 49.47685297385037, lng:  10.988282155767411},
{ lat: 48.76783775554228, lng:  11.425997875554632},
{ lat: 47.72908856022335, lng:  10.318057756381156},
{ lat: 48.5440042961713, lng:  12.14862596665266},
{ lat: 48.136041147701604, lng:  11.586458489281906},
{ lat: 49.44940283768636, lng:  11.096636090335721},
{ lat: 48.584414864966405, lng:  13.38124110376948},
{ lat: 49.014804826782886, lng:  12.101412426847755},
{ lat: 47.85750134021194, lng:  12.119305965489545},
{ lat: 49.32908215926482, lng:  11.024063262601675},
{ lat: 50.04939526715114, lng:  10.225187879056833},
{ lat: 48.87863453226217, lng:  12.579144175855463},
{ lat: 49.80253784317404, lng:  12.075949345421588},
{ lat: 49.79024400228595, lng:  9.957789226785764},
{ lat: 52.503573041240365, lng:  13.404628587838076},
{ lat: 52.37077852225563, lng:  12.662518924454515},
{ lat: 51.75522501623127, lng:  14.328929891310873},
{ lat: 50.10923941363504, lng:  8.67844029029649},
{ lat: 52.3930952394975, lng:  13.058989512144697},
{ lat: 53.079958408590336, lng:  8.80013547263818},
{ lat: 53.5392537889897, lng:  8.589467030102659},
{ lat: 53.542742743695214, lng:  9.981347281049887},
{ lat: 49.87334845743665, lng:  8.657558956608131},
{ lat: 51.31293386123933, lng:  9.48121202834113},
{ lat: 50.098283132708715, lng:  8.77122761237201},
{ lat: 50.0820927463915, lng:  8.250404445068382},
{ lat: 54.08733691895361, lng:  13.394085802556514},
{ lat: 53.570176923429024, lng:  13.271150064596585},
{ lat: 54.091933241692004, lng:  12.087893570795224},
{ lat: 53.63782199802916, lng:  11.389151261162962},
{ lat: 54.30923299724103, lng:  13.081275576952999},
{ lat: 52.26790766613477, lng:  10.513456988357408},
{ lat: 53.05245327160869, lng:  8.636149348741666},
{ lat: 52.37958361348453, lng:  9.721637525331909},
{ lat: 53.14399840739551, lng:  8.219359253066136},
{ lat: 52.28027643672349, lng:  8.050277565090058},
{ lat: 52.1363554282179, lng:  10.396110188758826},
{ lat: 53.531928047074004, lng:  8.10428053053044},
{ lat: 52.42262425786519, lng:  10.783073475952618},
{ lat: 50.77465712135139, lng:  6.082782968114567},
{ lat: 52.02993953062696, lng:  8.532960515782767},
{ lat: 51.48072303858538, lng:  7.214912466476063},
{ lat: 50.73609741730052, lng:  7.089138453677256},
{ lat: 51.5268782821194, lng:  6.935755487585172},
{ lat: 51.51292928418943, lng:  7.45308772150505},
{ lat: 51.42988123439232, lng:  6.760194184088798},
{ lat: 51.230202407703196, lng:  6.782069174092065},
{ lat: 51.45580139485461, lng:  7.018756128172677},
{ lat: 51.519929005717955, lng:  7.076752121217897},
{ lat: 51.366970723733374, lng:  7.464763578658237},
{ lat: 51.6735146345393, lng:  7.818199053009496},
{ lat: 51.53777301301152, lng:  7.201490255760277},
{ lat: 50.94031527858314, lng:  6.952894057118912},
{ lat: 51.334675587260264, lng:  6.560836997207042},
{ lat: 51.046092028903914, lng:  7.024785422223096},
{ lat: 51.19736273707846, lng:  6.433030671074829},
{ lat: 51.959312019304285, lng:  7.630955040630945},
{ lat: 51.488178247793066, lng:  6.862870545191099},
{ lat: 51.180229753232936, lng:  7.188629717572583},
{ lat: 51.16640316384551, lng:  7.066388208175713},
{ lat: 51.25513191971059, lng:  7.165131302378123},
{ lat: 49.54329124725335, lng:  8.354374382066107},
{ lat: 49.44175132450747, lng:  7.754412952369171},
{ lat: 50.35810146315003, lng:  7.588209150493002},
{ lat: 49.47600572269923, lng:  8.441817928768803},
{ lat: 49.993332054565435, lng:  8.24040989233963},
{ lat: 49.31750133388664, lng:  8.4415560579826},
{ lat: 49.74941077307457, lng:  6.635031303451275},
{ lat: 49.63456204306877, lng:  8.349041542884905},
{ lat: 49.313406846642586, lng:  6.742661952844224},
{ lat: 49.23608229370786, lng:  6.99620956881315},
{ lat: 50.82990487237874, lng:  12.92529961148098},
{ lat: 51.0495635719804, lng:  13.736871418538273},
{ lat: 51.34169897805823, lng:  12.375086801440903},
{ lat: 50.70983284343537, lng:  12.462425885110356},
{ lat: 51.49631670692961, lng:  11.96618459276617},
{ lat: 52.11998101383629, lng:  11.626722216949771},
{ lat: 54.79345506687531, lng:  9.44339718418182},
{ lat: 54.326918733008505, lng:  10.121548993293866},
{ lat: 53.86796499256259, lng:  10.68171640839848},
{ lat: 53.66319577885912, lng:  9.789270011581413},
{ lat: 50.97993299637954, lng:  10.319058241965456},
{ lat: 50.98525665073656, lng:  11.040732648785697},
{ lat: 50.88817160279548, lng:  12.078226909175443},
{ lat: 50.92660386672106, lng:  11.5900914704534},
{ lat: 50.60711572802497, lng:  10.684523698107565},
{ lat: 50.98042675976278, lng:  11.326349622822775},
{ lat: 55.60401993279057, lng:  13.00699272380497},
{ lat: 44.83740939099382, lng:  -0.5798346886789082},
{ lat: 44.42155891225149, lng:  26.096001025833992},
{ lat: 51.425136544314796, lng:  5.461121256669487},
{ lat: 36.71985268638022, lng:  -4.424893720333641},
{ lat: 55.40489072398303, lng:  10.400355918993565},
{ lat: 57.050667995254365, lng:  9.923559211075776},
{ lat: 56.16388089023623, lng:  10.207372537887904},
{ lat: 52.129458019893, lng:  4.658649376763286},
{ lat: 52.15598139493268, lng:  5.387777260099444},
{ lat: 52.36748488127718, lng:  4.9163210713306045},
{ lat: 47.47166456305585, lng:  -0.5485175402232424},
{ lat: 52.21203498131174, lng:  5.9712748303892695},
{ lat: 41.38749532842017, lng:  2.159412596627134},
{ lat: 47.559343841833886, lng:  7.58805189145646},
{ lat: 60.39272057425185, lng:  5.308293707039499},
{ lat: 46.94683826960529, lng:  7.453641521012434},
{ lat: 43.26344316556488, lng:  -2.9356249654629263},
{ lat: 48.14852452927275, lng:  17.085695430633837},
{ lat: 51.574357909252036, lng:  4.773945853705047},
{ lat: 49.193909043983076, lng:  16.617090251525674},
{ lat: 50.847299965130915, lng:  4.3575621127677655},
{ lat: 47.49597590841284, lng:  19.042403053355923},
{ lat: 53.126108039359735, lng:  17.98028135998343},
{ lat: 44.16174957036291, lng:  28.640982772420113},
{ lat: 55.67705539323506, lng:  12.578372384455013},
{ lat: 50.809436250780735, lng:  19.12242844075302},
{ lat: 52.01071549522303, lng:  4.3564858166086395},
{ lat: 51.69841588990514, lng:  5.3047866451297105},
{ lat: 53.34842851416443, lng:  -6.25189222780696},
{ lat: 36.60064194403853, lng:  -6.232047493343366},
{ lat: 52.2224168580425, lng:  6.887771726645159},
{ lat: 59.37155653830938, lng:  16.513069761939388},
{ lat: 43.76853320610939, lng:  11.249205156601228},
{ lat: 59.22055049966999, lng:  10.929678436148679},
{ lat: 54.3506025593692, lng:  18.64401377357715},
{ lat: 46.204587046541, lng:  6.144926523730293},
{ lat: 44.40570112204448, lng:  8.949873796147783},
{ lat: 50.29413744090813, lng:  18.660593825465988},
{ lat: 57.70361778607511, lng:  11.955605219079267},
{ lat: 53.21983449446702, lng:  6.574274265704873},
{ lat: 52.3877524471798, lng:  4.654206210809067},
{ lat: 56.04762481541412, lng:  12.689040637094452},
{ lat: 60.168670566673526, lng:  24.948615064860345},
{ lat: 52.230078773709295, lng:  5.166039117746656},
{ lat: 47.26626911613349, lng:  11.414486154508118},
{ lat: 57.782286929987855, lng:  14.169707076407082},
{ lat: 50.26760420495516, lng:  19.014736933060426},
{ lat: 46.63588196613908, lng:  14.31069268508536},
{ lat: 48.711830621388515, lng:  21.25840944792634},
{ lat: 50.06696025036133, lng:  19.939632835280566},
{ lat: 58.15947941193643, lng:  8.021874135953304},
{ lat: 53.20152714358788, lng:  5.797559309854088},
{ lat: 59.95612081538592, lng:  11.050410075458322},
{ lat: 58.41096379545623, lng:  15.623817948056116},
{ lat: 48.30548573826085, lng:  14.278643979692408},
{ lat: 51.7607114321898, lng:  19.45998459086754},
{ lat: 51.50437957931357, lng:  -0.1236053752358619},
{ lat: 51.24425318777393, lng:  22.56307486182934},
{ lat: 45.764156824906344, lng:  4.83718762312434},
{ lat: 40.417484795601915, lng:  -3.704952945552494},
{ lat: 43.29175609369464, lng:  5.367592092862533},
{ lat: 45.46632525331102, lng:  9.176871082507425},
{ lat: 44.65674576639554, lng:  10.930206623695602},
{ lat: 40.85547896420035, lng:  14.263346342299391},
{ lat: 43.71037117908164, lng:  7.265512399232391},
{ lat: 51.81292354660773, lng:  5.829034664410176},
{ lat: 58.58700284386018, lng:  16.20141872947828},
{ lat: 59.274020399333196, lng:  15.213095630429992},
{ lat: 59.91271860028316, lng:  10.75558366171937},
{ lat: 49.81921402539668, lng:  18.255238347372334},
{ lat: 45.40732177865697, lng:  11.879455957539784},
{ lat: 38.13306801348925, lng:  13.347934721281074},
{ lat: 48.85634892627961, lng:  2.3518392293899684},
{ lat: 44.80181714024042, lng:  10.330887886050764},
{ lat: 43.72686462194495, lng:  10.39405302993878},
{ lat: 44.8559485995002, lng:  24.868007238153815},
{ lat: 52.40547288331864, lng:  16.914016984228258},
{ lat: 50.073689535890075, lng:  14.4443289971264},
{ lat: 44.7016081004085, lng:  10.63139929132049},
{ lat: 56.96756218360319, lng:  24.09336024094233},
{ lat: 41.8974823901344, lng:  12.490029530208197},
{ lat: 51.92493893020422, lng:  4.470906813669444},
{ lat: 37.385989730594666, lng:  -5.986989977177957},
{ lat: 45.794466959124684, lng:  24.122669651138683},
{ lat: 58.96982174216808, lng:  5.724961488034493},
{ lat: 59.33202128624153, lng:  18.051396497833018},
{ lat: 53.42838696994009, lng:  14.546337717593461},
{ lat: 59.43719415845337, lng:  24.7409600693175},
{ lat: 41.11894587534989, lng:  1.2435609813792223},
{ lat: 52.06783475638766, lng:  4.291670092328502},
{ lat: 51.56081052388779, lng:  5.092245521682215},
{ lat: 45.06890524356995, lng:  7.6865662511952495},
{ lat: 53.01337198025009, lng:  18.600173247314288},
{ lat: 43.604162480193175, lng:  1.4445129272022321},
{ lat: 63.43105109598064, lng:  10.390964373891972},
{ lat: 60.45126657793073, lng:  22.265400899823373},
{ lat: 59.859073935682744, lng:  17.646080336465097},
{ lat: 52.089650958930214, lng:  5.116821620788344},
{ lat: 39.4686861509562, lng:  -0.36014856838492276},
{ lat: 59.60963990143104, lng:  16.54199893773286},
{ lat: 45.43682989599854, lng:  10.988752323792882},
{ lat: 54.73830550511296, lng:  25.352846197906594},
{ lat: 52.23512949560409, lng:  21.0172152376034},
{ lat: 48.208246178802966, lng:  16.373184290522055},
{ lat: 47.49837512702302, lng:  8.722629101061829},
{ lat: 51.105873539104316, lng:  17.026187464531194},
{ lat: 50.3231864093003, lng:  18.791834982180976},
{ lat: 45.81618720915502, lng:  15.982861383767403},
{ lat: 41.648999318556335, lng:  -0.8948562002663893},
{ lat: 52.060999723217094, lng:  4.49004688596929},
{ lat: 47.37835031037648, lng:  8.54050970090045},
{ lat: 52.51373009606286, lng:  6.086390022255486},
];

const countries = [
{ lat: 39.816476869446305, lng:  -8.52022655922189},
{ lat: 41.112911962992825, lng:  -5.476143659943229},
{ lat: 47.36524281728401, lng:  2.1138415841096534},
{ lat: 51.62203802835073, lng:  -1.1861073639249495},
{ lat: 53.82913561311619, lng:  -6.5487032689138385},
{ lat: 41.221663223633264, lng:  14.490557171569522},
{ lat: 46.87587712524967, lng:  7.965639934049292},
{ lat: 46.23481966169806, lng:  14.418457814847008},
{ lat: 45.81330425561314, lng:  16.702308064402402},
{ lat: 43.576385172729154, lng:  20.946486972942655},
{ lat: 48.020954199177424, lng:  16.266521379818972},
{ lat: 50.48396275889172, lng:  10.300156672982192},
{ lat: 49.59995685901905, lng:  6.078912980338232},
{ lat: 50.18571584167498, lng:  4.9833396090284},
{ lat: 51.707909299647646, lng:  5.619336819471491},
{ lat: 52.31082924519099, lng:  13.246729606998242},
{ lat: 49.86596143247019, lng:  14.176380854017626},
{ lat: 48.14580070407974, lng:  16.101605828008843},
{ lat: 43.98329298239772, lng:  18.447981640229976},
{ lat: 46.71472203168649, lng:  19.378413981593788},
{ lat: 45.430502776189876, lng:  24.361603052182563},
{ lat: 48.818347147231606, lng:  21.673240035574945},
{ lat: 47.27756575548164, lng:  28.213427692871726},
{ lat: 51.6890883234101, lng:  21.117670702951575},
{ lat: 46.460703042674496, lng:  28.71037986156601},
{ lat: 55.61208147390456, lng:  11.872277460438658},
{ lat: 54.81753474729993, lng:  23.79607716460934},
{ lat: 56.92083580607441, lng:  24.249338753685638},
{ lat: 59.34701095319431, lng:  24.845015758532618},
{ lat: 60.4132919447672, lng:  25.01281880698807},
{ lat: 59.86777925369428, lng:  17.03280956596434},
{ lat: 60.19445452016064, lng:  10.728882012428421},
{ lat: 39.69779685678328, lng:  32.89772089793953},
{ lat: 31.471027051684477, lng:  34.71512231949529},
];

var map;
let markers = [];
// Initialize and add the map
function initMap() {
	// The location of Uluru
	// The map, centered at Uluru
    const uluru = { lat: 39.925533, lng: 32.866287 };
	map = new google.maps.Map(document.getElementById("map"), {
		disableDefaultUI: true,
		zoomControl: false,
		zoom: 16,
		center: uluru,
		styles: STYLES,
		// haritanın kenarlarına border ekle
	});

	const areaIcon = {
		url: "/img/Sehirdeki bölgeler.svg",
		scaledSize: new google.maps.Size(12, 12),
		// harita küçültüldüğünde markerın boyutunu küçült
	};

	const cityIcon = {
		url: "./img/Şehir.svg",
		size: new google.maps.Size(12, 12),
		scaledSize: new google.maps.Size(12, 12),
	};

	const countryIcon = {
		url: "./img/Ulke.svg",
		size: new google.maps.Size(12, 12),
		scaledSize: new google.maps.Size(12, 12),
	};
	const updateMarkers = () => {
		const zoomLevel = map.getZoom();
		markers.forEach((marker) => marker.setMap(null));
		markers = [];

		if (zoomLevel < 7) {
			countries.map((country) => {
				const marker = new google.maps.Marker({
					position: { lat: country.lat, lng: country.lng },
					map: map,
					icon: countryIcon,
				});
				markers.push(marker);
			});
		} else {
			cities.map((city) => {
				const marker = new google.maps.Marker({
					position: { lat: city.lat, lng: city.lng },
					map: map,
					icon: areaIcon,
				});
				markers.push(marker);
			});
		}
	};

	updateMarkers();

	google.maps.event.addListener(map, "zoom_changed", () => {
		updateMarkers();
	});

	for (let i = 0; i < cities.length; i++) {
		const city = cities[i];
		const marker = new google.maps.Marker({
			position: { lat: city.lat, lng: city.lng },
			map: map,
			city: true,
			icon: areaIcon,
		});
		markers.push(marker);
	}

	for (let i = 0; i < countries.length; i++) {
		const country = countries[i];
		const marker = new google.maps.Marker({
			position: { lat: country.lat, lng: country.lng },
			map: map,
			country: true,
			icon: cityIcon,
		});
		markers.push(marker);
	}

	const refresh = document.createElement("div");
	refresh.classList.add("refresh");

	// refreshin içine img klasüründeki svg ekle
	refresh.innerHTML = `<img src="/img/Alanı Tara.svg" alt="refresh" />`;

	map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(refresh);

	refresh.addEventListener("click", async () => {
		markers.map((marker) => {
			marker.setMap(null);
		});
		const centerPos = {
			lat: map.center.lat(),
			lng: map.center.lng(),
		};
		const vehicles = await getVEhicles(centerPos);
		const allVehicles = await getAllVehicles();
		vehicles.map((data) => {
			const vehiclePos = {
				lat: data.lat,
				lng: data.lng,
			};
			const id = data.id;
			addMarker(
				id,
				vehicles,
				vehiclePos,
				data.type,
				data.battery,
				data.provider,
				data.publicId
			);
		});
	});
  	const form = document.getElementById('search-form')

      form.addEventListener('submit', (event) => {
        event.preventDefault()
        const city = document.getElementById('city-input').value
        updateMap(city)
      })

      function updateMap(city) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: city }, (results, status) => {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
          } else {
            alert('Şehir bulunamadı: ' + city);
          }
        });
      }
}

let activeInfoWindow = null;

function addMarker(id, vehicles, location, type, battery, provider, code) {
	// Add the marker at the clicked location, and add the next-available label
	// from the array of alphabetical characters.
	// name in içindeki provider.name al
	let link = getLink(provider.name);
	let weblink;
	let applink;
	link
		.then((data) => {
			return data.website;
		})
		.then((website) => {
			weblink = website;
		});

	link
		.then((data) => {
			return data.app;
		})
		.then((app) => {
			if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
				applink = app.ios;
			} else {
				applink = app.android;
			}
		});

	// code 8 haneden uzunsa null yap

	// let code = String(atob(id).split(":")[0]);
	// if (code.length > 8) {
	// 	code = null;
	// }
	let slogan = provider.name;

	// önceden tanımlanmış icon objesi
	var icon;
	if (window.innerWidth < 1000) {
		icon = {
			url: "/img/" + type + ".svg",
			scaledSize: new google.maps.Size(90, 90),
		};
	} else {
		icon = "/img/" + type + ".svg";
	}
	var image = "/img/" + type + "3" + ".svg";

	// info window u sayfanın en altına ekle

	var content = document.createElement("div");
	content.classList.add("infoWindow");
	content.innerHTML = `
    <div class="infoWindow__body" style="flex-direction: column; background: url('${image}'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 20px;">
        <div class="infoWindow__header" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 50%;margin-left:200px">
                <div style="display: flex; flex-direction: column;">
                    <div style="font-size: 20px; font-weight: 600; margin-bottom: 5px;">${provider.name}</div>
                    <div style="font-size: 16px; font-weight: 400; margin-bottom: 5px;"><strong>Araç Tipi: </strong>${type}</div>
                    <div style="font-size: 16px; font-weight: 400; margin-bottom: 5px;"><strong>Slogan: </strong>${slogan}</div>
                    <div style="font-size: 16px; font-weight: 400; margin-bottom: 5px;"><strong>Şarj: </strong>${battery }</div>
                    <div style="font-size: 16px; font-weight: 400; margin-bottom: 5px;"><strong>Kod: </strong>${code}</div>
                </div>
            </div>
        </div>
        <div class="button_div">
            <button id="goApp" class="go_app">,</button>
            <button id="goWeb" class="web_site">,</button>
        </div>
    </div>
    `;
	const goApp = content.querySelector("#goApp");
	goApp.addEventListener("click", () => {
		window.location.href = applink;
	});
	const goWeb = content.querySelector("#goWeb");
	goWeb.addEventListener("click", () => {
		window.location.href = weblink;
	});

	const infowindow = new google.maps.InfoWindow({
		content,
		position: map.getCenter(),
		pixelOffset: new google.maps.Size(0, 0), // Adjust this value to change the vertical position of the infowindow
	});

	const marker = new google.maps.Marker({
		position: location,
		animation: google.maps.Animation.DROP,
		icon: icon,
		map: map,
		borderRadius: "50%",
	});

	marker.addListener("click", () => {
		if (activeInfoWindow) {
			activeInfoWindow.close();
		}
		activeInfoWindow = infowindow;
		infowindow.open(map, marker);
	});
	markers.push(marker);
}

const getVEhicles = async (pos) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var graphql = JSON.stringify({
		query: `query ($lat: Float!, $lng: Float!) {
  vehicles (lat: $lat, lng: $lng) {
    type
    attributes
    lat
    lng
    battery
    id
    publicId
    provider {
      name
      website
        app {
            android
            ios
        }
    }
  }
}
`,
		/* variables: {
      "lat": 39.925533,
      "lng": 32.866287
    } */
		variables: pos,
	});

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: graphql,
		redirect: "follow",
	};
	var vehicles = [];
	await fetch(
		"https://flow-api.fluctuo.com/v1?access_token=JZn9y45gFE6pDNn6tTFhStE4p83xXmnk",
		requestOptions
	)
		.then((response) => {
			return response.json();
		})
		.then(function (data) {
			vehicles =
				typeof data.data.vehicles !== "undefined" ? data.data.vehicles : [];
		})
		.catch((error) => alert("Lütfen biraz sakinleş."));

	return vehicles;
};

const getAllVehicles = async () => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var graphql = JSON.stringify({
		query:
			"query {\n  providers {\n    name\n    slug\n    website\n    app {\n      android\n      ios\n    }\n    freefloatingVehiclesTypes\n    stationVehicleTypes\n  }\n}",
	});
	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: graphql,
		redirect: "follow",
	};

	const response = await fetch(
		"https://flow-api.fluctuo.com/v1?access_token=M1SsmfIeAzDCqq6lrUkfbOH8hggXITAy",
		requestOptions
	);
	const data = await response.json();
	return data.data.providers[0].vehicles;
};

const getLink = async (name) => {
	const response = await fetch("./link.json"); // link.json dosyasını getir
	const data = await response.json(); // json formatında çözümle
	const provider = data.data.providers.find((p) => p.name === name); // ismi eşleşen provider'ı bul
	return provider;
};

window.initMap = initMap;
