# Vibe Check - Mood Journal (Backend)

This is the backend service for **Vibe Check**, a simple mood journaling app built using **Express.js** and **MongoDB**. It provides API endpoints to store, retrieve, update, and delete user moods and notes.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **CORS** for cross-origin requests

## Features (Current)
- MongoDB integration using Mongoose
- Folder structure with controllers, routes, models, middleware, and config
- GET/POST/DELETE endpoints for moods
- Custom middleware for logging requests
- Environment variable configuration via `.env`
- Refactored async code using `.then()`/`.catch()` instead of `try/catch`

## To-Do
- [x] Set up a database (MongoDB via Mongoose)
- [x] Implement **POST** request to save new moods and notes  
- [x] Implement **DELETE** request to remove a mood entry  
- [x] Implement **GET** request to fetch all moods  
- [x] Refactor code into folders (controllers, routes, models, middleware, config)  
- [x] Add middleware for logging requests  
- [x] Add .env support and Mongo URI config  
- [ ] Implement **PUT** request to update an existing mood entry  
- [ ] Add **error handling** for API requests  
- [ ] Implement authentication (optional, for private mood tracking)  
- [ ] Add ESLint configuration  
- [ ] Add input validation using middleware  

## Setup Instructions
Frontend: https://github.com/DuniaGoncalves/vibe-check-FE

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/DuniaGoncalves/vibe-check-BE.git
   cd vibe-check-BE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root with the following content:
   ```bash
   MONGO_URI=your_mongo_connection_string
   ```

4. Run the server in development mode:
   ```bash
   npm run dev
   ```

5. The backend server will run on:
   ```
   http://localhost:3001
   ```

---
