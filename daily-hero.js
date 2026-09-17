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

  // The Daily Dozen uses a rolling 12-story window over 24 approved stories.
  // Moving the window by six each UTC day guarantees that at least half of the
  // edition changes, while the first (lead) story always changes as well.
  const stories = [
    ['Technology','ENTIRE 2.0 expands AI and digital support for Irish SMEs','Enterprise Ireland is expanding SME access to AI, data analytics, cybersecurity, IoT and digital expertise.','Enterprise Ireland','7 Sep','https://www.enterprise-ireland.com/en/news/entire-2-0-to-accelerate-ai-adoption-and-digital-transformation','Use outside capability to test technology before committing scarce capital.'],
    ['Procurement','Fresh public tenders are opening new routes to revenue','Current eTenders listings illustrate the breadth of live public-sector demand for Irish suppliers.','eTenders','Current','https://www.etenders.gov.ie/epps/quickSearchAction.do?searchType=cftFTS','Treat procurement as a repeatable sales channel, not a one-off bid.'],
    ['Finance','Energy, transport and materials remain SMEs’ biggest risks','SBCI research places energy, transport, materials and skilled-labour availability among the leading SME concerns.','SBCI','2 Sep','https://www.sbci.gov.ie/news/sme-outlook-report-2026','Benchmark your own exposure rather than assuming cost pressure is unique to your business.'],
    ['Policy','Ireland’s Digital & AI Strategy raises the competitive bar','The national strategy puts enterprise AI adoption, digital capability, infrastructure and skills at the centre of competitiveness.','Government of Ireland','Current','https://www.gov.ie/','Pick workflows where adoption has measurable payback.'],
    ['Funding','Disruptive technology funding rewards preparation','Collaborative commercialisation funding favours businesses that build the consortium and economics before an application window opens.','DETE / Enterprise Ireland','Current','https://enterprise.gov.ie/en/what-we-do/innovation-research-development/disruptive-technologies-innovation-fund/','Use the preparation period to prove the commercial case, not just the technology.'],
    ['Finance','Long-term growth and sustainability finance remains available','Eligible SMEs can investigate State-backed finance for qualifying growth and sustainability investments.','DETE / SBCI','Current','https://enterprise.gov.ie/en/what-we-do/supports-for-smes/access-to-finance/growth-and-sustainability-loan-scheme/','Re-run investments you shelved when the financing environment was less favourable.'],
    ['Economy','Domestic growth is positive, but the quality of growth matters','National growth headlines can conceal very different conditions by sector, customer group and region.','Central Bank of Ireland','Current','https://www.centralbank.ie/publication/quarterly-bulletins','Plan from your own order book, margin and cash data.'],
    ['Labour','A cooler labour market changes the hiring equation','Critical skills may become easier to recruit, but fixed payroll still needs a clear productivity or revenue case.','Central Bank of Ireland','Current','https://www.centralbank.ie/publication/quarterly-bulletins','Separate a capability gap from a simple need for more capacity.'],
    ['Costs','Energy exposure deserves its own scenario','Energy and transport costs remain material enough to model separately rather than burying them in an average overhead figure.','SBCI','Current','https://www.sbci.gov.ie/news/sme-outlook-report-2026','Stress-test margin by product, customer and site.'],
    ['Market','Existing products and EU markets offer underused growth','SMEs are placing more emphasis on growing turnover from existing products and doing more business in EU markets.','SBCI','Current','https://www.sbci.gov.ie/news/sme-outlook-report-2026','Test distribution, pricing and cross-selling before adding complexity.'],
    ['Investment','Low investment can become a productivity trap','Weak capital investment can constrain productivity and future growth even when short-term cost control looks prudent.','Central Bank of Ireland','Current','https://www.centralbank.ie/publication/quarterly-bulletins','Do not solve this year’s cash problem by creating next year’s capability problem.'],
    ['Strategy','The operating stance is selective offence','Resilient activity, stubborn costs and available supports point to disciplined investment rather than blanket retrenchment.','The Extra Mind','Today','#','Protect cash and margin while backing initiatives with measurable payback.'],
    ['Costs','Energy is still the principal recurring cost pressure','Energy, insurance, banking and regulation combine to compress margins across many Irish SMEs.','RTÉ','28 Aug','https://www.rte.ie/news/business/2026/0828/1589503-business-costs-forum/','Benchmark the recurring costs you can control now.'],
    ['Finance','Interest-rate risk belongs in every borrowing decision','Even a small rate move can change working-capital and investment maths for a highly geared business.','European Central Bank','Current','https://www.ecb.europa.eu/press/accounts/html/index.en.html','Re-run planned borrowing across a range, not a single forecast.'],
    ['People','Skills gaps can block growth before headcount does','Sales, marketing, finance and leadership capability can constrain an SME even when the team is busy.','PTSB','Current','https://www.ptsb.ie/about-us/notices/','Name the one capability gap limiting growth; compare hiring, training, outsourcing and automation.'],
    ['Capital','Investor readiness matters before capital becomes urgent','Proposals to channel more institutional and private capital to Irish firms underline the need to prepare early.','IVCA','Current','https://www.ivca.ie/','Build a one-page investor readiness sheet with five traction metrics.'],
    ['Entrepreneurship','New company formation is a demand and competition signal','A healthy flow of new businesses can create potential customers, suppliers and competitors.','CRO','Current','https://www.cro.ie/','Identify which newly forming business segment could become a lead source.'],
    ['Budget','Talent, AI and cyber remain high on the SME policy agenda','Pre-budget submissions continue to focus on digitalisation, talent and simpler business supports.','Department of Finance','Current','https://www.gov.ie/en/department-of-finance/','Build plans on current rules and treat any confirmed relief as upside.'],
    ['Cyber','AI-driven attacks turn cyber into an owner-level risk','A compromised account can interrupt payments, expose customer data and stop operations.','National Cyber Security Centre','Current','https://www.ncsc.gov.ie/','Run a short owner-level incident drill rather than relying only on a written policy.'],
    ['Exports','UK demand signals deserve a fresh customer conversation','Changes in UK business confidence can affect a major market for Irish SME exporters.','Bank of England','Current','https://www.bankofengland.co.uk/','Use the signal to restart customer conversations, not inflate the forecast.'],
    ['Energy','Oil volatility can reach margins quickly','Fuel and freight movements can affect delivery economics before annual pricing catches up.','International Energy Agency','Current','https://www.iea.org/','Model another 10% fuel or freight increase and decide what would trigger repricing.'],
    ['Growth','Public procurement can diversify SME revenue','Public contracts offer scale, but bid effort can destroy margin when opportunities are poorly qualified.','Office of Government Procurement','Current','https://www.gov.ie/en/office-of-government-procurement/','Score fit and economics before writing the bid.'],
    ['Resilience','Trade shocks expose concentrated business risk','National averages can hide vulnerability to one market, supplier, customer or route to market.','Central Bank of Ireland','Current','https://www.centralbank.ie/publication/research-publications','Identify three single points of failure and one alternative for each.'],
    ['Lending','Improving credit conditions do not replace a return case','Better availability of SME credit matters only when borrowing funds a clear, resilient return.','Central Bank of Ireland','Current','https://www.centralbank.ie/statistics/data-and-analysis/credit-and-banking-statistics/bank-lending-to-irish-smes','Prepare the lender case before funding becomes urgent.']
  ];

  const editionFor = day => Array.from({length: 12}, (_, i) => stories[(day * 6 + i) % stories.length]);
  const edition = editionFor(utcDay);
  const previousEdition = editionFor(utcDay - 1);
  const changedCount = edition.filter(story => !previousEdition.some(previous => previous[1] === story[1])).length;
  const escapeHtml = value => String(value).replace(/[&<>\"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[character]));
  const formatDate = day => new Intl.DateTimeFormat('en-IE', {weekday:'long', day:'numeric', month:'long', year:'numeric', timeZone:'UTC'}).format(new Date(day * 86400000));

  function storyTake(story) {
    return `<p style="font-size:18px;line-height:1.55">${escapeHtml(story[2])}</p><div class="take-block"><b>The bottom line</b><div><strong>${escapeHtml(story[6])}</strong></div></div><div class="take-block"><b>What we would test</b><div><ol><li>Commercial impact on revenue, margin, cash or risk</li><li>Whether the decision still works if demand is 10% weaker</li><li>The cost of waiting versus acting now</li></ol></div></div><div class="take-block"><b>Possible action</b><div class="decision-box">Choose one decision this signal could change this week and put a number against it.</div></div>${story[5] === '#' ? '' : `<p><a class="source-link" href="${story[5]}" target="_blank" rel="noopener">Open original source →</a></p>`}`;
  }

  function renderDailyEdition() {
    const grid = document.getElementById('signalGrid');
    if (grid) grid.innerHTML = edition.slice(1).map((story, index) => `<article class="signal-card" onclick="openSignal(${index + 1})"><div class="eyebrow">${escapeHtml(story[0])}</div><h3>${escapeHtml(story[1])}</h3><p>${escapeHtml(story[2])}</p><div class="source">${escapeHtml(story[3])} · ${escapeHtml(story[4])}</div><button class="textbtn">The Extra Mind take →</button></article>`).join('');
    const headline = document.querySelector('.lead h3');
    const deck = document.querySelector('.lead .deck');
    const eyebrow = document.querySelector('.lead .eyebrow');
    const date = document.getElementById('todayDate');
    const note = document.querySelector('.briefline .small');
    if (headline) headline.textContent = edition[0][1];
    if (deck) deck.textContent = edition[0][2];
    if (eyebrow) eyebrow.textContent = edition[0][0];
    if (date) date.textContent = formatDate(utcDay);
    if (note) note.textContent = `Daily edition refreshed: ${changedCount} of 12 articles and the lead story changed since yesterday.`;
    window.openSignal = index => {
      const story = edition[index] || edition[0];
      const modal = document.getElementById('modal');
      if (!modal) return;
      document.getElementById('modalKicker').textContent = `${story[0]} · ${story[3]}`;
      document.getElementById('modalTitle').textContent = story[1];
      document.getElementById('modalBody').innerHTML = storyTake(story);
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    document.documentElement.dataset.editionDay = String(utcDay);
  }

  window.__dailyEdition = {
    utcDay,
    articleIds: edition.map(story => story[1]),
    previousArticleIds: previousEdition.map(story => story[1]),
    changedCount,
    leadChanged: edition[0][1] !== previousEdition[0][1]
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderDailyEdition);
  else setTimeout(renderDailyEdition, 0);
})();
