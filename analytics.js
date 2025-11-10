// Google Analytics GA4
(function(i,d,s,o,g,r,a,m){
  a=d.createElement(s);a.async=1;a.src=g;
  m=d.getElementsByTagName(s)[0];m.parentNode.insertBefore(a,m);
})(window, document, 'script', 0, 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX');

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
gtag('event', 'form_submission', {
  event_category: 'Contact',
  event_label: 'ItalianFreelance Form'
});

// Microsoft Clarity
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "XXXXXXXXXX");
