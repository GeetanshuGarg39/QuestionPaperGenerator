# QuestionPaperGenerator

Welcome to the Question Paper Generator, a tool designed to simplify the process of creating question papers for exams or assessments. Whether you're a teacher, instructor, or educational institution, this application aims to streamline the task of curating a balanced set of questions based on different difficulty levels.

## Features
- **Flexible Configuration**: Define the total marks and distribution of difficulty levels to generate custom question papers.
- **MongoDB Integration**: Store your question data in MongoDB for seamless management and scalability.
- **User-Friendly Interface**: An intuitive web interface for easy interaction and paper generation.

## Prerequisites
Node.js and npm: Download and install Node.js.
MongoDB: Install MongoDB.

## Installation

* Clone the repository 
git clone https://github.com/GeetanshuGarg39/QuestionPaperGenerator.git

* Navigate to the project folder
cd QuestionPaperGenerator

* Install dependencies for frontend
**cd** client
npm install

* Install dependencies for backend
**cd** ../server
npm install

* Create a .env file in the server directory and add your **MONGO_URL**. For example, if your URL is mongodb://127.0.0.1:27017/questionGenerator, add **MONGO_URL**=mongodb://127.0.0.1:27017/questionGenerator to your .env file

## Running the Application
* Open two terminals one for client and second for server
* Run this command on both terminals (in 'client' and 'server' directories):
**npm run dev**
* Visit http://localhost:3000 in your browser.

## Generating a Question Paper
* Access the application in your browser.
* Fill in the required fields or complete the form.
* Click the "Generate Paper" button to initiate the question paper generation.

## Contact Information
For any inquiries or issues, please contact geetanshugarg39@gmail.com.
