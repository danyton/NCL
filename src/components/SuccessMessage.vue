<template>
  <transition name="scale-fade">
    <div v-if="isVisible" class="success-overlay">
      <div class="success-message">
        <div class="heart-animation">
          <span v-for="i in 10" :key="i" class="heart">💜</span>
        </div>

        <h2 class="success-text">Eu sabia que você ia dizer sim!</h2>
        <p class="success-subtext">Você acabou de fazer o meu coração ganhar um lar inteiro. 💖</p>
        <p class="success-detail">Agora o nosso próximo capítulo começa com muito amor, carinho e muita felicidade. ✨</p>

        <button class="btn btn-reset" @click="onReset">
          Fazer de novo
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>

defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['reset'])

const onReset = () => {
  emit('reset')
}
</script>

<style scoped>
.success-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 10, 24, 0.82);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 1rem;
}

.success-message {
  position: relative;
  background: linear-gradient(135deg, rgba(19, 56, 106, 0.98), rgba(131, 56, 236, 0.65));
  border: 3px solid var(--neon-pink);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 40px rgba(255, 0, 110, 0.35),
    inset 0 0 24px rgba(255, 0, 110, 0.12);
  max-width: 520px;
  width: min(100%, 520px);
  animation: popIn 0.5s ease-out;
  overflow: hidden;
}

.success-message::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 50%);
  pointer-events: none;
}

.heart-animation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.heart {
  font-size: 2rem;
  opacity: 0;
  animation: heartFloat 1.5s ease-out forwards;
}

.heart:nth-child(1) { animation-delay: 0s; }
.heart:nth-child(2) { animation-delay: 0.1s; }
.heart:nth-child(3) { animation-delay: 0.2s; }
.heart:nth-child(4) { animation-delay: 0.3s; }
.heart:nth-child(5) { animation-delay: 0.4s; }
.heart:nth-child(6) { animation-delay: 0.5s; }
.heart:nth-child(7) { animation-delay: 0.6s; }
.heart:nth-child(8) { animation-delay: 0.7s; }
.heart:nth-child(9) { animation-delay: 0.8s; }
.heart:nth-child(10) { animation-delay: 0.9s; }

.success-text {
  position: relative;
  z-index: 1;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  color: var(--neon-pink);
  margin-bottom: 0.75rem;
  text-shadow: 0 0 15px var(--neon-pink);
  letter-spacing: 1px;
}

.success-subtext,
.success-detail {
  position: relative;
  z-index: 1;
  margin: 0 auto 1rem;
  max-width: 420px;
  color: #edf5ff;
  line-height: 1.6;
}

.success-subtext {
  font-size: 1.05rem;
  color: var(--neon-cyan);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
}

.success-detail {
  font-size: 0.96rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.btn-reset {
  position: relative;
  z-index: 1;
  border-color: var(--neon-pink);
  color: var(--neon-pink);
  background: rgba(255, 0, 110, 0.1);
  padding: 0.85rem 2rem;
  font-size: 0.95rem;
  font-weight: 700;
  border: 2px solid;
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
}

.btn-reset:hover {
  background: var(--neon-pink);
  color: white;
  transform: scale(1.06);
  box-shadow: 0 0 28px rgba(255, 0, 110, 0.7);
}

@keyframes heartFloat {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(-20px) scale(1.08);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scale-fade-enter-active,
@keyframes scale-fade-leave-active {
  transition: all 0.3s ease;
}

@keyframes scale-fade-enter-from,
@keyframes scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .success-message {
    padding: 2rem 1.25rem;
    margin: 1rem;
  }

  .success-text {
    font-size: 1.5rem;
  }

  .success-subtext {
    font-size: 1rem;
  }

  .heart {
    font-size: 1.6rem;
  }
}
</style>
