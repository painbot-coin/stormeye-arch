<template>
  <section class="contacts">
    <h1 class="animate-heading">Contact Us</h1>
    <p class="lead animate-heading" style="animation-delay: 0.05s">Get in touch with StormEye-Arch for inquiries and collaborations.</p>

    <div class="quick-nav animate-heading" style="animation-delay: 0.08s">
      <router-link to="/">Home</router-link>
      <router-link to="/instruction">Instruction</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/teams">Teams</router-link>
      <router-link to="/previous-works">Previous Works</router-link>
    </div>

    <div class="grid">
      <div class="info animate-block" style="animation-delay: 0.1s">
        <h3>Reach Out</h3>
        <ul>
          <li>
            <strong>Email</strong>
            <a href="mailto:hello@stormeye-arch.com">hello@stormeye-arch.com</a>
          </li>
          <li>
            <strong>Phone</strong>
            <span>+1 (912) 209-9922</span>
          </li>
          <li>
            <strong>Office (Georgia)</strong>
            <span>673 Stickley Oak Way<br>Woodstock, GA 30189</span>
          </li>
          <li>
            <strong>Office (Florida)</strong>
            <span>20431 NW 17th Ave Apt 206<br>Miami Gardens, FL 33056</span>
          </li>
          <li>
            <strong>Hours</strong>
            <span>Mon–Fri 9:00 – 18:00</span>
          </li>
        </ul>
      </div>

      <div class="form-wrapper animate-block" style="animation-delay: 0.15s">
        <h3>Send a Message</h3>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" placeholder="Your name" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required>
          </div>
          <div class="field">
            <label for="subject">Subject</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="Project or inquiry">
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us about your project..." required></textarea>
          </div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  alert('Thank you for your message! We will get back to you soon.')
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
.contacts h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

.animate-heading {
  opacity: 0;
  animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.animate-block {
  opacity: 0;
  animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.info h3,
.form-wrapper h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.info ul {
  list-style: none;
}

.info li {
  margin-bottom: 1.25rem;
}

.info strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.info a {
  font-weight: 500;
}

.info span {
  color: var(--color-text);
}

.quick-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.quick-nav a {
  font-size: 0.9rem;
  font-weight: 500;
}

.form-wrapper {
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: var(--color-text);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.65rem 0.9rem;
  font-family: inherit;
  font-size: 0.95rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-background);
  color: var(--color-text);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.field textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  background: var(--color-cta);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn:hover {
  background: var(--color-cta-hover);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1.5fr;
  }
}
</style>
