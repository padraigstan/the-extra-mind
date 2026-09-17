(function () {
  const visuals = [
    ['growth-trajectory', 'Growth trajectory represented by rising architectural forms'],
    ['strategic-decisions', 'Strategic choices represented by branching paths and a chess knight'],
    ['cash-flow', 'Cash flow represented by a continuous ribbon moving through transparent vessels'],
    ['customer-growth', 'Customer growth represented by an expanding connected community'],
    ['market-opportunity', 'Market opportunity represented by an open architectural gateway'],
    ['productivity', 'Productivity represented by precision mechanisms and forward motion'],
    ['resilience', 'Business resilience represented by a tree growing through fractured ground'],
    ['business-planning', 'Business planning represented by a blueprint becoming a finished structure'],
    ['teamwork', 'Teamwork represented by people supporting a connected structure'],
    ['innovation', 'Innovation represented by an illuminated faceted sphere'],
    ['risk-management', 'Risk management represented by a shield protecting a growing city'],
    ['funding', 'Business funding represented by ascending circular steps'],
    ['digital-transformation', 'Digital transformation represented by paper becoming structured data'],
    ['legal-confidence', 'Legal confidence represented by balanced scales and an open arch'],
    ['time-saving', 'Time saving represented by a maze opening into a direct route'],
    ['competitive-edge', 'Competitive advantage represented by one route accelerating ahead'],
    ['business-intelligence', 'Business intelligence represented by a connected mind overlooking industry'],
    ['supply-chain', 'Supply chain represented by modular forms moving between destinations'],
    ['customer-insight', 'Customer insight represented by a lens revealing audience patterns'],
    ['sustainability', 'Sustainable business represented by a circular system around a modern city'],
    ['global-expansion', 'Global expansion represented by connected businesses around the world'],
    ['leadership', 'Leadership represented by a figure aligning connected elements'],
    ['focus', 'Business focus represented by a sharply illuminated growth object'],
    ['automation', 'Automation represented by a continuous connected workflow'],
    ['momentum', 'Business momentum represented by a controlled upward chain reaction']
  ];

  const now = new Date();
  const utcDay = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 86400000);
  const [id, alt] = visuals[utcDay % visuals.length];
  const hero = document.getElementById('dailyHero');

  if (hero) {
    hero.src = `https://raw.githubusercontent.com/padraigstan/the-extra-mind_homepage_images/main/daily-visuals/${id}.webp`;
    hero.alt = alt;
  }
})();
