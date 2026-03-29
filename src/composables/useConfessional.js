/**
 * Composable: useConfessional
 * Reusable logic for managing confession state and button interactions
 * Handles:
 *  - User answer state management
 *  - No button movement logic
 *  - Reset functionality
 */
import { ref, computed } from 'vue'

export function useConfessional() {
  // State
  const answered = ref(false)
  const noButtonPos = ref({ x: 0, y: 0 })
  
  // Message shown after acceptance
  const successMessage = computed(() => answered.value)

  /**
   * Handle user answer to the confession question
   * @param {boolean} answer - true for "Sim", false for "Não"
   */
  const handleAnswer = (answer) => {
    if (answer === true) {
      // User clicked "Sim" - accept the confession
      answered.value = true
    }
    // For "Não" button, movement logic handles it differently
  }

  /**
   * Move the "Não" button to a random position
   * Prevents user from easily clicking it
   * @param {HTMLElement} containerRef - Reference to button container
   */
  const moveNoButton = (containerRef) => {
    if (!containerRef || answered.value) return

    // Get container dimensions
    const container = containerRef
    const containerRect = container.getBoundingClientRect()

    // Generate random position within container bounds
    const randomX = Math.random() * (containerRect.width - 150)
    const randomY = Math.random() * (containerRect.height - 50)

    // Update button position
    noButtonPos.value = {
      x: Math.max(0, Math.min(randomX, containerRect.width - 150)),
      y: Math.max(0, Math.min(randomY, containerRect.height - 50)),
    }
  }

  /**
   * Reset the confession state to start over
   */
  const reset = () => {
    answered.value = false
    noButtonPos.value = { x: 0, y: 0 }
  }

  return {
    answered,
    noButtonPos,
    successMessage,
    handleAnswer,
    moveNoButton,
    reset,
  }
}
