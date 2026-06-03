import { ButtonLink } from "@/components/ButtonLink";
import { SectionIntro } from "@/components/SectionIntro";
import { beliefs, timeline, trustSignals } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero simple-hero">
        <div className="shell narrow">
          <p className="eyebrow">ABOUT</p>
          <h1>我是白先生。</h1>
          <p>
            AI 是工具，商业才是底盘。我从广告行业、大厂平台、创业穿底一路走到 AI 赛道，
            现在做的事，是把抽象的 AI 能力变成你能用的系统。
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <SectionIntro eyebrow="TIMELINE" title="我的来路。" />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-period">
                  <span>{item.period}</span>
                  <strong>{item.signal}</strong>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-muted">
        <div className="shell">
          <SectionIntro
            align="center"
            eyebrow="BELIEFS"
            title="三个判断。"
          />
          <div className="belief-grid">
            {beliefs.map((belief) => (
              <article key={belief.title}>
                <h3>{belief.title}</h3>
                <p>{belief.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell trust-panel">
          <div>
            <p className="eyebrow">TRUST</p>
            <h2>这些经历，变成了我的判断标准。</h2>
          </div>
          <div className="signal-list">
            {trustSignals.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-panel">
          <p className="eyebrow">SERVICES</p>
          <h2>继续看我能怎么帮你。</h2>
          <ButtonLink href="./services.html">查看服务体系</ButtonLink>
        </div>
      </section>
    </>
  );
}
