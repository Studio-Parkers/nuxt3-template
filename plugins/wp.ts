import type {Router, RouteRecordName} from "vue-router";

export default defineNuxtPlugin({
    name: "wp",
    async setup(nuxtApp)
    {
        const store = useWPStore();
        const router = nuxtApp.$router as Router;

        // Load WP content
        const {data: routes} = await useCMSContent<WPRoute[]>("nuxt-boilerplate/v1", "routes", undefined, "wp-routes");
        store.setRoutes(routes.value);

        const {data: menus} = await useCMSContent<WPMenu[]>("nuxt-boilerplate/v1", "menus", undefined, "wp-menus");
        store.setMenus(menus.value);

        // Remove original routes
        const originalRoutes = router.getRoutes();
        for (const i in originalRoutes)
        {
            if (!originalRoutes[i].name)
                continue;
            
            router.removeRoute(originalRoutes[i].name as RouteRecordName);
        }

        // Add routes based on WP pages
        for (const i in routes.value)
        {
            const page = routes.value[i];
            router.addRoute({
                path: `/${page.slug}`,
                name: page.slug,
                meta: {
                    pageID: page.id
                },
                component: ()=> {
                    if (page.template)
                        return import(`~/pages/${page.template}.vue`);

                    return import("~/pages/wp-default.vue");
                }
            });
        }
    }
});