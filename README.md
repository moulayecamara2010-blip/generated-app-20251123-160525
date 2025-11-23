# Inclusion & Impact: Healthcare Access for Africa

## Project Description

Inclusion & Impact is a comprehensive, multi-page marketing and investment website for a health-fintech platform dedicated to transforming healthcare access for 200 million uninsured people in West Africa. The website serves as the primary digital presence, catering to diverse audiences including potential investors, strategic partners, healthcare providers, community groups, and future users. It features a visually stunning, emotionally resonant design that communicates trust, hope, and African-led innovation. The site comprises ten distinct pages, each designed to fulfill specific user journey objectives.

## Key Features

*   **Multi-Page Structure:** Ten distinct pages covering the platform's mission, problem, solution, impact, business model, team, and engagement pathways.
*   **Visually Stunning Design:** Adheres to a 'Modern African' aesthetic with a defined color palette (Deep Teal, Warm Coral, Deep Blue), professional typography, and authentic imagery.
*   **Emotional Resonance:** Builds trust and connection through storytelling, data-driven problem statements, and a focus on empowerment.
*   **Clear Calls-to-Action:** Strategically placed CTAs guide users towards investment, partnership, or engagement.
*   **Responsive & Accessible:** Mobile-first design ensuring a seamless experience across all devices, adhering to WCAG AA standards.
*   **Interactive Elements:** Subtle micro-interactions and animations enhance user experience without distraction.
*   **Lead Generation:** Integrated contact form for inquiries and partnership opportunities.

## Technology Stack

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS, Shadcn UI, React Router DOM, Framer Motion, React Hook Form, Zod
*   **Backend:** Hono (Cloudflare Workers)
*   **State Management:** Zustand
*   **UI Components:** Shadcn UI components, Lucide React icons
*   **Build Tool:** Vite
*   **Deployment:** Cloudflare Workers

## Getting Started

### Prerequisites

*   [Bun](https://bun.sh/) installed on your system.
*   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) installed (`bun install -g wrangler`).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd inclusion_and_impact
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

## Development

### Running the Development Server

To start the local development server:

```bash
bun run dev
```

This will start the Vite development server, typically on `http://localhost:3000`. The application will automatically reload on code changes.

### Building for Production

To create a production-ready build:

```bash
bun run build
```

This command compiles the frontend assets and prepares the worker for deployment.

## Deployment

This project is designed to be deployed on Cloudflare Workers.

### Local Deployment (for testing)

You can test your worker locally using Wrangler:

```bash
wrangler dev --host 0.0.0.0 --port 3000
```

### Cloudflare Deployment

1.  **Configure Wrangler:** Ensure your `wrangler.toml` (or `wrangler.jsonc`) is correctly configured with your Cloudflare account details.
2.  **Deploy:**
    ```bash
    bun run deploy
    ```

This command builds the project and deploys the worker to Cloudflare.

### One-Click Deployment

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/moulayecamara2010-blip/generated-app-20251123-160525)

## Project Structure

```
.
├── public/                  # Static assets
├── shared/                  # Shared types and mock data
│   ├── mock-data.ts
│   └── types.ts
├── src/                     # Frontend source code
│   ├── assets/
│   ├── components/          # Reusable UI components (Shadcn UI, custom)
│   │   ├── layout/
│   │   └── ui/              # Shadcn UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and API client
│   ├── pages/               # React Router pages
│   ├── App.css
│   ├── index.css            # Global styles
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment types
├── worker/                  # Cloudflare Worker backend code
│   ├── core-utils.ts        # Core utilities and DO helpers
│   ├── entities.ts          # Data entity definitions
│   ├── index.ts             # Worker entrypoint
│   └── user-routes.ts       # API route handlers
├── .gitignore
├── components.json          # Shadcn UI configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.app.json        # TypeScript config for frontend
├── tsconfig.json            # Root TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Node.js environment (e.g., Vite config)
├── tsconfig.worker.json     # TypeScript config for Cloudflare Worker
└── wrangler.jsonc           # Wrangler configuration for Cloudflare deployment
```

## Contributing

Please refer to the `CONTRIBUTING.md` file (if available) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/moulayecamara2010-blip/generated-app-20251123-160525)
```