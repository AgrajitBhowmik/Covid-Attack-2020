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
	
	$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('.target').each(function() {
			var id = $(this).attr("id").split("Row")[0];
			var marking = 0 ;
			if((id == "case_Counts" && $(window).width() < 991) || id != "case_Counts"){
				if ($(this).position().top-200 <= scrollDistance) {
					$('.nav a.selected').removeClass("selected");
					$('#' + id).addClass('selected');
				}
			}
		});
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
