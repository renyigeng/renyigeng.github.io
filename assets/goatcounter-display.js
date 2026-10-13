/* v2.11: GoatCounter public display. Recording uses official count.js on each page.
 * Public JSON counters require an opt-in in GoatCounter Site settings.
 * No keys/passwords/tokens are used or stored in this website.
 */
(() => {
  'use strict';
  const ORIGIN = 'https://renyigeng.goatcounter.com';
  const totals = [...document.querySelectorAll('[data-gc-total]')];
  const pages = [...document.querySelectorAll('[data-gc-page]')];
  const status = [...document.querySelectorAll('.gc-status')];
  if (!totals.length && !pages.length) return;

  function langText(zh, en) {
    return (document.documentElement.lang || '').toLowerCase().startsWith('zh') ? zh : en;
  }
  function setStatus(zh, en) {
    status.forEach(s => {s.textContent = zh ? ' · ' + langText(zh, en) : '';});
  }
  function isLocal() {
    return location.protocol === 'file:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  }
  function normalizedPath() {
    let p = location.pathname || '/';
    if (p === '/index.html') return '/';
    if (p.endsWith('/index.html')) return p.slice(0, -'index.html'.length);
    return p;
  }
  async function readCounter(path) {
    const endpoint = ORIGIN + '/counter/' + encodeURIComponent(path) + '.json';
    const res = await fetch(endpoint, {mode:'cors', credentials:'omit', cache:'no-store'});
    if (res.status === 403) throw new Error('opt-in');
    if (res.status === 404) throw new Error('not-ready');
    if (!res.ok) throw new Error('http-' + res.status);
    const value = (await res.json()).count;
    if ((typeof value !== 'string' && typeof value !== 'number') || !/^\d[\d,. ]*$/.test(String(value))) {
      throw new Error('invalid-count');
    }
    return String(value);
  }
  async function start() {
    if (isLocal()) {setStatus('本地预览不计数', 'Local preview is not counted'); return;}
    // A site can still track visits even before public display is enabled.
    // The documented special path TOTAL sums visits across every page.
    const reads = await Promise.allSettled([
      readCounter('TOTAL'),
      readCounter(normalizedPath())
    ]);
    if (reads[0].status === 'fulfilled') totals.forEach(x => {x.textContent=reads[0].value;});
    if (reads[1].status === 'fulfilled') pages.forEach(x => {x.textContent=reads[1].value;});
    if (reads.every(r => r.status === 'fulfilled')) {setStatus('', ''); return;}
    if (reads.some(r => r.status === 'rejected' && r.reason.message === 'opt-in')) {
      setStatus('需在 GoatCounter 开启公开计数', 'Enable public counters in GoatCounter settings');
    } else if (reads.some(r => r.status === 'rejected' && r.reason.message === 'not-ready')) {
      setStatus('等待首次计数入库', 'Waiting for first recorded visit');
    } else {
      setStatus('统计暂不可用', 'Counter temporarily unavailable');
    }
  }
  start();
})();
