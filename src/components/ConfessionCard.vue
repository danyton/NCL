<template>
  <div class="confession-card">
    <div class="card-wrapper">
      <div class="card">
        <div class="card-content">
          <p class="question">Você toparia estar comigo?</p>

          <div class="buttons-container">
            <button
              class="btn btn-yes"
              @click="() => onAnswer(true)"
              :disabled="isAnswered"
              aria-label="Aceitar proposta"
            >
              <span class="btn-text">Sim 😍</span>
              <span class="btn-glow"></span>
            </button>

            <div class="no-button-wrapper" ref="noButtonWrapper">
              <button
                class="btn btn-no"
                @click="moveButton"
                @mouseover="moveButton"
                @mouseenter="moveButton"
                @touchstart.prevent="moveButton"
                @focus="moveButton"
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
import { ref } from 'vue'

const props = defineProps({
  isAnswered: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['answer'])

const noButtonWrapper = ref(null)
const localNoPosition = ref({ x: 0, y: 0 })

const onAnswer = (answer) => {
  if (!props.isAnswered) {
    emit('answer', answer)
  }
}

const moveButton = () => {
  if (props.isAnswered) return

  const wrapper = noButtonWrapper.value
  if (!wrapper) return

  const rect = wrapper.getBoundingClientRect()
  const buttonWidth = 150
  const buttonHeight = 52

  const maxX = Math.max(0, rect.width - buttonWidth)
  const maxY = Math.max(0, rect.height - buttonHeight)

  const randomX = Math.random() * maxX
  const randomY = Math.random() * maxY

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
  max-width: 540px;
}

.card {
  background: linear-gradient(135deg, rgba(19, 56, 106, 0.92), rgba(131, 56, 236, 0.34));
  border: 2px solid rgba(0, 245, 255, 0.7);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  padding: 2rem;
  box-shadow:
    0 0 28px rgba(0, 245, 255, 0.18),
    inset 0 0 22px rgba(131, 56, 236, 0.13);
  animation: cardFloat 3.4s ease-in-out infinite;
  transform-style: preserve-3d;
}

.card-content {
  text-align: center;
}

.question {
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  font-weight: 700;
  color: #ff7ac6;
  margin-bottom: 2rem;
  text-shadow: 0 0 14px rgba(255, 106, 180, 0.6);
}

.buttons-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  min-height: 110px;
}

.btn {
  position: relative;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  z-index: 1;
  overflow: hidden;
}

.btn:focus-visible {
  outline: 3px solid rgba(0, 245, 255, 0.8);
  outline-offset: 4px;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-yes {
  border-color: rgba(255, 0, 110, 0.9);
  color: #fff;
  background: linear-gradient(135deg, #ff006e, #ff4fa3);
  box-shadow: 0 0 22px rgba(255, 0, 110, 0.35);
}

.btn-yes:hover:not(:disabled),
.btn-yes:focus-visible:not(:disabled) {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 0 30px rgba(255, 0, 110, 0.5);
}

.btn-no {
  position: absolute;
  border-color: rgba(0, 245, 255, 0.9);
  color: #dffcff;
  background: linear-gradient(135deg, rgba(21, 134, 217, 0.92), rgba(113, 89, 255, 0.9));
  box-shadow: 0 0 18px rgba(0, 245, 255, 0.25);
  transition: left 0.18s ease, top 0.18s ease, transform 0.18s ease;
}

.btn-no:hover:not(:disabled),
.btn-no:focus-visible:not(:disabled) {
  transform: scale(1.04);
}

.no-button-wrapper {
  position: relative;
  width: 180px;
  height: 62px;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.24), transparent 80%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.btn:hover .btn-glow,
.btn:focus-visible .btn-glow {
  opacity: 1;
}

@keyframes cardFloat {
  0%, 100% {
    transform: translateY(0) rotateX(0deg);
  }
  50% {
    transform: translateY(-8px) rotateX(2deg);
  }
}

@media (max-width: 768px) {
  .confession-card {
    padding: 1.25rem 0.75rem;
  }

  .card {
    padding: 1.5rem 1rem;
  }

  .buttons-container {
    flex-direction: column;
    gap: 1rem;
    min-height: 170px;
  }

  .no-button-wrapper {
    width: 100%;
    height: 70px;
  }

  .btn {
    width: 100%;
  }

  .btn-no {
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
  }
}
</style>
