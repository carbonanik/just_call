const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Set this to your public app repository, e.g. 'your-username/just-call'.
const GITHUB_REPOSITORY = 'carbonanik/just_call';

const downloadLink = document.querySelector('#download-link');
const downloadHint = document.querySelector('#download-hint');

async function configureGithubDownload() {
  const repo = GITHUB_REPOSITORY.trim();
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) {
    downloadLink.removeAttribute('href');
    downloadLink.setAttribute('aria-disabled', 'true');
    downloadLink.addEventListener('click', event => event.preventDefault());
    downloadHint.textContent = 'Download coming soon. Configure the GitHub repository to enable releases.';
    return;
  }

  const releasesUrl = `https://github.com/${repo}/releases`;
  // A working fallback even when the GitHub API is unavailable or rate-limited.
  downloadLink.href = releasesUrl;
  downloadHint.textContent = 'Download the latest Android APK from GitHub Releases.';

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) return;
    const release = await response.json();
    const apk = release.assets?.find(asset =>
      asset.name?.toLowerCase().endsWith('.apk') &&
      typeof asset.browser_download_url === 'string'
    );
    if (apk) {
      downloadLink.href = apk.browser_download_url;
      downloadHint.textContent = `Latest version: ${release.tag_name || 'Android APK'} · Hosted on GitHub Releases`;
    }
  } catch (_) {
    // Keep the GitHub Releases fallback when offline or rate-limited.
  }
}

configureGithubDownload();
