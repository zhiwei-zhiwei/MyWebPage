# MyWebPage - Full Stack Application

A modern portfolio website built with React frontend and .NET Core backend API.

## 🚀 Quick Start

This project consists of two main components:
- **Backend**: ASP.NET Core API (`MyBackendApi/`)
- **Frontend**: React Application (`MyFrontendApp/client/`)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

### Required Software
- **.NET 8.0 SDK** - [Download here](https://dotnet.microsoft.com/download/dotnet/8.0)
- **Node.js** (v18 or v24 recommended) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### System Requirements
- **macOS**: 10.15+ (Catalina or later)
- **Windows**: 10 or later
- **Linux**: Ubuntu 18.04+ or equivalent

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd MyWebPage
```

### 2. Backend Setup (.NET API)
```bash
cd MyBackendApi
dotnet restore
dotnet build
```

### 3. Frontend Setup (React App)
```bash
cd MyFrontendApp/client
npm install
```

## ▶️ Running the Application

### Start the Backend API
```bash
cd MyBackendApi
dotnet run
```

The backend will start on: **http://localhost:5252**
- API Swagger Documentation: **http://localhost:5252/swagger/index.html**

### Start the Frontend React App
```bash
cd MyFrontendApp/client
npm start
```

The frontend will start on: **http://localhost:3000**

## 🌐 Accessing the Application

Once both services are running:

- **Frontend Website**: http://localhost:3000
- **Backend API**: http://localhost:5252
- **API Documentation**: http://localhost:5252/swagger/index.html

## 🔧 Troubleshooting

### Node.js ICU Library Issues (macOS with Homebrew)

If you encounter errors like:
```
dyld: Library not loaded: /opt/homebrew/opt/icu4c/lib/libicui18n.74.dylib
```

**Solution:**
```bash
# Uninstall problematic Node.js version
brew uninstall --ignore-dependencies node

# Install Node.js v18 or v24
brew install node@18
# OR
brew install node  # (installs latest version)

# Test the installation
node --version
npm --version
```

### Alternative: Fix ICU Library Links
If you prefer to fix the library links instead:
```bash
cd /opt/homebrew/opt/icu4c/lib
ln -sf /opt/homebrew/Cellar/icu4c@77/77.1/lib/libicui18n.77.1.dylib libicui18n.74.dylib
ln -sf /opt/homebrew/Cellar/icu4c@77/77.1/lib/libicuuc.77.1.dylib libicuuc.74.dylib
ln -sf /opt/homebrew/Cellar/icu4c@77/77.1/lib/libicudata.77.1.dylib libicudata.74.dylib
```

### React App Not Loading Properly

If the React app shows a blank page or missing styles:

1. **Stop any Python servers** that might be occupying port 3000:
   ```bash
   pkill -f "python3 -m http.server"
   ```

2. **Restart the React development server**:
   ```bash
   cd MyFrontendApp/client
   PORT=3000 npm start
   ```

3. **Clear browser cache** and refresh the page

### Port Conflicts

If ports 3000 or 5252 are already in use:

**For React (Frontend):**
```bash
PORT=3001 npm start
```

**For .NET (Backend):**
Edit `MyBackendApi/Properties/launchSettings.json` and change the port number.

## 📁 Project Structure

```
MyWebPage/
├── MyBackendApi/              # .NET Core API
│   ├── Program.cs            # API entry point
│   ├── appsettings.json      # Configuration
│   └── MyBackendApi.csproj   # Project file
├── MyFrontendApp/
│   ├── client/               # React Application
│   │   ├── src/              # React source code
│   │   │   ├── components/   # React components
│   │   │   ├── App.js        # Main App component
│   │   │   └── index.js      # App entry point
│   │   ├── public/           # Static assets
│   │   └── package.json      # Dependencies
│   └── server.js             # Express server (production)
└── README.md                 # This file
```

## 🏗️ Development Features

### React Frontend
- **Hot Reloading**: Changes reflect immediately during development
- **Component-based**: Modular React components (Navbar, HeroSection, etc.)
- **Modern Styling**: Webflow CSS integration
- **Responsive Design**: Mobile-friendly layout

### .NET Backend
- **RESTful API**: Clean API endpoints
- **Swagger Integration**: Interactive API documentation
- **Development Environment**: Hot reloading with `dotnet watch`

## 🚀 Production Deployment

### Frontend Build
```bash
cd MyFrontendApp/client
npm run build
```

### Using Express Server
```bash
cd MyFrontendApp
npm install
node server.js
```

## 📝 Available Scripts

### Frontend (React)
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Backend (.NET)
- `dotnet run` - Start development server
- `dotnet build` - Build the project
- `dotnet test` - Run tests
- `dotnet watch run` - Start with hot reloading

## 🐛 Common Issues

1. **"Missing script: start" error**: Make sure you're in the `MyFrontendApp/client` directory, not the parent directory
2. **CORS errors**: Ensure both frontend and backend are running on their specified ports
3. **Bundle.js not loading**: Clear browser cache and restart the React server

## 📞 Support

If you encounter any issues not covered in this guide, please check the console logs for specific error messages and refer to the troubleshooting section above.

---

**Happy coding! 🎉**