var langs = ['en', 'fr'];
var langCode = '';
var langJS = null;


var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}


var lang = document.getElementById("country").checked;

if (lang == true)
	$.getJSON('lang/en.json', translate);
else
	$.getJSON('lang/fr.json', translate);
