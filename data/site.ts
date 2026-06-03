import type { Belief, CaseStudy, IndustrySolution, PackageTier, ServiceLine, TimelineItem } from "@/lib/types";

export const brand = {
  name: "白先生 AI·IP",
  headline: "我是白先生。",
  subline:
    "我帮你把 AI 用进真实业务里。我不把 AI 讲成一堆工具名，更关心你的内容、销售、交付和团队协作，能不能真的变快、变清楚、变好成交。",
  contactLabel: "把问题发给我"
};

export const heroStats = [
  { value: "20+", label: "企业内训代表案例" },
  { value: "50+", label: "头部 IP 合作" },
  { value: "300人", label: "单场线下大课规模" },
  { value: "50万", label: "智能体定制现场签约" }
];

export const serviceLines: ServiceLine[] = [
  {
    id: "training",
    title: "企业 AI 内训",
    subtitle: "我先帮你和团队讲清楚：AI 到底能解决哪些业务问题。",
    audience: "适合创始人、内容团队、销售团队、运营团队、教育/MCN/实业公司。",
    promise: "我会把 AI 的运行逻辑讲清楚，也会把提示词、内容生产、智能体和多维表格带到岗位实操里。",
    deliverables: ["AI 通识与运行原理", "AI 提示词调教心流法", "自媒体内容营销工作流", "智能体打造与飞书多维表格协同"],
    outcomes: ["团队知道 AI 能解决什么", "形成可复用的岗位工作流", "创始人能判断 AI 落地优先级"]
  },
  {
    id: "workflow",
    title: "AI 工作流与智能体落地",
    subtitle: "我会把你已经在做的事，拆成可以重复执行的 AI 流程。",
    audience: "适合需要内容提效、销售接待、学员交付、内部协作或知识库沉淀的团队。",
    promise: "围绕确定性业务环节，我会把智能体、知识库、多维表格、数字人和自动化连接成一个更顺的系统。",
    deliverables: ["业务流程诊断", "岗位工作流梳理", "智能体与知识库设计", "AI 多维表格/小工具落地"],
    outcomes: ["减少重复沟通和手工整理", "把经验沉淀成可调用资产", "让团队持续迭代而不是一次性尝鲜"]
  },
  {
    id: "ip",
    title: "线下课",
    subtitle: "把 AI、IP 内容和商业落地放到现场，一起拆案例、做练习、改系统。",
    audience: "适合个人 IP、咨询顾问、知识付费团队、内容创业者和想系统学习 AI 的人。",
    promise: "我会把 AI 放进选题、标题、文案、知识库、私域成交和交付，让 IP 能力不只停在脑子里。",
    deliverables: ["IP 内容生产框架", "IP 资料知识库", "智能体辅助交付", "线下课/社群陪跑与案例拆解"],
    outcomes: ["稳定生产高质量内容", "降低团队对个人经验的依赖", "把 IP 交付做成可复制流程"]
  }
];

export const packageTiers: PackageTier[] = [
  {
    name: "基础版",
    price: "¥60,000",
    cycle: "2天 + 3个月答疑",
    fit: "适合刚开始系统导入 AI，希望先让团队建立共识和基础实操能力。",
    included: ["企业内部实操培训", "AI 体系化实操文档", "线上陪跑解答"]
  },
  {
    name: "进阶实操版",
    price: "¥100,000",
    cycle: "2-3天 + 半年答疑",
    fit: "适合已经有明确业务场景，希望把 AI 放到岗位流程里。",
    included: ["企业内部实操培训", "AI 体系化实操文档", "线上陪跑解答", "各岗位工作流梳理提效"],
    highlighted: true
  },
  {
    name: "高级企业定制版",
    price: "¥200,000",
    cycle: "3-4天（分2阶段）+ 一年答疑",
    fit: "适合需要深度定制工作流、智能体和团队 AI 组织能力的企业。",
    included: ["企业内部实操培训", "AI 体系化实操文档", "线上陪跑解答", "各岗位工作流梳理提效", "企业内部工作流定制", "大师班线下课赠票"]
  }
];

export const trainingCurriculum = [
  "通俗易懂解锁 AI 运行原理",
  "全网独创实操心法《AI提示词调教心流法》",
  "自媒体深度融合 AI 工作流",
  "AI 智能体打造、飞书多维表格协同",
  "AI 绘图：海报、配图、产品图等",
  "AI 编程：打造小工具"
];

