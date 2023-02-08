module.exports = {
  viewportWidth: 600,
  viewportHeight: 800,
  experimentalStudio: true,
  experimentalInteractiveRunEvents: true,
  experimentalSessionSupport: true,
  projectId: '89mmxs',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['**/answer/*', '*answer*.js', '*.d.ts'],
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
