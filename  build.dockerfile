services:
  - name: plant-doctor-backend2
    source: .
    build:
      dockerfile: Dockerfile
    entry:
      command: ["node", "server.js"]
    env:
      - key: GEMINI_API_KEY
        value: "AIzaSyCrXmaaao8KnxO1xJUXQB5XwTTmh5sSOFc"