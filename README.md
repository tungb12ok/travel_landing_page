# TaHa Travel Landing Page

A static travel agency landing page for TaHa Travel Agency, showcasing Vietnam tours and travel services.

## Publishing to GitHub Pages

This repository is configured to automatically deploy to **GitHub Pages** on every push to the `main` branch.

### Steps to enable publishing:

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. Push any change to the `main` branch (or trigger the workflow manually from the **Actions** tab).
5. Your site will be live at `https://<your-username>.github.io/travel_landing_page/`.

The workflow file is located at `.github/workflows/deploy.yml` and uses the official GitHub Pages Actions to build and deploy the static site.

## Local Development

Open `index.html` directly in your browser, or serve the files with any static file server:

```bash
npx serve .
```