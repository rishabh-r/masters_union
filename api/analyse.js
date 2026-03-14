import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Inline launches data for serverless (can't import from src/)
const launches = [
  { id:1, brand:"Paper Boat", category:"Beverages", priceBand:"₹20-₹50", packSize:"250ml", targetAge:"18-35", channel:"modern-trade", cityTier:"Tier 1", sellThrough90Days:0.72, repeatRate:0.44, cac:180, margin:0.38, outcome:"success", failureReason:null, insight:"Strong nostalgia positioning drove repeat. Modern trade shelf placement critical." },
  { id:2, brand:"Lahori Zeera", category:"Beverages", priceBand:"₹250-₹350", packSize:"500ml", targetAge:"22-38", channel:"quick-commerce", cityTier:"Tier 1", sellThrough90Days:0.31, repeatRate:0.18, cac:520, margin:0.22, outcome:"partial", failureReason:"Wrong price band for quick commerce impulse buyers", insight:"₹299 too high for impulse buy. Trial pack at ₹49 would have built repeat first." },
  { id:3, brand:"Sleepy Owl Coffee", category:"Beverages", priceBand:"₹250-₹400", packSize:"5-pack", targetAge:"22-32", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.68, repeatRate:0.51, cac:290, margin:0.52, outcome:"success", failureReason:null, insight:"D2C first strategy worked. High repeat due to subscription model." },
  { id:4, brand:"Minimalist", category:"Skincare", priceBand:"₹500-₹700", packSize:"30ml", targetAge:"20-35", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.81, repeatRate:0.62, cac:350, margin:0.65, outcome:"success", failureReason:null, insight:"Ingredient transparency + clinical claims drove trust. D2C first, then Nykaa was right sequence." },
  { id:5, brand:"Dot & Key", category:"Skincare", priceBand:"₹400-₹600", packSize:"50g", targetAge:"22-38", channel:"marketplace", cityTier:"Tier 1", sellThrough90Days:0.71, repeatRate:0.48, cac:310, margin:0.55, outcome:"success", failureReason:null, insight:"Nykaa marketplace drove discovery. Instagram influencers converted at 3.2x ROAS." },
  { id:6, brand:"The Whole Truth", category:"Snacks", priceBand:"₹80-₹120", packSize:"52g", targetAge:"22-38", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.74, repeatRate:0.55, cac:280, margin:0.48, outcome:"success", failureReason:null, insight:"Label transparency was the differentiator. DTC subscription drove repeat." },
  { id:7, brand:"Yoga Bar", category:"Snacks", priceBand:"₹200-₹350", packSize:"400g", targetAge:"25-40", channel:"modern-trade", cityTier:"Tier 1", sellThrough90Days:0.68, repeatRate:0.42, cac:320, margin:0.42, outcome:"success", failureReason:null, insight:"Modern trade shelf space in premium stores was critical." },
  { id:8, brand:"Happilo", category:"Snacks", priceBand:"₹100-₹300", packSize:"200g", targetAge:"25-50", channel:"quick-commerce", cityTier:"Tier 1", sellThrough90Days:0.74, repeatRate:0.52, cac:200, margin:0.40, outcome:"success", failureReason:null, insight:"Blinkit perfect for nuts. Healthy impulse buy category." },
  { id:9, brand:"Wellbeing Nutrition", category:"Wellness", priceBand:"₹800-₹1500", packSize:"30-day supply", targetAge:"25-45", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.77, repeatRate:0.68, cac:420, margin:0.62, outcome:"success", failureReason:null, insight:"Monthly subscription model gave predictable revenue. Doctor endorsements built trust." },
  { id:10, brand:"Bombay Shaving Company", category:"Personal Care", priceBand:"₹400-₹800", packSize:"kit", targetAge:"22-40", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.74, repeatRate:0.52, cac:380, margin:0.55, outcome:"success", failureReason:null, insight:"Male grooming starter kit as gifting product worked." },
  { id:11, brand:"boAt", category:"Electronics", priceBand:"₹999-₹2999", packSize:"single", targetAge:"18-32", channel:"marketplace", cityTier:"Tier 1+2+3", sellThrough90Days:0.78, repeatRate:0.41, cac:380, margin:0.38, outcome:"success", failureReason:null, insight:"Amazon Prime Day + Flipkart Big Billion drove 40% annual revenue." },
  { id:12, brand:"Mamaearth Baby", category:"Personal Care", priceBand:"₹200-₹400", packSize:"200ml", targetAge:"25-38", channel:"marketplace", cityTier:"Tier 1+2+3", sellThrough90Days:0.83, repeatRate:0.71, cac:260, margin:0.52, outcome:"success", failureReason:null, insight:"Toxin-free positioning for babies resonated strongly." },
  { id:13, brand:"Pilgrim", category:"Skincare", priceBand:"₹350-₹650", packSize:"30ml", targetAge:"18-32", channel:"marketplace", cityTier:"Tier 1+2", sellThrough90Days:0.74, repeatRate:0.52, cac:330, margin:0.58, outcome:"success", failureReason:null, insight:"Korean skincare trend + affordable pricing. Nykaa marketplace was primary channel." },
  { id:14, brand:"Power Gummies", category:"Wellness", priceBand:"₹400-₹800", packSize:"30 gummies", targetAge:"18-38", channel:"d2c-website", cityTier:"Tier 1", sellThrough90Days:0.73, repeatRate:0.58, cac:290, margin:0.60, outcome:"success", failureReason:null, insight:"Gummy format made supplements fun. Instagram Reels drove 45% of traffic." },
  { id:15, brand:"Country Delight", category:"Dairy", priceBand:"₹50-₹100", packSize:"500ml", targetAge:"25-45", channel:"d2c-website", cityTier:"Tier 1+2", sellThrough90Days:0.88, repeatRate:0.79, cac:210, margin:0.32, outcome:"success", failureReason:null, insight:"Daily subscription with guaranteed fresh delivery is strongest retention model." },
  { id:16, brand:"Pureplay Skin Sciences", category:"Skincare", priceBand:"₹300-₹500", packSize:"50ml", targetAge:"18-32", channel:"quick-commerce", cityTier:"Tier 1", sellThrough90Days:0.39, repeatRate:0.21, cac:480, margin:0.40, outcome:"failure", failureReason:"Quick commerce not suited for considered skincare purchases", insight:"Skincare requires trust building. Quick commerce impulse buying doesn't apply." },
  { id:17, brand:"Nootrition", category:"Instant Food", priceBand:"₹60-₹90", packSize:"80g", targetAge:"16-28", channel:"quick-commerce", cityTier:"Tier 1", sellThrough90Days:0.44, repeatRate:0.22, cac:310, margin:0.28, outcome:"failure", failureReason:"Health noodles at ₹80 vs Maggi at ₹14 — value equation unclear", insight:"Price gap too high vs incumbents. Sampling was critical." },
  { id:18, brand:"Raw Pressery", category:"Beverages", priceBand:"₹150-₹300", packSize:"250ml", targetAge:"24-40", channel:"modern-trade", cityTier:"Tier 1", sellThrough90Days:0.52, repeatRate:0.31, cac:480, margin:0.38, outcome:"partial", failureReason:"Refrigerated logistics too expensive. Unit economics broke at scale.", insight:"Cold chain complexity kills margin. Shelf-stable alternatives needed." },
  { id:19, brand:"Good Mylk", category:"Dairy", priceBand:"₹120-₹180", packSize:"200ml", targetAge:"22-38", channel:"modern-trade", cityTier:"Tier 1", sellThrough90Days:0.34, repeatRate:0.18, cac:580, margin:0.44, outcome:"failure", failureReason:"Plant milk category still nascent. Taste not comparable to dairy for most.", insight:"Category creation required. Coffee shops + HoReCa as first channel before retail." },
  { id:20, brand:"The Derma Co", category:"Skincare", priceBand:"₹400-₹800", packSize:"30ml", targetAge:"22-40", channel:"marketplace", cityTier:"Tier 1+2", sellThrough90Days:0.76, repeatRate:0.54, cac:320, margin:0.58, outcome:"success", failureReason:null, insight:"Dermat recommendation angle built trust. Amazon + Nykaa combination maximised reach." },
];

function findComparables(product) {
  return launches
    .filter(l => {
      const catMatch = l.category.toLowerCase() === product.category.toLowerCase();
      const channelMatch = l.channel === product.channel;
      const ageMatch = l.targetAge === product.targetAge;
      return catMatch || channelMatch || ageMatch;
    })
    .slice(0, 8);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const product = req.body;

  if (!product.category || !product.channel || !product.priceBand) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const comparables = findComparables(product);

  const prompt = `You are BrandScale OS — India's most advanced consumer brand distribution intelligence engine.

A founder wants to launch this product:
- Brand/Product: ${product.brandName || 'New Brand'}
- Category: ${product.category}
- Subcategory: ${product.subcategory || product.category}
- Price Band: ${product.priceBand}
- Pack Size: ${product.packSize}
- Target Age: ${product.targetAge}
- Target Income: ${product.targetIncome}
- Preferred Channel: ${product.channel}
- Launch Cities: ${product.cities || 'Delhi, Mumbai, Bangalore'}
- City Tier: ${product.cityTier || 'Tier 1'}

Here are comparable product launches from our database:
${JSON.stringify(comparables, null, 2)}

Based on this data, provide a JSON response with EXACTLY this structure:
{
  "successScore": <number 0-100>,
  "pmfScore": <number 0-100>,
  "verdict": "<one line verdict — max 15 words>",
  "channelScores": [
    { "channel": "Quick Commerce (Blinkit/Zepto)", "score": <0-100>, "reason": "<max 12 words>" },
    { "channel": "Marketplace (Amazon/Flipkart)", "score": <0-100>, "reason": "<max 12 words>" },
    { "channel": "D2C Website", "score": <0-100>, "reason": "<max 12 words>" },
    { "channel": "Modern Trade", "score": <0-100>, "reason": "<max 12 words>" },
    { "channel": "General Trade", "score": <0-100>, "reason": "<max 12 words>" }
  ],
  "channelSequence": [
    { "phase": "Month 1-3", "action": "<specific channel and city>", "why": "<max 10 words>" },
    { "phase": "Month 4-6", "action": "<next channel or expansion>", "why": "<max 10 words>" },
    { "phase": "Month 7-12", "action": "<further expansion>", "why": "<max 10 words>" }
  ],
  "recommendations": [
    { "type": "pricing", "title": "<short title>", "detail": "<specific actionable advice max 20 words>", "impact": "<e.g. +8% success rate>" },
    { "type": "city", "title": "<short title>", "detail": "<specific cities and why max 20 words>", "impact": "<e.g. +12% success rate>" },
    { "type": "pack", "title": "<short title>", "detail": "<pack size/format advice max 20 words>", "impact": "<e.g. +6% success rate>" }
  ],
  "redFlags": ["<risk 1 max 12 words>", "<risk 2 max 12 words>"],
  "estimatedMetrics": {
    "cac": "<₹XXX-₹YYY>",
    "repeatRate": "<XX-XX%>",
    "sellThrough90": "<XX-XX%>",
    "timeToBreakeven": "<X-Y months>"
  },
  "comparablesUsed": ${comparables.length}
}

Be data-driven, specific, and direct. No generic advice. Base everything on the comparable launches provided.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const analysis = JSON.parse(completion.choices[0].message.content);
    res.json({ analysis, comparables });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Analysis failed', detail: err.message });
  }
}
