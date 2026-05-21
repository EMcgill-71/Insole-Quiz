// server.js — ZipFit Insole Quiz on Railway.
// Minimal Express server that serves the static HTML and assets.

import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();

// Serve all files in the repo root as static.
app.use(express.static(join(__dirname, '.'), {
    maxAge: '5m',
    extensions: ['html'],
}));

// Health check for Railway.
app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
    console.log(`Insole Quiz server listening on :${PORT}`);
});
