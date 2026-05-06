import React from "react";

const brandLayers = [
  { title: "创始人", value: "晓文", desc: "真实人物背书，负责信任感、创业故事与长期个人信用。" },
  { title: "主品牌", value: "晓说家", desc: "海外中文媒体主品牌，负责时政观察、国际视野与中文内容影响力。" },
  { title: "流量栏目", value: "反共新闻台", desc: "强观点、强传播、强识别度的中文时政节目入口。" },
  { title: "商业平台", value: "晓说严选", desc: "面向海外华人的可信资源对接与合作推荐平台。" },
];

const selectedServices = [
  {
    icon: "⚖",
    title: "移民律师资源",
    desc: "对接庇护、绿卡、签证、身份规划等方向的律师资源。晓说严选不提供法律意见，只做信息展示与资源连接。",
  },
  {
    icon: "译",
    title: "翻译与材料整理",
    desc: "对接文件翻译、口译、英文润色、证据整理、材料排版等服务资源。",
  },
  {
    icon: "税",
    title: "报税与财务",
    desc: "对接个人报税、公司注册、记账、税务咨询、财务规划等华人常用资源。",
  },
  {
    icon: "家",
    title: "美国生活落地",
    desc: "对接租房、买车、保险、驾照、信用建立、求职、教育等海外生活资源。",
  },
  {
    icon: "AI",
    title: "AI与自媒体工具",
    desc: "推荐适合中文创作者、海外创业者和自媒体人的AI工具、剪辑工具与增长资源。",
  },
  {
    icon: "商",
    title: "品牌合作推广",
    desc: "为靠谱华人服务商、律师团队、翻译团队、教育机构和工具产品提供中文受众入口。",
  },
];

const flow = [
  "晓说家建立媒体信任",
  "反共新闻台聚集精准受众",
  "晓说严选承接商业需求",
  "合作资源提供专业服务",
  "用户与服务方直接沟通",
];

const audiences = ["海外华人", "新移民", "庇护申请人", "中文时政观众", "自媒体创业者", "华人服务商"];

function runSelfTests() {
  const failures = [];
  if (brandLayers.length !== 4) failures.push("brandLayers should contain exactly 4 items");
  if (selectedServices.length < 6) failures.push("selectedServices should contain at least 6 items");
  if (flow.length !== 5) failures.push("flow should contain exactly 5 steps");
  if (!selectedServices.every((item) => item.icon && item.title && item.desc)) {
    failures.push("every selected service should include icon, title, and desc");
  }
  return failures;
}

const selfTestFailures = runSelfTests();

