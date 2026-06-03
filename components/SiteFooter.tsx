import { brand } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">{brand.name}</p>
          <p className="footer-copy">AI business landing for IP, teams and companies.</p>
        </div>
        <div className="footer-links">
          <a href="./services.html">服务体系</a>
          <a href="./cases.html">代表案例</a>
          <a href="./contact.html">提交需求</a>
        </div>
      </div>
    </footer>
  );
}
