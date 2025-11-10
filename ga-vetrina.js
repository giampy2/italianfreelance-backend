window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RKW454CYXR');

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.contact-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const nome = this.href.split('=')[1] || 'non_specificato';
      gtag('event', 'contact_click', {
        event_category: 'interazione',
        event_label: decodeURIComponent(nome),
        value: 1
      });
      if (typeof clarity === 'function') {
        clarity('track', 'click_freelance_' + decodeURIComponent(nome));
      }
    });
  });
});
