import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Shield, Zap, Globe, Code2, Layers } from "lucide-react";
import heroImage from "@/assets/web3-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexus — The Open Web3 Protocol" },
      {
        name: "description",
        content:
          "Build, trade and own on the decentralized internet. Nexus is a fast, secure Web3 protocol for the next generation of apps.",
      },
      { property: "og:title", content: "Nexus — The Open Web3 Protocol" },
      {
        property: "og:description",
        content: "Build, trade and own on the decentralized internet.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const features = [
  { icon: Shield, title: "Trustless Security", desc: "Audited smart contracts and zero-knowledge proofs secure every transaction." },
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second finality with 100,000+ TPS on our optimized L2 rollup." },
  { icon: Globe, title: "Borderless", desc: "Native cross-chain bridges to Ethereum, Solana, Polygon and beyond." },
  { icon: Code2, title: "Developer First", desc: "TypeScript SDK, REST APIs and one-line wallet integration." },
  { icon: Layers, title: "Composable", desc: "Modular primitives for DeFi, NFTs, DAOs and on-chain identity." },
  { icon: Wallet, title: "Self-Custody", desc: "Your keys, your assets. Always. No intermediaries, ever." },
];

const stats = [
  { value: "$4.2B", label: "Total Value Locked" },
  { value: "1.2M", label: "Active Wallets" },
  { value: "180+", label: "dApps Launched" },
  { value: "99.99%", label: "Uptime" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full glass">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-primary)] glow-primary" />
            <span className="text-xl font-bold tracking-tight">Nexus</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#stats" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Network</a>
            <a href="#build" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Build</a>
          </div>
          <Button variant="default" className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative grid-bg pt-32 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-mono">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Mainnet v3.0 is live
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
              The open <span className="text-gradient">Web3</span> protocol for everyone
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Build, trade and own on the decentralized internet. Lightning-fast finality, zero gas fees,
              and the developer tools to ship in minutes — not months.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 animate-pulse-glow">
                Launch App <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="glass">
                Read Docs
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl bg-[image:var(--gradient-hero)] opacity-30 blur-3xl" />
            <img
              src={heroImage}
              alt="Glowing crystal blockchain cube in cosmic space"
              width={1536}
              height={1024}
              className="relative rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="border-y border-border glass">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-gradient md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Built for the <span className="text-gradient">next era</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete stack for decentralized applications — from primitives to production.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group glass rounded-2xl p-6 transition-[var(--transition-smooth)] hover:border-primary/50 hover:glow-primary"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] glow-primary">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="build" className="pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl glass p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-[image:var(--gradient-radial)]" />
            <div className="relative">
              <h2 className="text-4xl font-bold md:text-5xl">
                Start building <span className="text-gradient">today</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join 10,000+ developers shipping the future of finance, identity and ownership.
              </p>
              <pre className="mx-auto mt-8 inline-block rounded-xl border border-border bg-background/60 px-6 py-3 text-left font-mono text-sm">
                <span className="text-muted-foreground">$</span> npm install <span className="text-gradient">@nexus/sdk</span>
              </pre>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90">
                  Get API Key <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="glass">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[image:var(--gradient-primary)]" />
            <span>© 2026 Nexus Protocol</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">Discord</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
