<template>
  <section class="previous-works">
    <h1>Previous Works</h1>
    <p class="lead">A showcase of our past achievements and projects.</p>

    <div class="timeline">
      <article
        v-for="(work, i) in works"
        :key="i"
        class="timeline-item animate-timeline-item"
        :style="{ animationDelay: `${0.08 * i}s` }"
      >
        <div class="timeline-image">
          <img :src="work.image" :alt="work.title" loading="lazy">
        </div>
        <div class="timeline-content">
          <div class="year">{{ work.year }}</div>
          <div class="content">
            <h3>{{ work.title }}</h3>
            <p>{{ work.description }}</p>
            <div class="meta">
              <span class="type">{{ work.type }}</span>
              <span class="location">{{ work.location }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="explore">
      <p>See featured work in our <router-link to="/portfolio">Portfolio</router-link>.</p>
    </div>
  </section>
</template>

<script setup>
import { WORKS } from '@/data/works'

const works = WORKS
</script>

<style scoped>
.previous-works h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

.animate-timeline-item {
  opacity: 0;
  animation: fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-image {
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.year {
  font-family: 'Syne', sans-serif;
  font-size: 1.25rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}

.content p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.type {
  font-weight: 600;
}

.explore {
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: var(--color-text-muted);
}

.explore a {
  font-weight: 600;
}

@media (min-width: 640px) {
  .timeline-item {
    grid-template-columns: 200px 1fr;
    gap: 1.5rem;
  }

  .timeline-image {
    aspect-ratio: 1;
  }
}

@media (min-width: 768px) {
  .timeline-item {
    grid-template-columns: 240px 1fr;
  }

  .year {
    font-size: 1.5rem;
  }
}
</style>
