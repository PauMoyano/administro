import { vi } from 'vitest';
import { config } from '@vue/test-utils';

vi.stubGlobal('defineNuxtPlugin', (callback) => {
  return callback;
});

vi.stubGlobal('useBackPage', () => null);

vi.stubGlobal('defineNuxtRouteMiddleware', (callback) => {
  return callback;
});

vi.stubGlobal('defineEventHandler', callback => callback);

vi.stubGlobal('definePageMeta', () => null);

globalThis.useRuntimeConfig = () => {
  return {
    public: {
      frontendUrl: 'http://test.com',
    },
    private: {},
  };
};

globalThis.useHead = vi.fn();

globalThis.readBody = vi.fn().mockImplementation(({ body = {} } = {}) => body);

globalThis.navigateTo = vi.fn();

config.global.mocks = {
  $t: tKey => tKey,
  $route: {
    params: {
      company: 'fake company',
    },
  },
};

config.global.stubs = {
  'client-only': true,
  NuxtLink: true,
};
