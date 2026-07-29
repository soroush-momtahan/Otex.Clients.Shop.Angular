import {LentSide} from '../enums/lent-side';
import {ProductPriceType} from '../enums/product-price-type';
import Fuse from 'fuse.js';

export interface ProductCardModel {
  id: string;
  order: number;
  title: string;
  image: string;
  side: LentSide;
  typeOfLent: string;
  compatibleWith: string[];
  inStock: number;
  isAvailable: boolean;
  payablePrice: string;
  originalPrice: string;
  discountPercent: number;
  currency: string;
  priceType:ProductPriceType;
}
const productCardModel: ProductCardModel[] = [
  {
    "id": "1",
    "order": 8,
    "title": "پراید",
    "image": "otex-blue-box-15.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پراید", "پی کی"],
    "isAvailable": true,
    "payablePrice": "14000000",
    "originalPrice": "15500000",
    "discountPercent": 10,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "2",
    "order": 9,
    "title": "پیکان",
    "image": "otex-blue-box-14.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پیکان", "آردی", "روآ"],
    "isAvailable": true,
    "payablePrice": "28500000",
    "originalPrice": "30000000",
    "discountPercent": 5,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "3",
    "order": 1,
    "title": "پژو 405",
    "image": "otex-blue-box-01.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو 405", "پرشیا", "سمند", "آریسان"],
    "isAvailable": true,
    "payablePrice": "25000000",
    "originalPrice": "25000000",
    "discountPercent": 0,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "4",
    "order": 2,
    "title": "تیبا",
    "image": "otex-blue-box-16.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["تیبا", "ریو", "ساینا", "اطلس", "سهند"],
    "isAvailable": true,
    "payablePrice": "18000000",
    "originalPrice": "20000000",
    "discountPercent": 10,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "5",
    "order": 3,
    "title": "رانا",
    "image": "otex-blue-box-03.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["رانا", "سمند ملی", "دنا", "دنا پلاس", "سورن"],
    "isAvailable": true,
    "payablePrice": "3150000",
    "originalPrice": "3500000",
    "discountPercent": 10,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "6",
    "order": 4,
    "title": "رانا",
    "image": "otex-blue-box-04.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["رانا", "پژو 207", "پژو 206(90 به بالا)", "اچ سی کراس"],
    "isAvailable": true,
    "payablePrice": "34000000",
    "originalPrice": "34000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "7",
    "order": 5,
    "title": "پژو 206(تیپ 5)",
    "image": "otex-blue-box-05.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو 206(تیپ 5)", "پژو 206(تیپ 6)", "تارا"],
    "isAvailable": true,
    "payablePrice": "21250000",
    "originalPrice": "25000000",
    "discountPercent": 15,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "8",
    "order": 6,
    "title": "پژو 206(تیپ 2)",
    "image": "otex-blue-box-06.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو 206(تیپ 2)"],
    "isAvailable": true,
    "payablePrice": "19000000",
    "originalPrice": "16100000",
    "discountPercent": 10,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "9",
    "order": 7,
    "title": "ال 90",
    "image": "otex-blue-box-07.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["ال 90", "رنو ساندرو"],
    "isAvailable": true,
    "payablePrice": "42750000",
    "originalPrice": "45000000",
    "discountPercent": 5,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "10",
    "order": 12,
    "title": "مزدا 1600",
    "image": "otex-blue-box-08.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["مزدا 1600", "مزدا 2000", "کارا"],
    "isAvailable": true,
    "payablePrice": "40000000",
    "originalPrice": "50000000",
    "discountPercent": 20,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "11",
    "order": 11,
    "title": "نیسان",
    "image": "otex-blue-box-09.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["نیسان"],
    "isAvailable": true,
    "payablePrice": "27000000",
    "originalPrice": "30000000",
    "discountPercent": 10,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "12",
    "order": 10,
    "title": "MVM 530",
    "image": "otex-blue-box-10.jpeg",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["MVM 530", "MVM 315", "X22", "X33", "آریزو 5", "آریزو 6", "لیفان X60"],
    "isAvailable": true,
    "payablePrice": "32000000",
    "originalPrice": "32000000",
    "discountPercent": 0,
    "inStock": 5,
    "currency": "IRR",
    "priceType": ProductPriceType.Base
  },
  {
    "id": "13",
    "order": 13,
    "title": "دنا(ELX)",
    "image": "otex-blue-box-11.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["دنا(ELX)", "پژو پارس ELX", "سمند EF7"],
    "isAvailable": true,
    "payablePrice": "38250000",
    "originalPrice": "45000000",
    "discountPercent": 15,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "14",
    "order": 14,
    "title": "پژو 206(تیپ 5)",
    "image": "otex-blue-box-12.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو 206(تیپ 5)", "پژو 206(تیپ 6)", "اچ سی کراس"],
    "isAvailable": true,
    "payablePrice": "31350000",
    "originalPrice": "33000000",
    "discountPercent": 5,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "15",
    "order": 15,
    "title": "رانا",
    "image": "otex-blue-box-13.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["رانا"],
    "isAvailable": true,
    "payablePrice": "11000000",
    "originalPrice": "11000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "16",
    "order": 16,
    "title": "پراید",
    "image": "otex-blue-box-shoes-01.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": ["پراید",],
    "isAvailable": true,
    "payablePrice": "11000000",
    "originalPrice": "11000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "17",
    "order": 17,
    "title": "تیبا",
    "image": "otex-blue-box-shoes-03.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": ["تیبا"],
    "isAvailable": true,
    "payablePrice": "11000000",
    "originalPrice": "11000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "18",
    "order": 18,
    "title": "پژو 405",
    "image": "otex-blue-box-shoes-02.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": ["پژو 405"],
    "isAvailable": true,
    "payablePrice": "11000000",
    "originalPrice": "11000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  },
  {
    "id": "19",
    "order": 19,
    "title": "سمند",
    "image": "otex-blue-box-shoes-01.jpeg",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": ["سمند"],
    "isAvailable": true,
    "payablePrice": "11000000",
    "originalPrice": "11000000",
    "discountPercent": 0,
    "currency": "IRR",
    "inStock": 5,
    "priceType": ProductPriceType.Base
  }
]
export function getInitialProductCard(): ProductCardModel[] {
  return productCardModel;
}

