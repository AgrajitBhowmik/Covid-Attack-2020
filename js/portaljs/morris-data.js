function Morris_graph( data ){
 Morris.Area({
        element: 'extra-area-chart',
        data: data,
		lineColors: ['#2cabe3', '#15cc04', '#ff0024'],
		xkey: 'date',
		ykeys: ['confirmed','recovered','deaths'],
		labels: ['Confirmed', 'Recovered', 'Deaths'],
		pointSize: 0,
		lineWidth: 0,
		resize:true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		hideHover: 'auto'
        
    });
}