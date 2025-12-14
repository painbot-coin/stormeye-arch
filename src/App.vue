<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteFooter from './components/SiteFooter.vue'

const menuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/instruction', label: 'Instruction' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/teams', label: 'Teams' },
  { path: '/previous-works', label: 'Previous Works' },
  { path: '/contacts', label: 'Contacts' },
]

function closeMenu() {
  menuOpen.value = false
}

function handleResize() {
  if (window.innerWidth >= 768) closeMenu()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-inner">
        <router-link to="/" class="brand" @click="closeMenu">
          <img src="/logo.png" alt="StormEye Arch" class="brand-logo">
        </router-link>

        <button
          type="button"
          class="menu-toggle"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-toggle-bar" :class="{ open: menuOpen }"></span>
          <span class="menu-toggle-bar" :class="{ open: menuOpen }"></span>
          <span class="menu-toggle-bar" :class="{ open: menuOpen }"></span>
        </button>

        <nav class="nav" :class="{ open: menuOpen }" aria-hidden="!menuOpen">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ active: $route.path === link.path }"
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>
        </nav>
      </div>
      <div class="header-overlay" :class="{ open: menuOpen }" aria-hidden="true" @click="closeMenu"></div>
    </header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: block;
  flex-shrink: 0;
}

.brand-logo {
  display: block;
  height: 40px;
  width: auto;
  object-fit: contain;
}

/* Mobile menu button */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-heading);
  border-radius: var(--radius-md);
  transition: background 0.2s ease;
}
.menu-toggle:hover {
  background: var(--color-background-soft);
}
.menu-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.menu-toggle-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.menu-toggle-bar:nth-child(1) { transform: none; }
.menu-toggle-bar:nth-child(2) { transform: none; opacity: 1; }
.menu-toggle-bar:nth-child(3) { transform: none; }
.menu-toggle-bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu-toggle-bar.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle-bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Overlay when menu open (mobile) */
.header-overlay {
  display: none;
  position: fixed;
  inset: 0;
  top: 57px; /* header height approx */
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.header-overlay.open {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

/* Navigation */
.nav {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 57px;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.5rem 1.5rem;
  gap: 0;
  max-height: calc(100vh - 57px);
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
}
.nav.open {
  display: flex;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  min-height: 44px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease, background 0.2s ease;
}
.nav-link:last-child {
  border-bottom: none;
}
.nav-link:hover {
  color: var(--color-heading);
}
.nav-link.active {
  color: var(--color-link);
  font-weight: 600;
}

.main {
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* Page transition */
.page-enter-active {
  transition: opacity 0.35s ease-out, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.page-leave-active {
  transition: opacity 0.25s ease-in;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
}

/* Desktop: horizontal nav, hide toggle */
@media (min-width: 768px) {
  .header-inner {
    padding: 1rem 2.5rem;
  }

  .main {
    padding: 2.5rem 2.5rem 5rem;
  }

  .brand {
    font-size: 1.75rem;
  }
  .menu-toggle {
    display: none;
  }

  .header-overlay {
    display: none !important;
  }

  .nav {
    display: flex;
    flex-direction: row;
    position: static;
    background: none;
    border: none;
    padding: 0;
    max-height: none;
    overflow: visible;
    box-shadow: none;
    gap: 0.25rem 2rem;
  }
  .nav.open {
    display: flex;
  }

  .nav-link {
    font-size: 0.9375rem;
    padding: 0.5rem 0;
    border-bottom: none;
    min-height: auto;
  }
  .nav-link.active {
    color: var(--color-link);
  }
}

@media (min-width: 1024px) {
  .nav {
    gap: 2rem;
  }
  .nav-link {
    font-size: 1rem;
  }
}
</style>
