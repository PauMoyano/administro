<template>
    <div>
        <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            :color="props.color"
            variant="outlined"
            >
            {{ props.message }}
        </v-snackbar>
    </div>
</template>
<script setup lang="js">
    const props = defineProps({
        color: {
            type: String,
            required: true,
        },
        activate: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    });
    const snackbar = ref(props.activate)
</script>