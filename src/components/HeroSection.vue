<template>
  <section class="hero">
    <!-- Main heading with cyberpunk glitch effect -->
    <h1 class="glitch-text">
      <span class="text-main">Quer namorar</span>
      <span class="text-accent">comigo?</span>
    </h1>
    <!-- Romantic subtitle with hearts -->
    <div class="subtitle">💜 Uma pergunta especial 💜</div>
  </section>
</template>

<script setup>
/**
 * HeroSection Component
 * Display the main love confession headline
 * Features: Glitch text effect, romantic styling
 */
</script>

<style scoped>
.hero {
  position: relative;
  z-index: 2;
  text-align: center;
  margin: 2rem 1rem;
  animation: fadeInDown 0.8s ease-out;
}

.glitch-text {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 0, 110, 0.3);
  animation: glitch 0.6s infinite;
}

.text-main {
  display: block;
}

.text-accent {
  display: block;
  color: var(--neon-pink);
  -webkit-text-fill-color: var(--neon-pink);
  text-shadow: 0 0 30px var(--neon-pink);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--neon-cyan);
  text-shadow: 0 0 20px var(--neon-cyan);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glitch {
  0%, 100% {
    text-shadow: 
      -2px 0 var(--neon-pink),
      2px 0 var(--neon-cyan),
      0 0 20px rgba(255, 0, 110, 0.3);
  }
  50% {
    text-shadow: 
      2px 0 var(--neon-pink),
      -2px 0 var(--neon-cyan),
      0 0 20px rgba(0, 245, 255, 0.3);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@media (max-width: 768px) {
  .glitch-text {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>
