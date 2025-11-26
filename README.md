<div align="center">

# 🚀 TalentIQ

### Real-Time Collaborative Coding Interview Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Contributing](#-contributing)

</div>

---

## 📸 Preview

![TalentIQ Platform](/frontend/public/screenshot-for-readme.png)

---

## 🎯 Overview

**TalentIQ** is a modern, full-stack collaborative coding platform designed for technical interviews and peer programming. Built with cutting-edge technologies, it provides a seamless experience for conducting live coding sessions with real-time video, chat, and code execution.

### 🌟 Key Highlights

#### **Core Features**
- 🧑💻 **VSCode-Powered Editor** — Monaco Editor with syntax highlighting & IntelliSense
- 🎥 **HD Video Interviews** — Low-latency 1-on-1 video rooms powered by Stream
- ⚙️ **Secure Code Execution** — Isolated sandboxed environment for safe code running
- 💬 **Real-time Messaging** — In-session chat for seamless communication
- 🎯 **Auto Test Validation** — Instant feedback with success/fail indicators

#### **User Experience**
- 🧭 **Live Dashboard** — Real-time stats and session management
- 🔊 **Media Controls** — Mic/camera toggle, screen sharing & recording
- 🎉 **Interactive Feedback** — Confetti animations on success, toast notifications
- 🧩 **Practice Mode** — Solo coding environment with curated problems
- 🔒 **Room Security** — Locked sessions with 2-participant limit

#### **Technical Excellence**
- 🧠 **Background Jobs** — Async task processing with Inngest
- 🔐 **Enterprise Auth** — Secure authentication via Clerk
- ⚡ **Smart Caching** — Optimized data fetching with TanStack Query
- 🧰 **RESTful API** — Clean Node.js/Express backend architecture
- 🤖 **AI Code Review** — Automated PR analysis with CodeRabbit
- 🚀 **Production Ready** — Deployed on Sevalla (free-tier friendly)

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Styling:** TailwindCSS + DaisyUI
- **State Management:** TanStack Query (React Query)
- **Code Editor:** Monaco Editor (VSCode)
- **Authentication:** Clerk
- **Video/Chat:** Stream SDK
- **Routing:** React Router v6

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** Clerk (JWT validation)
- **Background Jobs:** Inngest
- **Code Execution:** Piston API
- **Video Infrastructure:** Stream API

### DevOps & Tools
- **Version Control:** Git & GitHub
- **Code Quality:** ESLint + Prettier
- **AI Review:** CodeRabbit
- **Deployment:** Sevalla
- **Package Manager:** npm

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **MongoDB** ([Atlas Free Tier](https://www.mongodb.com/cloud/atlas) or Local)
- **Git** ([Download](https://git-scm.com/))

### 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/talent-iq.git
cd talent-iq
```

2. **Install dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

## ⚙️ Environment Configuration

### 🔑 Backend Environment Variables

Create a `.env` file in the `/backend` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/talentiq?retryWrites=true&w=majority

# Inngest (Background Jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream (Video/Chat)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk (Authentication)
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Frontend URL
CLIENT_URL=http://localhost:5173
```

### 🎨 Frontend Environment Variables

Create a `.env` file in the `/frontend` directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx

# Backend API
VITE_API_URL=http://localhost:3000/api

# Stream Video/Chat
VITE_STREAM_API_KEY=your_stream_api_key
```

### 📝 Getting API Keys

| Service | Purpose | Get Keys |
|---------|---------|----------|
| **MongoDB** | Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |
| **Clerk** | Authentication | [Clerk Dashboard](https://dashboard.clerk.com/) |
| **Stream** | Video/Chat | [Stream Dashboard](https://getstream.io/) |
| **Inngest** | Background Jobs | [Inngest Dashboard](https://www.inngest.com/) |

---

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
✅ Backend running at `http://localhost:3000`

**Terminal 2 - Frontend Server:**
```bash
cd frontend
npm run dev
```
✅ Frontend running at `http://localhost:5173`

### Production Build

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

---

## 📁 Project Structure

```
talent-iq/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Auth & validation
│   │   ├── lib/             # Utilities & config
│   │   └── server.js        # Express app entry
│   ├── .env                 # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Route pages
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api/             # API client functions
│   │   ├── lib/             # Utilities & helpers
│   │   ├── data/            # Static data & constants
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── .env                 # Environment variables
│   └── package.json
│
└── README.md
```

---

## 🏗️ Architecture

### System Flow

```
User → React Frontend → Express API → MongoDB
                      ↓
                Stream API (Video/Chat)
                Clerk Auth (JWT)
                Inngest Jobs (Async)
                Piston Executor (Code)
```

### Key Components

1. **Authentication Layer** — Clerk handles user auth with JWT tokens
2. **API Gateway** — Express routes with middleware validation
3. **Real-time Communication** — Stream SDK for video/chat
4. **Code Execution** — Piston API for secure sandboxed execution
5. **Background Processing** — Inngest for async tasks
6. **Data Persistence** — MongoDB for sessions, users, and problems

---

## 🎨 Features in Detail

### 🎥 Video Interview Rooms
- HD video quality with adaptive bitrate
- Screen sharing capabilities
- Session recording
- Participant controls (mute, camera toggle)
- Room locking (max 2 participants)

### 💻 Code Editor
- Monaco Editor (VSCode engine)
- Multi-language support (Python, JavaScript, Java, C++, etc.)
- Syntax highlighting & IntelliSense
- Real-time collaboration
- Auto-save functionality

### ⚡ Code Execution
- Secure sandboxed environment
- Multiple language runtimes
- Test case validation
- Instant feedback with results
- Error handling & debugging info

### 📊 Dashboard
- Active session monitoring
- Recent session history
- Performance statistics
- Quick session creation
- Problem library access

---

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

---

## 🚀 Deployment

### Backend Deployment (Sevalla)

1. Push code to GitHub
2. Connect repository to Sevalla
3. Configure environment variables
4. Deploy with automatic builds

### Frontend Deployment (Vercel/Netlify)

```bash
cd frontend
npm run build
# Deploy dist/ folder
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editor
- [Stream](https://getstream.io/) for video/chat infrastructure
- [Clerk](https://clerk.com/) for authentication
- [Piston](https://github.com/engineer-man/piston) for code execution
- [Inngest](https://www.inngest.com/) for background jobs

---

## 📧 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/talent-iq/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/talent-iq/discussions)
- **Email:** support@talentiq.dev

---

<div align="center">

**Built with ❤️ by developers, for developers**

⭐ Star this repo if you find it helpful!

</div>
