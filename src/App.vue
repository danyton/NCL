<template>
  <div class="app-container">
    <!-- Animated cyberpunk background effects -->
    <BackgroundEffects />

    <!-- Main content area -->
    <main class="content">
      <!-- Hero section with main confession headline -->
      <HeroSection />

      <!-- Confession card with buttons -->
      <section class="response-container">
        <ConfessionCard 
          :is-answered="answered"
          @answer="handleAnswer"
        />

        <!-- Success message displayed after acceptance -->
        <SuccessMessage 
          :is-visible="answered"
          @reset="reset"
        />
      </section>

      <!-- Footer with credits -->
      <AppFooter />
    </main>
  </div>
</template>

<script setup>
/**
 * App.vue - Main Application Component
 * Orchestrates the love confession experience
 * 
 * Features:
 *  - Cyberpunk romantic theme
 *  - Interactive yes/no buttons
 *  - Success animation
 *  - Responsive design
 *  - Full accessibility
 */
import BackgroundEffects from '@/components/BackgroundEffects.vue'
import HeroSection from '@/components/HeroSection.vue'
import ConfessionCard from '@/components/ConfessionCard.vue'
import SuccessMessage from '@/components/SuccessMessage.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useConfessional } from '@/composables/useConfessional'

// Use the confession composable for state management
const { answered, handleAnswer, reset } = useConfessional()
</script>

<style scoped>
/* Main container - flexbox layout */
.app-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Main content area between background and footer */
.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Response container for card and success message */
.response-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive design for different screen sizes */
@media (max-width: 768px) {
  .app-container {
    min-height: auto;
  }

  .content {
    gap: 1rem;
  }
}
</style>
