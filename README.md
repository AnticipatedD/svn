# Open Source Guides

[![Build Status](https://github.com/github/opensource.guide/workflows/GitHub%20Actions%20CI/badge.svg)](https://github.com/github/opensource.guide/actions)

[Open Source Guides](https://opensource.guide/) are a collection of community-driven resources for individuals, communities, and companies who want to learn how to successfully run and contribute to open source projects.

---

## 🏗️ Architecture & Core Structure

This repository is built as a static content and documentation platform orchestrated by the **Jekyll** framework. The project is separated into clean, modular directory boundaries:
* **`_pages/` & `_posts/`**: Core Jekyll content layers handling markdown guides and localization documentation profiles.
* **`assets/js/`**: Client-side interactive scripts including user interface components like `search.js`, `locale.js`, and the Table of Contents `toc.js` wrapper layers.
* **`test/`**: Automated unit validation specifications run via Jest and Minitest engines to evaluate code behaviors.

---

## 🚀 Development & Onboarding

Follow this sequential roadmap to clone, initialize, and execute the repository environment loops locally.

### 1. Installation
Ensure you have Ruby (v3.1+) and Node.js (v20+) installed on your machine. Install all backend gems and frontend package manager manifests from a fresh checkout:
```bash
# Install Ruby infrastructure gems
bundle install

# Install frontend JavaScript packages
npm install
```

### 2. Running Locally
Spin up the local Jekyll development server to host the platform documentation portal:
```bash
bundle exec jekyll serve
```
Once initialized, the website will become dynamically active and viewable locally at: <http://localhost:4000>

### 3. Executing Test Suites
Run the multi-language test suites to assert that client script interactions and documentation layouts compile cleanly with 0 errors:
```bash
# Triggers Jekyll validation scripts and Jest test coverages
script/test
```

---

## 🔒 Environment Configuration
The platform functions entirely as a static generator layer out-of-the-box. To cross-verify parameter constraints across active deployment tasks, copy the template mappings:
```bash
cp .env.example .env
```

---

## 📝 Contribution & Licenses
* **Content:** Released under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) license rules.
* **Code Framework:** Underlying formatting engine components are licensed under the [MIT](https://opensource.org) guidelines.

*Created and curated by GitHub alongside input from outside community reviewers.*
