<template>
    <a :href="link.url" :class="[
        'py-1 px-4',
        bgColorClass,
        textColorClass,
        fontClass,
        sizeClass,
        roundedClass,
        hoverBgColorClass,
        hoverTextColorClass,
        textSize
    ]">
        {{ link.name }}
    </a>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
    link: { url: string; name: string };
    bgColor?: string;
    textColor?: string;
    font?: string;
    size?: string;
    bgHoverColor?: string;
    textHoverColor?: string;
    textSize?: string,
}>();

const bgColorClass = computed(() => props.bgColor || 'bg-blue-100');
const textColorClass = computed(() => props.textColor || 'text-blue-500');
const fontClass = computed(() => props.font || 'font-semibold');
const sizeClass = computed(() => props.size || 'py-1 px-4');
const roundedClass = computed(() => 'rounded');
const textSize = computed(() =>  props.textSize || 'text-base');

const hoverBgColorClass = computed(() =>
    props.bgHoverColor ? `hover:bg-[${props.bgHoverColor}]` : 'hover:bg-blue-200'
);

const hoverTextColorClass = computed(() =>
    props.textHoverColor ? `hover:text-[${props.textHoverColor}]` : 'hover:text-blue-700'
);
</script>
