// Sends visitors to the page in their system language (German for "de", English otherwise).
// Only on arrival from outside the site: clicking the DE/EN toggle comes from our own origin
// and is respected. Nothing is stored on the device.
(function () {
  var sys = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  var want = sys.slice(0, 2) === 'de' ? 'de' : 'en';
  if (want === document.documentElement.lang) return;
  try {
    if (document.referrer && new URL(document.referrer).origin === location.origin) return;
  } catch (e) {}
  var alt = document.querySelector('link[rel="alternate"][hreflang="' + want + '"]');
  if (alt) location.replace(new URL(alt.href).pathname + location.hash);
})();
