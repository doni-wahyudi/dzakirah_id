import React from 'react';

const findings = [
  { id: 'F01', title: 'Zero test coverage — no test framework or test files exist', severity: 'critical', category: 'testing' },
  { id: 'F02', title: 'CI pipeline skips linting — eslint configured but never runs in CI', severity: 'high', category: 'ci-cd' },
  { id: 'F05', title: 'Supabase dependency declared but no env vars or usage found', severity: 'high', category: 'architecture' },
  { id: 'F07', title: 'No error boundary components for production error handling', severity: 'high', category: 'architecture' },
  { id: 'F13', title: 'No TypeScript or PropTypes for component contract validation', severity: 'high', category: 'architecture' },
  { id: 'F03', title: 'Orphaned gh-pages deploy scripts in package.json', severity: 'medium', category: 'deployment' },
  { id: 'F04', title: 'No GitHub environment protection rules for production', severity: 'medium', category: 'ci-cd' },
  { id: 'F06', title: 'useMultiScrollReveal hook has object-reference instability', severity: 'medium', category: 'performance' },
  { id: 'F08', title: 'Missing security headers in index.html', severity: 'medium', category: 'security' },
  { id: 'F11', title: 'No bundle analysis or performance budgeting', severity: 'medium', category: 'code-quality' },
  { id: 'F09', title: 'TECHNICAL_DETAILS.md references outdated React version (18 vs 19)', severity: 'low', category: 'documentation' },
  { id: 'F10', title: 'Google Fonts loaded without weight optimization', severity: 'low', category: 'performance' },
  { id: 'F12', title: 'Navbar uses index-based keys for mapped elements', severity: 'low', category: 'code-quality' },
  { id: 'F14', title: 'GitHub Actions workflow lacks Node.js version matrix', severity: 'low', category: 'ci-cd' },
];

const severityColors = { critical: '#dc2626', high: '#ea580c', medium: '#ca8a04', low: '#2563eb' };
const severityBg = { critical: '#fef2f2', high: '#fff7ed', medium: '#fefce8', low: '#eff6ff' };
const categoryColors = {
  'ci-cd': '#7c3aed', testing: '#dc2626', architecture: '#0891b2', performance: '#059669',
  security: '#e11d48', documentation: '#8b5cf6', 'code-quality': '#d97706', deployment: '#6366f1'
};

const strengths = [
  'Clean GitHub Actions pipeline with latest action versions',
  'Proper npm caching and deterministic installs via npm ci',
  'Concurrency controls prevent parallel deployment conflicts',
  'Well-structured CSS design system with 60+ design tokens',
  'SPA routing workaround for GitHub Pages (404.html redirect)',
  'ESLint flat config with React hooks + refresh plugins',
  'StrictMode enabled in React entry point',
  'Clear separation: data/, hooks/, components/, pages/',
  'Custom hooks for cross-cutting concerns',
  'CNAME file for automatic custom domain configuration',
];

const priorityActions = [
  'Add Vitest + Testing Library and wire tests into CI',
  'Add npm run lint step to deploy.yml before the build',
  'Remove orphaned gh-pages scripts and dependency',
  'Add ErrorBoundary component to prevent full-app crashes',
  'Remove unused @supabase/supabase-js or implement integration',
  'Add PropTypes or TypeScript for component prop validation',
];

