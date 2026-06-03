import { brand, caseStudies, heroStats, serviceLines, trustSignals } from "@/data/site";
import { ComingSoonLink } from "@/components/ComingSoonLink";
import { LavroMotion } from "@/components/LavroMotion";

const caseWallTitles = ["清华陈晶聊商业", "优核国际教育", "无忧传媒新媒体学苑", "卓豪眼镜"];

const caseWallImages: Record<string, string> = {
  清华陈晶聊商业: "./cases/qinghua-chenjing.jpg",
  优核国际教育: "./cases/youhe-education.jpg",
  无忧传媒新媒体学苑: "./cases/wuyou-media.jpg",
  卓豪眼镜: "./cases/zhuohao-glasses.jpg"
};

const currentFocus = ["企业 AI 内训", "IP 内容工作流", "智能体定制", "飞书多维表格", "商业 IP 系统"];

const questionConsults = [
  {
    title: "我适合先做哪种 AI 落地？",
    body: "如果你还不确定该做内训、工作流还是智能体，我会先帮你判断优先级。"
  },
  {
    title: "团队学完 AI 以后怎么真正用起来？",
    body: "很多团队不是不会工具，而是不知道放到岗位流程的哪一步。"
  },
  {
    title: "个人 IP 怎么用 AI 提升内容和成交？",
    body: "从资料库、选题、文案到私域转化，先把经验沉淀成系统。"
  },
  {
    title: "已有业务能不能做成智能体或工作流？",
    body: "把重复沟通、内容生产、客户接待、交付服务拆出来，看哪些值得自动化。"
  }
];

export default function HomePage() {
  const caseWallItems = caseWallTitles
    .map((title) => caseStudies.find((item) => item.title === title))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item));

  return (
    <div className="lavro-inspired-page">
      <section className="lavro-hero" aria-label="白先生 AI·IP 首屏">
        <LavroMotion />
        <div className="lavro-hero-plane lavro-hero-plane-dark" />
        <div className="lavro-hero-plane lavro-hero-plane-light" />
        <div className="lavro-neon-cut" />
        <div className="lavro-orbit lavro-orbit-one" />
        <div className="lavro-orbit lavro-orbit-two" />

        <div className="lavro-hero-content">
          <p className="lavro-terminal">BAI.AI-IP // PERSONAL SITE</p>
          <h1 className="lavro-hero-wordmark" data-text="AIIP—白先生">AIIP—白先生</h1>
          <p className="lavro-hero-subtitle">AI 落地 / IP 商业化</p>
          <p className="lavro-hero-copy">{brand.subline}</p>
          <div className="lavro-hero-actions">
            <ComingSoonLink href="./contact.html">联系我</ComingSoonLink>
            <ComingSoonLink href="./cases.html">查看案例</ComingSoonLink>
          </div>
        </div>

        <div className="lavro-scroll-indicator">
          <span>SCROLL</span>
          <b>⌄</b>
        </div>
      </section>

      <section className="lavro-section lavro-intro-section lavro-reveal">
        <div className="lavro-section-heading">
          <p className="lavro-terminal">ONLINE ROUTINE. AI BUSINESS SYNC.</p>
          <h2>我的经历</h2>
          <div className="lavro-stats">
            {heroStats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lavro-intro-copy">
          <p>
            我从广告公司、大厂内容平台一路走到创业和 AI 赛道，做过品牌营销、游戏合作、新媒体内容，
            也经历过餐饮、剧本杀、短视频和课程转型。2023 年 GPT 爆发后，我开始把 AI 放进内容、IP、销售和交付里。
          </p>
          <figure className="lavro-portrait">
            <img src="./bai-portrait.jpg" alt="白先生个人照片" />
          </figure>
        </div>
      </section>

      <section className="lavro-section lavro-question-section lavro-reveal">
        <div className="lavro-section-heading">
          <p className="lavro-terminal">/// 01. CASE WALL</p>
          <h2>案例区</h2>
        </div>
        <div className="lavro-case-wall-grid">
          {caseWallItems.map((item, index) => (
            <ComingSoonLink className="lavro-case-wall-card" href="./cases.html" key={item.title}>
              <figure>
                <img src={caseWallImages[item.title]} alt={`${item.title}现场照片`} />
              </figure>
              <div>
                <span>/// {String(index + 1).padStart(2, "0")}</span>
                <small>{item.category} / {item.industry}</small>
                <strong>{item.title}</strong>
                <p>{item.outcome}</p>
              </div>
            </ComingSoonLink>
          ))}
          <ComingSoonLink className="lavro-case-wall-more" href="./cases.html">
            <span className="lavro-case-wall-runner">
              <span>VIEW MORE</span>
              <strong>查看更多案例</strong>
            </span>
          </ComingSoonLink>
        </div>
      </section>

      <section className="lavro-section lavro-split-section lavro-services-section lavro-reveal">
        <div className="lavro-service-copy">
          <p className="lavro-terminal">/// 02. CURRENTLY BUILDING</p>
          <h2>产品服务</h2>
          <div className="lavro-chip-list">
            {currentFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="lavro-service-list">
          {serviceLines.map((service) => (
            <article key={service.id}>
              <span>{service.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lavro-section lavro-reveal">
        <div className="lavro-section-heading">
          <p className="lavro-terminal">/// 03. QUESTION CONSULTING</p>
          <h2>问题咨询</h2>
        </div>
        <div className="lavro-question-grid">
          {questionConsults.map((item, index) => (
            <ComingSoonLink className="lavro-question-card" href="./contact.html" key={item.title}>
              <span>Q{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </ComingSoonLink>
          ))}
          <ComingSoonLink className="lavro-question-cta" href="./contact.html">
            <span className="lavro-question-runner">
              <span>BOOK ASSESSMENT</span>
              <strong>预约测评</strong>
            </span>
          </ComingSoonLink>
        </div>
      </section>

      <section className="lavro-section lavro-contact-section lavro-reveal">
        <div>
          <p className="lavro-terminal">/// 04. CONTACT NETWORK</p>
          <h2>联系我</h2>
        </div>
        <div>
          <div className="lavro-signal-list">
            {trustSignals.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <ComingSoonLink className="lavro-contact-button" href="./contact.html">
            SEND REQUEST
          </ComingSoonLink>
        </div>
      </section>
    </div>
  );
}
