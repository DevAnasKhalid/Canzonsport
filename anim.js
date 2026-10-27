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
(function(){var g=document.querySelector('.tgrid');var f=document.querySelector('.tfilter');if(!g||!f)return;var st={color:'',fit:'',q:''};
function run(){g.querySelectorAll('.tcard').forEach(function(c){c.hidden=!((!st.color||c.dataset.color===st.color)&&(!st.fit||c.dataset.fit===st.fit)&&(!st.q||c.dataset.name.indexOf(st.q)>-1));});}
f.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){st[b.dataset.f]=b.dataset.v;b.parentNode.querySelectorAll('button').forEach(function(o){o.classList.toggle('on',o===b);});run();});});
var i=document.getElementById('tsearch');if(i)i.addEventListener('input',function(){st.q=i.value.toLowerCase().trim();run();});})();
