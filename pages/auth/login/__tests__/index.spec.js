import { mount } from '@vue/test-utils';
import Login from '../index.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
  })

describe('index.vue', () => {
    let wrapper;
    const mockLogin = {
        status: { code: 200 },
    };
    const mockNotLogin = {
        status: { code: 401 },
    };
    beforeEach(() => {
        vi.stubGlobal('useEndpoints', () => ({
            auth: {
              login: vi.fn().mockResolvedValue(),
              register: vi.fn().mockResolvedValue(),
            },
        }));
        vi.stubGlobal('useNuxtApp', () => {
            return {
              $http: { post: vi.fn().mockResolvedValue({
                status: { code: 200 }
            })
        }};
        });
        vi.stubGlobal('usePostLogin', () => mockLogin);
        wrapper = mount(Login,{
            global: {
                plugins: [vuetify],
            }
        });
    });
    afterEach(() => {
        vi.unstubAllGlobals();
    });
    it('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    it('should send form', () => {
        wrapper.vm.activate = true;
        wrapper.vm.send();
        expect(wrapper.vm.user).toEqual({
            email: '',
            password: ''
        });
    });
    it('should clear form', () => {
        wrapper.vm.clear();
        expect(wrapper.vm.user).toEqual({
            email: '',
            password: ''
        });
    });
    it('should send form', () => {
        vi.stubGlobal('usePostLogin', () => mockNotLogin);
        wrapper = mount(Login,{
            global: {
                plugins: [vuetify],
            }
        });
        wrapper.vm.activate = true;
        wrapper.vm.send();
        expect(wrapper.vm.user).toEqual({
            email: '',
            password: ''
        });
    });
});