# Just Call landing page

A responsive, dependency-free landing page made with HTML, CSS and JavaScript.

## Preview
Open `index.html` in a browser. For local development, you can run `python3 -m http.server 8080` here and visit `http://localhost:8080`.

## Before publishing
1. Publish a non-draft, non-prerelease GitHub Release in your public repository and attach an Android `.apk` file.
2. In `script.js`, set `GITHUB_REPOSITORY = 'your-username/your-repo'`. The download button then looks up the latest release through GitHub's public API and links directly to its APK. If the API is unavailable or no APK is attached, the button links to your repository's Releases page. Until the repository is configured, it stays disabled instead of linking to an unrelated page.
3. For a real download test, serve the website using a local HTTP server or deploy it, then click the button. GitHub release publishing does not require changing website code each time.
2. Update `assets/social-preview.png` if you want a different social sharing image.
3. Replace or refine UI screenshots in `assets/` if desired.
4. Review the feature descriptions against your released Android app and add a real privacy-policy URL when available.

## Deployment
- GitHub Pages: push this folder to a repository, enable Pages from the main branch and root folder.
- Netlify: drag-and-drop this folder into Netlify's deployment UI.
- Vercel: deploy as a static project (no build command needed).

No database, server, framework or paid hosting is required.
