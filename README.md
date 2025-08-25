# ​ Netflix GPT

Netflix GPT is a modern web application that combines the power of React + Vite, Firebase Authentication, TMDB API, and OpenAI GPT to deliver a personalized movie browsing and search experience. Users can sign up, browse trending movies, watch trailers, and get AI-powered recommendations—all wrapped in a sleek, Netflix-like UI.

---

## ​ Live Demo  
👉 [Netflix GPT (Vercel)](https://netflix-gpt-qe35.vercel.app/)

---

## ​ Features

-  **Authentication**  
  - Login / Sign Up (email & password via Firebase)  
  - Profile updates (display name & picture)  
  - Protected routes — auto-redirect between login and browse

-  **Browse Page**  
  - Autoplay & muted YouTube trailer background  
  - Dynamic title & description display  
  - Movie suggestion lists powered by TMDB API with Shimmer UI

-  **Netflix GPT (AI Search)**  
  - Search powered by OpenAI GPT  
  - Movie suggestions integrated from TMDB  
  - Reusable MovieList components

-  **State & Performance**  
  - State management via Redux Toolkit (`userSlice`, `gptSlice`)  
  - Memoization for optimized rendering

-  **Tech & UI Stack**  
  - React + Vite with TailwindCSS styling  
  - Routing using React Router DOM  
  - Axios for API calls  
  - .env for environment variables  
  - Fully responsive design

-  **Bug Fixes Covered**  
  - Profile image & name updates on sign-up  
  - Redirects handling during auth state changes

---

## ​  Tech Stack

- **Frontend**: React (Vite), TailwindCSS  
- **State & API**: Redux Toolkit, Axios  
- **Authentication**: Firebase  
- **APIs**: TMDB, OpenAI GPT  
- **Routing**: React Router DOM  
- **Build Tool**: Vite

---

## ​ 🚀Project Setup 

Follow these steps to run the project locally:


## 1️⃣ Clone the  repository
git clone https://github.com/Krutheesh/NetflixGpt.git

## 2️⃣ Go into the project directory
cd NetflixGpt


## 3️⃣ Install dependencies
npm install

## 4️⃣ Set up environment variables
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurment_id
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENAI_API_KEY=your_openai_api_key


## 5️⃣ Start the development server
npm run dev

## 6️⃣ Open the app in your browser
 http://localhost:5173/