export default function HarnessReport() {
  const severityCounts = { critical: 1, high: 4, medium: 5, low: 4 };
  const categoryCounts = {};
  findings.forEach(f => { categoryCounts[f.category] = (categoryCounts[f.category] || 0) + 1; });
  const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  const maxCatValue = Math.max(...Object.values(categoryCounts));

  return (
    <div style={{ fontFamily: "'Outfit', 'Segoe UI', sans-serif", background: '#FFF0F2', minHeight: '100vh', padding: '40px 24px', color: '#352527' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(110,133,97,0.12)', border: '1px solid #96AC88', borderRadius: 999, fontSize: 13, color: '#4D6041', marginBottom: 16, letterSpacing: '0.03em' }}>
            Better Harness Analysis
          </div>
          <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 36, fontWeight: 600, margin: '0 0 8px', lineHeight: 1.2 }}>
            dzakirah_web
          </h1>
          <p style={{ fontSize: 16, color: '#725B5E', margin: 0 }}>
            React 19 + Vite 8 | GitHub Pages | 14 findings across 8 categories
          </p>
        </div>

        {/* Scorecard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 40 }}>
          {[
            { label: 'Total', value: 14, color: '#D15B70', bg: '#FBECEF' },
            { label: 'Critical', value: 1, color: '#dc2626', bg: '#fef2f2' },
            { label: 'High', value: 4, color: '#ea580c', bg: '#fff7ed' },
            { label: 'Medium', value: 5, color: '#ca8a04', bg: '#fefce8' },
            { label: 'Low', value: 4, color: '#2563eb', bg: '#eff6ff' },
          ].map((m) => (
            <div key={m.label} style={{ background: '#fff', borderRadius: 16, border: '1px solid #EED6DA', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: m.color, fontFamily: "'Lora', Georgia, serif" }}>{m.value}</div>
              <div style={{ fontSize: 13, color: '#725B5E', fontWeight: 500, marginTop: 4 }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Category Breakdown */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #EED6DA', padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 20, fontWeight: 600, margin: '0 0 20px' }}>Findings by Category</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sortedCategories.map(([cat, count]) => (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 120, fontSize: 13, fontWeight: 500, color: '#725B5E', textTransform: 'capitalize' }}>{cat.replace('-', ' ')}</div>
                <div style={{ flex: 1, height: 24, background: '#f5f0f1', borderRadius: 8, overflow: 'hidden' }}>
                  <div style={{ width: `${(count / maxCatValue) * 100}%`, height: '100%', background: categoryColors[cat] || '#D15B70', borderRadius: 8, transition: 'width 0.3s ease' }} />
                </div>
                <div style={{ width: 24, fontSize: 14, fontWeight: 600, textAlign: 'right', color: '#352527' }}>{count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Findings List */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 20, fontWeight: 600, margin: '0 0 20px' }}>Detailed Findings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {findings.map((f) => (
              <div key={f.id} style={{ background: '#fff', borderRadius: 12, border: '1px solid #EED6DA', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ minWidth: 36, height: 36, borderRadius: 8, background: severityBg[f.severity], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: severityColors[f.severity], textTransform: 'uppercase' }}>
                  {f.severity === 'critical' ? '!!' : f.severity === 'high' ? '!' : f.severity === 'medium' ? '~' : 'i'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#352527', lineHeight: 1.4 }}>
                    <span style={{ color: '#A38C8F', fontSize: 12, marginRight: 6 }}>{f.id}</span>
                    {f.title}
                  </div>
                </div>
                <div style={{ minWidth: 80, textAlign: 'right' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: categoryColors[f.category] || '#725B5E', background: `${categoryColors[f.category] || '#725B5E'}15`, padding: '3px 8px', borderRadius: 6, textTransform: 'capitalize' }}>
                    {f.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths + Priority Actions side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
          {/* Strengths */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #EED6DA', padding: 24 }}>
            <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 600, margin: '0 0 16px', color: '#4D6041' }}>
              What's Working Well
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {strengths.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#352527', lineHeight: 1.5 }}>
                  <span style={{ color: '#6E8561', fontWeight: 700, marginTop: 1, flexShrink: 0 }}>&#10003;</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Actions */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #EED6DA', padding: 24 }}>
            <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 600, margin: '0 0 16px', color: '#D15B70' }}>
              Top Priority Actions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {priorityActions.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, color: '#352527', lineHeight: 1.5 }}>
                  <span style={{ minWidth: 22, height: 22, borderRadius: '50%', background: '#D15B70', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #EED6DA', padding: 24, marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { label: 'Framework', value: 'React 19 + Vite 8' },
              { label: 'Language', value: 'JavaScript/JSX' },
              { label: 'Styling', value: 'CSS Design Tokens' },
              { label: 'Routing', value: 'React Router v7' },
              { label: 'Icons', value: 'lucide-react' },
              { label: 'Backend', value: 'Supabase (unused)' },
              { label: 'Hosting', value: 'GitHub Pages' },
              { label: 'CI/CD', value: 'GitHub Actions' },
            ].map((t) => (
              <div key={t.label}>
                <div style={{ fontSize: 11, color: '#A38C8F', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{t.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#352527' }}>{t.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '20px 0', fontSize: 12, color: '#A38C8F' }}>
          Analyzed 2026-08-28 | dzakirah_web harness practices
        </div>
      </div>
    </div>
  );
}
