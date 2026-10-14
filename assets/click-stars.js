/* V3.0 Firefly Glow — one soft light at a time, not star particles.
   Keep the existing asset path so deployed sites can update incrementally. */
(() => {
  if (!document.body.classList.contains('notes-page')) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const blockedControls = 'a, button, input, textarea, select, label, summary, [role="button"], [contenteditable="true"]';
  const blockedReading = '.article-shell, .article-card, .topic, .topbar, .footer, .notes-filters, .post-list';
  let start = null;
  let lastGlowAt = 0;

  function allowedTarget(target) {
    if (!(target instanceof Element)) return false;
    if (target.closest(blockedControls) || target.closest(blockedReading)) return false;
    // Glow over the hero illustration/sky, or over truly empty page background.
    if (target.closest('.notes-hero, .article-cinematic-hero')) return true;
    return target === document.body || target === document.documentElement ||
      target.matches('main, section.section');
  }

  function glow(event) {
    if (reducedMotion.matches || !event.isTrusted || !allowedTarget(event.target)) return;
    if (window.getSelection()?.toString().trim()) return;
    if (performance.now() - lastGlowAt < 250) return;
    if (!Number.isFinite(event.clientX) || !Number.isFinite(event.clientY)) return;
    lastGlowAt = performance.now();

    const light = document.createElement('span');
    light.className = 'rony-click-glow';
    light.setAttribute('aria-hidden', 'true');
    light.style.left = `${event.clientX}px`;
    light.style.top = `${event.clientY}px`;
    light.addEventListener('animationend', () => light.remove(), { once: true });
    document.body.append(light);
  }

  // A completed short tap works on mobile Safari; dragging to scroll does not.
  document.addEventListener('pointerdown', event => {
    if (!event.isPrimary || !allowedTarget(event.target)) { start = null; return; }
    start = { id: event.pointerId, x: event.clientX, y: event.clientY,
      time: performance.now() };
  }, { passive: true });

  document.addEventListener('pointerup', event => {
    if (!start || start.id !== event.pointerId) return;
    const tap = start;
    start = null;
    if (performance.now() - tap.time > 650) return;
    if (Math.hypot(event.clientX - tap.x, event.clientY - tap.y) > 12) return;
    glow(event);
  }, { passive: true });

  document.addEventListener('pointercancel', () => { start = null; }, { passive: true });
})();
