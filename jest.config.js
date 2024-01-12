export default {
  preset: 'ts-jest',
  moduleNameMapper: {

      // if your using tsconfig.paths thers is no harm in telling jest
    '@compositions/(.*)$': '<rootDir>/src/compositions/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@elements/(.*)$': '<rootDir>/src/elements/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@config/(.*)$': '<rootDir>/src/config/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@/(.*)$': '<rootDir>/src/$1',
      
      // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>test-config/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>test-config/styleMock.ts',
    
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>test-config/fileMock.ts',
  },
   // to obtain access to the matchers.
  setupFilesAfterEnv: ['./test-config/setupTests.ts'],
      
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      diagnostics: {
        ignoreCodes: [151001],
      }
    }],
  },
};