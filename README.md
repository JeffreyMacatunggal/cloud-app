# Company App Frontend 🌐

This is a comprehensive frontend application for managing company information, painted with vibrant colors and built using a modern tech stack.

## 🌈 Table of Contents

- [🛠 Tech Stack](#tech-stack)
- [🚀 Installation](#installation)
- [🔥 Usage](#usage)
- [📂 Folder Structure](#folder-structure)
- [🌍 Environment Variables](#environment-variables)

## 🛠 Tech Stack

- **Framework**: React 📚
- **State Management**: React Hooks 🪝
- **Styling**: TailwindCSS 🎨, @emotion/react 🌈, animate.css 💃, flowbite 🌊
- **HTTP Client**: Axios 📡
- **Utilities**: react-phone-number-input 📞, react-loading-skeleton 💀
- **Routing**: react-router-dom 🗺️
- **Build Tool**: Vite ⚡
- **Linting**: ESLint 🧹
- **Concurrent Task Running**: concurrently 🔄
- **And more**... (Refer to `package.json` for the complete list) 🎉

## 🚀 Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-repo-link.git
    cd company-app-frontend/Company-app-frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

    Then, navigate to the backend folder and install its dependencies:
    ```bash
    cd ../Company-app-backend
    npm install
    ```

## 🔥 Usage

Ensure you are in the `Company-app-frontend` directory:

```bash
cd Company-app-frontend
```

To start the frontend and backend concurrently:
```bash
npm run dev
```

To run only the frontend:
```bash
npm run dev:frontend
```

To run only the backend:
```bash
npm run dev:backend
```

To build the project for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📂 Folder Structure

```
.
├── Company-app-backend   # Backend source files 📂
└── Company-app-frontend  # Frontend source files 🎨
```

## 🌍 Environment Variables

For the application to run correctly, you will need to create a `.env` file within the `Company-app-frontend` directory with the following content:

```bash
MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@company-app-backend.ojdf3yr.mongodb.net/?retryWrites=true&w=majority
```

🚨 **Note**: Replace `<YOUR_USERNAME>` and `<YOUR_PASSWORD>` with your MongoDB credentials.

---

🎉 Happy coding and designing! 🌟