export function getTopScrollingProducts(): ProductCardModel[]{
  return productCardModel
    .filter(p => p.order >= 1 && p.order <= 8)
    .sort((a, b) => a.order - b.order);
}
// کلمات اضافه‌ای که در سرچ تاثیر ندارند
const STOP_WORDS = ['لنت', 'و', 'یا', 'برای', 'ماشین', 'خودرو', 'های', 'مدل'];

export function normalizePersianText(text: string): string {
  if (!text) return '';

  // ۱. یکدست‌سازی حروف عربی به فارسی
  let normalized = text
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/آ/g, 'ا');

  // ۲. آرایه اعداد فارسی و عربی
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits  = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  // ۳. تبدیل تمام اعداد به انگلیسی
  for (let i = 0; i < 10; i++) {
    // استفاده از RegExp با فلگ 'g' برای جایگزینی تمام موارد پیدا شده در متن
    normalized = normalized
      .replace(new RegExp(persianDigits[i], 'g'), i.toString())
      .replace(new RegExp(arabicDigits[i], 'g'), i.toString());
  }

  return normalized;
}

export function getAdvancedFilteredProducts(products: ProductCardModel[], searchInput: string): ProductCardModel[] {
  if (!searchInput || searchInput.trim() === '') {
    return products;
  }

  // استانداردسازی متن ورودی کاربر
  const normalizedInput = normalizePersianText(searchInput);

  // ۱. بررسی ویژگی‌ها
  const hasFront = normalizedInput.includes('جلو');
  const hasBack = normalizedInput.includes('عقب');
  const hasDisk = normalizedInput.includes('دیسکی');
  const hasKafshak = normalizedInput.includes('کفشکی');

  // ۲. استخراج نام ماشین (حذف کلمات کلیدی و زائد)
  let carNameText = normalizedInput
    .replace(/جلو|عقب|دیسکی|کفشکی|لنت/g, ' ')
    .replace(/\s+و\s+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // ۳. جستجوی فازی نام ماشین با Fuse.js
  let matchedProducts = products;

  if (carNameText) {
    // تنظیمات Fuse.js
    const fuseOptions = {
      // فیلدهایی که باید در آنها جستجو شود
      keys: ['title', 'compatibleWith'],
      // آستانه خطا (Threshold):
      // عدد بین 0 تا 1. (0 یعنی تطابق دقیق، 1 یعنی تطابق با هر چیزی)
      // عدد 0.3 یا 0.4 برای بخشیدن پسوندهایی مثل "ها" و "ی" عالی است.
      threshold: 0.24,
      // نادیده گرفتن حساسیت به حروف بزرگ و کوچک
      isCaseSensitive: false,
    };

    const fuse = new Fuse(products, fuseOptions);

    // خروجی Fuse شامل یک آبجکت است که اصل دیتا در پراپرتی item قرار دارد
    const fuseResults = fuse.search(carNameText);

    // استخراج لیست محصولات پیدا شده توسط Fuse
    matchedProducts = fuseResults.map(result => result.item);
  }

  // ۴. اعمال فیلترِ ویژگی‌ها روی محصولاتِ پیدا شده
  return matchedProducts.filter(product => {

    // فیلتر موقعیت (منطق OR)
    const matchesSide =
      (!hasFront && !hasBack) ||
      (hasFront && product.side === LentSide.Front) ||
      (hasBack && product.side === LentSide.Back);

    if (!matchesSide) return false;

    // فیلتر نوع لنت (منطق OR)
    const matchesType =
      (!hasDisk && !hasKafshak) ||
      (hasDisk && product.typeOfLent === 'دیسکی') ||
      (hasKafshak && product.typeOfLent === 'کفشکی');

    if (!matchesType) return false;

    return true;
  });
}
