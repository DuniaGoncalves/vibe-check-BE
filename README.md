Here's your README for the backend branch with the to-do section filled in:  

---

# Vibe Check - Mood Journal (Backend)

This is the backend service for **Vibe Check**, a simple mood journaling app built using **Express.js**. It provides API endpoints to store, retrieve, and manage user moods and notes.

## Tech Stack
- **Node.js**
- **Express.js**
- **CORS** for cross-origin requests

## Features (Current)
- Basic Express server setup
- CORS configuration for frontend communication
- Simple GET endpoint returning static moods

## To-Do
- [ ] Set up a database (MongoDB, PostgreSQL, or JSON file for now) to store moods  
- [ ] Implement **POST** request to save new moods and notes  
- [ ] Implement **DELETE** request to remove a mood entry  
- [ ] Implement **PUT** request to update an existing mood entry  
- [ ] Add **error handling** for API requests  
- [ ] Implement authentication (optional, for private mood tracking)  

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

3. Run the server:
   ```bash
   npm start
   ```

4. The backend will be running at `http://localhost:8787`

---

Let me know if you need any changes! 🚀
