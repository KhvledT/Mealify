import '@testing-library/jest-dom';

// Mock TextEncoder for react-router-dom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
  global.TextDecoder = require('util').TextDecoder;
} 