<template>
    <div class="p-6 font-bold text-20">
        <NuxtLink class="pr-10" to="/">
            ADMIN
        </NuxtLink>
    </div>
    <div class="flex flex-col items-center h-screen p-12">
        <p class="text-24 font-bold">Iniciar Sesión</p>
        <div class="w-ad-300 bg-zinc-200 py-10 flex align-middle rounded-ad-16 flex-col">
            <v-sheet class="mx-auto w-4/6 h-full rounded-ad-20" >
                <form class="bg-zinc-200 ">
                    <v-text-field
                    v-model="user.email"
                    :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="E-mail"
                    required
                    @blur="v$.email.$touch"
                    @input="v$.email.$touch"
                    ></v-text-field>
                    <v-text-field
                    v-model="user.password"
                    :error-messages="v$.password.$errors.map(e => e.$message)"
                    label="Contraseña"
                    required
                    @blur="v$.password.$touch"
                    @input="v$.password.$touch"
                    ></v-text-field>
                    <div class="flex justify-center pb-2">
                        <v-btn
                        :disabled="!isDisabled"
                        class="me-4"
                        @click="send"
                        >
                        Iniciar Sesión
                        </v-btn>
                    </div>
                </form>
            </v-sheet>
            <p class="pt-6 text-center">
                ¿Ya tienes una cuenta?
                <NuxtLink to="/auth/register">
                    Registrarse
                </NuxtLink>
            </p>
        </div>
        <div v-if="activate">
            <Toast :color="color" :activate="activate" :message="toastMessage"/>
        </div>
    </div>
</template>
<script setup lang="js">
    import { reactive } from 'vue';
    import { useVuelidate } from '@vuelidate/core';
    import { email, required } from '@vuelidate/validators';
    import axios from 'axios';
    const { auth } = useEndpoints();

    const initialUser = {
        email: '',
        password: '',
    }

    const user = reactive({
        ...initialUser,
    });

    const color = ref('');
    const activate = ref(false);
    const toastMessage = ref('');

    const rules = {
        email: { required, email },
        password: { required },
    }

    const v$ = useVuelidate(rules, user)

    const isDisabled = computed(() => {
        return v$.value.$dirty;
    });

    async function send() {
        if (activate.value) {
            activate.value = false;
        }
        const nuxtApp = useNuxtApp();
        const logger = await usePostLogin({
            user: user
        });
        
        if (logger?.status?.code === 200) {
            color.value = "success";
            activate.value = true;
            toastMessage.value = "Bienvenido";
            clear()
        } else {
            color.value = "error";
            activate.value = true;
            toastMessage.value = "El email o la contraseña es incorrecta";
        };
    };

    function clear () {
        v$.value.$reset()

        for (const [key, value] of Object.entries(initialUser)) {
        user[key] = value
        }
    }
</script>
