# 🚀 Node.js MCP Backend Boilerplate

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![typescript](https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=ffffff)
![node.js](https://img.shields.io/badge/node.js-339933?logo=nodedotjs&logoColor=ffffff)

A modern, lightweight, and opinionated boilerplate for building robust Node.js applications specifically tailored for Model Context Protocol (MCP) backends with TypeScript. Designed for speed, type safety, and developer experience, providing a solid foundation for your backend services.

## 🌟 Overview

This repository offers a streamlined starting point for your next Node.js MCP backend service. It abstracts away common setup tasks, allowing you to focus directly on your application's business logic and integration with the MCP ecosystem.

### Key Goals
- **MCP Integration Ready**: Pre-configured to easily integrate with Model Context Protocol.
- **Minimalist**: Focuses on essential tools and practices for backend development.
- **Type-Safe**: Strict TypeScript configuration for enhanced reliability and early error detection.
- **Developer-Friendly**: Integrated linting, formatting, and high-performance testing facilitate a smooth development workflow.
- **Production-Ready**: Adheres to modern ESM standards and Node.js best practices for scalable and maintainable services.

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (>= 22)
- **Language**: [TypeScript](https://www.typescript.org/) 5.8
- **Testing**: [Vitest](https://vitest.dev/) (Vite-native test runner for rapid feedback)
- **Linting**: [ESLint 9](https://eslint.org/) (with `@typescript-eslint` and `@stylistic` for consistent code quality)
- **Execution**: [ts-node](https://typestrong.org/ts-node/) for seamless TypeScript execution during development.

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/rahmanroman/node-mcp-backend
cd node-mcp-backend
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
# Configure your MCP-specific environment variables in .env
```

### 3. Development

```bash
npm run dev
```

### 4. Testing

Run the test suite using Vitest:

```bash
npm test
```

## 📂 Project Structure

```
├── src/                # Source code for your MCP backend
│   ├── index.ts        # Main entry point for the application
│   ├── features/       # Modules for specific application features (e.g., /ping)
│   │   └── ping/       # Example feature: basic health check endpoint
│   │       └── index.ts
│   ├── mcp/            # MCP-specific integration logic and utilities
│   │   └── index.ts    # Centralized MCP client or message handler setup
│   └── server/         # Server configuration and setup
│       ├── config.ts   # Application configuration
│       └── index.ts    # HTTP server setup (e.g., Express, Fastify)
├── eslint.config.js    # Modern ESLint flat configuration
├── tsconfig.json       # TypeScript compiler settings
├── vitest.config.ts    # Testing configuration
└── .env.example        # Template for environment variables
```

## ✨ Benefits
- **Optimized for MCP**: Designed with MCP communication patterns in mind.
- **Zero-Config Testing**: Vitest is pre-configured for blazing-fast unit and integration testing.
- **Modern ESM**: Built from the ground up to use standard JavaScript modules (`"type": "module"`).
- **Consistent Code Style**: Pre-configured ESLint rules ensure your codebase remains clean and maintainable across all services.
- **Native Env Support**: Utilizes Node's native `--env-file` flag, reducing dependency on third-party loaders for local development, simplifying environment management.

## 📄 License
This project is licensed under the [MIT License](LICENSE).
Built with ❤️ by [Roman Rakhman](https://github.com/rahmanroman)