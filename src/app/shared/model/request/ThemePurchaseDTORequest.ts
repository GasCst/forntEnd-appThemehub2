import { ThemesInPurchaseDTO } from "../response/ThemesInPurchaseDTO";

export interface ThemePurchaseDTORequest {
    themeId: number;
    buyerId: number;
    themesInPurchase: ThemesInPurchaseDTO[];
}