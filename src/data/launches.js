export const launches = [
  // BEVERAGES
  {
    id: 1, brand: "Paper Boat", category: "Beverages", subcategory: "Ethnic Drinks",
    priceBand: "₹20-₹50", packSize: "250ml", targetAge: "18-35",
    targetIncome: "₹3L-₹10L", channel: "modern-trade", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.72, repeatRate: 0.44, cac: 180, margin: 0.38,
    outcome: "success", failureReason: null,
    insight: "Strong nostalgia positioning drove repeat. Modern trade shelf placement critical."
  },
  {
    id: 2, brand: "Lahori Zeera", category: "Beverages", subcategory: "Soda",
    priceBand: "₹250-₹350", packSize: "500ml", targetAge: "22-38",
    targetIncome: "₹8L-₹20L", channel: "quick-commerce", cities: ["Delhi", "Chandigarh"],
    cityTier: "Tier 1", marketingSpend: "₹80L",
    sellThrough90Days: 0.31, repeatRate: 0.18, cac: 520, margin: 0.22,
    outcome: "partial", failureReason: "Wrong price band for quick commerce impulse buyers",
    insight: "₹299 too high for impulse buy. Trial pack at ₹49 would have built repeat first."
  },
  {
    id: 3, brand: "Sleepy Owl Coffee", category: "Beverages", subcategory: "Coffee",
    priceBand: "₹250-₹400", packSize: "5-pack", targetAge: "22-32",
    targetIncome: "₹10L-₹30L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹1.2Cr",
    sellThrough90Days: 0.68, repeatRate: 0.51, cac: 290, margin: 0.52,
    outcome: "success", failureReason: null,
    insight: "D2C first strategy worked. High repeat due to subscription model. Instagram drove 60% of traffic."
  },
  {
    id: 4, brand: "Coolberg", category: "Beverages", subcategory: "Non-Alcoholic Beer",
    priceBand: "₹60-₹100", packSize: "330ml", targetAge: "20-35",
    targetIncome: "₹5L-₹15L", channel: "modern-trade", cities: ["Mumbai", "Goa", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹60L",
    sellThrough90Days: 0.45, repeatRate: 0.29, cac: 340, margin: 0.28,
    outcome: "partial", failureReason: "Category education needed. Awareness too low.",
    insight: "Non-alc beer needs category creation investment before distribution scaling."
  },
  {
    id: 5, brand: "Nerd Energy", category: "Beverages", subcategory: "Energy Drinks",
    priceBand: "₹99-₹149", packSize: "250ml", targetAge: "16-28",
    targetIncome: "₹3L-₹8L", channel: "quick-commerce", cities: ["Delhi", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹40L",
    sellThrough90Days: 0.58, repeatRate: 0.38, cac: 220, margin: 0.35,
    outcome: "success", failureReason: null,
    insight: "Quick commerce impulse buy worked well. Gaming/esports positioning resonated."
  },

  // SKINCARE / BEAUTY
  {
    id: 6, brand: "Minimalist", category: "Skincare", subcategory: "Serums",
    priceBand: "₹500-₹700", packSize: "30ml", targetAge: "20-35",
    targetIncome: "₹6L-₹20L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi", "Hyderabad"],
    cityTier: "Tier 1", marketingSpend: "₹3Cr",
    sellThrough90Days: 0.81, repeatRate: 0.62, cac: 350, margin: 0.65,
    outcome: "success", failureReason: null,
    insight: "Ingredient transparency + clinical claims drove trust. D2C first, then Nykaa was the right sequence."
  },
  {
    id: 7, brand: "Dot & Key", category: "Skincare", subcategory: "Moisturizers",
    priceBand: "₹400-₹600", packSize: "50g", targetAge: "22-38",
    targetIncome: "₹8L-₹25L", channel: "marketplace", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.71, repeatRate: 0.48, cac: 310, margin: 0.55,
    outcome: "success", failureReason: null,
    insight: "Nykaa marketplace drove discovery. Instagram influencers converted at 3.2x ROAS."
  },
  {
    id: 8, brand: "Pureplay Skin Sciences", category: "Skincare", subcategory: "Sunscreen",
    priceBand: "₹300-₹500", packSize: "50ml", targetAge: "18-32",
    targetIncome: "₹5L-₹15L", channel: "quick-commerce", cities: ["Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹30L",
    sellThrough90Days: 0.39, repeatRate: 0.21, cac: 480, margin: 0.40,
    outcome: "failure", failureReason: "Quick commerce not suited for considered skincare purchases",
    insight: "Skincare requires trust building. Quick commerce impulse buying doesn't apply. Nykaa/D2C better."
  },

  // SNACKS / FOOD
  {
    id: 9, brand: "The Whole Truth", category: "Snacks", subcategory: "Protein Bars",
    priceBand: "₹80-₹120", packSize: "52g", targetAge: "22-38",
    targetIncome: "₹10L-₹35L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹1.5Cr",
    sellThrough90Days: 0.74, repeatRate: 0.55, cac: 280, margin: 0.48,
    outcome: "success", failureReason: null,
    insight: "Label transparency was the differentiator. DTC subscription drove repeat. Honest positioning built brand."
  },
  {
    id: 10, brand: "Yoga Bar", category: "Snacks", subcategory: "Muesli/Granola",
    priceBand: "₹200-₹350", packSize: "400g", targetAge: "25-40",
    targetIncome: "₹10L-₹30L", channel: "modern-trade", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.68, repeatRate: 0.42, cac: 320, margin: 0.42,
    outcome: "success", failureReason: null,
    insight: "Modern trade shelf space in premium stores was critical. Acquired by ITC validated strategy."
  },
  {
    id: 11, brand: "Baked Organics", category: "Snacks", subcategory: "Chips",
    priceBand: "₹60-₹99", packSize: "75g", targetAge: "18-35",
    targetIncome: "₹4L-₹12L", channel: "quick-commerce", cities: ["Delhi", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹25L",
    sellThrough90Days: 0.55, repeatRate: 0.34, cac: 190, margin: 0.36,
    outcome: "partial", failureReason: "Organic positioning unclear at impulse price point",
    insight: "Health snacks at impulse price points need clear differentiation. Packaging too similar to mainstream."
  },
  {
    id: 12, brand: "Slurrp Farm", category: "Snacks", subcategory: "Kids Snacks",
    priceBand: "₹120-₹200", packSize: "150g", targetAge: "25-40",
    targetIncome: "₹12L-₹40L", channel: "d2c-website", cities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    cityTier: "Tier 1", marketingSpend: "₹1Cr",
    sellThrough90Days: 0.79, repeatRate: 0.61, cac: 240, margin: 0.51,
    outcome: "success", failureReason: null,
    insight: "Parenting community marketing drove organic growth. Subscription repeat very high for kids products."
  },

  // APPAREL / FASHION
  {
    id: 13, brand: "Bombay Shirt Company", category: "Apparel", subcategory: "Formal Shirts",
    priceBand: "₹1500-₹3000", packSize: "single", targetAge: "25-45",
    targetIncome: "₹15L-₹50L", channel: "d2c-website", cities: ["Mumbai", "Delhi", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹1.8Cr",
    sellThrough90Days: 0.62, repeatRate: 0.38, cac: 650, margin: 0.58,
    outcome: "success", failureReason: null,
    insight: "Premium customisation drove high LTV. AOV of ₹3500+ justified high CAC. Gifting season critical."
  },
  {
    id: 14, brand: "Bewakoof", category: "Apparel", subcategory: "Casual T-Shirts",
    priceBand: "₹299-₹599", packSize: "single", targetAge: "18-28",
    targetIncome: "₹3L-₹10L", channel: "marketplace", cities: ["Delhi", "Mumbai", "Tier 2"],
    cityTier: "Tier 1+2", marketingSpend: "₹5Cr",
    sellThrough90Days: 0.71, repeatRate: 0.45, cac: 280, margin: 0.45,
    outcome: "success", failureReason: null,
    insight: "Pop culture themes drove virality. Flipkart + own site combo maximised reach and margin."
  },
  {
    id: 15, brand: "Nykaa Fashion", category: "Apparel", subcategory: "Women's Ethnic",
    priceBand: "₹800-₹2500", packSize: "single", targetAge: "22-40",
    targetIncome: "₹8L-₹25L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹8Cr",
    sellThrough90Days: 0.48, repeatRate: 0.28, cac: 720, margin: 0.35,
    outcome: "partial", failureReason: "High return rates in fashion (35%+) destroyed margins",
    insight: "Fashion on quick commerce/marketplace has high return rates. Fit visualisation tools reduce returns."
  },

  // WELLNESS
  {
    id: 16, brand: "Wellbeing Nutrition", category: "Wellness", subcategory: "Supplements",
    priceBand: "₹800-₹1500", packSize: "30-day supply", targetAge: "25-45",
    targetIncome: "₹12L-₹40L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.77, repeatRate: 0.68, cac: 420, margin: 0.62,
    outcome: "success", failureReason: null,
    insight: "Monthly subscription model gave predictable revenue. Doctor endorsements built trust."
  },
  {
    id: 17, brand: "Oziva", category: "Wellness", subcategory: "Plant Protein",
    priceBand: "₹1200-₹2000", packSize: "500g", targetAge: "22-40",
    targetIncome: "₹10L-₹35L", channel: "d2c-website", cities: ["Bangalore", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹3Cr",
    sellThrough90Days: 0.72, repeatRate: 0.58, cac: 380, margin: 0.58,
    outcome: "success", failureReason: null,
    insight: "Women-first protein positioning was unique. Content marketing drove 40% organic acquisition."
  },
  {
    id: 18, brand: "Fast&Up", category: "Wellness", subcategory: "Sports Nutrition",
    priceBand: "₹500-₹900", packSize: "pack of 20", targetAge: "18-35",
    targetIncome: "₹5L-₹20L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹1.5Cr",
    sellThrough90Days: 0.65, repeatRate: 0.48, cac: 310, margin: 0.48,
    outcome: "success", failureReason: null,
    insight: "Amazon sports category worked well. Marathon sponsorships drove community adoption."
  },

  // HOME / PERSONAL CARE
  {
    id: 19, brand: "Bombay Shaving Company", category: "Personal Care", subcategory: "Grooming",
    priceBand: "₹400-₹800", packSize: "kit", targetAge: "22-40",
    targetIncome: "₹8L-₹25L", channel: "d2c-website", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹2.5Cr",
    sellThrough90Days: 0.74, repeatRate: 0.52, cac: 380, margin: 0.55,
    outcome: "success", failureReason: null,
    insight: "Male grooming starter kit as gifting product worked. Valentine's + Father's Day campaigns doubled sales."
  },
  {
    id: 20, brand: "Mamaearth Baby", category: "Personal Care", subcategory: "Baby Care",
    priceBand: "₹200-₹400", packSize: "200ml", targetAge: "25-38",
    targetIncome: "₹8L-₹30L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2+3", marketingSpend: "₹6Cr",
    sellThrough90Days: 0.83, repeatRate: 0.71, cac: 260, margin: 0.52,
    outcome: "success", failureReason: null,
    insight: "Toxin-free positioning for babies resonated strongly. Amazon + Flipkart + offline worked at scale."
  },

  // PET CARE
  {
    id: 21, brand: "Heads Up For Tails", category: "Pet Care", subcategory: "Pet Food",
    priceBand: "₹500-₹1200", packSize: "1kg", targetAge: "25-40",
    targetIncome: "₹15L-₹50L", channel: "d2c-website", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹1.8Cr",
    sellThrough90Days: 0.76, repeatRate: 0.65, cac: 420, margin: 0.55,
    outcome: "success", failureReason: null,
    insight: "Premium pet food subscription worked. Pet parent community building drove organic growth."
  },

  // ELECTRONICS / ACCESSORIES
  {
    id: 22, brand: "boAt", category: "Electronics", subcategory: "Audio",
    priceBand: "₹999-₹2999", packSize: "single", targetAge: "18-32",
    targetIncome: "₹4L-₹15L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2+3", marketingSpend: "₹15Cr",
    sellThrough90Days: 0.78, repeatRate: 0.41, cac: 380, margin: 0.38,
    outcome: "success", failureReason: null,
    insight: "Amazon Prime Day + Flipkart Big Billion drove 40% annual revenue. Cricket sponsorship built awareness."
  },
  {
    id: 23, brand: "Noise", category: "Electronics", subcategory: "Smartwatch",
    priceBand: "₹1500-₹3500", packSize: "single", targetAge: "18-30",
    targetIncome: "₹4L-₹12L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹8Cr",
    sellThrough90Days: 0.71, repeatRate: 0.28, cac: 480, margin: 0.32,
    outcome: "success", failureReason: null,
    insight: "Smartwatch in ₹2000 price band unlocked massive Tier 2 demand. Flipkart > Amazon for this segment."
  },

  // INSTANT FOOD
  {
    id: 24, brand: "Nootrition", category: "Instant Food", subcategory: "Healthy Noodles",
    priceBand: "₹60-₹90", packSize: "80g", targetAge: "16-28",
    targetIncome: "₹3L-₹10L", channel: "quick-commerce", cities: ["Delhi", "Bangalore", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹20L",
    sellThrough90Days: 0.44, repeatRate: 0.22, cac: 310, margin: 0.28,
    outcome: "failure", failureReason: "Health noodles at ₹80 vs Maggi at ₹14 — value equation unclear",
    insight: "Price gap too high vs incumbents. 4x price premium needs strong taste proof. Sampling was critical."
  },
  {
    id: 25, brand: "Veeba", category: "Condiments", subcategory: "Sauces",
    priceBand: "₹120-₹200", packSize: "300g", targetAge: "22-40",
    targetIncome: "₹6L-₹20L", channel: "modern-trade", cities: ["Delhi", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹80L",
    sellThrough90Days: 0.61, repeatRate: 0.44, cac: 210, margin: 0.42,
    outcome: "success", failureReason: null,
    insight: "QSR channel (Subway, McDonald's) built brand before retail. Reverse funnel strategy worked."
  },

  // FINTECH ADJACENT
  {
    id: 26, brand: "Cred Mint", category: "Fintech", subcategory: "Investment",
    priceBand: "₹0", packSize: "digital", targetAge: "25-40",
    targetIncome: "₹15L-₹60L", channel: "d2c-website", cities: ["Bangalore", "Delhi", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹5Cr",
    sellThrough90Days: 0.82, repeatRate: 0.74, cac: 180, margin: 0.35,
    outcome: "success", failureReason: null,
    insight: "Exclusivity positioning + existing CRED user base made CAC effectively 0 for cross-sell."
  },

  // ADDITIONAL BEVERAGES
  {
    id: 27, brand: "Raw Pressery", category: "Beverages", subcategory: "Cold Press Juice",
    priceBand: "₹150-₹300", packSize: "250ml", targetAge: "24-40",
    targetIncome: "₹15L-₹50L", channel: "modern-trade", cities: ["Mumbai", "Delhi", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹1Cr",
    sellThrough90Days: 0.52, repeatRate: 0.31, cac: 480, margin: 0.38,
    outcome: "partial", failureReason: "Refrigerated logistics too expensive. Unit economics broke at scale.",
    insight: "Cold chain complexity kills margin. Shelf-stable alternatives needed for GT expansion."
  },
  {
    id: 28, brand: "Brewdog India", category: "Beverages", subcategory: "Craft Beer",
    priceBand: "₹200-₹400", packSize: "330ml", targetAge: "24-38",
    targetIncome: "₹15L-₹50L", channel: "modern-trade", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.67, repeatRate: 0.42, cac: 380, margin: 0.44,
    outcome: "success", failureReason: null,
    insight: "Premiumisation in alcohol worked. HoReCa channel first, then retail. State-by-state licensing key challenge."
  },

  // TIER 2 SPECIFIC
  {
    id: 29, brand: "Country Delight", category: "Dairy", subcategory: "Fresh Milk",
    priceBand: "₹50-₹100", packSize: "500ml", targetAge: "25-45",
    targetIncome: "₹4L-₹15L", channel: "d2c-website", cities: ["Delhi NCR", "Jaipur", "Pune"],
    cityTier: "Tier 1+2", marketingSpend: "₹3Cr",
    sellThrough90Days: 0.88, repeatRate: 0.79, cac: 210, margin: 0.32,
    outcome: "success", failureReason: null,
    insight: "Daily subscription with guaranteed fresh delivery is strongest retention model. Tier 2 cities underserved."
  },
  {
    id: 30, brand: "Vahdam Teas", category: "Beverages", subcategory: "Premium Tea",
    priceBand: "₹400-₹800", packSize: "100g", targetAge: "28-50",
    targetIncome: "₹15L-₹60L", channel: "d2c-website", cities: ["Pan India", "Export"],
    cityTier: "Tier 1", marketingSpend: "₹2.5Cr",
    sellThrough90Days: 0.73, repeatRate: 0.56, cac: 290, margin: 0.62,
    outcome: "success", failureReason: null,
    insight: "International market (US/EU) was primary. Gifting packs drove 35% revenue in festival season."
  },

  // MORE FOOD
  {
    id: 31, brand: "Epigamia", category: "Dairy", subcategory: "Greek Yogurt",
    priceBand: "₹60-₹120", packSize: "90g", targetAge: "20-38",
    targetIncome: "₹6L-₹20L", channel: "modern-trade", cities: ["Mumbai", "Delhi", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹1.5Cr",
    sellThrough90Days: 0.71, repeatRate: 0.48, cac: 220, margin: 0.38,
    outcome: "success", failureReason: null,
    insight: "Refrigerated section in premium supermarkets was key. Horizontal line extensions diluted focus initially."
  },
  {
    id: 32, brand: "Wingreens Farms", category: "Snacks", subcategory: "Dips & Spreads",
    priceBand: "₹150-₹250", packSize: "150g", targetAge: "25-45",
    targetIncome: "₹10L-₹30L", channel: "modern-trade", cities: ["Delhi", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹60L",
    sellThrough90Days: 0.58, repeatRate: 0.36, cac: 280, margin: 0.44,
    outcome: "partial", failureReason: "Category (hummus/dips) still nascent in India outside metros",
    insight: "Category creation investment needed before distribution scale. Works in HoReCa before retail."
  },
  {
    id: 33, brand: "Keto India", category: "Snacks", subcategory: "Keto Snacks",
    priceBand: "₹200-₹400", packSize: "150g", targetAge: "28-45",
    targetIncome: "₹15L-₹50L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹40L",
    sellThrough90Days: 0.48, repeatRate: 0.29, cac: 420, margin: 0.50,
    outcome: "partial", failureReason: "Keto trend faded. Category too trend-dependent.",
    insight: "Trend-based categories have short windows. Diversification to broader health positioning needed."
  },

  // PERSONAL CARE - MORE
  {
    id: 34, brand: "The Derma Co", category: "Skincare", subcategory: "Dermat-grade",
    priceBand: "₹400-₹800", packSize: "30ml", targetAge: "22-40",
    targetIncome: "₹8L-₹25L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹4Cr",
    sellThrough90Days: 0.76, repeatRate: 0.54, cac: 320, margin: 0.58,
    outcome: "success", failureReason: null,
    insight: "Dermat recommendation angle built trust. Amazon + Nykaa combination maximised reach."
  },
  {
    id: 35, brand: "mCaffeine", category: "Personal Care", subcategory: "Coffee Skincare",
    priceBand: "₹300-₹600", packSize: "100g", targetAge: "18-32",
    targetIncome: "₹5L-₹15L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.69, repeatRate: 0.44, cac: 310, margin: 0.55,
    outcome: "success", failureReason: null,
    insight: "Single ingredient (caffeine) theming made positioning simple. Unisex approach expanded TAM."
  },

  // HOME CARE
  {
    id: 36, brand: "Pee Safe", category: "Hygiene", subcategory: "Women Hygiene",
    priceBand: "₹100-₹300", packSize: "multi-pack", targetAge: "18-40",
    targetIncome: "₹5L-₹20L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹1.2Cr",
    sellThrough90Days: 0.72, repeatRate: 0.60, cac: 190, margin: 0.48,
    outcome: "success", failureReason: null,
    insight: "Taboo category needs education-first content. Amazon drove discovery. Subscription repeat very high."
  },
  {
    id: 37, brand: "Upcircle", category: "Home Care", subcategory: "Eco Cleaning",
    priceBand: "₹200-₹400", packSize: "500ml", targetAge: "25-42",
    targetIncome: "₹12L-₹35L", channel: "d2c-website", cities: ["Bangalore", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹30L",
    sellThrough90Days: 0.38, repeatRate: 0.24, cac: 520, margin: 0.42,
    outcome: "failure", failureReason: "Sustainability premium too high vs local alternatives",
    insight: "Eco positioning works for personal care but not home care in India yet. Price gap too large."
  },

  // EDTECH / BOOKS
  {
    id: 38, brand: "Unacademy Plus", category: "Edtech", subcategory: "Test Prep",
    priceBand: "₹5000-₹15000", packSize: "annual", targetAge: "16-26",
    targetIncome: "₹3L-₹10L", channel: "d2c-website", cities: ["Pan India"],
    cityTier: "Tier 1+2+3", marketingSpend: "₹50Cr",
    sellThrough90Days: 0.61, repeatRate: 0.35, cac: 2800, margin: 0.58,
    outcome: "partial", failureReason: "High CAC, low repeat cycle (one-time purchase per exam)",
    insight: "Edtech has inherently low repeat. Alumni referral programs critical for CAC reduction."
  },

  // QUICK COMMERCE SPECIFIC
  {
    id: 39, brand: "Happilo", category: "Snacks", subcategory: "Nuts & Dry Fruits",
    priceBand: "₹100-₹300", packSize: "200g", targetAge: "25-50",
    targetIncome: "₹8L-₹30L", channel: "quick-commerce", cities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    cityTier: "Tier 1", marketingSpend: "₹80L",
    sellThrough90Days: 0.74, repeatRate: 0.52, cac: 200, margin: 0.40,
    outcome: "success", failureReason: null,
    insight: "Blinkit perfect for nuts. Healthy impulse buy category. 10-min delivery matched gifting occasion needs."
  },
  {
    id: 40, brand: "Mojo Pizza", category: "Food", subcategory: "QSR",
    priceBand: "₹300-₹600", packSize: "single pizza", targetAge: "18-32",
    targetIncome: "₹4L-₹15L", channel: "quick-commerce", cities: ["Delhi", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹60L",
    sellThrough90Days: 0.62, repeatRate: 0.39, cac: 350, margin: 0.28,
    outcome: "partial", failureReason: "QSR on quick commerce has thin margins after platform fees",
    insight: "Swiggy/Zomato take 25-30% cut. Own delivery + dark kitchens better for unit economics."
  },

  // OFFLINE GT SPECIFIC
  {
    id: 41, brand: "Patanjali Nutrela", category: "Wellness", subcategory: "Soy Protein",
    priceBand: "₹200-₹400", packSize: "500g", targetAge: "25-50",
    targetIncome: "₹3L-₹10L", channel: "general-trade", cities: ["Tier 2", "Tier 3", "Rural"],
    cityTier: "Tier 2+3", marketingSpend: "₹5Cr",
    sellThrough90Days: 0.78, repeatRate: 0.55, cac: 80, margin: 0.32,
    outcome: "success", failureReason: null,
    insight: "GT + strong brand recognition = low CAC. Kirana distribution via superstockist worked at scale."
  },
  {
    id: 42, brand: "Fresher's Kitchen", category: "Snacks", subcategory: "Regional Snacks",
    priceBand: "₹20-₹60", packSize: "100g", targetAge: "15-40",
    targetIncome: "₹2L-₹8L", channel: "general-trade", cities: ["Tier 2", "Tier 3"],
    cityTier: "Tier 2+3", marketingSpend: "₹15L",
    sellThrough90Days: 0.82, repeatRate: 0.64, cac: 40, margin: 0.28,
    outcome: "success", failureReason: null,
    insight: "Regional taste worked in home market. Distribution via local superstockist efficient. Low margin, high volume."
  },

  // MODERN TRADE SPECIFIC
  {
    id: 43, brand: "Soulfull", category: "Breakfast", subcategory: "Ragi Cereals",
    priceBand: "₹150-₹280", packSize: "300g", targetAge: "25-45",
    targetIncome: "₹6L-₹20L", channel: "modern-trade", cities: ["Bangalore", "Chennai", "Hyderabad"],
    cityTier: "Tier 1", marketingSpend: "₹60L",
    sellThrough90Days: 0.65, repeatRate: 0.42, cac: 180, margin: 0.40,
    outcome: "success", failureReason: null,
    insight: "South India ragi preference drove organic adoption. Big Basket + Reliance Smart worked well."
  },

  // FAILED EXAMPLES FOR LEARNING
  {
    id: 44, brand: "FreshToHome", category: "Seafood", subcategory: "Fresh Fish",
    priceBand: "₹200-₹600", packSize: "500g", targetAge: "28-50",
    targetIncome: "₹8L-₹30L", channel: "d2c-website", cities: ["Kerala", "Bangalore", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹4Cr",
    sellThrough90Days: 0.71, repeatRate: 0.58, cac: 380, margin: 0.28,
    outcome: "partial", failureReason: "Perishable logistics costs destroyed unit economics at scale",
    insight: "Fresh categories need owned logistics. Third-party delivery economics don't work for perishables."
  },
  {
    id: 45, brand: "Good Mylk", category: "Dairy", subcategory: "Plant Milk",
    priceBand: "₹120-₹180", packSize: "200ml", targetAge: "22-38",
    targetIncome: "₹12L-₹40L", channel: "modern-trade", cities: ["Bangalore", "Mumbai"],
    cityTier: "Tier 1", marketingSpend: "₹40L",
    sellThrough90Days: 0.34, repeatRate: 0.18, cac: 580, margin: 0.44,
    outcome: "failure", failureReason: "Plant milk category still nascent. Taste not comparable to dairy for most.",
    insight: "Category creation required. Coffee shops + HoReCa as first channel before retail."
  },
  {
    id: 46, brand: "Rage Coffee", category: "Beverages", subcategory: "Premium Coffee",
    priceBand: "₹700-₹1200", packSize: "250g", targetAge: "22-38",
    targetIncome: "₹12L-₹35L", channel: "d2c-website", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹1.5Cr",
    sellThrough90Days: 0.70, repeatRate: 0.50, cac: 360, margin: 0.56,
    outcome: "success", failureReason: null,
    insight: "Celebrity co-founder (Virat Kohli) drove massive initial awareness. Premium positioning held margin."
  },
  {
    id: 47, brand: "Dr. Vaidya's", category: "Wellness", subcategory: "Ayurveda",
    priceBand: "₹300-₹700", packSize: "30 capsules", targetAge: "30-55",
    targetIncome: "₹6L-₹25L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹1.8Cr",
    sellThrough90Days: 0.68, repeatRate: 0.50, cac: 250, margin: 0.55,
    outcome: "success", failureReason: null,
    insight: "Ayurveda modernised (capsule format) + Amazon Prime subscription = strong repeat. Acquired by RPG Group."
  },
  {
    id: 48, brand: "Kapiva", category: "Wellness", subcategory: "Ayurveda Juices",
    priceBand: "₹400-₹700", packSize: "500ml", targetAge: "28-50",
    targetIncome: "₹8L-₹30L", channel: "d2c-website", cities: ["Delhi", "Mumbai", "Bangalore"],
    cityTier: "Tier 1", marketingSpend: "₹2Cr",
    sellThrough90Days: 0.64, repeatRate: 0.46, cac: 310, margin: 0.50,
    outcome: "success", failureReason: null,
    insight: "Health condition targeting (diabetes, immunity) drove high purchase intent. YouTube health content drove organic."
  },
  {
    id: 49, brand: "Power Gummies", category: "Wellness", subcategory: "Vitamin Gummies",
    priceBand: "₹400-₹800", packSize: "30 gummies", targetAge: "18-38",
    targetIncome: "₹8L-₹25L", channel: "d2c-website", cities: ["Bangalore", "Mumbai", "Delhi"],
    cityTier: "Tier 1", marketingSpend: "₹1.5Cr",
    sellThrough90Days: 0.73, repeatRate: 0.58, cac: 290, margin: 0.60,
    outcome: "success", failureReason: null,
    insight: "Gummy format made supplements fun. Instagram Reels + influencer unboxing drove 45% of traffic."
  },
  {
    id: 50, brand: "Pilgrim", category: "Skincare", subcategory: "Korean Skincare",
    priceBand: "₹350-₹650", packSize: "30ml", targetAge: "18-32",
    targetIncome: "₹6L-₹20L", channel: "marketplace", cities: ["Pan India"],
    cityTier: "Tier 1+2", marketingSpend: "₹2.5Cr",
    sellThrough90Days: 0.74, repeatRate: 0.52, cac: 330, margin: 0.58,
    outcome: "success", failureReason: null,
    insight: "Korean skincare trend + affordable pricing was winning combo. Nykaa marketplace was primary channel."
  }
];

export const categories = [...new Set(launches.map(l => l.category))];
export const channels = ["quick-commerce", "marketplace", "d2c-website", "modern-trade", "general-trade"];
export const cityTiers = ["Tier 1", "Tier 2", "Tier 3", "Tier 1+2", "Tier 1+2+3"];
