<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="brand-link">
            <img src="/logo.png" alt="StormEye Arch" class="footer-brand-logo">
          </router-link>
          <p class="footer-tagline">Architectural innovation and excellence.</p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <span class="footer-heading">Explore</span>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/instruction">Instruction</router-link></li>
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/teams">Teams</router-link></li>
            <li><router-link to="/previous-works">Previous Works</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
          </ul>
        </nav>

        <div class="footer-contact">
          <span class="footer-heading">Contact</span>
          <ul class="footer-contact-list">
            <li><a href="mailto:hello@stormeye-arch.com">hello@stormeye-arch.com</a></li>
            <li><a href="tel:+19122099922">+1 (912) 209-9922</a></li>
            <li class="footer-address">673 Stickley Oak Way, Woodstock, GA 30189</li>
            <li class="footer-address">20431 NW 17th Ave Apt 206, Miami Gardens, FL 33056</li>
            <li class="footer-hours">Mon–Fri 9:00 – 18:00</li>
          </ul>
        </div>
      </div>

      <div class="footer-qr">
        <span class="footer-heading">Scan to connect</span>
        <div class="footer-qr-grid">
          <button type="button" class="footer-qr-item" aria-label="Zoom Telegram QR" @click="zoomed = { src: '/images/qr/telegram.png', alt: 'Telegram QR code', label: 'Telegram' }">
            <img src="/images/qr/telegram.png" alt="Telegram QR code" width="96" height="96" class="footer-qr-img">
            <span class="footer-qr-label">Telegram</span>
          </button>
          <button type="button" class="footer-qr-item" aria-label="Zoom WhatsApp QR" @click="zoomed = { src: '/images/qr/whatsapp.png', alt: 'WhatsApp QR code', label: 'WhatsApp' }">
            <img src="/images/qr/whatsapp.png" alt="WhatsApp QR code" width="96" height="96" class="footer-qr-img">
            <span class="footer-qr-label">WhatsApp</span>
          </button>
          <button type="button" class="footer-qr-item" aria-label="Zoom Line QR" @click="zoomed = { src: '/images/qr/line.png', alt: 'Line QR code', label: 'Line' }">
            <img src="/images/qr/line.png" alt="Line QR code" width="96" height="96" class="footer-qr-img">
            <span class="footer-qr-label">Line</span>
          </button>
        </div>
      </div>

      <Teleport to="body">
        <div v-if="zoomed" class="footer-qr-overlay" role="dialog" aria-modal="true" :aria-label="zoomed.alt" @click.self="zoomed = null">
          <div class="footer-qr-zoom-wrap">
            <button type="button" class="footer-qr-zoom-close" aria-label="Close" @click="zoomed = null">&times;</button>
            <img :src="zoomed.src" :alt="zoomed.alt" class="footer-qr-zoom-img">
            <span class="footer-qr-zoom-label">{{ zoomed.label }}</span>
          </div>
        </div>
      </Teleport>

      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} StormEye Arch. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const zoomed = ref(null)
</script>

<style scoped>
.footer {
  margin-top: auto;
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.footer-brand {
  max-width: 280px;
}

.brand-link {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.footer-brand-logo {
  display: block;
  height: 36px;
  width: auto;
  object-fit: contain;
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0;
}

.footer-heading {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.footer-nav ul,
.footer-contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li,
.footer-contact-list li {
  margin-bottom: 0.5rem;
}

.footer-links a,
.footer-contact-list a {
  font-size: 0.9375rem;
  color: var(--color-text);
  transition: color 0.2s ease;
}
.footer-links a:hover,
.footer-contact-list a:hover {
  color: var(--color-link);
}

.footer-contact-list .footer-address,
.footer-contact-list .footer-hours {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
}

.footer-qr {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.footer-qr .footer-heading {
  margin-bottom: 1rem;
}

.footer-qr-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-end;
}

.footer-qr-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--color-text);
  transition: opacity 0.2s ease;
  font: inherit;
}

.footer-qr-item:hover {
  opacity: 0.85;
}

.footer-qr-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
}

.footer-qr-zoom-wrap {
  position: relative;
  background: var(--color-background);
  padding: 1rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-qr-zoom-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  background: var(--color-background-soft);
  color: var(--color-text);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: background 0.2s ease;
}

.footer-qr-zoom-close:hover {
  background: var(--color-border);
}

.footer-qr-zoom-img {
  display: block;
  max-width:  min(280px, 90vw);
  max-height: min(280px, 90vh);
  width: auto;
  height: auto;
  border-radius: var(--radius-sm);
}

.footer-qr-zoom-label {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.footer-qr-img {
  display: block;
  border-radius: var(--radius-sm);
  background: white;
  padding: 4px;
}

.footer-qr-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.footer-bottom {
  padding-top: 1.5rem;
  text-align: center;
}

.copyright {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* Tablet: 2 columns */
@media (min-width: 640px) {
  .footer-inner {
    padding: 3rem 2rem 2rem;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .footer-brand {
    grid-column: span 2;
    max-width: 320px;
  }

  .footer-bottom {
    padding-top: 2rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .footer-inner {
    padding: 4rem 2.5rem 2rem;
  }

  .footer-grid {
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 3rem;
    padding-bottom: 3rem;
  }

  .footer-brand {
    grid-column: span 1;
    max-width: none;
  }

  .footer-brand-logo {
    height: 42px;
  }

.footer-links a,
.footer-contact-list a {
  font-size: 0.9375rem;
}

  .footer-bottom {
    text-align: left;
    padding-top: 2rem;
  }
}
</style>
