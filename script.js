(() => {
  // ---------- Traduções (o português fica no HTML; aqui só o inglês) ----------
  const EN = {
    skip: 'Skip to content',
    brandTag: 'Physician',
    eyebrow: 'PHYSICIAN · CRM-RS [nº], BRAZIL',
    navContent: 'Content', navTool: 'Tool', navResearch: 'Research', navAbout: 'About', navContact: 'Contact',
    heroTitle: 'Evidence-based medicine, with numbers and sources',
    heroLead: 'I am Dr. Vitor Panizzon Spanholo, a physician trained in Brazil. Here I share patient-facing explanations on metabolism, weight and prevention, and the clinical research I do in oncology.',
    heroCta1: 'Read the content', heroCta2: 'About me',
    findTitle: 'What you will find here',
    find1k: 'For patients', find1t: 'Common questions, answered with trials',
    find1p: 'Metabolism, weight and prevention in plain language. Each answer shows the study behind it, and what that study does not show.',
    find2k: 'Tool', find2t: 'BMI and waist-to-height',
    find2p: 'A calculator with the guideline interpretation, so you understand both numbers before your visit.',
    find3k: 'For clinicians', find3t: 'Clinical research',
    find3p: 'Publications, posters and ongoing projects, focused on oncology and metabolism.',
    contentKicker: 'Patient education', contentTitle: 'What the trials show',
    contentIntro: 'Short answers, with the numbers from the original study. They do not replace a medical visit; they help you walk into one with the right questions.',
    q1: 'How much weight do people lose on semaglutide or tirzepatide?',
    a1: `<p>In the two pivotal obesity trials, in adults without diabetes who also received diet and physical activity counseling:</p>
      <ul class="stats">
        <li><span class="stat">−14.9%</span> <span>body weight with weekly <strong>semaglutide 2.4 mg</strong> over 68 weeks, vs −2.4% with placebo (STEP 1).</span></li>
        <li><span class="stat">−20.9%</span> <span>with weekly <strong>tirzepatide 15 mg</strong> over 72 weeks, vs −3.1% with placebo. With 5 mg, −15.0%; with 10 mg, −19.5% (SURMOUNT-1).</span></li>
      </ul>
      <p><strong>How to read it:</strong> these are group averages. Some people lose much more, others much less. The most common adverse events were gastrointestinal (nausea, diarrhea), mostly mild to moderate and concentrated during dose escalation.</p>
      <p class="refs">Sources: Wilding JPH et al. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener">N Engl J Med 2021;384:989-1002</a> · Jastreboff AM et al. <a href="https://doi.org/10.1056/NEJMoa2206038" target="_blank" rel="noopener">N Engl J Med 2022;387:205-216</a></p>`,
    q2: 'If I stop the medication, does the weight come back?',
    a2: `<p>Two trials tested exactly this. Everyone took the drug for several months; then some participants were switched to placebo without knowing.</p>
      <ul class="stats">
        <li><span class="stat">+6.9%</span> <span><strong>STEP 4:</strong> after 20 weeks of semaglutide (−10.6%), those switched to placebo regained 6.9% by week 68. Those who continued lost a further 7.9%.</span></li>
        <li><span class="stat">+14.0%</span> <span><strong>SURMOUNT-4:</strong> after 36 weeks of tirzepatide (−20.9%), those switched to placebo regained 14.0% by week 88. Those who continued lost a further 5.5%.</span></li>
      </ul>
      <p><strong>How to read it:</strong> obesity is a chronic disease, and the drug's effect depends on continued use. Stopping, pausing or changing the dose is a decision to make with your physician.</p>
      <p class="limit"><strong>What we still do not know:</strong> whether tapering the dose, instead of stopping, protects against regain. Data on this are still limited.</p>
      <p class="refs">Sources: Rubino D et al. <a href="https://doi.org/10.1001/jama.2021.3224" target="_blank" rel="noopener">JAMA 2021;325:1414-1425</a> · Aronne LJ et al. <a href="https://doi.org/10.1001/jama.2023.24945" target="_blank" rel="noopener">JAMA 2024;331:38-48</a></p>`,
    q3: 'Why measure the waist, and not just BMI?',
    a3: `<p>BMI does not separate fat from muscle, nor show where fat is stored. Abdominal fat is the most strongly linked to type 2 diabetes, hypertension and cardiovascular disease.</p>
      <p>The <strong>waist-to-height ratio</strong> is waist circumference divided by height, in the same unit. The UK guideline (NICE) classifies it as:</p>
      <ul class="stats">
        <li><span class="stat">0.40–0.49</span> <span>no increased risk</span></li>
        <li><span class="stat">0.50–0.59</span> <span>increased risk</span></li>
        <li><span class="stat">≥ 0.60</span> <span>further increased risk</span></li>
      </ul>
      <p><strong>Rule of thumb:</strong> keep your waist to less than half your height.</p>
      <p class="limit"><strong>Limits:</strong> applies to adults with a BMI under 35, of both sexes and all ethnicities. It is a risk marker, not a diagnosis.</p>
      <p class="refs">Source: NICE. <a href="https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity" target="_blank" rel="noopener">Overweight and obesity management (NG246), recommendation 1.9.14</a></p>`,
    toolKicker: 'Tool', toolTitle: 'BMI and waist-to-height calculator',
    toolIntro: 'For adults. Your data stays in your browser: nothing is sent or stored.',
    fWeight: 'Weight (kg)', fHeight: 'Height (cm)', fWaist: 'Waist (cm) · optional',
    fHelp: 'Measure your waist midway between the lowest rib and the top of the hip bone, after breathing out normally.',
    rBmi: 'BMI', rWhtr: 'Waist-to-height',
    toolFine: 'BMI classified by WHO; waist-to-height by NICE (NG246). For people of South Asian, Chinese, Middle Eastern, Black African or African-Caribbean family background, NICE uses lower BMI thresholds (23 for overweight and 27.5 for obesity). Educational result: not a substitute for medical assessment.',
    resKicker: 'Research', resTitle: 'Publications and presentations',
    pubArticle: 'Review article', pubPoster: 'Poster', pubTrial: 'Clinical research',
    pubTrialText: 'ULBRA site team for the <em>Rosa dos Ventos</em> multicenter heart failure study: eligibility, consent, enrollment and data collection.',
    ongoingTitle: 'Ongoing',
    ongoingText: 'Systematic reviews and meta-analyses in gastrointestinal and urologic oncology, in collaboration with researchers in Brazil and the United States.',
    aboutKicker: 'About',
    aboutIntro: 'Physician trained at ULBRA, practicing urgent and primary care in southern Brazil. My academic interests are oncology and endocrinology. What connects them is the same principle behind my content: decide based on what the study showed, and explain it in a way patients understand.',
    contactKicker: 'Contact', contactTitle: 'Research, press and invitations',
    contactIntro: 'For research collaboration, interviews or talks, please reach out by email.',
    contactNotice: 'I do not answer questions about individual cases by message or social media. In an emergency, go to the nearest emergency department.',
    footerEdu: 'Educational content. Not a substitute for medical care.',
    footerBrand: 'Promethya · evidence-based health education',
    footerUpdated: 'Updated September 2026'
  };

  const TITLES = {
    pt: document.title,
    en: 'Dr. Vitor Panizzon Spanholo, MD · Evidence-based medicine'
  };

  const nodes = document.querySelectorAll('[data-i18n]');
  const PT = {};
  nodes.forEach(el => { PT[el.dataset.i18n] = el.innerHTML; });

  let lang = 'pt';

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'pt';
    const dict = lang === 'en' ? EN : PT;
    nodes.forEach(el => {
      const html = dict[el.dataset.i18n];
      if (html !== undefined) el.innerHTML = html;
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = TITLES[lang];
    document.querySelectorAll('.lang button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
    calc();
  }

  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => {
      setLang(b.dataset.lang);
      const url = new URL(location.href);
      if (lang === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    });
  });

  // ---------- Menu mobile ----------
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // ---------- Calculadora ----------
  const $ = id => document.getElementById(id);
  const inputs = ['peso', 'altura', 'cintura'].map($);

  const TXT = {
    pt: {
      empty: 'Preencha peso e altura.', emptyW: 'Preencha cintura e altura.',
      bmi: ['Abaixo do peso', 'Faixa adequada', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'],
      whtrLow: 'Abaixo da faixa de referência (0,40–0,49)',
      whtr: ['Sem aumento de risco', 'Risco aumentado', 'Risco mais alto'],
      whtrNA: 'Não se aplica com IMC ≥ 35 (NICE)'
    },
    en: {
      empty: 'Enter weight and height.', emptyW: 'Enter waist and height.',
      bmi: ['Underweight', 'Healthy range', 'Overweight', 'Obesity class 1', 'Obesity class 2', 'Obesity class 3'],
      whtrLow: 'Below the reference range (0.40–0.49)',
      whtr: ['No increased risk', 'Increased risk', 'Further increased risk'],
      whtrNA: 'Not applicable with BMI ≥ 35 (NICE)'
    }
  };

  const fmt = (n, d) => n.toLocaleString(lang === 'en' ? 'en-US' : 'pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
  const num = el => { const v = parseFloat(String(el.value).replace(',', '.')); return isFinite(v) && v > 0 ? v : null; };

  function show(prefix, value, note, level) {
    $(prefix + 'Value').textContent = value;
    $(prefix + 'Note').textContent = note;
    const box = $(prefix + 'Value').closest('.result');
    if (level === null) box.removeAttribute('data-level'); else box.dataset.level = level;
  }

  function calc() {
    const t = TXT[lang];
    const [w, h, waist] = inputs.map(num);
    let bmi = null;

    if (w && h && h >= 100 && h <= 250 && w >= 20 && w <= 400) {
      bmi = w / Math.pow(h / 100, 2);
      const i = bmi < 18.5 ? 0 : bmi < 25 ? 1 : bmi < 30 ? 2 : bmi < 35 ? 3 : bmi < 40 ? 4 : 5;
      show('bmi', fmt(bmi, 1), t.bmi[i], i === 1 ? 1 : i === 0 ? 0 : Math.min(i, 3));
    } else {
      show('bmi', '—', t.empty, null);
    }

    if (waist && h && h >= 100 && h <= 250 && waist >= 40) {
      const r = waist / h;
      if (bmi !== null && bmi >= 35) {
        show('whtr', fmt(r, 2), t.whtrNA, 0);
      } else {
        const note = r < 0.4 ? t.whtrLow : r < 0.5 ? t.whtr[0] : r < 0.6 ? t.whtr[1] : t.whtr[2];
        const level = r < 0.4 ? 0 : r < 0.5 ? 1 : r < 0.6 ? 2 : 3;
        show('whtr', fmt(r, 2), note, level);
      }
    } else {
      show('whtr', '—', t.emptyW, null);
    }
  }

  inputs.forEach(el => el.addEventListener('input', calc));
  $('calc').addEventListener('submit', e => e.preventDefault());

  // ---------- Animação de entrada ----------
  const revealables = document.querySelectorAll('.card, .faq details, .pubs li, .result');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    revealables.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }

  // ---------- Idioma inicial: ?lang=en > preferência salva > português ----------
  let initial = new URLSearchParams(location.search).get('lang');
  if (!initial) { try { initial = localStorage.getItem('lang'); } catch (e) {} }
  setLang(initial === 'en' ? 'en' : 'pt');
})();
