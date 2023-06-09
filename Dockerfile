# Stage 1: Build the TypeScript app
FROM node:lts AS builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript app
RUN npm run dev

# Stage 2: Create the final image
FROM postgres:latest

# Set the desired environment variables for PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Expose the default PostgreSQL port
EXPOSE 5432

# Install Node.js from the LTS image
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Copy the built JavaScript app from the builder stage
COPY --from=builder /usr/src/app/dist /usr/src/app

# Set the working directory inside the container
WORKDIR /usr/src/app

# Start the Express app
CMD ["node", "index.js"]