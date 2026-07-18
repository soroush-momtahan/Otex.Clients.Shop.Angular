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
    "image": "product-card-01.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پی کی"],
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
    "image": "product-card-02.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["آردی", "روآ"],
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
    "image": "product-card-03.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پرشیا", "سمند", "آریسان"],
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
    "image": "product-card-04.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["ریو", "ساینا", "اطلس", "سهند"],
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
    "image": "product-card-05.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["سمند ملی", "دنا", "دنا پلاس", "سورن"],
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
    "image": "product-card-06.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو 207", "پژو 206(90 به بالا)", "اچ سی کراس"],
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
    "image": "product-card-07.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["تارا", "پژو 206(تیپ 6)"],
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
    "image": "product-card-01.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": [],
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
    "image": "product-card-02.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["رنو ساندرو"],
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
    "image": "product-card-03.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["مزدا 2000", "کارا"],
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
    "image": "product-card-04.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": [],
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
    "image": "product-card-05.png",
    "side": LentSide.Front,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["MVM 315", "X22", "X33", "آریزو 5", "آریزو 6", "لیفان X60"],
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
    "image": "product-card-06.png",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["پژو پارس ELX", "سمند EF7"],
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
    "image": "product-card-07.png",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": ["اچ سی کراس", "پژو 206(تیپ 6)"],
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
    "image": "product-card-05.png",
    "side": LentSide.Back,
    "typeOfLent": "دیسکی",
    "compatibleWith": [],
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
    "image": "product-card-10.png",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": [],
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
    "image": "product-card-12.png",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": [],
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
    "image": "product-card-12.png",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": [],
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
    "image": "product-card-10.png",
    "side": LentSide.Back,
    "typeOfLent": "کفشکی",
    "compatibleWith": [],
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
export function getFilteredProducts(products: ProductCardModel[], searchInput: string): ProductCardModel[] {
  if (!searchInput || searchInput.trim() === '') {
    return products;
  }

  const rawSearch = searchInput.trim();

  const hasFront = rawSearch.includes('جلو');
  const hasBack = rawSearch.includes('عقب');
  const hasDisk = rawSearch.includes('دیسکی');
  const hasKafshak = rawSearch.includes('کفشکی');

  // 2. حذف کلمات کلیدی از متن جستجو تا فقط اسم ماشین باقی بماند
  // مثلا اگر نوشت "پراید جلو دیسکی" -> فقط "پراید" باقی بماند تا در Title بگردیم
  const textToSearch = rawSearch
    .replace(/جلو/g, '')
    .replace(/عقب/g, '')
    .replace(/دیسکی/g, '')
    .replace(/کفشکی/g, '')
    .trim();

  // 3. فیلتر کردن محصولات (یکپارچه و اشتراکی)
  return products.filter(product => {
    // مرحله اول: اعمال فیلترهای کلیدی (اشتراک)
    // اگر کلمه‌ای سرچ شده بود، اما محصول آن ویژگی را نداشت -> حذف شود (return false)
    if (hasFront && product.side !== LentSide.Front) return false;
    if (hasBack && product.side !== LentSide.Back) return false;
    if (hasDisk && product.typeOfLent !== 'دیسکی') return false;
    if (hasKafshak && product.typeOfLent !== 'کفشکی') return false;

    // مرحله دوم: اگر بعد از حذف کلمات کلیدی، متنی برای جستجو نمانده بود -> تایید است
    if (!textToSearch) return true;

    // مرحله سوم: جستجو در Title و CompatibleWith
    const matchTitle = product.title.includes(textToSearch);

    // چون compatibleWith آرایه است، با متد some چک میکنیم آیا متنی که سرچ شده در یکی از آنها هست یا نه
    const matchCompatible = product.compatibleWith.some(car => car.includes(textToSearch));

    // اگر در تایتل یا ماشین‌های سازگار پیدا شد تایید کن
    return matchTitle || matchCompatible;
  });
}

// کلمات اضافه‌ای که در سرچ تاثیر ندارند
const STOP_WORDS = ['لنت', 'و', 'یا', 'برای', 'ماشین', 'خودرو', 'های', 'مدل'];

