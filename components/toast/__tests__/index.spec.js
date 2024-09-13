import { mount } from '@vue/test-utils';
import Toast from '../index.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
  })

describe('index.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Toast,{
            propsData: {
                color: 'success',
                activate: true,
                message: "Bienvenido"
            },
            global: {
                plugins: [vuetify],
            }
        });
    });
    it('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
});