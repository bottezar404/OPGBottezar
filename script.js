(function(){
  var toggle=document.querySelector('.lang-toggle'),list=document.getElementById('langlist'),items=list.querySelectorAll('.lang'),cur='hr',DE={'O nama':'Über uns','Proizvodi':'Produkte','Galerija':'Galerie','Kontakt':'Kontakt','Obiteljsko poljoprivredno gospodarstvo · Vranje Selo kraj Vižinade':'Landwirtschaftlicher Familienbetrieb · Vranje Selo bei Vižinada','Ekstra djevičansko maslinovo ulje iz naših nasada u Istri. Isto ulje koje koristimo i sami.':'Natives Olivenöl extra aus unseren Hainen in Istrien. Dasselbe Öl, das wir selbst verwenden.','Naša zemlja':'Unser Land','Naše gospodarstvo nalazi se u Vranjem Selu kraj Vižinade. Bavimo se uzgojem maslina i proizvodnjom maslinovog ulja. U nasadima su zastupljene sorte leccino, pendolino i istarska bjelica.':'Unser Betrieb liegt in Vranje Selo bei Vižinada. Wir bauen Oliven an und stellen Olivenöl her. In unseren Hainen wachsen die Sorten Leccino, Pendolino und Istarska bjelica.','Ekstra djevičansko ulje izrađujemo najprije za našu obitelj i prijatelje, a višak prodajemo. Kupujete isto ulje koje i sami konzumiramo.':'Unser natives Olivenöl extra machen wir zuerst für unsere Familie und Freunde, den Überschuss verkaufen wir. Sie kaufen dasselbe Öl, das wir selbst essen.','Kvalitetu potvrđujemo na smotrama ulja: zlatna medalja na Maslini u Splitu 2017. i srebrna medalja na Oleum olivarumu u Krasici.':'Unsere Qualität bestätigen wir bei Olivenöl-Wettbewerben: Goldmedaille bei der Maslina in Split 2017 und Silbermedaille bei Oleum olivarum in Krasica.','Extra djevičansko ulje, mješane sorte':'Natives Olivenöl extra, Sortenmischung','Ulje od više sorti iz naših nasada.':'Öl aus mehreren Sorten aus unseren Hainen.','Extra djevičansko ulje, istarska bjelica':'Natives Olivenöl extra, Istarska bjelica','Monosortno ulje od istarske bjelice, autohtone istarske sorte.':'Sortenreines Öl aus Istarska bjelica, einer einheimischen istrischen Olivensorte.','Ulje nudimo i u rinfuzi. Za cijene i dostupnost nazovite nas.':'Das Öl bieten wir auch als Fassware an. Preise und Verfügbarkeit erfragen Sie bitte telefonisch.','Više fotografija uskoro.':'Weitere Fotos folgen in Kürze.','Telefon':'Telefon','Adresa':'Adresse','Kupnja bez posrednika':'Direkt kaufen, ohne Zwischenhändler','Ulje možete kupiti izravno kod nas. Nazovite ili nam pošaljite e-mail, a mi ćemo dogovoriti preuzimanje.':'Das Öl können Sie direkt bei uns kaufen. Rufen Sie uns an oder schreiben Sie uns eine E-Mail, und wir vereinbaren die Abholung.','Pošalji e-mail':'E-Mail senden','Gdje smo':'So finden Sie uns','Otvori u Google kartama →':'In Google Maps öffnen →','(mobitel)':'(Handy)'},
  IT={"O nama":"Chi siamo","Proizvodi":"Prodotti","Galerija":"Galleria","Kontakt":"Contatti","Obiteljsko poljoprivredno gospodarstvo · Vranje Selo kraj Vižinade":"Azienda agricola familiare · Vranje Selo vicino a Visinada","Ekstra djevičansko maslinovo ulje iz naših nasada u Istri. Isto ulje koje koristimo i sami.":"Olio extravergine di oliva dai nostri uliveti in Istria. Lo stesso olio che usiamo noi.","Naša zemlja":"La nostra terra","Naše gospodarstvo nalazi se u Vranjem Selu kraj Vižinade. Bavimo se uzgojem maslina i proizvodnjom maslinovog ulja. U nasadima su zastupljene sorte leccino, pendolino i istarska bjelica.":"La nostra azienda si trova a Vranje Selo, vicino a Visinada. Coltiviamo olive e produciamo olio d'oliva. Nei nostri uliveti crescono le varietà Leccino, Pendolino e Bianchera istriana.","Ekstra djevičansko ulje izrađujemo najprije za našu obitelj i prijatelje, a višak prodajemo. Kupujete isto ulje koje i sami konzumiramo.":"Il nostro olio extravergine lo produciamo prima di tutto per la nostra famiglia e gli amici, e vendiamo quello che avanza. Comprate lo stesso olio che consumiamo noi.","Kvalitetu potvrđujemo na smotrama ulja: zlatna medalja na Maslini u Splitu 2017. i srebrna medalja na Oleum olivarumu u Krasici.":"Confermiamo la nostra qualità ai concorsi oleari: medaglia d'oro a Maslina a Spalato nel 2017 e medaglia d'argento a Oleum olivarum a Krasica.","Extra djevičansko ulje, mješane sorte":"Olio extravergine, blend di varietà","Ulje od više sorti iz naših nasada.":"Olio da più varietà coltivate nei nostri uliveti.","Extra djevičansko ulje, istarska bjelica":"Olio extravergine, Bianchera istriana","Monosortno ulje od istarske bjelice, autohtone istarske sorte.":"Olio monovarietale di Bianchera, varietà autoctona istriana.","Ulje nudimo i u rinfuzi. Za cijene i dostupnost nazovite nas.":"L'olio è disponibile anche sfuso. Per prezzi e disponibilità chiamateci.","Više fotografija uskoro.":"Altre foto in arrivo.","Telefon":"Telefono","Adresa":"Indirizzo","Kupnja bez posrednika":"Acquisto senza intermediari","Ulje možete kupiti izravno kod nas. Nazovite ili nam pošaljite e-mail, a mi ćemo dogovoriti preuzimanje.":"Potete acquistare l'olio direttamente da noi. Chiamateci o scriveteci un'e-mail e concorderemo il ritiro.","Pošalji e-mail":"Invia e-mail","Gdje smo":"Dove siamo","Otvori u Google kartama →":"Apri in Google Maps →","(mobitel)":"(cellulare)"};
  try{var s=localStorage.getItem('opg-lang');if(s==='en'||s==='de'||s==='it')cur=s}catch(e){}
  function apply(){
    document.documentElement.lang=cur;
    document.querySelectorAll('[data-hr]').forEach(function(el){var v=el.getAttribute('data-'+cur),M=cur==='de'?DE:cur==='it'?IT:null;if(M)v=M[el.getAttribute('data-hr')]||el.getAttribute('data-en');el.textContent=v});
    items.forEach(function(b){b.setAttribute('aria-current',b.dataset.l===cur)});
    toggle.querySelector('use').setAttribute('href','#fl-'+(cur==='en'?'gb':cur));
    toggle.querySelector('.lang-code').textContent=cur.toUpperCase();
  }
  var menuBtn=document.querySelector('.menu-toggle'),links=document.getElementById('navlinks');
  function show(o){list.hidden=!o;toggle.setAttribute('aria-expanded',o);if(o)menu(false)}
  function menu(o){links.classList.toggle('open',o);menuBtn.setAttribute('aria-expanded',o);if(o)show(false)}
  toggle.addEventListener('click',function(){show(list.hidden)});
  menuBtn.addEventListener('click',function(){menu(!links.classList.contains('open'))});
  links.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)});
  list.addEventListener('click',function(e){var t=e.target.closest('.lang');if(!t)return;
    cur=t.dataset.l;
    try{localStorage.setItem('opg-lang',cur)}catch(e){}
    apply();show(false);toggle.focus();
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.langmenu'))show(false);if(!e.target.closest('.navlinks,.menu-toggle'))menu(false)});
  document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;
    if(!list.hidden){show(false);toggle.focus()}
    else if(links.classList.contains('open')){menu(false);menuBtn.focus()}
  });
  document.getElementById('y').textContent=new Date().getFullYear();

  // Photo viewer: a full-screen dialog with a back arrow. Opening it adds a history entry,
  // so the phone's back button/gesture closes the photo instead of leaving the page.
  var viewer=document.getElementById('viewer'),vImg=viewer.querySelector('img'),vCount=viewer.querySelector('.v-count'),
    tiles=[].slice.call(document.querySelectorAll('.gallery .tile')),vi=0,tx=null;
  function photo(i){vi=(i+tiles.length)%tiles.length;var im=tiles[vi].querySelector('img');
    vImg.src=im.src;vImg.alt=im.alt;vCount.textContent=(vi+1)+' / '+tiles.length}
  document.querySelector('.gallery').addEventListener('click',function(e){var t=e.target.closest('.tile');if(!t||!viewer.showModal)return;
    e.preventDefault();photo(tiles.indexOf(t));
    if(!viewer.open){viewer.showModal();history.pushState({viewer:1},'')}
  });
  viewer.addEventListener('close',function(){if(history.state&&history.state.viewer)history.back()});
  window.addEventListener('popstate',function(){if(viewer.open)viewer.close()});
  viewer.querySelector('.v-back').addEventListener('click',function(){viewer.close()});
  viewer.querySelector('.v-prev').addEventListener('click',function(){photo(vi-1)});
  viewer.querySelector('.v-next').addEventListener('click',function(){photo(vi+1)});
  viewer.addEventListener('click',function(e){if(e.target===viewer)viewer.close()});
  viewer.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')photo(vi-1);if(e.key==='ArrowRight')photo(vi+1)});
  viewer.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
  viewer.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;
    if(Math.abs(dx)>50)photo(dx<0?vi+1:vi-1)});
  apply();
})();
