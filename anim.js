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
var CZ_WEB3FORMS_KEY = "PASTE-YOUR-WEB3FORMS-ACCESS-KEY-HERE";
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
