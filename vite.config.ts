/// <reference types="vitest/config" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        projects: [
            {
                test: {
                    name: 'unit',
                    include: ['./**/*.test.ts']
                }
            },
            {
                test: {
                    name: 'unit2',
                    include: ['./**/*.test.tsx'],
                    environment: 'jsdom',
                    setupFiles: ['./src/test/setup.ts']
                }
            }
        ]
    }
});
