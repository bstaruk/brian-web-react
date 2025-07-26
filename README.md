# brian-web-react

A modern React application built with Vite, TypeScript, and TanStack Router. This project serves as a personal website with interactive tools and utilities.

## Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: TanStack React Form + Zod validation
- **Icons**: React Icons
- **Linting**: ESLint
- **Formatting**: Prettier

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex components
│   └── templates/      # Page-level compositions
├── routes/             # File-based routing
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Home page
│   └── things/         # Tool pages
├── styles/             # CSS files
└── main.tsx           # App entry point
```

The project follows [Atomic Design principles](https://atomicdesign.bradfrost.com/) with components organized into atoms, molecules, organisms and templates.

## Development

### Prerequisites

- Node.js (latest LTS recommended -- `nvm use` is supported)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs on `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### TypeScript Configuration

The project uses a composite TypeScript setup:

- `tsconfig.json` - References configuration
- `tsconfig.app.json` - App-specific config with path aliases
- `tsconfig.node.json` - Node/Vite tooling config

Path aliases are configured for component imports:

```typescript
// Instead of relative imports
import Button from '../../../components/atoms/Button';

// Use atomic design aliases
import Button from 'atoms/Button';
```

### Routing

TanStack Router provides file-based routing with:

- Automatic route generation
- Type-safe navigation
- Code splitting
- Route-level meta tags and SEO

Routes are defined in `src/routes/` with automatic route tree generation.

### Styling

Tailwind CSS v4 is configured with:

- Vite plugin integration
- Custom utilities in `src/styles/utilities.css`
- Base styles in `src/styles/base.css`

### Form Handling

Forms use TanStack React Form with Zod schemas for validation:

- Type-safe form state management
- Schema-based validation
- Reusable form components

## Build & Deployment

```bash
# Build for production
npm run build

# Files output to dist/
```

The project includes a `_redirects` file for SPA routing on Netlify/similar platforms.

## Development Notes

- **Router devtools** are included in development builds
- **ESLint** is configured with React-specific rules
- **Prettier** handles code formatting
- **Strict TypeScript** configuration with comprehensive linting rules
- **Component architecture** follows atomic design for maintainability
