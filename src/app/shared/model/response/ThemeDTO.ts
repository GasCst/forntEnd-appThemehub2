import { ReviewDTO } from "./ReviewDTO";

export interface ThemeDTO{
    idtheme?: number;
    name?: string;
    description?: string;
    preview_image?: string;
    demo_url?: string;
    category?: string;
    price?: string;
    author?: string;
    author_profile?: string;
    download_link?: string;
    state?: string;
    rating: number// Initial rating value
    reviewList: ReviewDTO[];
    
}