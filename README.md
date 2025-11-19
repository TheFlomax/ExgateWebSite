# Exgate Website

This repository contains the source code for the **Exgate** project website. Exgate is a conceptual proposal for a sovereign, distributed network infrastructure aimed at restoring user ownership of physical internet infrastructure and data privacy.

## Project Overview

The website serves as a landing page and a "Light Paper" viewer for the Exgate project. It presents the core philosophy, technical architecture (Oblivious Relay, Exgate Grid), and hardware specifications (Exgate Box) of the proposed network.

**Note:** Exgate is currently a conceptual project ("Une idée sur papier") and not a live network.

## Tech Stack

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Markdown Rendering:** [React Markdown](https://github.com/remarkjs/react-markdown)

## Getting Started

### Prerequisites

*   Node.js (Latest LTS recommended)
*   npm (or pnpm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ExgateWebSite
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Build the project for production:

```bash
npm run build
```

The output files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

*   `src/App.jsx`: Main application component containing the landing page sections (Hero, TechStack, Hardware, etc.) and visualizations.
*   `src/LIGHT_PAPER.md`: The content of the project's whitepaper/lightpaper.
*   `src/index.css`: Global styles and Tailwind directives.
*   `vite.config.js`: Vite configuration.
*   `tailwind.config.js`: Tailwind CSS configuration.

## License

[MIT](LICENSE) (Assuming standard open source license, please verify)
