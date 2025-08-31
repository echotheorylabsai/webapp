# Development Setup Guide

## Echo Theory Labs - Code Quality & Formatting

This guide outlines the comprehensive development environment setup for consistent code quality
across the Echo Theory Labs codebase.

## 🔧 **Required VS Code Extensions**

### **Core Extensions (Automatically Recommended)**

```
// TypeScript & JavaScript
- TypeScript Next (ms-vscode.vscode-typescript-next)
- TypeScript Hero (ms-vscode.typescript-hero)

// React Development
- ES7+ React/Redux/React-Native snippets (dsznajder.es7-react-js-snippets)
- Auto Rename Tag (formulahendry.auto-rename-tag)
- React Native Tools (ms-vscode.vscode-react-native)

// Code Quality & Linting
- Prettier - Code formatter (esbenp.prettier-vscode)
- ESLint (dbaeumer.vscode-eslint)
- Error Lens (usernamehw.errorlens)

// Tailwind CSS
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)

// Productivity Tools
- TODO Tree (gruntfuggly.todo-tree)
- Bracket Pair Colorizer 2 (ms-vscode.bracket-pair-colorizer-2)
- Indent Rainbow (oderwat.indent-rainbow)
```

## 📝 **Code Formatting Standards**

### **Prettier Configuration**

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

### **TypeScript/React Conventions**

- **Single quotes** for strings
- **2 spaces** for indentation
- **Semicolons** required
- **Trailing commas** in ES5-compatible locations
- **80 character** line limit
- **Arrow functions** without parentheses for single parameters

## 🎯 **Available Scripts**

### **Development**

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
```

### **Code Quality**

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
npm run type-check   # TypeScript type checking
```

### **Combined Commands**

```bash
npm run check-all    # Run all checks (type-check + lint + format)
npm run fix-all      # Auto-fix all issues (lint + format)
```

## ⚙️ **IDE Configuration Features**

### **Auto-formatting**

- **Format on Save**: Automatically formats files when saved
- **Format on Paste**: Cleans up pasted code
- **ESLint Auto-fix**: Fixes linting issues on save
- **Import Organization**: Sorts and removes unused imports

### **TypeScript Features**

- **Auto-imports**: Suggests and adds imports automatically
- **Inlay Hints**: Shows parameter names and types inline
- **Path IntelliSense**: Autocompletes file paths
- **Refactoring Support**: Safe rename, extract method, etc.

### **React Features**

- **JSX/TSX Emmet**: HTML-like abbreviations in React
- **Component Snippets**: Quick React component templates
- **Auto Rename Tags**: Syncs opening/closing tag changes
- **React Hook IntelliSense**: Autocomplete for hooks

## 🎨 **Tailwind CSS Integration**

### **Class Sorting**

Prettier automatically sorts Tailwind classes:

```tsx
// Before
<div className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">

// After (automatically sorted)
<div className="rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600">
```

### **IntelliSense Features**

- **Class Autocomplete**: Suggests Tailwind classes
- **Hover Documentation**: Shows CSS properties on hover
- **Color Previews**: Visual color swatches for color classes
- **Responsive Variants**: Suggests breakpoint prefixes

## 🔍 **Error Detection**

### **Real-time Error Highlighting**

- **TypeScript Errors**: Type mismatches, missing properties
- **ESLint Issues**: Code quality problems
- **Prettier Conflicts**: Formatting inconsistencies
- **Import Errors**: Missing modules, circular dependencies

### **Error Lens Features**

- **Inline Errors**: Shows errors directly in the editor
- **Severity Indicators**: Different colors for errors/warnings/info
- **Quick Fixes**: Suggests automatic fixes

## 📁 **File Organization**

### **Automatic File Nesting**

The IDE automatically groups related files:

```
components/
├── Hero.tsx
├── Hero.test.tsx
├── Hero.stories.tsx
└── Hero.module.css
```

### **Search Exclusions**

Automatically excludes from search:

- `node_modules/`
- `.next/`
- `dist/`
- `build/`
- `coverage/`

## 🚀 **Getting Started**

### **1. Install Extensions**

When you open the project, VS Code will prompt you to install recommended extensions.

### **2. Configure Settings**

All settings are pre-configured in `.vscode/settings.json`.

### **3. Run Setup Check**

```bash
npm run check-all
```

### **4. Fix Any Issues**

```bash
npm run fix-all
```

## 🏆 **Best Practices**

### **Before Committing**

1. Run `npm run check-all` to verify code quality
2. Fix any TypeScript errors
3. Ensure all tests pass
4. Format code with `npm run format`

### **During Development**

- Use TypeScript strict mode
- Write meaningful component and function names
- Add JSDoc comments for complex functions
- Use proper React patterns (hooks, functional components)
- Follow the established folder structure

### **Code Review Checklist**

- [ ] TypeScript types are properly defined
- [ ] Components are properly typed
- [ ] ESLint issues are resolved
- [ ] Code is properly formatted
- [ ] No console.log statements in production code
- [ ] Meaningful variable and function names
- [ ] Proper error handling

## 🔧 **Troubleshooting**

### **Extensions Not Working**

1. Restart VS Code
2. Check extension is installed and enabled
3. Reload window (`Cmd+Shift+P` → "Reload Window")

### **Formatting Issues**

1. Check `.prettierrc` exists
2. Ensure Prettier is set as default formatter
3. Verify `editor.formatOnSave` is enabled

### **TypeScript Issues**

1. Run `npm run type-check`
2. Check `tsconfig.json` configuration
3. Restart TypeScript server (`Cmd+Shift+P` → "Restart TS Server")

## 📦 **Current Dependencies**

### **Production Dependencies**

- **Next.js 15.5.2** - React framework
- **React 19.1.0** - UI library
- **Framer Motion 12.23.12** - Animation library
- **React Hook Form 7.62.0** - Form handling
- **Zod 4.1.5** - Schema validation
- **@hookform/resolvers 5.2.1** - Form validation

### **Development Dependencies**

- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript 5** - Type checking
- **ESLint 9** - Code linting
- **Prettier 3.6.2** - Code formatting
- **PostCSS & Autoprefixer** - CSS processing

This setup ensures consistent, high-quality code across the entire Echo Theory Labs codebase! 🎯
