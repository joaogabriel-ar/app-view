import Asset from "./Asset";
import Link from "./Link";

export default interface AssetsPaginated {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
    data: Asset[];
    link: Link[];
};