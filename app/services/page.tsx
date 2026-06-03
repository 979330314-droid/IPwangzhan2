import { Check, Clock, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceSwitcher } from "@/components/ServiceSwitcher";
import { packageTiers, serviceLines, trainingCurriculum, trainingOutcomes } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero simple-hero">
        <div className="shell narrow">
          <p className="eyebrow">SERVICES</p>
          <h1>我解决 AI 落地问题。</h1>
          <p>
            你可能需要一场培训，也可能需要一套工作流，或者一个智能体系统。先看业务阶段，再决定怎么做。
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <ServiceSwitcher services={serviceLines} />
        </div>
      </section>

      <section className="section-band section-muted">
        <div className="shell split-layout">
          <SectionIntro
            eyebrow="TRAINING CONTENT"
            title="内训先统一认知。"
            body="我会根据企业情况调整内容，核心是通识、提示词、内容营销、智能体、飞书多维表格协同和可选技术能力。"
          />
          <div className="stack-list">
            {trainingCurriculum.map((item) => (
              <p key={item}>
                <Check aria-hidden="true" size={18} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <SectionIntro
            align="center"
            eyebrow="OUTCOMES"
            title="学完要留下东西。"
          />
          <div className="outcome-grid">
            {trainingOutcomes.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-muted">
        <div className="shell">
          <SectionIntro
            eyebrow="PACKAGES"
            title="三档企业服务。"
            body="报价不含差旅，培训讲师与助理通常 2-3 人；具体方案会根据企业情况调整。"
          />
          <div className="pricing-grid">
            {packageTiers.map((tier) => (
              <article className={`pricing-card ${tier.highlighted ? "pricing-card-highlight" : ""}`} key={tier.name}>
                <div className="pricing-head">
                  <p>{tier.name}</p>
                  {tier.highlighted ? <span>推荐</span> : null}
                </div>
                <h2>{tier.price}</h2>
                <p className="pricing-cycle">
                  <Clock aria-hidden="true" size={17} />
                  {tier.cycle}
                </p>
                <p className="pricing-fit">
                  <UsersRound aria-hidden="true" size={17} />
                  {tier.fit}
                </p>
                <div className="pricing-list">
                  {tier.included.map((item) => (
                    <span key={item}>
                      <Check aria-hidden="true" size={16} />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-panel">
          <p className="eyebrow">DIAGNOSIS</p>
          <h2>先把问题发给我。</h2>
          <ButtonLink href="./contact.html">把问题发给我</ButtonLink>
        </div>
      </section>
    </>
  );
}
