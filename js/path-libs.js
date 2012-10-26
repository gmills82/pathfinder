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

Path.Map.createMarker = function (markerOptions) {
	var options = _.extend({
		'draggable': true,
		'animation': google.maps.Animation.DROP
	}, markerOptions),
		marker;

	if(options.position && typeof options.map === 'object'){
		marker = new google.maps.Marker(options);
	};
	return marker;
};
