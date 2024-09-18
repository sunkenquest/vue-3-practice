<template>
    <p :class="['pb-6', textColorClass, textFontClass]">{{ text }}</p>
</template>

<script>
export default {
    name: 'AtomText',
    props: {
        text: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'text-gray-800'
        },
        font: {
            type: String,
            default: 'font-sans'
        }
    },
    computed: {
        textColorClass() {
            return this.color;
        },
        textFontClass(){
            return this.font
        }
    }
}
</script>
