<template>
    <p :class="['pb-6', textColorClass, textFontClass, textFontSizeClass]">{{ text }}</p>
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
        },
        size: {
            type: String,
            default: 'text-base'
        }
    },
    computed: {
        textColorClass() {
            return this.color;
        },
        textFontClass(){
            return this.font
        },
        textFontSizeClass(){
            return this.size
        }
    }
}
</script>
