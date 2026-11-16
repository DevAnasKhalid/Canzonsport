/* Google Tag Manager GTM-56CVRCWK (loaded here so every page gets it without re-uploading) */
(function(w,d,s,l,i){if(d.querySelector('script[src*="googletagmanager.com/gtm.js"]'))return;
w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56CVRCWK');
window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};
/* Google Analytics 4 G-SP4ZLNE4EG (skipped when the page already has it in <head>) */
(function(d){if(d.querySelector('script[src*="gtag/js?id=G-SP4ZLNE4EG"]'))return;
gtag('js',new Date());
var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id=G-SP4ZLNE4EG';
(d.head||d.documentElement).appendChild(j);gtag('config','G-SP4ZLNE4EG');})(document);
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  // header shadow + scroll progress
  var bar = document.getElementById('progress'), header = document.querySelector('header.site');
  function onScroll(){
    var y = window.scrollY || 0, h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
    if (header) header.classList.toggle('scrolled', y > 40);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('anim');
  // scroll reveal with stagger
  var sel = '.sec-head,.card,.plain,.step,.fact,.market,.faq details,.table-box,.methods span,.prose > h2,.band-grid > *';
  var items = document.querySelectorAll('main ' + sel.split(',').join(',main '));
  items.forEach(function(el){
    if (el.closest('.hero')) return;
    var sibs = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.classList.add('rv'); el.style.setProperty('--d', Math.min(sibs, 8) * 70 + 'ms');
  });
  var io = new IntersectionObserver(function(es){
    es.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
  document.querySelectorAll('.rv').forEach(function(el){ io.observe(el); });
  // count-up numbers
  function countUp(el){
    var m = el.textContent.match(/^(\d+)(.*)$/); if (!m) return;
    var end = +m[1], rest = m[2], t0 = null;
    function step(t){ if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 1200), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v + rest; if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var cio = new IntersectionObserver(function(es){
    es.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); cio.unobserve(en.target); } });
  }, {threshold:0.6});
  document.querySelectorAll('.specs b, .fact b').forEach(function(el){ cio.observe(el); });
})();
document.querySelectorAll('.gallery').forEach(function(g){var m=g.querySelector('.gmain img');g.querySelectorAll('.gthumb').forEach(function(b){b.addEventListener('click',function(){m.src=b.dataset.src;g.querySelectorAll('.gthumb').forEach(function(o){o.classList.toggle('on',o===b);});});});});
(function(){var r=document.querySelector('.tb-rot');if(!r)return;var li=r.querySelectorAll('li'),i=0;if(!li.length)return;li[0].classList.add('on');
setInterval(function(){var c=li[i];c.classList.remove('on');c.classList.add('out');i=(i+1)%li.length;var n=li[i];n.classList.remove('out');n.classList.add('on');setTimeout(function(){c.classList.remove('out');},600);},3500);})();
(function(){var g=document.querySelector('.tgrid');var f=document.querySelector('.tfilter');if(!g||!f)return;var st={deco:'',fit:'',q:''};
function run(){g.querySelectorAll('.tcard').forEach(function(c){c.hidden=!((!st.deco||c.dataset.deco===st.deco)&&(!st.fit||c.dataset.fit===st.fit)&&(!st.q||c.dataset.name.indexOf(st.q)>-1));});var tc=document.querySelector('.tcount');if(tc){var v=g.querySelectorAll('.tcard:not([hidden])').length;tc.textContent='Showing '+v+' of '+tc.dataset.total+' styles';}}
f.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){st[b.dataset.f]=b.dataset.v;b.parentNode.querySelectorAll('button').forEach(function(o){o.classList.toggle('on',o===b);});run();});});
var i=document.getElementById('tsearch');if(i)i.addEventListener('input',function(){st.q=i.value.toLowerCase().trim();run();});})();

