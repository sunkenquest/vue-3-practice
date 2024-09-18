<template>
    <div class="relative top-1 left-5">
        <AtomText 
            text="Forget Everything You Know About Insurance." 
            color="text-gray-500" 
            font="font-merriweather"
            size="text-3xl" />
        <AtomText 
            text="Instant everything. Incredible prices. Big heart.." 
            color="text-gray-500" 
            font="font-helvetica"
            size="text-xs" />
        <AtomButton 
            :link="pricesLink[0]"
            bgColor="bg-[#ff0082]" 
            textColor="text-white" 
            bgHoverColor="#e60076" 
            textHoverColor="#ffffff"
            size="py-3 px-7"
            textSize="text-xs" />
    </div>
</template>


<script setup lang="ts">
import AtomButton from '../atoms/AtomButton.vue';
import AtomText from '../atoms/AtomText.vue';
import { pricesLink } from '../../constants/links'

</script>
