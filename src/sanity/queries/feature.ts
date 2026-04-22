export const FEATURE_LIST_QUERY = `*[_type == "feature"] | order(title desc)[0...12]{_id, title, image, slug, publishedAt, "tags": tags[]->{_id, name}, contents}`;
