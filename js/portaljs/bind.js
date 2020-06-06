$(function() {
	$("#dashboard").addClass("selected");
	$('#side-menu li a').click(function(){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		
		var tab = $(this).attr('id');
		$('html,body').animate({
			scrollTop: $("#"+tab+"Row").offset().top-100},
        'slow');
	});
	
	$('#countryInput').on('change', function() {
		var value = $(this).val();
		var id = $('#countries [value="' + value + '"]').data('id');
		if(id == "world")
			global_TimeLine();
		else
			country_TimeLine(id);
	});
	
	initializeDataTable();
	global_Country_wise_data();
	global_TimeLine();
});

function bindDataToDataTable(tableID, jsonObject)	{
	$("#" + tableID).DataTable().clear().draw();
	$("#" + tableID).DataTable().rows.add(Object.keys(jsonObject).map(function(itm){return jsonObject[itm];})).draw();
}

function initializeDataTable() {
	$("#Country_Wise_Cases").DataTable({
		destroy: true,
		columns: [
				{ "data": "name" },
				{ "data": "confirmed" },
				{ "data": "today_confirmed" },
				{ "data": "deaths" },
				{ "data": "today_deaths" },
				{ "data": "recovered" },
			],
		"columnDefs": [
			{"className": "dt-center", "targets": "_all"},
		],
		order: [[ 1, 'dsc' ]],		
		rowId: "name",
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf' ,'print'
		]
	});
}