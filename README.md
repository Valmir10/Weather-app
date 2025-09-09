# Weather App 🌤️

A simple weather application where users can search for a city and view current weather information.  
The project consists of a **Node.js backend** and a **React frontend**.

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Start the backend

Open a terminal in the project root and run:

cd backend
npm install
node server.js

http://localhost:4000



3. Start the frontend

Open another terminal in the project root and run:

cd frontend
npm install
npm run dev

http://localhost:5173/


🧪 Running Tests

To run the test suite, navigate to the frontend folder and execute:

cd frontend
npm run test


You will see all tests running using Vitest and React Testing Library.

🛠️ Tech Stack

Frontend: React 18, Vite, React Icons

Backend: Node.js (Express)

Testing: Vitest, React Testing Library, jsdom

Weather-app/
│
├── backend/                  # Node.js server
│   ├── node_modules/         # Backend dependencies
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js             # Main server file (runs on port 4000)
│   └── weatherRoute.js       # Route handling for weather API
│
├── frontend/                 # React/Vite frontend
│   ├── node_modules/         # Frontend dependencies
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── components/       # Reusable React components
│       │   ├── Header.jsx
│       │   ├── Sidebar.jsx
│       │   ├── SidebarItem.jsx
│       │   ├── VirtualKeyboard.jsx
│       │   └── WeatherDisplay.jsx
│       │
│       ├── pages/            # Page-level components
│       │   └── HomePage.jsx
│       │
│       ├── styles/           # CSS files
│       │   └── *.css
│       │
│       └── tests/            # Test files for components & pages
│           ├── Header.test.jsx
│           ├── Sidebar.test.jsx
│           ├── SidebarItem.test.jsx
│           ├── VirtualKeyboard.test.jsx
│           ├── WeatherDisplay.test.jsx
│           ├── WeatherDetail.test.jsx
│           ├── HomePage.test.jsx
│           └── smoke.test.jsx
│
└── README.md

🔎 Critical Reflection & Suggestions for Improvement

During development, one significant issue I faced was related to testing setup.
At first, I installed the testing dependencies (Vitest, React Testing Library, jsdom) in the root folder instead of the frontend folder. This caused the test runner to fail since the frontend project didn’t have access to the required packages.

This mistake wasted unnecessary time debugging, and it highlights the importance of:

Understanding project structure when using a monorepo setup (separate frontend/ and backend/ folders).

Ensuring dependencies are installed in the correct project scope.

Suggestions for improvement:

Document installation instructions more clearly to avoid confusion in future.

Consider using a package manager workspace (e.g., npm workspaces, Yarn, or pnpm) to manage both backend and frontend dependencies in a unified way.

Add CI/CD testing to automatically catch missing dependencies or misconfigured environments early.

Improve error handling and provide better fallback UI in the frontend.

Make the app more mobile-responsive and accessible for broader usability.

By reflecting on these issues, I have improved my awareness of project structure, environment setup, and dependency management, which will help me build more reliable applications in the future.


---

```
