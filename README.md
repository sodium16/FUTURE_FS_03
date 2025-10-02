# Boat Lifestyle - Conceptual Rebrand & Full-Stack Build

![Boat Rebrand Demo](https://placehold.co/1200x600/080A0B/E9F3F3?text=Add+a+Screenshot+of+Your+Site+Here!)

> This project is a complete conceptual rebrand and full-stack implementation of the Boat Lifestyle website, built with a modern, decoupled architecture. It was completed as Task 3 for the "Future Interns" Full-Stack Web Development program.

**Live Demo Links:**
* **Frontend (Vercel):** [Your Live Site URL Here]
* **Backend API (Render):** [Your Live Backend URL Here]/api/products

---

## 📖 About the Project

This project reimagines the Boat Lifestyle digital presence with a focus on a clean, modern UI/UX and dynamic content management. The original brand's "marine" theme was pivoted to a broader, more authentic "lifestyle audio" vibe, targeting a young, active audience.

The entire frontend is built with Next.js and styled with Tailwind CSS, while the backend is a headless CMS that provides all content—from products to homepage sections—via a REST API.

## ✨ Key Features

* **Fully Responsive Design:** Optimized for a seamless experience on mobile, tablet, and desktop devices.
* **Dynamic Content:** All products and most homepage content are managed via a headless CMS.
* **Component-Based Architecture:** Built with reusable React components for consistency and maintainability.
* **Dynamic Pages:** Product category pages are generated dynamically based on the URL.
* **Static Pages:** Simple, fast-loading static pages for content like "Contact" and "Privacy Policy".
* **AI-Assisted Design:** Initial branding concepts, color palettes, and layouts were brainstormed using AI tools like Adobe Firefly and Durable.

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI:** [React](https://reactjs.org/)

### Backend (Server)
* **Framework:** Headless CMS (e.g., Strapi) on [Node.js](https://nodejs.org/)
* **Database:** SQLite (local development) / PostgreSQL (production)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm

### Local Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/boat-lifestyle-project.git](https://github.com/YOUR_USERNAME/boat-lifestyle-project.git)
    cd boat-lifestyle-project
    ```

2.  **Install Backend Dependencies:**
    ```sh
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

4.  **Set up Frontend Environment Variable:**
    * In the `frontend` directory, create a new file named `.env.local`.
    * Add the following line to it:
        ```
        NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
        ```

5.  **Run the Project:**
    You will need two terminals open.

    * **In Terminal 1 (for the Backend):**
        ```sh
        cd backend
        npm run develop
        ```

    * **In Terminal 2 (for the Frontend):**
        ```sh
        cd frontend
        npm run dev
        ```

    Open [http://localhost:3000](http://localhost:3000) to view the frontend.
    Open [http://localhost:1337/admin](http://localhost:1337/admin) to view the backend CMS.