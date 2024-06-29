# iTEMR Project

Created a dynamic CRUD application that allows users to manage a list of items, using MERN stack.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)


## Features
- User can create the Items
- User can delete the Items
- User can update the Items
- User can read the Items
- On Updating a particular item, user can update or edit the neccesary text(no need to type again unwanted text while updating a particular item)
- User-friendly interface with clear error handling and proper notification(using react-toastify)
- Material UI libraray used to make the UI of this project
- Responsive interface
- Used proper validation, error handling and environment variable.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harshy1620/RedVision_MachineTest

   ```


2. Install dependencies for server folder:

- npm install

3. Open a new terminal and change your repository to client directory:

- cd client

4. Install dependencies:

- npm install

## Environment Variables

Create a .env file in the root folder and add the following variables:

- PORT=8000
- MONGO_URI
- Replace "MONGO_URI" with your MongoDB URI.
- Or you can use my sample data using my MONGO_URI = "mongodb+srv://harshyadav6642:harshyadav6642@blog-app.b3rr7f4.mongodb.net/blog-app"

## Usage

- After setting up the environment variables, you can run the application:

1. Start the server by running the following command in the root foler:

- npm start
- The server will listen on the port 8000

2. Start the client by running the following command in the client folder:

- npm start
- Visit http://localhost:3000 in your browser to view the app.





