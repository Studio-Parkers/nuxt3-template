export default (options?: Yoast)=>
{
    if (!options)
        return;

    useSeoMeta({
        title: options.title,
        description: options.description,
        robots: {
            index: options.robots.index === "index",
            follow: options.robots.follow === "follow",
            maxSnippet: options.robots["max-snippet"].replace("max-snippet:", ""),
            maxImagePreview: options.robots["max-image-preview"].replace("max-image-preview:", "") as any,
            maxVideoPreview: options.robots["max-video-preview"].replace("max-video-preview:", "")
            
        },
        ogLocale: options.og_locale,
        ogType: options.og_type as any,
        ogTitle: options.og_title,
        ogDescription: options.og_description,
        ogUrl: options.og_url,
        ogSiteName: options.og_site_name,
        articleModifiedTime: options.article_modified_time,
        twitterCard: options.twitter_card as any,
        twitterLabel1: options.twitter_misc ? Object.keys(options.twitter_misc)[0] : null,
        twitterData1: options.twitter_misc ? Object.values(options.twitter_misc)[0] : null
    });

    useHead({
        script: [{
            type: "application/ld+json",
            innerHTML: JSON.stringify(options.schema)
        }]
    })
};