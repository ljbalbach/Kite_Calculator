
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var title = "Welcome to the Kite Calculator!";
var subtitle = "Find the perfect kite size and get on the water!";
var weight = "Weight (lbs)";
var windSpeed = "Wind Speed (mph)";
var calculate = "Calculate";
var result = "Recommended kite size: {size} m²";
var en = {
	title: title,
	subtitle: subtitle,
	weight: weight,
	windSpeed: windSpeed,
	calculate: calculate,
	result: result
};

export { calculate, en as default, result, subtitle, title, weight, windSpeed };
//# sourceMappingURL=en-e9b286a8.js.map
