
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var title = "Welcome to the Kite Calculator!";
var subtitle = "Find the perfect kite size and get on the water!";
var weight = "Weight (lbs)";
var windSpeed = "Wind Speed (mph)";
var calculate = "Calculate";
var result = "Recommended kite size: {size} m²";
var result_no_kite = "You should consider using a windsurfer in these conditions!";
var en = {
	title: title,
	subtitle: subtitle,
	weight: weight,
	windSpeed: windSpeed,
	calculate: calculate,
	result: result,
	result_no_kite: result_no_kite
};

export { calculate, en as default, result, result_no_kite, subtitle, title, weight, windSpeed };
//# sourceMappingURL=en-f6092fac.js.map
