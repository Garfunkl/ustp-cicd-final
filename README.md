# USTP CI/CD Tetris

[![Build](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/test-build.yml/badge.svg)](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/test-build.yml)
[![Publish](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/publish.yml/badge.svg)](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/publish.yml)
[![Spell Check](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/spell-check.yml/badge.svg)](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/spell-check.yml)
[![Create Release](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/release.yml/badge.svg)](https://github.com/Garfunkl/ustp-cicd-final/actions/workflows/release.yml)
[![Coverage Status](https://raw.githubusercontent.com/garfunkl/ustp-cicd-final/badges/coverage.svg)](https://github.com/garfunkl/ustp-cicd-final/actions/workflows/test-build.yml)

## 🚀 Live Demo

Check out the deployed application here: [https://garfunkl.github.io/ustp-cicd-final/](https://garfunkl.github.io/ustp-cicd-final/)

## 🛠️ Developer Instructions

This project uses Node.js and requires version 20.x.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/garfunkl/ustp-cicd-final.git
   cd ustp-cicd-final
   ```

2. **Install dependencies**

   We use the `--legacy-peer-deps` flag to ensure compatibility with the dependency tree.

   ```bash
   npm install --legacy-peer-deps
   ```

### Local Development

To start the development server (usually with hot-reloading):

```bash
npm run dev
```

### Building the Application

To create an optimized production build in the `./dist` directory:

```bash
npm run build
```

### Running Tests

To run the test suite:

```bash
npm run test:ci
```
