<template>
    <a class="text-gray-900" :href="link.url">{{ link.name }}</a>
</template>

<script>
export default {
    name: 'AtomLink',
    props: ['link']
}

</script>

