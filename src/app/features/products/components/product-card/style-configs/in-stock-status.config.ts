export interface InStockStatusConfig {
  cardClass: string;
  lentTypeClass: string;
  lentSideClass: string;
  lentTitleClass: string;
  lentCompatibilityClass: string;
  payablePriceClass?: string;
  originalPriceClass?: string;
}

export function getInStockStatusConfig(isAvailable: boolean): InStockStatusConfig {
  if (!isAvailable){
    return {
      cardClass: "border-gray-500 from-gray-100",
      lentTypeClass: "bg-gray-600 text-gray-50",
      lentSideClass: "text-gray-600",
      lentTitleClass: "text-gray-800",
      lentCompatibilityClass: "bg-gray-100 border border-gray-400 text-gray-700"
    }
  }
  return {
    cardClass: "",
    lentTypeClass: "",
    lentSideClass: "",
    lentTitleClass: "",
    lentCompatibilityClass: "",
  }
}
