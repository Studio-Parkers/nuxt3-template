declare type Yoast = {
    canonical: string;
    permalink: string;
    title: string;
    description: string;
    id: number;
    site_name: string;
    alternate_site_name: string;
    wordpress_site_name: string;
    site_url: string;
    company_name: string;
    company_alternate_name: string;
    company_logo_id: unknown;
    company_logo_meta: unknown;
    person_logo_id: string;
    person_logo_meta: string;
    site_user_id: number;
    site_represents: unknown;
    site_represents_reference: unknown;
    schema_page_type: string[];
    schema_article_type: string;
    main_schema_id: string;
    main_entity_of_page: unknown;
    open_graph_enabled: boolean;
    open_graph_publisher: string;
    twitter_card: string;
    page_type: string;
    has_article: boolean;
    has_image: boolean;
    main_image_id: unknown;
    main_image_url: unknown;
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
    yoast?: Yoast;
    yoast_head?: string;
};

declare type WPPage = WPPost;

declare type WPRoute = {
    id: number;
    slug: string;
    template: string;
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