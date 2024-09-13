import { afterEach, expect, it } from 'vitest';
import useEndpoints from '../useEndpoints';

describe('use base url composable', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return url', () => {
    vi.stubGlobal('useRuntimeConfig', () => ({
        public: {
        backendUrl: 'http://localhost:3000',
      },
    }));
    expect(useEndpoints().auth.login).toBe('http://localhost:3000/login');
    expect(useEndpoints().auth.register).toBe('http://localhost:3000/signup');
  });

});