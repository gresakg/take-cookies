var noco=jQuery.cookie('nocook');var nocostyle="<style>\
#askcook { \
background-color: #ffffff; \
padding: 1px;\n\
border-bottom: 2px solid #343434; \
} \
#askcook a, #askcook a:visited, #askcook a:hover {\
color: #31a8f0; \
text-decoration: none;\
} \
#askcook p { \
margin:10px; \
line-height:150%; \
color:#656360; \
font-size:13px; \
} \
button#cookok { \
display:block; \
margin: 0 auto; \
} \
</style>";if(!noco){jQuery("head").append(nocostyle);jQuery("body").prepend("<div id='askcook'><p>To spletno mesto uporablja piškotke z namenom zagotavljanja spletne storitve, oglasnih sistemov in funkcionalnosti, ki jih brez piškotkov ne bi mogli nuditi. Z obiskom in uporabo spletnega mesta soglašate s piškotki. <span><a href='http://zavod.over.net/o-piskotkih/'>Več o piškotkih</a> </span> <button id='cookok'>V redu</button></p></div>");jQuery("#cookok").bind('click',function(){jQuery.cookie('nocook','1',{expires:365});jQuery('#askcook').hide('slow');});}
else{}