export const trainingOutcomes = [
  "让创始人全貌掌握 AI 应用情况，实现 AI 落地团队",
  "让团队掌握提示词构建与撰写能力，轻松驾驭 AI 工具",
  "具备打造 AI 智能体、解决业务痛点的能力",
  "了解 IP 智能体打造方法，高效生产 IP 内容",
  "搭建 IP 资料知识库体系，辅助内容生产",
  "辅助搭建企业 AI 知识库，形成团队 AI 应用文化"
];

export const caseStudies: CaseStudy[] = [
  {
    title: "清华陈晶聊商业",
    category: "企业内训",
    industry: "商业 IP",
    clientType: "创始人 IP 团队",
    context: "商业 IP 团队需要把内容生产、知识库和 AI 协同连起来，减少对个人灵感和临场表达的依赖。",
    work: ["围绕 IP 资料库做内容生产训练", "拆解提示词框架和选题方法", "引入多维表格协同"],
    outcome: "让团队形成从资料、选题、标题到文案的 AI 辅助内容路径。",
    artifact: "IP 内容工作流",
    imageUrls: ["https://feishu.cn/file/PLUab4wh4ojkPexngEncJ6mYnTb", "https://feishu.cn/file/JXsXb21RBogqnjxptRHcVMgPnz3"],
    tags: ["创始人IP", "内容生产", "知识库"]
  },
  {
    title: "优核国际教育",
    category: "企业内训",
    industry: "留学教育",
    clientType: "教育机构多部门团队",
    context: "机构既需要集中式 AI 培训，也需要让不同部门把学习结果转成自己的岗位应用。",
    work: ["集中式培训", "分部门指导", "各部门汇报与应用复盘"],
    outcome: "团队从工具体验进入部门级实践，形成更清晰的 AI 应用汇报和协作路径。",
    artifact: "部门 AI 应用方案",
    imageUrls: ["https://feishu.cn/file/E3qobLTq7oLxW7xTd2ccwPD1nYg", "https://feishu.cn/file/X12VbJ7ToobaFqxgRbvcxSfbnMc"],
    tags: ["教育机构", "部门协作", "内训"]
  },
  {
    title: "无忧传媒新媒体学苑",
    category: "企业内训",
    industry: "MCN",
    clientType: "新媒体机构 / 特邀导师合作",
    context: "新媒体团队需要把 AI 纳入内容能力训练体系，而不是停留在工具演示。",
    work: ["新媒体内容场景教学", "导师式内训", "内容生产链路拆解"],
    outcome: "AI 能力进入机构课程与团队训练，帮助内容团队提升生产效率。",
    artifact: "新媒体 AI 训练模块",
    imageUrls: ["https://feishu.cn/file/ZVm8b8QWaocgAyxUEPtc0t5jn7g", "https://feishu.cn/file/UZXCbCmbHohdnmxO06ncqu9InKb"],
    tags: ["MCN", "新媒体", "导师"]
  },
  {
    title: "卓豪眼镜",
    category: "企业内训",
    industry: "外贸",
    clientType: "外贸企业团队",
    context: "外贸企业希望理解 AI 如何进入内容、沟通和业务协作，但缺少适合自身场景的方法。",
    work: ["企业 AI 培训", "外贸业务场景拆解", "内容和协作流程梳理"],
    outcome: "团队获得可继续迭代的 AI 应用模板，理解 AI 在业务链路中的位置。",
    artifact: "外贸 AI 流程模板",
    imageUrls: ["https://feishu.cn/file/WYjpbJLDxoMdnTx5mYUcMBjkn8f", "https://feishu.cn/file/IlF0brNV7oZxuQxaq2DcseM9nze"],
    tags: ["外贸", "内容提效", "企业培训"]
  },
  {
    title: "天与空广告股份",
    category: "企业内训",
    industry: "广告营销",
    clientType: "营销创意团队",
    context: "广告团队需要把 AI 和创意、策划、内容生产结合，避免工具化、模板化。",
    work: ["营销策划逻辑导入", "AI 辅助创意表达", "方案生产流程训练"],
    outcome: "帮助团队从单点尝试进入营销工作链路，提高对 AI 商业价值的判断。",
    artifact: "AI 创意工作流",
    imageUrls: ["https://feishu.cn/file/J7o7byCjmo1x7CxKRlecuwYenTd", "https://feishu.cn/file/XX0abDivnofvBZxL6Doco0HInTh"],
    tags: ["广告", "创意", "方案生产"]
  },
  {
    title: "迪森股份",
    category: "企业内训",
    industry: "能源 / 上市企业",
    clientType: "上市实业公司团队",
    context: "实业公司需要判断 AI 在内容、协作和内部管理中的确定性价值。",
    work: ["岗位场景拆解", "内容生成训练", "协同提效路径设计"],
    outcome: "帮助团队建立 AI 应用认知，并把部分工作流转化为可执行方法。",
    artifact: "企业岗位 AI 应用路径",
    imageUrls: ["https://feishu.cn/file/CxoMb0cR3oXjJMx65oHcPfUSnUf", "https://feishu.cn/file/E7sgbnOvDo4yurxC0CZc0sx0n8c"],
    tags: ["上市企业", "实业", "组织提效"]
  },
  {
    title: "蓝蒂蔻 / 呈美集团",
    category: "企业内训",
    industry: "美业",
    clientType: "美业企业与代理商体系",
    context: "美业团队和代理商需要掌握短视频、图文、数字人等 AI 内容能力，并服务获客和代理商赋能。",
    work: ["美业场景内训", "短视频内容方法", "智能体与数字人工具应用"],
    outcome: "让代理商和内部团队掌握可复制的内容生成与业务赋能方法。",
    artifact: "美业 AI 内容训练体系",
    imageUrls: ["https://feishu.cn/file/KMsWbM9maoudFCxwZ9kcKYmwn4f", "https://feishu.cn/file/SMvXbgZ25oWboLxrrtWc6dyfnAb"],
    tags: ["美业", "代理商", "短视频"]
  },
  {
    title: "AI·IP 系列线下大课",
    category: "线下大课",
    industry: "个人 IP / 知识付费",
    clientType: "线下课学员与同行讲师",
    context: "2023 年第一场线下课接近 300 人，约 60% 是同行来学习，说明课程框架本身具有行业参照价值。",
    work: ["AI 自媒体场景教学", "IP 智能体与内容系统演示", "线下共创与答疑"],
    outcome: "建立“AI 操盘手”“AI 自由”“IP 智能体”等系列课程资产。",
    artifact: "AI·IP 课程体系",
    imageUrls: ["https://feishu.cn/file/RG3vb0SPyo0YKgx0XCLcDmzQn3f", "https://feishu.cn/file/YkGhbx9X9o3SGBxCPwZc49yNnSb"],
    tags: ["线下课", "大师班", "课程资产"]
  },
  {
    title: "IP 场景智能体",
    category: "智能体定制",
    industry: "个人 IP",
    clientType: "IP 团队 / 内容团队",
    context: "内容生产依赖个人经验，选题、标题、文案和交付很难沉淀为团队可复用能力。",
    work: ["IP 资料知识库", "内容生产智能体", "小程序/网页入口"],
    outcome: "把 IP 经验变成可调用的智能体能力，支持内容生产和交付复用。",
    artifact: "小程序 + 网页智能体",
    imageUrls: ["https://feishu.cn/file/Fn7xb1qT2oY7R4xfVGQc2k2Fnsb"],
    tags: ["智能体", "知识库", "IP系统"]
  },
  {
    title: "天禹数智",
    category: "智能体定制",
    industry: "科技公司",
    clientType: "科技企业",
    context: "科技公司需要把智能体能力做成可对外展示、可内部复用的产品化入口。",
    work: ["业务场景梳理", "小程序/网页智能体", "知识库与流程连接"],
    outcome: "让 AI 能力从演示走向产品化入口，方便客户与团队调用。",
    artifact: "小程序 + 网页",
    imageUrls: ["https://feishu.cn/file/SEc1biSVuoA940xC2ZwcxDDInoh"],
    tags: ["科技公司", "产品化", "智能体"]
  },
  {
    title: "IP 业务流程智能体",
    category: "智能体定制",
    industry: "IP 业务",
    clientType: "IP 经营团队",
    context: "IP 业务中资料、选题、内容、交付、学员服务分散，导致效率和质量不稳定。",
    work: ["业务流程梳理", "智能体串联", "内容与交付工作流设计"],
    outcome: "把 IP 经营中最小单位的内容生产链路变成系统化流程。",
    artifact: "IP 业务流程网",
    imageUrls: ["https://feishu.cn/file/HGizbUtqAomkrqx2jJMckYvvnXb"],
    tags: ["业务流程", "内容链路", "智能体"]
  }
];

