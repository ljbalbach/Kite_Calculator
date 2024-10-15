
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var title = "¡Bienvenido a la Calculadora de Cometas!";
var subtitle = "¡Encuentra el tamaño perfecto de cometa y ve al agua!";
var weight = "Peso (lbs)";
var windSpeed = "Velocidad del viento (mph)";
var calculate = "Calcular";
var result = "Tamaño de cometa recomendado: {size} m²";
var result_no_kite = "¡Deberías considerar utilizar una tabla de windsurf en estas condiciones!";
var es = {
	title: title,
	subtitle: subtitle,
	weight: weight,
	windSpeed: windSpeed,
	calculate: calculate,
	result: result,
	result_no_kite: result_no_kite
};

export { calculate, es as default, result, result_no_kite, subtitle, title, weight, windSpeed };
//# sourceMappingURL=es-7bf9c109.js.map
