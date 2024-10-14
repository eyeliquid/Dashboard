# Use Node.js official image as the base image
FROM node:18-alpine

# Set the working directory for the backend
WORKDIR /usr/src/app

# Copy the entire repository into the working directory
COPY . .

# Install backend dependencies in the main folder
RUN npm install

# Switch to the frontend folder
WORKDIR /usr/src/app/frontend

# Install frontend dependencies
RUN npm install

# Go back to the main app directory
WORKDIR /usr/src/app

# Install npm-run-all to run both frontend and backend concurrently
RUN npm install npm-run-all -g

# Expose backend and frontend ports
EXPOSE 3010
EXPOSE 5173

# Command to run both backend and frontend together
CMD ["npm-run-all", "--parallel", "start-backend", "start-frontend"]