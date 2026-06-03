import { CaseExplorer } from "@/components/CaseExplorer";
import { IndustryGrid } from "@/components/IndustryGrid";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionIntro } from "@/components/SectionIntro";
import { caseStudies, industrySolutions } from "@/data/site";

export default function CasesPage() {
  return (
    <>
      <section className="page-hero simple-hero">
        <div className="shell narrow">
          <p className="eyebrow">CASES</p>
          <h1>我做过哪些项目。</h1>
          <p>
            我做过创始人 IP、教育机构、MCN、外贸、广告公司、美业和上市实业企业。不同业务，AI 的进入方式完全不同。
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <SectionIntro
            eyebrow="CASE LIBRARY"
            title="一部分案例"
            body="你可以按企业内训、线下大课、智能体定制和行业覆盖切换查看。"
          />
          <CaseExplorer cases={caseStudies} />
        </div>
      </section>

      <section className="section-band section-muted">
        <div className="shell">
          <SectionIntro
            align="center"
            eyebrow="INDUSTRY MATRIX"
            title="更多行业入口"
            body="这里放的是一些行业入口：内容、销售、交付、协作、知识库，不同行业要拆的点不一样。"
          />
          <IndustryGrid items={industrySolutions} />
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-panel">
          <p className="eyebrow">YOUR CASE</p>
          <h2>你的问题，也可以拆。</h2>
          <ButtonLink href="./contact.html">把问题发给我</ButtonLink>
        </div>
      </section>
    </>
  );
}
