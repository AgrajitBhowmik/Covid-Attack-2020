function globalCountrywiseData(response){
	var dataSourceObjCountrywiseData = {};
	var corona_Confirmed = {};
	if (response){
		var countriesObj = {};
		let data = response.data;
		 var options = '<option selected value="World Wide" data-id = "world"></option>';
		for(let Countryobj of data)
		{
			countriesObj = {}
			countriesObj["name"] = Countryobj.name;	
			countriesObj["confirmed"] = Countryobj.latest_data.confirmed;
			countriesObj["today_confirmed"] = '+' + Countryobj.today.confirmed ;
			var deathRate = (Countryobj.latest_data.calculated.death_rate)? Countryobj.latest_data.calculated.death_rate.toFixed(2):0 ; 
			countriesObj["deaths"] = Countryobj.latest_data.deaths + '(' + deathRate + '%)';;		
			countriesObj["today_deaths"] = '+' + Countryobj.today.deaths;
			var recoveredRate = (Countryobj.latest_data.calculated.recovery_rate)? Countryobj.latest_data.calculated.recovery_rate.toFixed(2) : 0; 
			countriesObj["recovered"] = Countryobj.latest_data.recovered + '(' + recoveredRate + '%)';	
			
			coronaData[Countryobj.code] = [Countryobj.latest_data.confirmed,Countryobj.latest_data.deaths,Countryobj.latest_data.recovered] ;
			options += ('<option value="' + Countryobj.name + '" data-id = "' + Countryobj.code + '"></option>');
			corona_Confirmed[Countryobj.code] = Countryobj.latest_data.confirmed;
			dataSourceObjCountrywiseData[countriesObj["name"]] = countriesObj;
		}
	}
	
	bindDataToDataTable("Country_Wise_Cases", dataSourceObjCountrywiseData);
	document.getElementById('countries').innerHTML = options;
	vectorMapImplimentation(corona_Confirmed);
}

function globalData(response){
	if (response){
		$("#DynamicAreaName").text("World Wide Cases");
		$("#heading").text("World Wide Cases");
		$("#totalcases").text(response.data[0].confirmed);
		$("#active").text(response.data[0].active);
		$("#deaths").text(response.data[0].deaths);
		$("#recovered").text(response.data[0].recovered);
		
		$("#lastupdated").text(new Date(response.data[0].updated_at).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
		
		$("#graphConfirmed").text(response.data[0].confirmed);
		$("#graphDeaths").text(response.data[0].deaths);
		$("#graphRecovered").text(response.data[0].recovered);
		
		$("#extra-area-chart").empty();
		Morris_graph(response.data);
	}
}

function countryData(response){
	if (response){
		var {deaths, confirmed ,recovered} = response.data.latest_data;
		
		$("#DynamicAreaName").text(response.data.name);
		$("#graphConfirmed").text(confirmed);
		$("#graphDeaths").text(deaths);
		$("#graphRecovered").text(recovered);
		
		$("#extra-area-chart").empty();
		console.log(response.data.timeline.length);
		if(response.data.timeline.length)
			Morris_graph(response.data.timeline);
		else
			$("#extra-area-chart").text("All recovered");
	}
}