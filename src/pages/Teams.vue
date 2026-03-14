<template>
  <section class="teams">
    <h1 class="teams-title animate-heading">Our Teams</h1>
    <p class="lead animate-heading" style="animation-delay: 0.05s">
      More than 50 professional architects, engineers, and design leaders—actively practicing or in advisory roles. Licensed across the US and experienced worldwide. Retired or on-leave members are marked with a badge.
    </p>

    <div class="filters animate-heading" style="animation-delay: 0.1s">
      <div class="filter-group">
        <label class="filter-label">Region</label>
        <select v-model="filterRegion" class="filter-select">
          <option value="all">All ({{ team.length }})</option>
          <option value="US">US – Licensed in multiple states</option>
          <option value="International">International – Global experience</option>
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Status</label>
        <select v-model="filterStatus" class="filter-select">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="retired">Retired / On leave</option>
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Search by name or role</label>
        <input
          v-model="searchQuery"
          type="search"
          class="filter-input"
          placeholder="e.g. Principal, Structural, UK..."
        >
      </div>
    </div>

    <div class="grid">
      <article
        v-for="(member, i) in filteredTeam"
        :key="member.name + i"
        class="card animate-card"
        :style="{ animationDelay: `${Math.min(i * 0.03, 0.6)}s` }"
      >
        <div class="card-inner">
          <img
            :src="member.image"
            :alt="member.name"
            class="avatar"
            loading="lazy"
          >
          <div class="card-body">
            <div class="badges">
              <span class="region-badge" :class="member.region">{{ member.region }}</span>
              <span
                v-if="member.status && member.status !== 'active'"
                class="status-badge"
                :class="member.status === 'on_leave' ? 'on-leave' : member.status"
              >
                {{ member.status === 'retired' ? 'Retired' : member.status === 'on_leave' ? 'On leave' : member.status }}
              </span>
            </div>
            <h3>{{ member.name }}</h3>
            <span class="role">{{ member.role }}</span>
            <p class="bio">{{ member.bio }}</p>
            <a
              v-if="member.profileUrl"
              :href="member.profileUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-link"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </article>
    </div>

    <div class="explore animate-fade-in" style="animation-delay: 0.2s">
      <p>Ready to work with us? <router-link to="/contacts">Get in touch</router-link>.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ALL_TEAM } from '@/data/team'

const team = ALL_TEAM
const filterRegion = ref('all')
const filterStatus = ref('all')
const searchQuery = ref('')

const filteredTeam = computed(() => {
  let list = team
  if (filterRegion.value !== 'all') {
    list = list.filter(m => m.region === filterRegion.value)
  }
  if (filterStatus.value !== 'all') {
    if (filterStatus.value === 'active') {
      list = list.filter(m => !m.status || m.status === 'active')
    } else {
      list = list.filter(m => m.status === 'retired' || m.status === 'on_leave')
    }
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(
      m =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.bio.toLowerCase().includes(q)
    )
  }
  return list
})
</script>

<style scoped>
.teams {
  max-width: 1200px;
}

.teams-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  max-width: 720px;
}

.animate-heading {
  opacity: 0;
  animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.filter-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.filter-select,
.filter-input {
  padding: 0.6rem 0.9rem;
  font-size: 0.95rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  min-width: 200px;
}

.filter-input {
  min-width: 240px;
}

.filter-select:focus,
.filter-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}

.grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border);
  transform: translateY(-2px);
}

.animate-card {
  opacity: 0;
  animation: fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.card-inner {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.25rem;
  padding: 1.25rem;
  align-items: start;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.card-body {
  min-width: 0;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
}

.region-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}

.region-badge.US {
  background: rgba(30, 73, 118, 0.12);
  color: var(--color-accent);
}

.region-badge.International {
  background: rgba(34, 197, 94, 0.12);
  color: #16a34a;
}

.status-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.18rem 0.45rem;
  border-radius: var(--radius-sm);
}

.status-badge.retired {
  background: rgba(113, 113, 122, 0.2);
  color: var(--color-text-muted);
}

.status-badge.on-leave {
  background: rgba(245, 158, 11, 0.2);
  color: #b45309;
}

.card-body h3 {
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
}

.role {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.bio {
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.profile-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
}

.profile-link:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
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

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .card-inner {
    padding: 1.5rem;
  }

  .avatar {
    width: 88px;
    height: 88px;
  }
}
</style>
