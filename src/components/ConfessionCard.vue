<template>
  <div class="confession-card">
    <div class="card-wrapper">
      <div class="card">
        <div class="card-content">
          <!-- Main question -->
          <p class="question">Você toparia estar comigo?</p>
          
          <!-- Action buttons -->
          <div class="buttons-container">
            <!-- Yes button - always visible and clickable -->
            <button 
              class="btn btn-yes" 
              @click="() => onAnswer(true)"
              :disabled="isAnswered"
              aria-label="Aceitar proposta"
            >
              <span class="btn-text">Sim 😍</span>
              <span class="btn-glow"></span>
            </button>

            <!-- No button - moves away from cursor/touch -->
            <div class="no-button-wrapper" ref="noButtonWrapper">
              <button 
                class="btn btn-no" 
                @click="moveButton"
                @mouseover="moveButton"
                @touchstart.prevent="moveButton"
                :style="{ 
                  left: `${localNoPosition.x}px`, 
                  top: `${localNoPosition.y}px` 
                }"
                :disabled="isAnswered"
                aria-label="Recusar proposta"
              >
                <span class="btn-text">Não 😢</span>
                <span class="btn-glow"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * ConfessionCard Component
 * Displays the confession card with yes/no buttons
 * Features:
 *  - Yes button: Fixed, clickable for accepting
 *  - No button: Moves away from cursor/touch
 *  - Accessibility: ARIA labels and disabled states
 *  - Animations: Smooth transitions and glow effects
 */
import { ref } from 'vue'

const props = defineProps({
  // Whether user has already answered
  isAnswered: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['answer'])

const noButtonWrapper = ref(null)
const localNoPosition = ref({ x: 0, y: 0 })

// Handle answer selection
const onAnswer = (answer) => {
  if (!props.isAnswered) {
    emit('answer', answer)
  }
}

// Move the No button away from cursor/touch
const moveButton = () => {
  if (props.isAnswered) return

  const wrapper = noButtonWrapper.value
  if (!wrapper) return

  // Get container dimensions
  const rect = wrapper.getBoundingClientRect()
  const maxX = wrapper.offsetWidth - 150
  const maxY = wrapper.offsetHeight - 50
  
  // Generate random position
  const randomX = Math.random() * maxX
  const randomY = Math.random() * maxY

  // Update button position
  localNoPosition.value = {
    x: Math.max(0, Math.min(randomX, maxX)),
    y: Math.max(0, Math.min(randomY, maxY)),
  }
}
</script>

<style scoped>
.confession-card {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem 1rem;
}

.card-wrapper {
  perspective: 1000px;
  width: 100%;
  max-width: 500px;
}

.card {
  background: linear-gradient(135deg, rgba(19, 56, 106, 0.8), rgba(131, 56, 236, 0.3));
  border: 2px solid var(--neon-cyan);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  padding: 2rem;
  box-shadow: 
    0 0 20px rgba(0, 245, 255, 0.3),
    inset 0 0 20px rgba(131, 56, 236, 0.1);
  animation: cardFloat 3s ease-in-out infinite;
  transform-style: preserve-3d;
}

.card-content {
  text-align: center;
}

.question {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--neon-pink);
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--neon-pink);
}

.buttons-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.btn {
  position: relative;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid;
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
  overflow: hidden;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Yes Button - Acceptance */
.btn-yes {
  border-color: var(--neon-pink);
  color: var(--neon-pink);
  background: rgba(255, 0, 110, 0.1);
  box-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
}

.btn-yes:hover:not(:disabled) {
  background: var(--neon-pink);
  color: white;
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 0 30px var(--neon-pink);
}

/* No Button - Refusal (with chase effect) */
.btn-no {
  border-color: var(--neon-cyan);
  color: var(--neon-cyan);
  background: rgba(0, 245, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
  position: absolute;
}

.btn-no:not(:disabled) {
  transition: left var(--transition), top var(--transition);
  cursor: grab;
}

.btn-no:hover:not(:disabled) {
  box-shadow: 0 0 30px var(--neon-cyan);
  transform: scale(1.05);
}

.no-button-wrapper {
  position: relative;
  width: 150px;
  height: 50px;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  pointer-events: none;
}

@keyframes cardFloat {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg);
  }
  50% {
    transform: translateY(-10px) rotateX(2deg);
  }
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }

  .question {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .buttons-container {
    gap: 1.5rem;
    flex-direction: column;
  }

  .no-button-wrapper {
    width: 100%;
    height: auto;
  }

  .btn-no {
    position: static !important;
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
