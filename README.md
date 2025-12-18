# React + Vite Project Manual

This repository contains a React application built with **Vite**. This guide covers **local development**, **cloud deployment via Vercel**, and **manual deployment to a private server**.

# Refer to my explanation video for better understanding of the codebase : [Link](https://drive.google.com/file/d/16JaoJdTVhwrrAf2jvbA6FN3vDrLS1D16/view?usp=drive_link)
---

## 🛠 Part 1: Local Development & Vercel

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

🔗 https://nodejs.org/

---

### 2. Local Setup

```bash
# Clone this repository
git clone <your-repo-url>

# Enter the project directory
cd <project-directory-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser to view the app.

---

### 3. Pushing Changes
When you are ready to save your work:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

---

### 4. Deploying to Vercel (Automatic)

1. Log in to **Vercel**
2. Click **New Project** and import this GitHub repository
3. Vercel will auto-detect Vite settings:

```
Build Command: npm run build
Output Directory: dist
```

4. Click **Deploy**

✅ Future pushes to `main` will trigger automatic deployments.

---

## 🏗 Part 2: Manual Build & Custom Server Deployment

Use this method if you are hosting on your own **Linux server** (Ubuntu, CentOS, etc.) using **Nginx** or **Apache**.

---

### 1. Create the Production Build
Generate optimized static files:

```bash
npm run build
```

This creates a **dist/** folder. These are the only files needed by your production server.

---

### 2. Uploading to Your Server
Transfer the contents of the `dist/` folder to your server’s web directory (example: `/var/www/html`) using **SCP**:

```bash
scp -r ./dist/* username@your-server-ip:/var/www/html/
```

---

### 3. Server Configuration (Nginx Example)

To ensure **React Router** works correctly (prevents 404 errors on page refresh), use the following Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /var/www/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

Restart Nginx after saving:

```bash
sudo systemctl restart nginx
```

---

## 📜 Available Scripts

| Command | Description |
|-------|------------|
| `npm run dev` | Runs the app in development mode |
| `npm run build` | Compiles the app for production in the `/dist` folder |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Checks code for formatting and logic errors |

---


