<template>
    <a class="text-gray-900 text-xs" :href="link.url">{{ link.name }}</a>
</template>

<script>
export default {
    name: 'AtomLink',
    props: ['link']
}

</script>

