import {ProductPriceType} from '../../../enums/product-price-type';

export interface PriceTypeConfig {
  label?: string;
  cardClass: string;
  lentTypeClass: string;
  lentSideClass: string;
  lentTitleClass: string;
  lentCompatibilityClass: string;
  payablePriceClass: string;
  originalPriceClass: string;
}

export const PRICE_TYPE_MAP: Record<ProductPriceType, PriceTypeConfig> = {
  [ProductPriceType.Base]:{
    cardClass: "border-porcelain-500 from-porcelain-50",
    lentTypeClass: "text-porcelain-600",
    lentSideClass: "text-porcelain-600",
    lentTitleClass: "text-porcelain-700",
    lentCompatibilityClass: "border-porcelain-400/60 bg-porcelain-100/50 text-porcelain-700",
    payablePriceClass: "text-porcelain-800",
    originalPriceClass: "text-porcelain-300"
  },
  [ProductPriceType.Festival]:{
    label:"جشنواره فروش",
    cardClass: "border-rose-500 from-rose-100",
    lentTypeClass: "bg-rose-600 text-rose-50",
    lentSideClass: "text-rose-600",
    lentTitleClass: "text-rose-700",
    lentCompatibilityClass: "bg-rose-100 border-rose-400 text-rose-700",
    payablePriceClass: "text-rose-800",
    originalPriceClass: "text-rose-300"
  },
  [ProductPriceType.FlashSale]:{
    cardClass: "border-porcelain-500 from-porcelain-100",
    lentTypeClass: "bg-porcelain-600 text-porcelain-50",
    lentSideClass: "text-porcelain-600",
    lentTitleClass: "text-porcelain-700",
    lentCompatibilityClass: "bg-porcelain-100 border border-porcelain-400 text-porcelain-700",
    payablePriceClass: "text-porcelain-800",
    originalPriceClass: "text-porcelain-300"
  },
  [ProductPriceType.Regional]:{
    cardClass: "border-porcelain-500 from-porcelain-100",
    lentTypeClass: "bg-porcelain-600 text-porcelain-50",
    lentSideClass: "text-porcelain-600",
    lentTitleClass: "text-porcelain-700",
    lentCompatibilityClass: "bg-porcelain-100 border border-porcelain-400 text-porcelain-700",
    payablePriceClass: "text-porcelain-800",
    originalPriceClass: "text-porcelain-300"
  },
  [ProductPriceType.UserTier]:{
    cardClass: "border-porcelain-500 from-porcelain-100",
    lentTypeClass: "bg-porcelain-600 text-porcelain-50",
    lentSideClass: "text-porcelain-600",
    lentTitleClass: "text-porcelain-700",
    lentCompatibilityClass: "bg-porcelain-100 border border-porcelain-400 text-porcelain-700",
    payablePriceClass: "text-porcelain-800",
    originalPriceClass: "text-porcelain-300"
  },
}
