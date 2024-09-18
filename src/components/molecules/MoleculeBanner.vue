<template>
    <div class="px-4 pt-40 pb-12 md:py-32 bg-blue-900 text-gray-100">
        <header>
            <AtomTitle tag="h1" content="Title" />
            <AtomText text="Enim non labore fugiat et consequat anim sit amet nostrud Lorem duis do culpa sunt. 
                Reprehenderit dolore sint qui minim culpa veniam qui est nisi commodo sit ea id incididunt. 
                Eiusmod velit dolor cupidatat occaecat. Est nisi eu quis consequat." />
            <AtomButton class="md:max-w-xs" :link="{name: 'Button', ur: '#'}"/>
        </header>
    </div>
</template>

<script>
import AtomTitle from '../atoms/AtomTitle.vue';
import AtomText from '../atoms/AtomText.vue';
import AtomButton from '../atoms/AtomButton.vue';


export default {
    name: 'MoleculeBanner',
    components: {
        AtomTitle,
        AtomText,
        AtomButton
    }
}
</script>