"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import type { LeadFormData } from "@/lib/types";

const initialForm: LeadFormData = {
  name: "",
  company: "",
  contact: "",
  needType: "",
  budget: "",
  message: ""
};

const needTypes = ["企业 AI 内训", "AI 工作流 / 智能体落地", "线下课", "先判断方向"];
const budgets = ["6万以内先了解", "6-10万", "10-20万", "20万以上", "暂不确定"];

export function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof LeadFormData, string>> = {};
    if (!form.name.trim()) next.name = "请留下称呼";
    if (!form.contact.trim()) next.contact = "请留下微信、手机或邮箱";
    if (!form.needType.trim()) next.needType = "请选择需求方向";
    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function updateField<K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (hasErrors) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <Sparkles aria-hidden="true" size={28} />
        <h2>需求已记录</h2>
        <p>我已经把这次需求整理成待沟通状态。正式运营时，这里可以继续接入飞书多维表做自动沉淀。</p>
        <button
          className="button button-secondary"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
            setTouched(false);
          }}
          type="button"
        >
          继续填写
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" data-netlify="true" name="ai-lead" noValidate onSubmit={handleSubmit}>
      <input name="form-name" type="hidden" value="ai-lead" />
      <div className="form-grid">
        <label>
          <span>称呼</span>
          <input
            aria-invalid={touched && Boolean(errors.name)}
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="你的名字"
            value={form.name}
          />
          {touched && errors.name ? <em>{errors.name}</em> : null}
        </label>
        <label>
          <span>公司 / 身份</span>
          <input
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="公司、团队或个人IP"
            value={form.company}
          />
        </label>
        <label>
          <span>联系方式</span>
          <input
            aria-invalid={touched && Boolean(errors.contact)}
            name="contact"
            onChange={(event) => updateField("contact", event.target.value)}
            placeholder="微信 / 手机 / 邮箱"
            value={form.contact}
          />
          {touched && errors.contact ? <em>{errors.contact}</em> : null}
        </label>
        <label>
          <span>需求方向</span>
          <select
            aria-invalid={touched && Boolean(errors.needType)}
            name="needType"
            onChange={(event) => updateField("needType", event.target.value)}
            value={form.needType}
          >
            <option value="">选择一个方向</option>
            {needTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {touched && errors.needType ? <em>{errors.needType}</em> : null}
        </label>
        <label>
          <span>预算区间</span>
          <select name="budget" onChange={(event) => updateField("budget", event.target.value)} value={form.budget}>
            <option value="">先不确定</option>
            {budgets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="form-wide">
          <span>补充说明</span>
          <textarea
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="你现在最想解决的 AI、内容、团队或成交问题"
            rows={6}
            value={form.message}
          />
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">
        <span>提交需求</span>
        <Send aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
