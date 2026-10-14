/* V3.0 - tiny optional click-star sparkle. Zero perpetual timers/RAF. */
(() => {
  if (!document.body.classList.contains('notes-page')) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const colors = ['#fff6cf', '#f6c8eb', '#b8e7ff', '#d8c7ff'];
  let last = 0;
  let touchStart = null;
  function sparkle(event) {
    if (motion.matches || !event.isTrusted || Date.now() - last < 280) return;
    if (event.target instanceof Element && event.target.closest('a, button, input, textarea, select, label, summary, [role="button"], [contenteditable="true"]')) return;
    if (window.getSelection()?.toString().trim()) return;
    if (!Number.isFinite(event.clientX) || !Number.isFinite(event.clientY)) return;
    last = Date.now();
    const fragment = document.createDocumentFragment();
    for (let i=0;i<3;i++) {
      const star=document.createElement('span');
      star.className='rony-click-star';
      const angle = (i*120-90)*Math.PI/180;
      const distance = 17 + Math.random()*13;
      star.style.left=event.clientX+'px';star.style.top=event.clientY+'px';
      star.style.setProperty('--dx',Math.round(Math.cos(angle)*distance)+'px');
      star.style.setProperty('--dy',Math.round(Math.sin(angle)*distance)+'px');
      star.style.color=colors[Math.floor(Math.random()*colors.length)];
      star.textContent='✦';
      star.addEventListener('animationend',()=>star.remove(),{once:true});
      fragment.append(star);
    }
    document.body.append(fragment);
  }
  // Touch taps do not reliably synthesize delegated clicks on older Mobile Safari.
  // Only a short, stationary touch counts; normal scrolling never emits sparkles.
  document.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') touchStart={x:event.clientX,y:event.clientY,t:Date.now()};
  }, {passive:true});
  document.addEventListener('pointerup', (event) => {
    if (event.pointerType !== 'touch' || !touchStart) return;
    const start=touchStart; touchStart=null;
    if (Date.now()-start.t < 500 && Math.hypot(event.clientX-start.x,event.clientY-start.y)<12) sparkle(event);
  }, {passive:true});
  document.addEventListener('pointercancel',()=>{touchStart=null},{passive:true});
  document.addEventListener('click', sparkle, {passive:true});
})();
