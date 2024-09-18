<template>
    <header class="">
        <div class="">
            <MoleculeLinks :links="links" />
        </div>
    </header>
</template>

<script setup lang="ts">
import MoleculeLinks from '../molecules/MoleculeLinks.vue';
import { links } from '../../constants/links'
</script>
