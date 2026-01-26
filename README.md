# USTP CI/CD Tetris

![Build Status](https://github.com/garfunkl/ustp-cicd-final/actions/workflows/test-build.yml/badge.svg?branch=main&event=push)
![Publish Status](https://github.com/garfunkl/ustp-cicd-final/actions/workflows/publish.yml/badge.svg?branch=main)
![Release Status](https://github.com/garfunkl/ustp-cicd-final/actions/workflows/release.yml/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/garfunkl/ustp-cicd-final/badge.svg?branch=main)](https://coveralls.io/github/garfunkl/ustp-cicd-final?branch=main)

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
