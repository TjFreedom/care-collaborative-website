/* ==========================================================================
   Care Collaborative — site behavior
   Mobile navigation, contact-form stub, footer year. No dependencies.
   ========================================================================== */

(function () {
  'use strict';

  // Signals CSS that JS is available; without it the mobile menu renders
  // as a static list instead of a toggle-driven dropdown.
  document.documentElement.classList.add('js');

  /* ---------------------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------------------- */

  var toggle = document.querySelector('.nav-toggle');
  var links  = document.getElementById('nav-links');

  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after tapping a link (same-page anchors would otherwise leave it open).
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    // Escape closes and returns focus to the toggle.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset state when resizing up to the desktop layout.
    var desktop = window.matchMedia('(min-width: 781px)');
    var onChange = function (event) { if (event.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else desktop.addListener(onChange); // Safari < 14
  }

  /* ---------------------------------------------------------------------
     Contact form

     Front-end stub only. Set data-live="true" on the <form> (and give it a
     real action) and this handler steps aside so the browser posts normally.
     --------------------------------------------------------------------- */

  var form = document.getElementById('contact-form');

  if (form && form.dataset.live !== 'true') {
    var status = document.getElementById('form-status');

    var say = function (message, state) {
      if (!status) return;
      status.textContent = message;
      if (state) status.setAttribute('data-state', state);
      else status.removeAttribute('data-state');
    };

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // The form carries `novalidate`, so validate on demand and report.
      if (!form.checkValidity()) {
        form.reportValidity();
        say('Please complete the required fields above.', 'error');
        return;
      }

      var name = (form.elements.name && form.elements.name.value.trim()) || '';
      var first = name.split(/\s+/)[0];

      say(
        'Thanks' + (first ? ', ' + first : '') +
        ' — this form isn’t connected yet, so nothing was sent. ' +
        'Please call or email us in the meantime.'
      );
    });
  }

  /* ---------------------------------------------------------------------
     Footer year
     --------------------------------------------------------------------- */

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