function Button({ children, variant = "solid", href = "#contact" }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-black transition";
  const styles = variant === "outline"
    ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
    : "bg-white text-neutral-950 hover:bg-white/90";
  return <a href={href} className={`${base} ${styles}`}>{children}</a>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[1.6rem] border border-white/10 bg-white/[0.07] shadow-xl ${className}`}>{children}</div>;
}

function Badge({ children, dark = false }) {
  return (
    <div className={dark ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-lg" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg"}>
      <span className="text-lg font-black leading-none">{children}</span>
    </div>
  );
}

export default function XiaoshuoSelectedWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Badge>晓</Badge>
            <div>
              <div className="text-lg font-black tracking-tight">晓说家</div>
              <div className="text-xs uppercase tracking-[0.25em] text-red-400">Global Chinese Media</div>
              <div className="text-xs text-white/50">晓文创办的海外中文媒体与资源对接平台</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#matrix" className="hover:text-white">品牌矩阵</a>
            <a href="#selected" className="hover:text-white">晓说严选</a>
            <a href="#flow" className="hover:text-white">商业闭环</a>
            <a href="#contact" className="hover:text-white">合作联系</a>
          </nav>

          <a href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-black text-neutral-950 hover:bg-white/90">
            提交需求
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.25),transparent_35%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.18),transparent_40%)]" />
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-200">
                <span>●</span> 中文时政影响力 × 海外华人可信资源
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                晓说家
                <span className="block bg-gradient-to-r from-white via-blue-200 to-red-300 bg-clip-text text-transparent">
                  海外中文媒体
                </span>
              </h1>

              <div className="mt-6 border-l-4 border-red-500 pl-5 text-lg leading-8 text-white/75">
                聚焦国际局势、中国时政、海外华人生活与自由世界观察。
                依托晓说家团队长期建立的中文时政影响力，打造内容、社群与可信资源连接平台。
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-red-300">媒体栏目</div>
                  <div className="mt-2 text-2xl font-black">《反共新闻台》</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">中文时政热点、国际局势分析与深度评论。</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-emerald-300">商业平台</div>
                  <div className="mt-2 text-2xl font-black">《晓说严选》</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">移民律师、翻译、报税、AI工具与海外华人服务资源对接。</div>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button>进入晓说严选 →</Button>
                <Button variant="outline" href="#matrix">浏览媒体矩阵</Button>
              </div>
            </div>

            <Card className="rounded-[2rem] bg-white/10 backdrop-blur-xl">
              <div className="p-8">
                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/50">Breaking News</div>
                      <div className="text-2xl font-black text-white">让中文世界听见不同声音</div>
                    </div>
                    <Badge>信</Badge>
                  </div>

                  <div className="space-y-4 text-white/70">
                    <p>晓说家以新闻节目、国际观察与深度评论建立长期信任与媒体影响力。</p>
                    <p>晓说严选则作为资源连接平台，为海外华人筛选更可信的律师、翻译、财税与生活服务资源。</p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {audiences.map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-black text-white/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="matrix" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Brand Matrix</div>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">清晰的品牌矩阵</h2>
            <p className="mt-5 leading-8 text-white/60">人格、媒体、栏目、商业平台分工明确，避免单一频道过度承载所有功能。</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {brandLayers.map((layer) => (
              <Card key={layer.title}>
                <div className="p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/35">{layer.title}</div>
                  <h3 className="mt-4 text-3xl font-black">{layer.value}</h3>
                  <p className="mt-4 leading-7 text-white/60">{layer.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="selected" className="bg-white/[0.03] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Xiaoshuo Selected</div>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">晓说严选可以对接什么</h2>
              <p className="mt-5 leading-8 text-white/60">用媒体信誉降低信息差，为海外华人提供更透明的资源入口。</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {selectedServices.map((item) => (
                <Card key={item.title}>
                  <div className="p-6">
                    <Badge>{item.icon}</Badge>
                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                    <p className="mt-4 leading-7 text-white/60">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="flow" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">Business Loop</div>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">内容流量到商业转化</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {flow.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-5 text-4xl font-black text-white/20">0{index + 1}</div>
                <div className="text-lg font-black">{step}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="disclaimer" className="bg-white/[0.03] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8 md:p-10">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">Important Boundary</div>
              <h2 className="mt-4 text-3xl font-black">重要边界：晓说严选只做资源对接</h2>
              <div className="mt-5 space-y-4 leading-8 text-white/70">
                <p>晓说严选不是律师事务所，不是移民中介，不直接提供法律、移民、翻译、报税、保险、房产等专业服务。</p>
                <p>平台只提供信息展示、合作资源介绍、需求分类和沟通入口。具体服务内容、费用、合同、专业意见和结果，由用户与第三方专业人士自行确认。</p>
                <p>我们反对虚假承诺、保过宣传、伪造材料和任何违法违规服务。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center text-neutral-950 shadow-2xl md:p-12">
            <Badge dark>✉</Badge>
            <h2 className="mt-5 text-4xl font-black">联系晓说严选</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
              无论你是需要资源的海外华人，还是希望合作的律师、翻译、会计、保险经纪、AI工具团队或华人服务商，都可以通过以下方式联系。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:business@example.com" className="rounded-full bg-neutral-950 px-8 py-3 font-black text-white hover:bg-neutral-800">
                business@example.com
              </a>
              <a href="#" className="rounded-full border border-neutral-300 px-8 py-3 font-black text-neutral-950 hover:bg-neutral-100">
                Telegram 咨询入口
              </a>
            </div>
          </div>
        </section>

        {selfTestFailures.length > 0 && (
          <section className="mx-auto max-w-4xl px-6 pb-10">
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
              <strong>Self-test failed:</strong> {selfTestFailures.join("; ")}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 晓说家 · 晓说严选. Founder: 晓文. All rights reserved.
      </footer>
    </div>
  );
}
