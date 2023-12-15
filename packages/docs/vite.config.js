/* é para o ts entender que estamos usando o vite e com isso para usar algumas dependencias */
/// <reference types="vite/client"/>

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
