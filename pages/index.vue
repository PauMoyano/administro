<template>
    <div class="flex flex-col h-ad-screen-1">
        <div>
            <Navbar />
        </div>
        <div class="pt-24 px-16 flex flex-col justify-evenly h-full gap-10">
            <div class="text-30 font-medium">
                Simplifica la Gestión de Consorcios, Bares y Más con <span class="font-bold">ADMIN</span>
            </div>
            <div class="text-20 font-normal">
                Gestionar un negocio puede ser complicado, pero no tiene que serlo. Con ADMIN, obtienes una plataforma integral diseñada para hacer que la administración sea sencilla y eficiente. Ya sea que estés a cargo de un consorcio de edificios, un bar o cualquier otro tipo de negocio, nuestro servicio te ofrece las herramientas necesarias para mantener todo bajo control.
            </div>
            <div class="flex flex-col justify-between pr-12 md:flex-row">
                <div class="text-22 font-medium">
                    ¡Transforma la manera en que gestionas tu negocio hoy mismo!
                </div>
                <NuxtLink to="/auth/register">
                    <v-btn
                    class="text-none mb-4"
                    color="secondary"
                    size="x-large"
                    >
                        Registrate
                    </v-btn>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="js">
</script>