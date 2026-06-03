import { brand } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  { href: "./", label: "首页" },
  { href: "./about.html", label: "关于" },
  { href: "./services.html", label: "服务" },
  { href: "./cases.html", label: "案例" },
  { href: "./contact.html", label: "需求" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand-mark" href="./" aria-label="白先生 AI·IP 首页">
          <span className="brand-symbol">白</span>
          <span>{brand.name}</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <ButtonLink href="./contact.html" variant="ghost">
            提交需求
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
