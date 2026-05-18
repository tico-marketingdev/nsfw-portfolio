export default function Home() {
  return (
    <main className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <p className="eyebrow">Performance Marketing — Case Portfolio</p>
        <h1>
          Hewerton Ferreira
          <br />
          <em>Digital Performance Manager</em>
        </h1>
        <p className="hero-sub">
          8+ years driving paid traffic across verticals. This portfolio covers a
          6-month engagement managing paid acquisition for adult content creators
          — combining programmatic media, funnel design, AI tooling, and
          real-time optimization across a multi-platform NSFW operation.
        </p>
        <div className="hero-meta">
          <span className="meta-pill">São Paulo, Brazil</span>
          <span className="meta-pill">Remote-first</span>
          <span className="meta-pill">hewertonsf@gmail.com</span>
        </div>
      </section>

      <hr className="divider" />

      {/* ── 01 THE OPERATION ── */}
      <section className="sec">
        <p className="sec-label">01 — The Operation</p>
        <h2>Structure &amp; Scope</h2>
        <p className="sec-desc">
          Managed paid media for three active creator profiles simultaneously,
          leading a 2-person analyst team. Built the full acquisition
          architecture from Business Manager setup to tracking and reporting.
        </p>

        <div className="timeline">
          <span className="tl-node">Sep 2025</span>
          <span className="tl-line" />
          <span className="tl-node">Onboarding</span>
          <span className="tl-line" />
          <span className="tl-node">3 Creators Live</span>
          <span className="tl-line" />
          <span className="tl-node">Mar 2026</span>
        </div>

        <div className="op-grid">
          <div className="op-cell">
            <div className="op-cell-label">Team</div>
            <div className="op-cell-val">
              <strong>3 people</strong> — me + 2 paid media analysts
            </div>
          </div>
          <div className="op-cell">
            <div className="op-cell-label">Platforms managed</div>
            <div className="op-cell-val">
              <strong>OnlyFans + Fansly</strong> — free profiles with paid VIP
              tiers
            </div>
          </div>
          <div className="op-cell">
            <div className="op-cell-label">Media channels</div>
            <div className="op-cell-val">
              Instagram · X/Twitter · TrafficJunky · OnClicka · Telegram Rich
              Ads
            </div>
          </div>
          <div className="op-cell">
            <div className="op-cell-label">Monetization model</div>
            <div className="op-cell-val">
              Free profile → VIP upsell → PPV content via{" "}
              <strong>Chatters</strong>
            </div>
          </div>
          <div className="op-cell op-wide">
            <div className="op-cell-label">My responsibilities</div>
            <div className="op-cell-val">
              Campaign creation &amp; optimization · Business Manager setup
              across all channels · Weekly P&amp;L reporting to GM · Quarterly
              QBR to CMO · Creative flow ideation with copy + art teams ·
              GG/SWAP promotions coordination via Telegram · Profitability
              tracking (investment, return, payback period)
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── 02 RESULTS ── */}
      <section className="sec">
        <p className="sec-label">02 — Results</p>
        <h2>Creator Performance</h2>
        <p className="sec-desc">
          All three creators ran free + VIP profile models. Metrics measured
          over 6 months. Revenue benchmarks informed CPL targets per profile
          tier.
        </p>

        <div className="creators-grid">
          {/* Creator A */}
          <div className="creator-card">
            <div className="creator-letter">A</div>
            <div className="creator-niche">Asian · Chinese Girl</div>
            <div className="metric">
              <div className="metric-label">New subscribers / month</div>
              <div className="metric-val">
                2,000<span className="unit">/mo</span>
              </div>
              <span className="badge badge-green">+25% QoQ</span>
            </div>
            <div className="metric">
              <div className="metric-label">Avg. CPL</div>
              <div className="metric-val">
                $2<span className="unit">USD</span>
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Monthly revenue</div>
              <div className="metric-val">
                &gt;$100k<span className="unit">USD</span>
              </div>
              <span className="badge badge-amber">Top performer</span>
            </div>
            <div className="rev-bar">
              <div className="rev-fill" style={{ width: "100%" }} />
            </div>
            <div className="rev-label">Revenue index</div>
          </div>

          {/* Creator B */}
          <div className="creator-card">
            <div className="creator-letter">B</div>
            <div className="creator-niche">Asian · Pornstar profile</div>
            <div className="metric">
              <div className="metric-label">New subscribers / month</div>
              <div className="metric-val">
                800<span className="unit">/mo</span>
              </div>
              <span className="badge badge-green">+8% QoQ</span>
            </div>
            <div className="metric">
              <div className="metric-label">Avg. CPL</div>
              <div className="metric-val">
                $5<span className="unit">USD</span>
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Monthly revenue</div>
              <div className="metric-val">
                $15–50k<span className="unit">USD</span>
              </div>
            </div>
            <div className="rev-bar">
              <div className="rev-fill" style={{ width: "40%" }} />
            </div>
            <div className="rev-label">Revenue index</div>
          </div>

          {/* Creator C */}
          <div className="creator-card">
            <div className="creator-letter">C</div>
            <div className="creator-niche">Trans · Niche profile</div>
            <div className="metric">
              <div className="metric-label">New subscribers / month</div>
              <div className="metric-val">
                100<span className="unit">/mo</span>
              </div>
              <span className="badge badge-green">+15% QoQ</span>
            </div>
            <div className="metric">
              <div className="metric-label">Avg. CPL</div>
              <div className="metric-val">
                $5<span className="unit">USD</span>
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Monthly revenue</div>
              <div className="metric-val">
                $15–50k<span className="unit">USD</span>
              </div>
            </div>
            <div className="rev-bar">
              <div className="rev-fill" style={{ width: "40%" }} />
            </div>
            <div className="rev-label">Revenue index</div>
          </div>
        </div>

        {/* Efficiency row */}
        <div className="eff-grid">
          <div className="eff-cell">
            <div className="op-cell-label">CPC — TrafficJunky</div>
            <div className="eff-num">$0.02</div>
            <div className="eff-sub">per qualified click</div>
          </div>
          <div className="eff-cell">
            <div className="op-cell-label">Avg. session duration</div>
            <div className="eff-num">45s</div>
            <div className="eff-sub">on creator hotsites</div>
          </div>
          <div className="eff-cell">
            <div className="op-cell-label">Channels operated</div>
            <div className="eff-num">5</div>
            <div className="eff-sub">simultaneously, per creator</div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── 03 HOW I THINK ── */}
      <section className="sec">
        <p className="sec-label">03 — How I Think</p>
        <h2>Growth Mindset &amp; Strategy</h2>
        <p className="sec-desc">
          The metrics above came from systematic decision-making. Here&apos;s
          the thinking behind the results.
        </p>

        <div className="thinking-grid">
          <div className="think-card">
            <div className="think-icon">◈</div>
            <div className="think-title">CPL-to-revenue tiering</div>
            <div className="think-body">
              Didn&apos;t apply a flat CPL target across creators.
              Reverse-engineered from{" "}
              <strong>each creator&apos;s actual revenue</strong>: Creator A at
              $100k+/mo could absorb a $2 CPL profitably; B and C at lower
              tiers warranted $5 with tighter payback windows.
            </div>
          </div>
          <div className="think-card">
            <div className="think-icon">◈</div>
            <div className="think-title">Multi-channel funnel by intent</div>
            <div className="think-body">
              Structured channels by audience temperature:{" "}
              <strong>Instagram + X</strong> for SFW brand awareness;{" "}
              <strong>TrafficJunky + OnClicka + Telegram</strong> for
              high-intent traffic to the hotsite, tracked via GA4 + Voluum.
            </div>
          </div>
          <div className="think-card">
            <div className="think-icon">◈</div>
            <div className="think-title">Operational leverage</div>
            <div className="think-body">
              Designed the campaign structure to be{" "}
              <strong>delegatable</strong>. Both analysts could execute
              optimizations independently, while I owned strategy, reporting,
              and P&amp;L. Freed my time for cross-creator insights and promo
              coordination.
            </div>
          </div>
          <div className="think-card">
            <div className="think-icon">◈</div>
            <div className="think-title">Data as a daily habit</div>
            <div className="think-body">
              Weekly Excel + Power BI dashboards to GM; quarterly QBR to CMO
              with full sector metrics.{" "}
              <strong>Built the reporting infrastructure proactively</strong> —
              giving leadership visibility they didn&apos;t have before.
            </div>
          </div>
        </div>

        {/* Funnel */}
        <div className="funnel-wrap">
          <div className="funnel-label-header">
            Acquisition funnel — Creator A (representative)
          </div>
          {[
            { label: "Paid impression", width: "100%", text: "IG · X · TJ · OCA · TG", metric: "", metricClass: "" },
            { label: "Hotsite click", width: "70%", text: "$0.02 CPC avg", metric: "45s session", metricClass: "gold" },
            { label: "Free sub", width: "45%", text: "$2.00 CPL", metric: "2,000 / mo", metricClass: "gold" },
            { label: "VIP upsell", width: "22%", text: "Chatters", metric: "", metricClass: "" },
            { label: "PPV revenue", width: "10%", text: "$100k+ /mo", metric: "↑ Top creator", metricClass: "green" },
          ].map((row) => (
            <div className="funnel-row" key={row.label}>
              <div className="funnel-label">{row.label}</div>
              <div className="funnel-bar-bg">
                <div className="funnel-fill" style={{ width: row.width }}>
                  {row.text}
                </div>
              </div>
              <div className={`funnel-metric ${row.metricClass}`}>
                {row.metric}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── 04 TECH STACK ── */}
      <section className="sec">
        <p className="sec-label">04 — Tech &amp; AI Stack</p>
        <h2>Tools I actually use</h2>
        <p className="sec-desc">
          Not a list of logos I&apos;ve touched. These are tools I used daily
          in this operation — and across previous campaigns in other verticals.
        </p>

        <div className="stack-grid">
          {[
            { cat: "AI / Workflows", tool: "Claude (Anthropic)", desc: "Flow design, campaign logic, data interpretation, strategic ideation", skill: 90 },
            { cat: "AI / Copy", tool: "ChatGPT", desc: "Ad copy, captions, VIP messaging scripts for Chatters team", skill: 85 },
            { cat: "Tracking", tool: "Voluum", desc: "Granular click and conversion tracking across programmatic channels", skill: 80 },
            { cat: "Analytics", tool: "GA4", desc: "Session quality, user journey, and hotsite behavior analysis", skill: 90 },
            { cat: "Creator Ops", tool: "Infloww", desc: "PPV management, tracking links, and free trial link generation", skill: 75 },
            { cat: "Automation", tool: "Make", desc: "Workflow automation for reporting pipelines and data triggers", skill: 65 },
            { cat: "Reporting", tool: "Power BI + Excel", desc: "Weekly ops dashboards and quarterly QBR decks for leadership", skill: 85 },
            { cat: "Paid Channels", tool: "TrafficJunky", desc: "Primary programmatic channel — $0.02 avg CPC at volume", skill: 80 },
            { cat: "Paid Channels", tool: "OnClicka · Telegram Ads", desc: "Push and rich-format placements for hotsite traffic", skill: 70 },
            { cat: "Social Channels", tool: "Instagram · X / Twitter", desc: "SFW brand-building and engagement for top-of-funnel warm audiences", skill: 85 },
            { cat: "Mainstream Paid", tool: "Google Ads · Meta Ads", desc: "Full-funnel campaigns across verticals — 10/10 proficiency, 8+ years", skill: 100 },
            { cat: "DSPs", tool: "DV360 · Xandr", desc: "Programmatic buying for brand campaigns in previous roles", skill: 75 },
          ].map((item) => (
            <div className="stack-card" key={item.tool}>
              <div className="stack-cat">{item.cat}</div>
              <div className="stack-tool">{item.tool}</div>
              <div className="stack-desc">{item.desc}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${item.skill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── 05 BEYOND ── */}
      <section className="sec">
        <p className="sec-label">05 — Beyond This Vertical</p>
        <h2>Broader track record</h2>
        <p className="sec-desc">
          The NSFW operation was one chapter. Here&apos;s the context behind 8+
          years of performance work across industries.
        </p>

        <div className="beyond-grid">
          {[
            {
              sector: "B2B / Lead Gen",
              title: "Full Google Ads build from zero",
              body: "Search + Demand Gen + GA4 + CRM/WhatsApp bot + offline conversion import. Built the entire pipeline, not just the campaigns.",
            },
            {
              sector: "Health & Beauty",
              title: "Meta Ads — Aesthetic Clinic",
              body: "Structured creative testing framework. Reduced CPL significantly while tripling qualified lead volume through audience segmentation and creative iteration.",
            },
            {
              sector: "Education",
              title: "Enrollment campaigns · Agency",
              body: "Specialized in school enrollment cycles — seasonality, urgency mechanics, and local geo targeting across Meta and Google.",
            },
            {
              sector: "Finance & Tech",
              title: "All Set Comunicação",
              body: "Managed $50k+/month BRL budgets per brand across Meta, LinkedIn, and Google. Weekly and monthly client reporting across finance and tech verticals.",
            },
            {
              sector: "Latam / LinkedIn",
              title: "Uno Design — R$7M in LinkedIn Ads",
              body: "Managed R$7M in LinkedIn Ads across Latin America. Direct contact with LinkedIn account managers and C-level decision makers at enterprise clients.",
            },
            {
              sector: "Data & Infra",
              title: "Analytics infrastructure",
              body: "Built ETL pipelines (Python + Supabase), React dashboards with real data, and quiz lead-gen tools with Notion API and serverless functions.",
            },
          ].map((item) => (
            <div className="beyond-card" key={item.title}>
              <div className="beyond-sector">{item.sector}</div>
              <div className="beyond-title">{item.title}</div>
              <div className="beyond-body">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-name">Hewerton Ferreira</div>
        <div className="footer-contact">hewertonsf@gmail.com</div>
      </footer>

    </main>
  );
}
