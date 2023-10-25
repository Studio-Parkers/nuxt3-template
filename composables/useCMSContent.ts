import type {FetchError} from "ofetch";

declare type CMSNamespace = "oembed/1.0"|"wp/v2"|"wp-site-health/v1"|"wp-block-editor/v1"|"nuxt-boilerplate/v1";
export default async<T>(namespace: CMSNamespace|string, route: string, query?: string, key?: string): Promise<{data: Ref<T>, pending: Ref<boolean>, error: Ref<FetchError<any> | null>}>=>
{
    const {data, pending, error} = await useFetch(`${import.meta.env.VITE_CMS}/wp-json/${namespace}/${route}?${query ?? ""}`, {
        key
    });

    return {
        data: data as Ref<T>,
        pending,
        error
    };
};