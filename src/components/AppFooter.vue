<template>
  <footer class="footer">
    <p>Desenvolvido com 💜 by Heverton Freire Barbosa</p>
    <p class="modernized">Modernizado em 2025</p>
  </footer>
</template>

<script setup>
/**
 * AppFooter Component
 * Displays footer with credits and information
 * Appears at the bottom of the page
 */
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 5;
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(0, 245, 255, 0.2);
  color: var(--subtle-text);
  font-size: 0.9rem;
}

.footer p {
  margin: 0.3rem 0;
}

.modernized {
  color: var(--neon-cyan);
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