export const industrySolutions: IndustrySolution[] = [
  { industry: "母婴品牌", scale: "年销千万电商", result: "通过多维表格解决图文和短视频生成", artifact: "AI多维表格" },
  { industry: "健身房", scale: "单家实体店", result: "通过智能体建立公众号端健身顾问体系", artifact: "AI智能体/工作流/知识库" },
  { industry: "跨境电商", scale: "中小跨境企业", result: "开发视频生成能力，完成纯虚拟短视频生成", artifact: "AI混合工具" },
  { industry: "财税", scale: "地区财税头部", result: "训练销售智能体，通过微信接待客户", artifact: "AI混合工具" },
  { industry: "教育", scale: "讲师与课程团队", result: "建立 IP 知识库，用智能体服务学员交付", artifact: "AI混合工具" },
  { industry: "餐饮", scale: "连锁店内容分发", result: "建立内容生成与分发系统", artifact: "AI混合工具" },
  { industry: "企业服务", scale: "融资科技企业", result: "完成员工协作与企业内部管理", artifact: "AI多维表格/飞书机器人" },
  { industry: "文旅", scale: "中小企业", result: "智能体生成内容，AI 混剪与短视频", artifact: "AI智能体/工作流/知识库" }
];

export const timeline: TimelineItem[] = [
  {
    period: "广告行业",
    title: "从省广到 Insight，先学会让方案被客户买单。",
    body: "半年从客户主任升为经理，一个人带 8 个项目；见证微信支付红包带来 2000 万用户增长；用 8 页 PPT 卖出 400 万汽车品牌方案。",
    signal: "商业化判断"
  },
  {
    period: "平台与内容",
    title: "从字节、爱奇艺，到游戏与综艺营销案例。",
    body: "接触平台商业化和头部客户，参与和平精英、Switch 国行版等项目，也更理解内容、流量和品牌合作如何发生。",
    signal: "平台视角"
  },
  {
    period: "创业阶段",
    title: "餐饮、剧本杀、短视频拆解，把不确定性变成方法。",
    body: "经历餐饮联创、剧本杀工作室、短视频拆解和企业培训咨询，一个月跑出千万级播放，也看清代运营、认知差和现金流的真实压力。",
    signal: "创业体感"
  },
  {
    period: "2023 GPT",
    title: "白天做项目，晚上研究 GPT 到凌晨。",
    body: "较早把 AI 应用到自媒体和商业 IP 场景；在 GPT 社群分享出圈，课程框架被同行学习和参考。",
    signal: "AI 先发"
  },
  {
    period: "2024-2026",
    title: "从提示词到智能体，再到业务流程 AI 化。",
    body: "我开始定制提示词、智能体、多维表格和知识库。越往后做，我越确定一件事：不要追求“拥有 AI”，要让业务流程真的用上 AI。",
    signal: "落地系统"
  }
];

export const beliefs: Belief[] = [
  {
    title: "模型的成功，不是模型的成功，而是模式的胜利。",
    body: "真正确定的价值，不是让模型每次都完美回答，而是把选题、标题、文案、协作、交付这些环节放进可复用的流程。"
  },
  {
    title: "AI 不为我所有，皆为我所用。",
    body: "不是每个人都需要定制一套系统。很多时候，你真正需要的是直接可用的流程、表格、智能体和交付方式。"
  },
  {
    title: "不要陷入万物都要用 AI 的误区。",
    body: "能用代码解决就用代码，能用流程解决就用流程。AI 的价值是进入业务，不是制造新的复杂度。"
  }
];

export const trustSignals = [
  "我做过广告和品牌营销，知道方案怎么被理解、被相信、被购买",
  "我经历过大厂平台和内容业务，知道流量、内容和商业合作怎么发生",
  "我也经历过创业穿底，知道小老板和个人 IP 的真实压力",
  "我现在做课程、内训和智能体定制，重点是把经验沉淀成可复用系统"
];
