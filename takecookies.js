var noco=jQuery.cookie('nocook');var nocostyle="<style>\
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
</style>";if(!noco){
	jQuery("head").append(nocostyle);
	jQuery("body").prepend("<div id='askcook'><p>To spletno mesto uporablja piškotke z namenom zagotavljanja spletne storitve, oglasnih sistemov in funkcionalnosti, ki jih brez piškotkov ne bi mogli nuditi. Z obiskom in uporabo spletnega mesta soglašate s piškotki. <span><a href='http://zavod.over.net/o-piskotkih/'>Več o piškotkih</a> </span> </p><p><button id='cookok' class='pure-button'>V redu</button></p></div>");
	jQuery("#askcook").fadeIn('slow');
	jQuery("#cookok").bind('click',function(){jQuery.cookie('nocook','1',{expires:365});
	jQuery('#askcook').fadeOut('slow');});}
else{}