document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#moduloRichiestaForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Tracciamento Google Analytics
      if (typeof gtag === 'function') {
        gtag('event', 'conversione_richiesta', {
          event_category: 'Modulo',
          event_label: 'Richiedi Freelance'
        });
      }

      // Tracciamento Microsoft Clarity
      if (typeof clarity === 'function') {
        clarity('track', 'invio_modulo');
      }

      // Raccolta dati dal form
      const data = new FormData(form);

      // Invio a Formspree
      setTimeout(() => {
        fetch("https://formspree.io/f/xvgblezk", {
          method: "POST",
          body: data,
          headers: { 'Accept': 'application/json' }
        })
        .then((response) => {
          if (response.ok) {
            // Redirect alla pagina di ringraziamento
            window.location.href = "https://formspree.io/thanks?language=it";
          } else {
            alert("❌ Errore nell'invio del modulo. Riprova più tardi.");
          }
        })
        .catch((error) => {
          console.error("Errore:", error);
          alert("❌ Errore di connessione. Controlla la rete.");
        });
      }, 300);
    });
  }
});
