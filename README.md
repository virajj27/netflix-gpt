# Netflix-gpt

- create react app
- configured tailwindcss
- signIn form done(for big big forms use formik library)
- form validation
- useRef hook
- firebase setup done

- steps to deploy on firebase

  - firebase login
  - firebase init
  - npm run build
  - firebase deploy

- deploying using firebase
- create signUp user account
- implement signIn user API
- created redux store with userSlice
- implemented signOut API
- update profile
- bug fix:signUp user displayName , and profile picture update
- bug fix: user not logged in still redirecting to /browse page
- unsubscribed to onAuthStateChange callback
- add harcoded values to constants file
- registered for TMDB API & get access token
- get data from TMDB now playing movies list API
- created custom hooks for now playing movies
- updated store with movies data(created a movie slice)
- browse page planning

- mainContainer

  - header
  - videoTitle
  - videoBackground

- secondaryContainer
- fetch data for trailer video
- update store with trailer video data
- embedded youtube video made it autoplay and mute
- movieList(popular)
- movieCards\*n
- movieList(action)
- movieList(romance)..

- secondaryContainer with movieList and usePopularMovies done
- found out Image CDN from TMDB api and used it for movie posters in movie list
- GPT search feature
- language functionlity added (english,hindi,marathi)
- get openAI API key
- GPT search API call
- fetch gpt movie suggestions from TMDB
- gpt slice and added data to store
- reused movieList component to make movie Suggestion container
- memoization(no repeated API calls if data already exists)
- added .env file and add to gitignore
- responsive site

# features

- login/sign up

  - signIn/signUp form
  - redirect to browse page

- browse page

  - header
  - main movie
  - movie trailer in background
  - Title and Description
  - play and more info button(for the main movie)
  - movie Suggestions
  - movie lists \* N(vertically scrollable)

- netflix-gpt
  - search bar
  - movie suggestions
