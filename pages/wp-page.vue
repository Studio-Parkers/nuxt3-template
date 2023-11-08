<template>
    <div class="wysiwyg">
        <h1 v-html="data.title.rendered" />
        <div class="content" v-html="data.content.rendered" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const post_type = route.meta.post_type === "page" ? "pages" : route.meta.post_type;
const {data} = await useCMSContent<WPPage>("wp/v2", `${post_type}/${route.meta.pageID}`, undefined, `default-wp-${route.meta.pageID}`);
useYoast(data.value.yoast_head_json);
</script>

<style scoped>
.wysiwyg{}
</style>