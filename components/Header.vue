<template>
    <header>
        <div>
            <h1>Mijn Website</h1>
        </div>

        <nav v-if="mainNav">
            <ul>
                <li v-for="item in mainNav.items" :key="`nav-item-${item.ID}`">
                    <router-link v-if="item.object === 'page'" :to="item.url" active-class="active" :class="item.classes" :title="item.attr_title">{{ item.title }}</router-link>
                    <a v-else :href="item.url" :target="item.target" :class="item.classes" :rel="item.xfn" :title="item.attr_title">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
const wpStore = useWPStore();
const mainNav = computed(()=> wpStore.mainNav);
</script>

<style lang="scss" scoped>
header
{
    display: flex;
    padding: 0px 1rem;
    color: #FFFFFF;
    align-items: center;
    background: #222222;
}

nav
{
    margin-left: auto;

    ul
    {
        gap: 1rem;
        display: flex;
        list-style-type: none;

        a
        {
            color: #FFFFFF;

            &.active {color: red}
        }
    }
}
</style>