//create map variable
var map = L.map('mapWindow').setView([41.14,-73.320007], 8);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

//use carto db positron tiles
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

//Test popup
// L.marker([41, -73.8]).addTo(map)
//     .bindPopup('Here is my marker<br> In the NYC Area')

// create a polygon showing old service area
var oldServArea = [[41.809708,-73.961334],[41.500864,-74.029999],[41.211205,-73.959961],
[40.998039,-73.896790],[40.651992,-74.068451],[40.534155,-74.014893],[40.536972,-73.655090],[40.696518,-72.886734],
[41.000112,-72.876434],[40.933746,-73.607025],[40.984563,-73.631744],[41.247354,-72.851715],
[41.410291,-72.859955],[41.479261,-73.531494],[41.825060,-73.508148]];
var osa = L.polygon(oldServArea, {
	color: 'red'
}).addTo(map);  

//create polygon for new service area
var newServArea = [[40.922074,-73.918762],[40.752719,-74.016953],[40.638707,-74.049911],
[40.564677,-74.014206],[40.540156,-73.939362],[40.582931,-73.735428],
[40.881593,-73.775940]];
var nsa = L.polygon(newServArea, {
	color: '#003561'
}).addTo(map);  
//Hudson River projects
    var HudsonRiverProjects = [
    	{
    		place: 'Albany',
    		name: 'WHWE Revitalization Project',
    		coord: [42.668308,-73.774084],
    	},
    	{
    		place: 'Poughkeepsie',
    		name: 'Main Street Economic Development Study',
    		coord: [41.704591,-73.930242],
    	},
    	{
    		place: 'Marlborough',
    		name: 'LWRP Economic Baseline Analysis',
    		coord: [41.605271,-73.972192],
    	},
    	{
    		place: 'Newburgh',
    		name: 'Complete Streets Study',
    		coord: [41.503307,-74.014034],
    	},
    	{
    		place: 'Peekskill',
    		name: 'Peekskill Market Analysis',
    		coord: [41.289545,-73.924084],
    	},
    	{
    		place: 'Ossining',
    		name: 'Ossining Housing Study',
    		coord: [41.162792,-73.861470],
    	},
    	{
    		place: 'Tarrytown',
    		name: 'Tarrytown Economic Development Study',
    		coord: [41.076666,-73.863530],
    	},
    	{
    		place: 'Inwood',
    		name: 'Dyckman Street Ferry Market Study',
    		coord: [40.868937,-73.931894],
    	},
    ]
//create empty layer grouo
    var HudsonLG = L.layerGroup();

//add each city to hudson river layer group
    HudsonRiverProjects.forEach(function(data) {
    	var thisCity = L.circleMarker(data.coord, {
    		title: data.place,
    		color: '#b3cc2b',
    		fillColor: '#003561',
    		weight: 2,
    		radius: 5,
    		fillOpacity: 0.8,

    })
//create text for each city's popup   
	thisCity.bindPopup('In ' + data.place + ', we worked on the ' + data.name);

//
   HudsonLG.addLayer(thisCity);

});

//Other Projects
    var OtherProjects = [
    	{
    		place: 'Fishkill',
    		name: 'Tract 601 Market Analysis',
    		coord: [41.528379,-73.962514],
    	},
    	{
    		place: 'Beekman',
    		name: 'Town Center Feasibility Study',
    		coord: [41.628997,-73.696804],
    	},
    	{
    		place: 'Pleasant Valley',
    		name: 'Town Center Feasibility Study',
    		coord: [41.744156,-73.824863],
    	},
    	{
    		place: 'New Castle',
    		name: 'New Castle Comprehensive Plan and the Chappaqua and Millwood Area Studies',
    		coord: [41.157522,-73.773097],
    	},
    	{
    		place: 'Ridgefield',
    		name: 'Ridgefield Market Analysis',
    		coord: [41.281491,-73.498428],
    	},
    	{
    		place: 'Norwalk',
    		name: 'Norwalk Innovation Place Study',
    		coord: [41.117066,-73.414207],
    	},
    	{
    		place: 'New York Harbor',
    		name: 'Governors Island Transportation Study',
    		coord: [40.692856,-74.015397],
    	},	
    	{
    		place: 'Baldwin',
    		name: 'Baldwin Corridor Revitalization Study',
    		coord: [40.660685,-73.607454],
    	},
    	{
    		place: 'Farmingdale',
    		name: 'Fair Housing Training',
    		coord: [40.734783,-73.442509],
    	},
    	{
    		place: 'Patchogue',
    		name: 'Fair and Affordable Housing Training',
    		coord: [40.765616,-73.015115],
    	},
    ]
//create empty layer grouo
    var OLG = L.layerGroup();

//add each city to other layer group
    OtherProjects.forEach(function(data) {
    	var thisCity = L.circleMarker(data.coord, {
    		title: data.place,
    		color: '#003561',
    		fillColor: '#b3cc2b',
    		weight: 2,
    		radius: 5,
    		fillOpacity: 0.8,

    })
//create text for each city's popup   
	thisCity.bindPopup('In ' + data.place + ', we worked on the ' + data.name);

//
   OLG.addLayer(thisCity);

});

//finally add to map
    HudsonLG.addTo(map);
    OLG.addTo(map);
  

//creates elements for selector box
var ProjectAreas = {
  "Hudson River Projects": HudsonLG,
  "Other Projects": OLG,
  "Old Service Area": osa,
  "New Study Area": nsa,
}

//adds elements to layer box
L.control.layers(null, ProjectAreas, {
  collapsed: false
}).addTo(map);