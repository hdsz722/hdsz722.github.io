var t = parseFloat(document.getElementById('curTemp').textContent);
var s = parseFloat(document.getElementById('windSpeed').textContent);
let chill = (35.74 + (0.6215 * t) - (35.75* Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16))).toFixed(1);

document.getElementById("windChill").textContent = chill;
