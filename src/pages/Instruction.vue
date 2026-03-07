<template>
  <section class="instruction">
    <h1 class="animate-heading">Instruction</h1>
    <p class="lead animate-heading" style="animation-delay: 0.05s">How to use StormEye-Arch and navigate our platform.</p>

    <div class="quick-nav animate-heading" style="animation-delay: 0.08s">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/teams">Teams</router-link>
      <router-link to="/previous-works">Previous Works</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>

    <div class="content">
      <div class="card animate-card" style="animation-delay: 0.1s">
        <h3>Getting Started</h3>
        <p>
          Browse our <router-link to="/portfolio">Portfolio</router-link> to explore featured projects
          and designs. Each project includes key details about scope, approach, and outcomes.
        </p>
      </div>

      <div class="card animate-card" style="animation-delay: 0.15s">
        <h3>Understanding Our Work</h3>
        <p>
          Visit <router-link to="/previous-works">Previous Works</router-link> for a comprehensive
          showcase of past achievements. Filter by type, scale, or year to find relevant examples.
        </p>
      </div>

      <div class="card animate-card" style="animation-delay: 0.2s">
        <h3>Meet the Team</h3>
        <p>
          Our <router-link to="/teams">Teams</router-link> page introduces the architects, designers,
          and specialists who bring projects to life. Learn about expertise and roles.
        </p>
      </div>

      <div class="card animate-card" style="animation-delay: 0.25s">
        <h3>Reach Out</h3>
        <p>
          For inquiries, collaborations, or project discussions, use the
          <router-link to="/contacts">Contacts</router-link> page. We respond to all messages
          within 1–2 business days.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.instruction {
  max-width: 800px;
}

.instruction h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.animate-heading {
  opacity: 0;
  animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.animate-card {
  opacity: 0;
  animation: fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.card {
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.65;
}

.card a {
  font-weight: 600;
}
</style>
