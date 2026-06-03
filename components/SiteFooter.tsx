import { brand } from "@/data/site";
import { ComingSoonLink } from "@/components/ComingSoonLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">{brand.name}</p>
          <p className="footer-copy">AI business landing for IP, teams and companies.</p>
        </div>
        <div className="footer-links">
          <ComingSoonLink href="./services.html">服务体系</ComingSoonLink>
          <ComingSoonLink href="./cases.html">代表案例</ComingSoonLink>
          <ComingSoonLink href="./contact.html">提交需求</ComingSoonLink>
        </div>
      </div>
    </footer>
  );
}
