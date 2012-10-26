var Path = {};
//Map functions
Path.Map = {};
Path.Map.createMap = function(ele, mapOptions) {
	var mapOptionDefaults = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	},
		finalMapOptions = _.extend(mapOptionDefaults, mapOptions);
	var map = new google.maps.Map(ele, finalMapOptions);
	return map;
};
Path.Map.geocode = function (address, success) {
	$.ajax({
		url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + address,
		method: 'GET',
		dataType: 'jsonp',
		error: function(xhr, status, errorThrown) {
			if("console" in window) {
				console.log('Error:',status,errorThrown,xhr);
			}
		},
		success: success
	});
}
