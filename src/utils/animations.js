/**
 * Animation utilities
 * Reusable animation-related helper functions
 */

/**
 * Generate random particle animation properties
 * @returns {Object} - Particle property object
 */
export function generateParticleProps() {
  return {
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    size: 1 + Math.random() * 3,
  }
}

/**
 * Calculate safe button position within bounds
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {number} maxX - Maximum X boundary
 * @param {number} maxY - Maximum Y boundary
 * @returns {Object} - Bounded position
 */
export function boundPosition(x, y, maxX, maxY) {
  return {
    x: Math.max(0, Math.min(x, maxX)),
    y: Math.max(0, Math.min(y, maxY)),
  }
}
