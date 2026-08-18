# Dzakirah.id — Ruang Pulih & Tumbuh untuk Perempuan 🌸

Official web application for **Dzakirah.id**, an Indonesian Muslimah community platform centered around Mental Health, Pranikah, and Parenting.

🔗 **Live Website**: [https://dzakirah.id](https://dzakirah.id)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 🌐 Custom Domain & GitHub Pages Setup (`dzakirah.id`)

### DNS Configuration (at your Domain Registrar / DNS Manager)

Configure the following records in your DNS management panel (e.g. Cloudflare, Niagahoster, Rumahweb, DomaiNesia):

| Type | Name / Host | Target / IP Address | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or `dzakirah.id`) | `185.199.108.153` | Auto / 3600 |
| **A** | `@` (or `dzakirah.id`) | `185.199.109.153` | Auto / 3600 |
| **A** | `@` (or `dzakirah.id`) | `185.199.110.153` | Auto / 3600 |
| **A** | `@` (or `dzakirah.id`) | `185.199.111.153` | Auto / 3600 |
| **CNAME** | `www` | `doni-wahyudi.github.io` | Auto / 3600 |

### GitHub Repository Settings

1. Go to your repository on GitHub: `https://github.com/doni-wahyudi/dzakirah_id`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Under **Custom domain**, enter `dzakirah.id` and click **Save**.
5. Once DNS records propagate and the certificate is issued, check **Enforce HTTPS**.

---

## 📦 Automated Deployment (CI/CD)

Any commit pushed to the `main` branch will automatically trigger the GitHub Actions workflow in `.github/workflows/deploy.yml` to build and deploy to GitHub Pages and your custom domain.

