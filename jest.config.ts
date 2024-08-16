import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/svg.tsx"
  }
};

export default config;
