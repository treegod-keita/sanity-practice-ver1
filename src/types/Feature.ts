import type { Tag } from "@/types/Tag";

type Feature = {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    image: {
        _type: "image";
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    publishedAt: string;
    tags: Tag[];
};

export type { Feature };
