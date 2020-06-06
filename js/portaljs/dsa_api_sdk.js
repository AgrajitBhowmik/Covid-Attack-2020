let total_by_country_and_date = async (countries) =>  {
	let response = await fetch('https://api.covid19api.com/country/'+ countries +'?from=2020-05-19T23:59:59Z&to=2020-05-20T00:00:00Z');
	let user = await response.json();
}

let countries = async () =>  {
	let response = await fetch('https://api.covid19api.com/countries');
	let user = await response.json();
}

let global_TimeLine = async () =>  {
	let response = await fetch('https://corona-api.com/timeline');
	let jsonResponse = await response.json();
	await globalData(jsonResponse);
}

let country_TimeLine = async (id) =>  {
	let response = await fetch('https://corona-api.com/countries/' + id);
	let jsonResponse = await response.json();
	await countryData(jsonResponse);
}

let global_Country_wise_data = async () =>  {
	let response = await fetch('https://corona-api.com/countries');
	let jsonResponse = await response.json();
	await globalCountrywiseData(jsonResponse);
}