function vectorMapImplimentation(corona_Confirmed) {
$('#usa').vectorMap({
        map: 'world_mill_en',
		//markers: markers,
        /* markers: [
            {
                latLng: [36.77, -119.41],
                name: 'California visit : 250'

			}
         ],  */
		 series: {
			 regions: [{
			  values: corona_Confirmed,
			  scale: ['#C8EEFF', '#0071A4'],
			  normalizeFunction: 'polynomial'
			}], 
			/*  markers: [{
				attribute: 'r',
				scale: [0, Math.max(...Object.values(coronaData))],
				values: Object.values(coronaData)
			}] */
		 },
		  onRegionTipShow: function(e, el, code){
			
		   el.html(el.html()+'<br />(Confirmed - '+coronaData[code][0]+')<br />(Death - '+coronaData[code][1]+')<br />(Recovered - '+coronaData[code][2]+')');
		  },
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#2cabe3'
            }
        }
    });
}