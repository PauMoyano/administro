<template>
    <v-card>
      <v-layout>
        <v-app-bar
          color="white"
          prominent
        >
            <v-app-bar-nav-icon 
                v-if="$vuetify.display.xs"
                variant="text" 
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          <v-toolbar-title>Admin</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.display.mdAndUp">
            <NuxtLink class="pr-10" to="/auth/register">Registrarse</NuxtLink>
            <NuxtLink class="pr-10" to="/auth/login">Iniciar sesión</NuxtLink>
          </template>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            :location="$vuetify.display.mobile ? 'bottom' : undefined"
            temporary
        >
        <v-list density="compact" nav>
            <NuxtLink class="pr-10" to="/auth/register">
                <v-list-item title="Registrarse" value=""></v-list-item>
            </NuxtLink>
            <NuxtLink class="pr-10" to="/auth/login">
                <v-list-item title="Iniciar sesión" value=""></v-list-item>
            </NuxtLink>
        </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </template>
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      select:"",
      items: [
        {
          title: 'Registrarse',
          value: 'register',
        },
        {
          title: 'Iniciar sesión',
          value: 'login',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>