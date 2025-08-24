
<div align="center">

# CodeArena 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) 
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) 
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>



Welcome to CodeArena – a platform for practicing and solving coding problems, similar to LeetCode. Built with Next.js 14, MongoDB, and NextAuth, CodeArena provides a smooth user experience to enhance your coding skills and connect with others.    

<div align="center">

[![VISIT](https://img.shields.io/badge/-VISIT-blue?style=for-the-badge)](https://codearena-pi.vercel.app/)

</div>

## Tech Stack

- ` Next.js ` : A React-based framework for building server-rendered and static web applications, offering features like routing, API handling, and optimized performance.
- ` React.js ` : A JavaScript library for building dynamic user interfaces with reusable components.
- ` Node.js `: A server-side runtime that allows running JavaScript on the backend.
- `MongoDB ` : A NoSQL database that stores data in flexible, JSON-like documents.
- `Tailwind-CSS` : A utility-first CSS framework for building custom, responsive designs quickly by composing classes directly in HTML.
- `Redis` : An in-memory data structure store commonly used as a database, cache, and message broker. I used it as a message queue to efficiently manage and process background tasks.

<div align="center">

## Workflow

</div>

<div align="center">

<img width="700"  alt="Screenshot 2025-08-24 155855" src="https://github.com/user-attachments/assets/f9e5632e-2fb4-495c-893d-cd1f5d11dfa6" />

</div>

- User submits code from the frontend (React or similar).

- API Service (Flask + Gunicorn) accepts the submission, stores metadata in MongoDB (status = pending), and pushes the job into Redis queue.

- Worker Service (Flask background service with thread pool) pulls jobs from Redis, executes user code safely (via subprocess or Docker depending on environment), and updates the MongoDB record with results.

- Frontend polls MongoDB via the API to check if submission results are available (status = executed).

<div align="center">

## Getting Started

</div>

### 1. Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/rahul-shrivastav/Leetcode-clone.git
```


### 2. Install Dependencies
Install the required dependencies by running:

```bash
npm install
```
### 3. Setup Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```bash
MONGO_DB_URI  
AUTH_SECRET  
GOOGLE_CLIENT_ID  
GOOGLE_CLIENT_SECRET  
NODE_ENV
NEXT_PUBLIC_NEXTAUTH_URL
NEXTAUTH_URL
NEXT_PUBLIC_SUBMIT_CODE_API2  
```
A sample .evn file is also provided in the repository.

### 4. Run Dev server Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### 4. Setup the python code execution server locally 
Follow the readme.md file in the given repo to setup locally :

[![GitHub Repo](https://img.shields.io/badge/GitHub-Visit%20Repo-blue?style=for-the-badge&logo=github)](https://github.com/rahul-shrivastav/Python-Code-Execution-Server)                                     

<br>

After setting up python server locally , open port `3000` on your `localhost` with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

<br><br>

## Sample Screenshots
![Screenshot 2024-09-08 035903](https://github.com/user-attachments/assets/4055d2d1-a55b-425c-9af4-5e8c73c0b23b)

![Screenshot 2024-09-03 020219](https://github.com/user-attachments/assets/9f359316-7cad-4358-9133-87a0993313a4)