export function getFuzzyFilteredProducts(products: ProductCardModel[], searchInput: string): ProductCardModel[] {
  // اگر سرچ خالی بود، همه دیتا را برگردان
  if (!searchInput || searchInput.trim() === '') {
    return products;
  }

  // ۱. خرد کردن متن سرچ به کلمات کلیدی مفید (حذف کلمات زائد)
  const searchTokens = searchInput
    .trim()
    .split(/\s+/) // جدا کردن کلمات با فاصله
    .filter(token => !STOP_WORDS.includes(token)); // حذف کلمات توقف

  // ۲. محاسبه امتیاز برای هر محصول
  const scoredProducts = products.map(product => {
    let score = 0;

    // بررسی هر کلمه جستجو شده روی محصول
    searchTokens.forEach(token => {

      // بررسی ویژگی‌های کلیدی (هر کدام ۱۰ امتیاز)
      if (token === 'جلو' && product.side === LentSide.Front) score += 10;
      if (token === 'عقب' && product.side === LentSide.Back) score += 10;
      if (token === 'دیسکی' && product.typeOfLent === 'دیسکی') score += 10;
      if (token === 'کفشکی' && product.typeOfLent === 'کفشکی') score += 10;

      // بررسی اسم و مدل ماشین (چون مهم‌تر است، امتیاز بیشتری دارد)
      // اگر کلمه در عنوان اصلی محصول بود (مثلا پراید) -> ۲۰ امتیاز
      if (product.title.includes(token)) {
        score += 20;
      }
      // اگر در لیست ماشین‌های سازگار بود -> ۱۵ امتیاز
      else if (product.compatibleWith.some(car => car.includes(token))) {
        score += 15;
      }
    });

    // برگرداندن محصول به همراه امتیاز آن
    return { product, score };
  });

  // ۳. فیلتر کردن و مرتب‌سازی بر اساس شباهت
  return scoredProducts
    .filter(item => item.score > 0) // فقط آنهایی که حداقل با یک کلمه هم‌خوانی داشتند
    .sort((a, b) => b.score - a.score) // مرتب‌سازی از بیشترین امتیاز به کمترین (Best Match First)
    .map(item => item.product); // خارج کردن محصول از آبجکتِ امتیازی
}

export function getStrictCarAndFlexibleAttributeProducts(products: ProductCardModel[], searchInput: string): ProductCardModel[] {
  if (!searchInput || searchInput.trim() === '') {
    return products; // اگر سرچ خالی بود همه را نشان بده
  }

  // ۱. بررسی می‌کنیم کاربر کدام ویژگی‌ها را در متن خود تایپ کرده است
  const hasFront = searchInput.includes('جلو');
  const hasBack = searchInput.includes('عقب');
  const hasDisk = searchInput.includes('دیسکی');
  const hasKafshak = searchInput.includes('کفشکی');

  // ۲. استخراج خالصِ نام ماشین (حذف ویژگی‌ها و کلمات زائد از متن جستجو)
  // نکته: برای حرف "و" از \s+و\s+ استفاده کردیم که فقط حرف ربط "و" را حذف کند و نام ماشین‌هایی مثل "روآ" یا "ولوو" خراب نشود.
  let carNameText = searchInput
    .replace(/جلو|عقب|دیسکی|کفشکی|لنت/g, ' ') // حذف کلمات کلیدی و کلمه لنت
    .replace(/\s+و\s+/g, ' ') // حذف حرف ربط "و" که بین کلمات با فاصله است
    .replace(/\s+/g, ' ') // اگر چند فاصله پشت سر هم افتاده، تبدیل به یک فاصله شود
    .trim(); // حذف فاصله‌های اول و آخر متن

  // ۳. فیلتر کردن محصولات
  return products.filter(product => {

    // ----------------------------------------------------
    // گام اول: فیلتر سخت‌گیرانه روی نام ماشین (Strict Match)
    // ----------------------------------------------------
    if (carNameText) {
      const matchTitle = product.title.includes(carNameText);
      const matchCompatible = product.compatibleWith.some(car => car.includes(carNameText));

      // اگر نام ماشینِ باقی‌مانده نه در عنوان بود و نه در لیست سازگاری، قطعا رد می‌شود
      if (!matchTitle && !matchCompatible) {
        return false;
      }
    }

    // ----------------------------------------------------
    // گام دوم: فیلتر انعطاف‌پذیر روی موقعیت (جلو / عقب) - منطق OR
    // ----------------------------------------------------
    // اگر کاربر نه نوشته جلو و نه عقب -> همه موقعیت‌ها مجاز است
    // اگر نوشته جلو -> لنت‌های جلو مجاز است
    // اگر نوشته عقب -> لنت‌های عقب مجاز است
    // اگر نوشته هم جلو و هم عقب -> لنت‌های جلو "یا" لنت‌های عقب مجاز است
    const matchesSide =
      (!hasFront && !hasBack) ||
      (hasFront && product.side === LentSide.Front) ||
      (hasBack && product.side === LentSide.Back);

    if (!matchesSide) return false;

    // ----------------------------------------------------
    // گام سوم: فیلتر انعطاف‌پذیر روی نوع لنت (دیسکی / کفشکی) - منطق OR
    // ----------------------------------------------------
    // دقیقا مشابه موقعیت عمل می‌کند
    const matchesType =
      (!hasDisk && !hasKafshak) ||
      (hasDisk && product.typeOfLent === 'دیسکی') ||
      (hasKafshak && product.typeOfLent === 'کفشکی');

    if (!matchesType) return false;

    // اگر محصول از تمام فیلترهای بالا به سلامت عبور کرد، تایید می‌شود
    return true;
  });
}

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
      threshold: 0.3,
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
