# Dockerfile for React app

# Use official Node.js image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port the app runs on
EXPOSE 3000

# Start the React dev server
CMD ["npm", "start"]