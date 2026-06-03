import { LeadForm } from "@/components/LeadForm";
import { SectionIntro } from "@/components/SectionIntro";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero simple-hero">
        <div className="shell narrow">
          <p className="eyebrow">CONTACT</p>
          <h1>把问题发给我。</h1>
          <p>
            不用一开始就说要买哪种服务。你先写清楚业务、团队、内容或交付卡点，我来判断适合培训、工作流，还是智能体定制。
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="shell contact-layout">
          <SectionIntro
            eyebrow="LEAD FORM"
            title="先从问题开始。"
            body="这个表单目前是前端演示版。正式使用时，我会把它接到飞书多维表或后端接口里。"
          />
          <LeadForm />
        </div>
      </section>
    </>
  );
}
