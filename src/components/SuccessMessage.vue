<template>
  <transition name="scale-fade">
    <div v-if="isVisible" class="success-overlay">
      <div class="success-message">
        <!-- Animated hearts -->
        <div class="heart-animation">
          <span v-for="i in 8" :key="i" class="heart">💜</span>
        </div>
        
        <!-- Success message -->
        <h2 class="success-text">Eu sabia que você ia dizer sim!</h2>
        <p class="success-subtext">Você é o/a melhor! 💖💍</p>
        
        <!-- Reset button to restart -->
        <button class="btn btn-reset" @click="onReset">
          Faça a pergunta novamente
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
/**
 * SuccessMessage Component
 * Displays success animation when user accepts the confession
 * Features:
 *  - Animated heart cascade
 *  - Romantic congratulations message
 *  - Reset button to restart the experience
 */

defineProps({
  // Whether to show the success message
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.success-message {
  background: linear-gradient(135deg, rgba(19, 56, 106, 0.95), rgba(131, 56, 236, 0.5));
  border: 3px solid var(--neon-pink);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 40px var(--neon-pink),
    inset 0 0 20px rgba(255, 0, 110, 0.1);
  max-width: 500px;
  animation: popIn 0.5s ease-out;
}

.heart-animation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  height: 50px;
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

.success-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  color: var(--neon-pink);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px var(--neon-pink);
  letter-spacing: 1px;
}

.success-subtext {
  font-size: 1.1rem;
  color: var(--neon-cyan);
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--neon-cyan);
}

.btn-reset {
  border-color: var(--neon-pink);
  color: var(--neon-pink);
  background: rgba(255, 0, 110, 0.1);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
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
  transform: scale(1.1);
  box-shadow: 0 0 30px var(--neon-pink);
}

@keyframes heartFloat {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(-30px);
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

@keyframes scale-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .success-message {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }

  .success-text {
    font-size: 1.5rem;
  }

  .success-subtext {
    font-size: 1rem;
  }

  .heart {
    font-size: 1.5rem;
  }
}
</style>
