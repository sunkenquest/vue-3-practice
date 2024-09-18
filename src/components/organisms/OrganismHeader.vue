<template>
    <header class="">
        <div>
            <div class="fixed top-6 left-5">
                <MoleculeLinks :links="navLinks" />
            </div>
            <div class="fixed top-6 right-8">
                <MoleculeLinks :links="myAccLink" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import MoleculeLinks from '../molecules/MoleculeLinks.vue';
import { navLinks } from '../../constants/links'
import { myAccLink } from '../../constants/links'
</script>
