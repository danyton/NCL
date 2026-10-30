<template>
  <footer class="footer">
    <p>Feito com muito amor 💜</p>
    <p class="modernized">Para a pessoa que iluminou meu mundo</p>
  </footer>
</template>

<script setup>
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
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
