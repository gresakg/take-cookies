;(function($){
	var noco = getCookie('noco');
	var nocostyle="<style>\
#askcook { \
background-color: #fff; \
border: 2px solid #343434; \
bottom: 20px; \
max-height: 50%; \
padding: 1px; \
position: absolute; \
right: 20px; \
max-width: 300px; \
display: none; \
z-index: 99999999 !important;\
} \
#askcook a, #askcook a:visited, #askcook a:hover {\
color: #31a8f0; \
text-decoration: none;\
} \
#askcook p { \
margin:15px; \
line-height:150%; \
color:#656360; \
font-size:13px; \
} \
button#cookok { \
display:block; \
position: relative; \
left:180px;\
} \
@media screen and (max-width: 568px) { \
#askcook { \
border-left: medium none; \
border-right: medium none; \
bottom: 0; \
max-width: 100%; \
right: auto; \
width: 100%; \
}\
";
	var takeit = {
		sl: {
			main:"To spletno mesto uporablja piškotke z namenom zagotavljanja spletne storitve, oglasnih sistemov in funkcionalnosti, ki jih brez piškotkov ne bi mogli nuditi. Z obiskom in uporabo spletnega mesta soglašate s piškotki.",
			link:"http://zavod.over.net/o-piskotki",
			about:"Več o piškotkih",
			ok:"V redu"
		},
		hr: {
			main:"Ova stranica koristi tzv. kolačiće kako bi osigurala bolje korisničko iskustvo i funkcionalnost. Koristeći našu stranicu slažete se s korištenjem kolačića. ",
			link:"https://med.over.net/hr/o-kolacicima/",
			about:"Više o kolačićima možete pročitati ovdje",
			ok:"Uredu"
		}
	}

	if(!noco){
		var lang = $('html').attr('lang') || "sl";
		lang = lang.substring(0,2);
		console.log(lang);
		$("head").append(nocostyle);
		$("body").prepend("<div id='askcook'><p>" + takeit[lang].main + "<span><a href='" + takeit[lang].link  + "'>" + takeit[lang].about + "</a> </span> </p><p><button id='cookok' class='pure-button'>" + takeit[lang].ok + "</button></p></div>");
		$("#askcook").fadeIn('slow');
		$("#cookok").bind('click',function(){
			setCookie('noco','1',365);
			$('#askcook').fadeOut('slow');
		});
	}
	function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
}(jQuery));