# Netflix GPT 
- Vite react app 
- Configured TailwindCSS
- Sign in and Sign up forms 
- Form validation
- useRef Hook
- Routing using react-router-dom
- Shimmer Ui
- firebase authentication 
  - Implemented email and password authentication 
  - Implemented Sign out
  - update profile
- configured redux store
- created userSlice
- Unsubscibed to the onAuthStateChanged callback
- Custom Hook for Now Playing Movies
- BugFix : Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Regiter TMDB API & create an app & get access token
- Embedded the Yotube video and make it autoplay and mute
- .env file used
- memoization 
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to - make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive
# Features
- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      -MovieLists * N
- Movie
  - Tailer in Background
  - Title & Description
  - Similiar Movies
      - MovieLists * N 
  - Reviews
- NetflixGPT
  - Search Bar
  - Shimmer Ui
  - Movie Suggestions