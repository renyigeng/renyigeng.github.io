// Blog-only scrolling enhancements. Notes/article remain readable without JavaScript.
(() => {
  const body = document.body;
  if (!body.classList.contains('notes-page')) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.getElementById('blog-progress-fill');
  const topBtn = document.querySelector('.blog-back-top');
  let scheduled = false;
  function refresh() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (maxScroll > 0 ? Math.min(100, Math.max(0, window.scrollY / maxScroll * 100)) : 0) + '%';
    if (topBtn) topBtn.classList.toggle('show', window.scrollY > 450);
    body.classList.toggle('blog-has-scrolled', window.scrollY > 32);
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(refresh); }
  }, {passive:true});
  window.addEventListener('resize', refresh);
  refresh();
  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:reduced?'instant':'smooth'}));
  const items = [...document.querySelectorAll('.blog-reveal')];
  if (!reduced && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
    }, {threshold:0.08, rootMargin:'0px 0px 60px 0px'});
    items.forEach(item => { item.classList.add('reveal-ready'); obs.observe(item); });
  }
})();
