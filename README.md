# dom-lab-react

## Project initialization

This project is a React application. The steps below describe a typical setup from creating the project through running it locally.

### 1. Create the project

Install [Node.js](https://nodejs.org/) first; npm is included with it. To scaffold a React project with Vite, run:

```bash
npm create vite@latest dom-lab-react -- --template react
cd dom-lab-react
```

The scaffolding command creates the project files, including the package manifest (`package.json`), the application source, and the Vite configuration.

### 2. Install dependencies

From the project directory, run:

```bash
npm install
```

npm reads `package.json` and downloads the project’s dependencies into `node_modules`. It also creates or updates `package-lock.json` to record the resolved dependency versions. The lockfile should be kept with the project so installs can be reproduced.

### 3. Run the development server

```bash
npm run dev
```

Vite prints a local address in the terminal. Open that address in a browser to view the starter application. While the server is running, edits to the source are reflected in the browser.

### Current starting point

After these steps, the React/Vite starter is installed and running, ready for the application’s features to be added. `src/App.jsx` is the main component to edit, and `src/main.jsx` mounts the React application in the page. Useful scripts are `npm run build` to create a production build and `npm run preview` to inspect that build locally.

