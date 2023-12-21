import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/"
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack"
    }
  }
});
