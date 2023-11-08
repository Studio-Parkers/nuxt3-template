declare type Yoast = {
    title: string;
    description: string;
    robots: {
        index: string;
        follow: string;
        "max-snippet": string;
        "max-image-preview": string;
        "max-video-preview": string;
    };
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_modified_time: string;
    twitter_card: string;
    twitter_misc: Record<string, string>;
    schema: Record<string, any>[];
};

declare type WPContent = {
    rendered: string;
    protected?: boolean;
};

declare type WPLink = {
    href: string;
    name?: string;
    count?: number;
    taxonomy?: string;
    templated?: string;
    embeddable?: boolean;
};

declare type WPPost = {
    id: number;
    date: string;
    date_gmt: string;
    modified: string;
    modified_gmt: string;
    guid: WPContent;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: WPContent;
    content: WPContent;
    excerpt: WPContent;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        footnotes: string;
    };
    categories: Array<number>;
    tags: Array<string>;
    _links: {
        self: Array<WPLink>;
        collection: Array<WPLink>;
        about: Array<WPLink>;
        author: Array<WPLink>;
        replies: Array<WPLink>;
        "version-history": Array<WPLink>;
        "wp:attachment": Array<WPLink>;
        "wp:term": Array<WPLink>;
        curies: Array<WPLink>;
    };
    acf?: Record<string, any>;
    yoast_head_json?: Yoast;
    yoast_head?: string;
};

declare type WPPage = WPPost;

declare type WPRoute = {
    id: number;
    slug: string;
    template: string;
    permalink: string;
    post_type: string;
};

declare type WPMenuItem = {
    ID:	number;
    post_author: string;
    post_date: string;
    post_date_gmt: string;
    post_content: string;
    post_title:	string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged:	string;
    post_modified: string;
    post_modified_gmt: string;
    post_content_filtered: string;
    post_parent: number;
    guid: string;
    menu_order: number;
    post_type: string;
    post_mime_type: string;
    comment_count: string;
    filter: string;
    db_id: number;
    menu_item_parent: string;
    object_id: string;
    object: string;
    type: string;
    type_label: string;
    url: string;
    title: string;
    target:	string;
    attr_title: string;
    description: string;
    classes: Array<string>;
    xfn: string;
};

declare type WPMenu = {
    id: number;
    name: string;
    slug: string;
    description: string;
    parent: number;
    items: Array<WPMenuItem>
};