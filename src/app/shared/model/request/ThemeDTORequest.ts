import { ReviewDTO } from "../response/ReviewDTO";

export interface ThemeDTORequest {
    name?: string;
    description?: string;
    preview_image?: string;
    demo_url?: string;
    category?: string;
    price?: number;
    author?: string;
    author_profile?: string;
    download_link?: string;
    state?: string;
    reviewList: ReviewDTO[];

}