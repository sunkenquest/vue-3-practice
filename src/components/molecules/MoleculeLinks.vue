<template>
    <div class="relative bottom-3 flex flex-row gap-x-6">
        <AtomLink
            v-for="(link, index) in links"
            :key="index"
            :link="link"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import AtomLink from '../atoms/AtomLink.vue';

const props = defineProps<{
    links: { url: string; name: string }[];
}>();

</script>
