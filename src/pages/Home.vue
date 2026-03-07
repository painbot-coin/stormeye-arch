<template>
  <section class="home">
    <div class="hero">
      <div class="hero-image-wrap animate-block">
        <img
          :src="heroImage"
          alt="StormEye-Architecture"
          class="hero-image"
        >
      </div>
      <div class="hero-content animate-block" style="animation-delay: 0.08s">
        <h1>StormEye Arch</h1>
        <p class="tagline">Your gateway to architectural innovation and excellence.</p>
        <p class="intro">
          We design spaces that inspire, buildings that endure, and environments that transform communities.
        </p>
        <div class="cta">
          <router-link to="/portfolio" class="btn btn-primary">View Our Work</router-link>
          <router-link to="/contacts" class="btn btn-secondary">Get in Touch</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="feature animate-block" style="animation-delay: 0.12s">
        <router-link to="/portfolio" class="feature-link">
          <h3>Design</h3>
          <p>Bold, sustainable architecture tailored to your vision.</p>
        </router-link>
      </div>
      <div class="feature animate-block" style="animation-delay: 0.18s">
        <router-link to="/teams" class="feature-link">
          <h3>Collaboration</h3>
          <p>Working closely with clients and communities every step of the way.</p>
        </router-link>
      </div>
      <div class="feature animate-block" style="animation-delay: 0.24s">
        <router-link to="/previous-works" class="feature-link">
          <h3>Excellence</h3>
          <p>Rigorous attention to detail from concept to completion.</p>
        </router-link>
      </div>
    </div>
    <div class="quick-links animate-block" style="animation-delay: 0.3s">
      <p>Explore: <router-link to="/instruction">Instruction</router-link> · <router-link to="/portfolio">Portfolio</router-link> · <router-link to="/teams">Teams</router-link> · <router-link to="/previous-works">Previous Works</router-link> · <router-link to="/contacts">Contacts</router-link></p>
    </div>
  </section>
</template>

<script setup>
// Real architecture image – Wikimedia Commons, globally accessible
const heroImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg'
</script>

<style scoped>
.home {
  max-width: 1000px;
}

.hero {
  margin-bottom: 3rem;
}

.hero-image-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-md);
}

.hero-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.hero-content h1 {
  font-size: clamp(2.75rem, 9vw, 4.5rem);
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.tagline {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  font-weight: 500;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-cta);
  color: white;
}

.btn-primary:hover {
  background: var(--color-cta-hover);
  color: white;
}

.btn-secondary {
  border: 2px solid var(--color-border);
  color: var(--color-text);
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.features {
  display: grid;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.feature-link {
  display: block;
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  border-top: 3px solid transparent;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, border-top-color 0.2s ease;
}

.feature-link:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border);
  border-top-color: var(--color-cta);
  color: inherit;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.quick-links {
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.quick-links a {
  font-weight: 600;
}

.animate-block {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (min-width: 640px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero-image {
    height: 360px;
  }
}

@media (min-width: 768px) {
  .hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2.5rem;
    align-items: center;
  }

  .hero-content {
    order: 0;
    padding-left: 1.5rem;
    border-left: 4px solid var(--color-accent);
  }

  .hero-image-wrap {
    margin-bottom: 0;
    order: 1;
  }

  .hero-image {
    height: 400px;
  }
}
</style>
