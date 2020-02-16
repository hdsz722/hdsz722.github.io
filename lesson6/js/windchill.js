var t = parseFloat(document.getElementById('curTemp').textContent);
var s = parseFloat(document.getElementById('windSpeed').textContent);
var chill = 0;

if (t <= 50) {
    if (s >= 3) {
        chill = (35.74 + (0.6215 * t) - (35.75* Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16))).toFixed(1);
    } /*   A wind chill value cannot be calculated for wind speeds less that 3mph  */
} else { 
/*    A wind chill value cannot be calculated for temperatures above 50°F */
    chill = "--";
}

document.getElementById("windChill").textContent = chill;
