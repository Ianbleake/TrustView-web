# TrustView Web - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR, ESLint rules, Biome formatting, and pre-commit hooks for the TrustView platform.

## 🎯 About TrustView

TrustView is a platform designed to connect users with service professionals, facilitating the management of appointments, reservations, and product purchases.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - JavaScript/TypeScript linting
- **Biome** - Fast formatter and linter
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📦 Installation

```bash
bun install
```

## 🛠️ Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🎨 Code Quality Tools

### Formatting with Biome

Biome is a fast formatter and linter that helps maintain consistent code style.

```bash
# Format all files
bun run format

# Check formatting without making changes
bun run format:check

# Run Biome linter
bun run lint:biome

# Run Biome linter with auto-fix
bun run lint:biome:fix

# Run all Biome checks (format + lint)
bun run check

# Run all Biome checks with auto-fix
bun run check:fix
```

### Linting with ESLint

```bash
# Run ESLint
bun run lint

# Run ESLint with auto-fix
bun run lint:fix
```

### Type Checking

```bash
# Check TypeScript types
bun run check-types
```

## 🪝 Git Hooks (Husky)

This project uses Husky to run pre-commit hooks that ensure code quality before committing:

- **Pre-commit**: Runs `lint-staged` which automatically:
  - Formats and lints TypeScript/JavaScript files with Biome
  - Fixes ESLint issues
  - Formats JSON, Markdown, CSS, and HTML files

The hooks are automatically installed when you run `bun install`.

### Manual Hook Setup

If hooks aren't working, you can manually set them up:

```bash
# Initialize git repository (if not already done)
git init

# Install Husky hooks
bun run prepare
```

## 📝 Biome Configuration

Biome is configured in `biome.json` with the following settings:

- **Indentation**: 2 spaces
- **Line width**: 100 characters
- **Quote style**: Double quotes
- **Semicolons**: Always
- **Trailing commas**: All

### Ignored Files

The following files/directories are excluded from Biome checks:
- `node_modules/`
- `dist/`
- `build/`
- `tsconfig*.json` (TypeScript config files with comments)

## 🔧 Vite Plugins

Currently using the following official Vite plugin:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) - Uses [SWC](https://swc.rs/) for Fast Refresh

Other available options:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) - Uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

## 📚 Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🏗️ Project Structure

```
web/
├── public/              # Static assets
├── src/                 # Source code
│   ├── App/            # Main App component
│   ├── assets/         # Images, fonts, etc.
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── biome.json          # Biome configuration
└── eslint.config.js    # ESLint configuration
```

## 🤝 Contributing

We welcome contributions to the TrustView platform! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following our commit conventions
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

```
type(scope): description

feat: New feature
fix: Bug fix
docs: Documentation changes
style: Code style changes (formatting, etc.)
refactor: Code refactoring
test: Adding or updating tests
chore: Maintenance tasks
```

## 📄 License

This project is proprietary software owned by **TrustView**. All rights reserved © 2025 TrustView.

---

**Built with ❤️ by the TrustView team**
