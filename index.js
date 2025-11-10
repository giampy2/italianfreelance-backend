const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// 🔧 Fix per Render/Cloudflare
app.set('trust proxy', 1);

// 🛡️ Sicurezza base
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// 🛡️ Protezione CSRF
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

// 🛡️ Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 100 // max 100 richieste
});
app.use(limiter);

// 🌐 Serve file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 🏠 Route per la homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🚀 Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});

