<template>
  <section class="portfolio">
    <h1>Portfolio</h1>
    <p class="lead">Explore our featured projects and designs.</p>

    <div class="grid">
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="card animate-card"
        :style="{ animationDelay: `${0.06 * i}s` }"
      >
        <div class="card-link">
          <img
            :src="project.image"
            :alt="project.title"
            class="card-image"
            loading="lazy"
          >
          <div class="card-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <span class="tag">{{ project.tag }}</span>
          </div>
        </div>
      </article>
    </div>

    <div class="explore">
      <p>See more in our <router-link to="/previous-works">Previous Works</router-link> timeline.</p>
    </div>
  </section>
</template>

<script setup>
// Real architecture images – Wikimedia Commons, work in all regions
const portfolioImages = [
  'https://upload.wikimedia.org/wikipedia/commons/1/10/Darwin_%28AU%29%2C_Darwin_Waterfront_--_2019_--_4423-5.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/58/Campus_WU_LC_D1_TC_DSC_1440w.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/7/77/Kongress_und_Theaterhaus_Bad_Ischl_DSC_3295w.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e7/Eureka_Tower_%28top%29%2C_Melbourne_2017-10-30.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Museu_do_Amanh%C3%A3_ao_anoitecer_do_Rio.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/10/Br%C3%BCgge_%28B%29%2C_Groenerei_--_2018_--_8493-7.jpg',
]

const projects = [
  {
    title: 'Urban Residency',
    description: 'Mixed-use residential complex with sustainable materials and passive design.',
    tag: 'Residential',
    image: portfolioImages[0],
  },
  {
    title: 'Tech Campus',
    description: 'Modern campus design blending workspace, nature, and community hubs.',
    tag: 'Commercial',
    image: portfolioImages[1],
  },
  {
    title: 'Community Center',
    description: 'Multi-purpose civic space fostering connection and local culture.',
    tag: 'Civic',
    image: portfolioImages[2],
  },
  {
    title: 'Residential Tower',
    description: 'High-rise with sky gardens and integrated renewable systems.',
    tag: 'Residential',
    image: portfolioImages[3],
  },
  {
    title: 'Art Gallery',
    description: 'Minimalist gallery with adaptive lighting and flexible exhibition spaces.',
    tag: 'Cultural',
    image: portfolioImages[4],
  },
  {
    title: 'Waterfront Pavilion',
    description: 'Public pavilion connecting city and waterfront with permeable architecture.',
    tag: 'Civic',
    image: portfolioImages[5],
  },
]
</script>

<style scoped>
.portfolio h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 0.5rem;
}

.animate-card {
  opacity: 0;
  animation: fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.lead {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  border-color: var(--color-stone-300);
}

.card-link {
  display: block;
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 1.35rem;
}

.card-body h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.card-body p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.explore {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-muted);
}

.explore a {
  font-weight: 600;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .card-image {
    height: 240px;
  }
}
</style>
