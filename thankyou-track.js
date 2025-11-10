window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2GZJZKXJ4Z');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#moduloRichiesta');
  if (form) {
    form.addEventListener('submit', function () {
      gtag('event', 'conversione_richiesta', {
        event_category: 'Modulo',
        event_label: 'Richiedi Freelance'
      });
      if (typeof clarity === 'function') {
        clarity('track', 'invio_modulo');
      }
    });
  }

  const affiliateLink = document.querySelector('.affiliate-box a');
  if (affiliateLink) {
    affiliateLink.addEventListener('click', function () {
      gtag('event', 'affiliate_click', {
        event_category: 'Affiliate',
        event_label: 'Doctor Quality - richiedi',
        value: 1
      });
      if (typeof clarity === 'function') {
        clarity('track', 'click_affiliate');
      }
    });
  }
});
