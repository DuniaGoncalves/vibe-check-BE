# Vibe Check - Mood Journal (Backend)

This is the backend service for **Vibe Check**, a simple mood journaling app built using **Express.js**. It provides API endpoints to store, retrieve, and manage user moods and notes.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (Planned)
- **Mongoose** (Planned)
- **CORS** for cross-origin requests

## Features (Current)
- Basic Express server setup
- CORS configuration for frontend communication
- Simple GET/POST/DELETE endpoints

## To-Do
- [x] Set up a database (MongoDB via Mongoose)
- [x] Implement **POST** request to save new moods and notes  
- [x] Implement **DELETE** request to remove a mood entry  
- [ ] Implement **PUT** request to update an existing mood entry  
- [ ] Add **error handling** for API requests  
- [ ] Implement authentication (optional, for private mood tracking)  
- [ ] Refactor code into folders (controllers, routes, models, middleware, config)  
- [ ] Add ESLint configuration  
- [ ] Add middleware for logging requests  
- [ ] Add input validation using middleware  

## Setup Instructions
Frontend: https://github.com/DuniaGoncalves/vibe-check-FE

1. Clone the repository and navigate to the backend branch:
   ```bash
   git clone https://github.com/DuniaGoncalves/vibe-check-BE.git
   cd vibe-check-BE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your MongoDB URI:
   ```bash
   MONGO_URI=your_mongo_connection_string
   ```

4. Run the server:
   ```bash
   npm start
   ```

5. The backend will be running at `http://localhost:3001`
