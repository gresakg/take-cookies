var noco=jQuery.cookie('nocook');var nocostyle="<style>\
#askcook { \
background-color: #fff; \
background-image: url('data:image/png;base64,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'); \
background-position: top center; \
background-repeat: no-repeat; \
border: 2px solid #343434; \
bottom: 20px; \
max-height: 50%; \
padding: 1px; \
position: absolute; \
right: 20px; \
max-width: 300px; \
display: none; \
z-index: 10000 !important;\
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