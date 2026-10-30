<template>
  <section class="hero">
    <h1 class="glitch-text">
      <span class="text-main">Nicole namorar</span>
      <span class="text-accent">comigo?</span>
    </h1>
    <div class="subtitle">💜 Uma pergunta especial 💜</div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  z-index: 2;
  text-align: center;
  margin: 2rem 1rem 1.5rem;
  animation: fadeInDown 0.8s ease-out;
}

.glitch-text {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.2rem, 7vw, 4.4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 0, 110, 0.25);
  animation: glitch 0.75s infinite alternate;
}

.text-main {
  display: block;
}

.text-accent {
  display: block;
  color: var(--neon-pink);
  -webkit-text-fill-color: var(--neon-pink);
  text-shadow: 0 0 30px rgba(255, 0, 110, 0.6);
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: rgba(0, 245, 255, 0.9);
  letter-spacing: 0.06em;
  text-shadow: 0 0 16px rgba(0, 245, 255, 0.6);
  animation: pulse 2.2s ease-in-out infinite;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glitch {
  0% {
    text-shadow: -2px 0 var(--neon-pink), 2px 0 var(--neon-cyan), 0 0 18px rgba(255, 0, 110, 0.3);
  }
  50% {
    text-shadow: 2px 0 var(--neon-pink), -2px 0 var(--neon-cyan), 0 0 18px rgba(0, 245, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 20px rgba(255, 0, 110, 0.4);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.74; }
}

@media (max-width: 768px) {
  .hero {
    margin-top: 1rem;
  }

  .glitch-text {
    font-size: clamp(1.8rem, 7vw, 2.7rem);
  }
}
</style>
