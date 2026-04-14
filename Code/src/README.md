# Meeplewood - Source Code

A Next.js application for board game data exploration and collection management.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

## First-Time Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Excali8ur/Meeplewood.git
   cd Meeplewood/Code/src
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server (with hot-reload)
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint code quality checks

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Data Visualization**: [D3.js](https://d3js.org/)
- **UI**: React 19
- **Code Quality**: ESLint

## Project Structure

```
Code/src/
├── app/              # Next.js app directory (pages & API routes)
│   ├── api/          # API endpoints
│   ├── data/         # Data management page
│   ├── export/       # Export functionality page
│   ├── import/       # Import functionality page
│   └── visualise/    # Data visualization page
├── components/       # Reusable React components
├── lib/              # Utility functions & data store
└── public/           # Static assets
```

## Development Notes

- The app auto-updates as you edit files (hot-reload enabled)
- Uses [Geist](https://vercel.com/font) font family
- Data files are excluded from git (see `.gitignore`)

## Troubleshooting

**Dependencies not installing?**
- Ensure you're using Node.js v18 or higher: `node --version`
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Port 3000 already in use?**
- The dev server will automatically try the next available port (3001, 3002, etc.)
- Or specify a custom port: `npm run dev -- -p 3001`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [D3.js Documentation](https://d3js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
