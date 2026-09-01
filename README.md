# OCA Website

Static website for [omaraconsultingassoc.com](https://omaraconsultingassoc.com), the public site for O'Mara Consulting Associates.

## Overview

This repository contains a small static HTML/CSS/JavaScript site. The main page presents consulting services, portfolio examples, credentials, and API documentation links. The technical library is exposed as a first-class navigation tab and renders a searchable collection of reference PDFs from local JavaScript data.

The site was migrated from older Bootstrap 2/3 assets to Bootstrap 5.3.8. Bootstrap and jQuery are loaded from public CDNs; project-specific styling and behavior live in local files in `css/` and `js/`.

## Structure

```text
index.html              Main website page
tech-library.html       Searchable technical library
css/
  oca-styles.css        Project-specific styles
js/
  oca-scripts.js        Main page navigation behavior
  library.js            Technical library data
  library-functions.js  Technical library rendering and search
img/                    Site images
docs/                   Certificates and document thumbnails
library/                Technical library PDF files
api-documentation/      Generated API documentation
```

## Local Preview

Because the site is static, it can be previewed directly from `index.html`. A local web server is useful for testing browser behavior consistently:

```bash
python3 -m http.server 8010 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8010/
```

## Development Notes

- Open the repository root in VS Code.
- The repository root is the folder containing this README, `index.html`, and the top-level `.git` directory.
- The old Eclipse `WebContent` web root was flattened into the repository root.
- The old Eclipse project metadata was removed.
- The old local Bootstrap files were removed after the Bootstrap 5 migration.
- Site navigation is shared between `index.html` and `tech-library.html`.
- Links from the technical library back to `index.html#services-section`, `#portfolio-section`, and `#about-section` are handled by `oca-scripts.js`.

## Git Workflow

Check your current state before starting work:

```bash
git status
```

For feature work, use a branch:

```bash
git switch -c my-feature-branch
```

After QA:

```bash
git add .
git commit -m "Describe the change"
git switch master
git pull --ff-only
git merge --ff-only my-feature-branch
git push origin master
```

If `git merge --ff-only` fails, stop and inspect before forcing the merge.