/* Medical Wear menu (added after Leather Wear on pages built before it existed) */
(function(){
  function run(){
    if (document.querySelector('a.fly-name[href="medical-wear-manufacturer.html"], a[href="medical-wear-manufacturer.html"] b')) return;
    var FLY="<li class=\"fly-cat\"><a class=\"fly-name\" href=\"medical-wear-manufacturer.html\">Medical Wear<i aria-hidden=\"true\">\u203a</i></a><div class=\"fly-panel\"><a class=\"fly-all\" href=\"medical-wear-manufacturer.html\">View all</a><div class=\"fly-grid\"><a href=\"custom-medical-scrubs.html\">Medical Scrubs</a><a href=\"custom-lab-coats.html\">Lab Coats</a><a href=\"custom-nurse-uniforms.html\">Nurse Uniforms</a><a href=\"custom-surgical-gowns.html\">Surgical Gowns</a><a href=\"custom-patient-gowns.html\">Patient Gowns</a><a href=\"custom-scrub-caps.html\">Scrub Caps</a></div></div></li>", MOB="<a href=\"medical-wear-manufacturer.html\"><b>Medical Wear</b></a><a class=\"msub\" href=\"custom-medical-scrubs.html\">Medical Scrubs</a><a class=\"msub\" href=\"custom-lab-coats.html\">Lab Coats</a><a class=\"msub\" href=\"custom-nurse-uniforms.html\">Nurse Uniforms</a><a class=\"msub\" href=\"custom-surgical-gowns.html\">Surgical Gowns</a><a class=\"msub\" href=\"custom-patient-gowns.html\">Patient Gowns</a><a class=\"msub\" href=\"custom-scrub-caps.html\">Scrub Caps</a>", FOOT="<li><a href=\"medical-wear-manufacturer.html\">Medical Wear</a></li>";
    var a=document.querySelector('a.fly-name[href="leather-wear-manufacturer.html"]');
    if(a){var li=a.closest('li'); if(li) li.insertAdjacentHTML('afterend',FLY);}
    var m=document.querySelectorAll('a.msub[href="custom-leather-accessories.html"]');
    m.forEach(function(x){x.insertAdjacentHTML('afterend',MOB);});
    document.querySelectorAll('li > a[href="leather-wear-manufacturer.html"]').forEach(function(x){
      if(!x.classList.contains('fly-name') && x.parentElement.tagName==='LI' && !x.parentElement.classList.contains('fly-cat')) x.parentElement.insertAdjacentHTML('afterend',FOOT);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();

/* Quote form: email every request to Canzon Sport through Web3Forms, fall back to WhatsApp if sending fails. */
var CZ_WEB3FORMS_KEY = "04fcb891-68cb-4cd4-8439-9cde912a765e";
(function () {
  if (!CZ_WEB3FORMS_KEY || CZ_WEB3FORMS_KEY.indexOf("PASTE") === 0) return; // key not added yet: keep old WhatsApp behaviour
  var WA = "https://wa.me/923277562080?text=";
  function waText(d) {
    var t = "New quote request%0A";
    d.forEach(function (v, k) { if (v && k !== "access_key" && k !== "botcheck" && k !== "subject" && k !== "from_name") t += k + ": " + encodeURIComponent(v) + "%0A"; });
    return t;
  }
  document.addEventListener("submit", function (ev) {
    var f = ev.target;
    if (!f || !f.matches || !f.matches("form.quote")) return;
    ev.preventDefault(); ev.stopImmediatePropagation();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    var ok = f.querySelector(".ok"), btn = f.querySelector("button[type=submit],button:not([type])");
    var d = new FormData(f);
    var style = (location.search.match(/[?&]style=([^&]+)/) || [])[1];
    if (style) d.append("style_code", decodeURIComponent(style));
    d.append("page", location.href);
    d.append("access_key", CZ_WEB3FORMS_KEY);
    d.append("subject", "New quote request" + (d.get("brand") ? " from " + d.get("brand") : "") + " (canzonsport.com)");
    d.append("from_name", "Canzon Sport website");
    if (d.get("email")) d.append("replyto", d.get("email"));
    if (btn) { btn.disabled = true; btn.dataset.t = btn.textContent; btn.textContent = "Sending..."; }
    fetch("https://api.web3forms.com/submit", { method: "POST", body: d, headers: { Accept: "application/json" } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j || !j.success) throw new Error("not sent");
        if (ok) { ok.textContent = "Thank you! Your request has been sent. We will reply within 24 hours."; ok.hidden = false; }
        f.reset();
        if (window.gtag) gtag("event", "generate_lead", { form: "quote" });
      })
      .catch(function () {
        if (ok) { ok.textContent = "Could not send by email, opening WhatsApp so you can send it there."; ok.hidden = false; }
        window.open(WA + waText(d), "_blank");
      })
      .finally(function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.t || "Send"; } });
  }, true);
})();

/* Price ranges (USD per piece, FOB Sialkot): shown on style and category pages and added to Product structured data as an AggregateOffer. */
(function () {
  var P = { // style-page file prefix: [low, high, unit]
    "custom-hoodie":[10,20],"blank-hoodie":[9,18],"hoodie":[12,22],"puff-hoodie":[12,22],"zip-hoodie":[12,22],"sweatshirt":[9,16],
    "tshirt":[4,9],"oversized-tee":[6,11],"acid-wash":[12,24],"sweatpants":[9,16],"pants":[9,16],"jeans":[12,22],"shirt":[7,14],
    "shorts":[5,10],"jacket":[18,35],"leggings":[6,12],"sports-bra":[5,10],"tank-top":[4,8],"gym-shorts":[5,10],
    "compression-shirt":[6,12],"compression-pants":[6,12],"track-jacket":[12,22],"gym-set":[12,22,"set"],
    "football-jersey":[9,17,"set"],"basketball-uniform":[10,18,"set"],"cricket-uniform":[10,20,"set"],"tracksuit":[16,30,"set"],
    "two-piece-tracksuit":[16,30,"set"],"baseball-uniform":[12,22,"set"],"cheer-uniform":[18,35,"set"],
    "american-football-uniform":[25,45,"set"],"hockey-jersey":[14,25],"lacrosse-uniform":[12,22,"set"],"tennis-apparel":[8,15],
    "softball-uniform":[12,22,"set"],"running-apparel":[6,12],"volleyball-uniform":[8,15,"set"],
    "boxing-gloves":[8,25,"pair"],"boxing-headgear":[10,22],"body-protector":[15,30],"focus-mitts":[10,20,"pair"],
    "hand-wraps":[1.5,3,"pair"],"shin-guards":[8,18,"pair"],"heavy-bag":[25,60],"bjj-gi":[25,45],"karate-uniform":[12,35],
    "no-gi":[9,16],"martial-arts-belt":[1.5,4],"rash-guard":[9,16],"mma-shorts":[8,14],"mma-gloves":[8,18,"pair"],
    "kick-pads":[15,35],"varsity-jacket":[25,45],"bomber-jacket":[18,32],"puffer-jacket":[20,38],"windbreaker":[10,20],
    "yoga-leggings":[7,13],"yoga-set":[12,22,"set"],"lounge-set":[18,32,"set"],"athleisure-jacket":[12,22],"bikini":[7,14,"set"],
    "swimsuit":[9,16],"swim-shorts":[6,12],"cover-up":[7,14],"cycling-jersey":[12,22],"bib-shorts":[15,28],
    "cycling-jacket":[18,35],"cycling-gloves":[5,10,"pair"],"polo-shirt":[6,12],"chef-uniform":[10,20],"hi-vis":[5,15],
    "work-trousers":[10,20],"fr-clothing":[25,50],"baseball-cap":[3,7],"trucker-cap":[3,6],"beanie":[2.5,5],"bucket-hat":[3.5,7],
    "leather-jacket":[45,95],"motorbike-gear":[25,250],"leather-pants":[35,75],"leather-gloves":[8,20,"pair"],
    "leather-accessory":[5,25],"riding-breeches":[14,26],"riding-top":[10,35],"saddle-pad":[9,18],"riding-gloves":[5,10,"pair"],
    "half-chaps":[15,30,"pair"],"horse-rug":[30,70],"embroidered-patch":[0.6,2],"woven-patch":[0.4,1.5],
    "sublimated-patch":[0.5,1.5],"pvc-patch":[0.8,2.5],"chenille-patch":[2,6],"leather-patch":[0.8,2.5],"bullion-patch":[3,10]
  };
  var C = { // category page -> style prefix
    "acid-wash-clothing":"acid-wash","custom-american-football-uniforms":"american-football-uniform","custom-athleisure-jackets":"athleisure-jacket",
    "custom-baseball-caps":"baseball-cap","custom-baseball-uniforms":"baseball-uniform","custom-basketball-uniforms":"basketball-uniform",
    "custom-beanies":"beanie","custom-bikinis":"bikini","custom-bjj-gi":"bjj-gi","custom-blank-hoodies":"blank-hoodie",
    "custom-body-protectors":"body-protector","custom-bomber-jackets":"bomber-jacket","custom-boxing-gloves":"boxing-gloves",
    "custom-boxing-headgear":"boxing-headgear","custom-bucket-hats":"bucket-hat","custom-bullion-patches":"bullion-patch",
    "custom-cheer-uniforms":"cheer-uniform","custom-chef-uniforms":"chef-uniform","custom-chenille-patches":"chenille-patch",
    "custom-compression-pants":"compression-pants","custom-compression-shirts":"compression-shirt","custom-cover-ups":"cover-up",
    "custom-cricket-uniforms":"cricket-uniform","custom-cycling-bib-shorts":"bib-shorts","custom-cycling-gloves":"cycling-gloves",
    "custom-cycling-jackets":"cycling-jacket","custom-cycling-jerseys":"cycling-jersey","custom-embroidered-patches":"embroidered-patch",
    "custom-field-hockey-lacrosse-uniforms":"lacrosse-uniform","custom-flame-resistant-clothing":"fr-clothing","custom-focus-mitts":"focus-mitts",
    "custom-football-jerseys":"football-jersey","custom-gym-sets":"gym-set","custom-gym-shorts":"gym-shorts","custom-half-chaps":"half-chaps",
    "custom-hand-wraps":"hand-wraps","custom-heavy-bags":"heavy-bag","custom-hi-vis-workwear":"hi-vis","custom-hockey-jerseys":"hockey-jersey",
    "custom-hoodies":"custom-hoodie","custom-horse-rugs":"horse-rug","custom-jeans":"jeans","custom-karate-uniforms":"karate-uniform",
    "custom-kick-pads":"kick-pads","custom-leather-accessories":"leather-accessory","custom-leather-gloves":"leather-gloves",
    "custom-leather-jackets":"leather-jacket","custom-leather-pants-vests":"leather-pants","custom-leather-patches":"leather-patch",
    "custom-leggings":"leggings","custom-lounge-sets":"lounge-set","custom-martial-arts-belts":"martial-arts-belt","custom-mma-gloves":"mma-gloves",
    "custom-mma-shorts":"mma-shorts","custom-motorbike-gear":"motorbike-gear","custom-no-gi-apparel":"no-gi","custom-one-piece-swimsuits":"swimsuit",
    "custom-pants-trousers":"pants","custom-polo-shirts":"polo-shirt","custom-puffer-jackets":"puffer-jacket","custom-pvc-patches":"pvc-patch",
    "custom-rash-guards":"rash-guard","custom-riding-breeches":"riding-breeches","custom-riding-gloves":"riding-gloves",
    "custom-riding-tops-jackets":"riding-top","custom-running-track-apparel":"running-apparel","custom-saddle-pads":"saddle-pad",
    "custom-shin-guards":"shin-guards","custom-shirts":"shirt","custom-shorts":"shorts","custom-softball-uniforms":"softball-uniform",
    "custom-sports-bras":"sports-bra","custom-sublimated-patches":"sublimated-patch","custom-sweatpants":"sweatpants",
    "custom-sweatshirts":"sweatshirt","custom-swim-shorts":"swim-shorts","custom-t-shirts":"tshirt","custom-tank-tops":"tank-top",
    "custom-tennis-padel-apparel":"tennis-apparel","custom-track-jackets":"track-jacket","custom-tracksuits":"tracksuit",
    "custom-trucker-caps":"trucker-cap","custom-varsity-jackets":"varsity-jacket","custom-volleyball-uniforms":"volleyball-uniform",
    "custom-windbreakers":"windbreaker","custom-work-trousers":"work-trousers","custom-woven-patches":"woven-patch",
    "custom-yoga-leggings":"yoga-leggings","custom-yoga-sets":"yoga-set","heavyweight-hoodie-manufacturer":"hoodie",
    "oversized-t-shirts":"oversized-tee","puff-print-hoodies":"puff-hoodie","two-piece-tracksuits":"two-piece-tracksuit",
    "zip-up-hoodies":"zip-hoodie",
    "custom-sweatpants-joggers":"sweatpants"
  };
  var file = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  var isStyle = file.indexOf("-cz-") > 0, key = isStyle ? file.split("-cz-")[0] : C[file];
  var p = key && P[key]; if (!p) return;
  var unit = p[2] || "piece";
  function money(v) { return "$" + (v % 1 ? v.toFixed(2) : v); }
  var range = money(p[0]) + " – " + money(p[1]);
  function run() {
    // 1) structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function (s) {
      try {
        var j = JSON.parse(s.textContent), list = Array.isArray(j) ? j : (j["@graph"] || [j]), changed = false;
        list.forEach(function (o) {
          if (o && o["@type"] === "Product" && !o.offers) {
            o.offers = { "@type": "AggregateOffer", "priceCurrency": "USD", "lowPrice": p[0], "highPrice": p[1], "offerCount": 1,
              "url": location.href.split("#")[0].split("?")[0],
              "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 25, "unitText": unit },
              "seller": { "@type": "Organization", "name": "Canzon Sport" } };
            changed = true;
          }
        });
        if (changed) s.textContent = JSON.stringify(j);
      } catch (e) {}
    });
    // 2) visible price
    if (document.querySelector(".cz-price")) return;
    var line = '<p class="cz-price" style="margin:12px 0 0;font-weight:700">Price: <span style="white-space:nowrap">' + range + '</span> per ' + unit +
      ', FOB Sialkot <span style="font-weight:400;opacity:.8">(MOQ 25 · final price depends on fabric, print and quantity)</span></p>';
    var stats = isStyle && document.querySelector(".tstats");
    if (stats) { stats.insertAdjacentHTML("beforebegin", line); return; }
    var lead = document.querySelector("main .lead") || document.querySelector(".lead");
    if (lead) lead.insertAdjacentHTML("afterend", line);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
