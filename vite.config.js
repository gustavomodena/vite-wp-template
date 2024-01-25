export default {
  // config options
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'main.js',
      name: 'Vite WP Template',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'bundle.css',
        chunkFileNames: 'chunk.js',
        manualChunks: undefined,
      },
    },
  },
  // scss: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./styles/main.scss";`,
  //     },
  //   },
  // },
};
