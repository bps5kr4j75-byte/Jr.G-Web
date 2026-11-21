// Activa el botón de WhatsApp solo si hay número real en config.js
(function(){var c=window.JRG||{},s=document.getElementById("wa-slot");
if(s&&/^\d{8,15}$/.test(c.WHATSAPP||"")){s.innerHTML='<a class="btn" target="_blank" rel="noopener" href="https://wa.me/'+c.WHATSAPP+'?text='+encodeURIComponent(c.MENSAJE||"")+'">Escribir por WhatsApp</a>';}})();
