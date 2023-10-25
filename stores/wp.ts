import {defineStore} from "pinia";

export const useWPStore = defineStore("wp", ()=> {
    const menus = ref<WPMenu[]>([]);
    const routes = ref<WPRoute[]>([]);

    const mainNav = computed(()=>
        menus.value.find(menu=> menu.slug === "main")
    );

    const setMenus = (value: WPMenu[])=>
        menus.value = value;

    const setRoutes = (value: WPRoute[])=>
        routes.value = value;

    return {menus, routes, mainNav, setMenus, setRoutes};
});