import { Bot, DatabaseZap, FileText, MessagesSquare, Workflow } from "lucide-react";

const flow = [
  { icon: FileText, label: "资料库", value: "IP / 企业知识" },
  { icon: MessagesSquare, label: "提示词", value: "场景化调教" },
  { icon: Bot, label: "智能体", value: "内容与交付" },
  { icon: Workflow, label: "工作流", value: "团队协作" }
];

export function ProductHeroVisual() {
  return (
    <div className="product-visual" aria-label="AI 业务流程示意图">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-header">
        <div>
          <p>AI Business OS</p>
          <h2>把经验变成流程</h2>
        </div>
        <DatabaseZap aria-hidden="true" size={34} />
      </div>
      <div className="visual-flow">
        {flow.map((item) => {
          const Icon = item.icon;
          return (
            <div className="visual-flow-item" key={item.label}>
              <Icon aria-hidden="true" size={20} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          );
        })}
      </div>
      <div className="visual-card-row">
        <div>
          <span>效率提升点</span>
          <strong>选题 / 标题 / 文案 / 交付</strong>
        </div>
        <div>
          <span>落地方式</span>
          <strong>培训 + 表格 + 智能体</strong>
        </div>
      </div>
    </div>
  );
}
