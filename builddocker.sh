#!/bin/bash

# Image and container names
IMAGE_NAME="botdc"
CONTAINER_NAME="mybotdc"

# Function to handle errors
handle_error() {
    echo "Error: $1"
    exit 1
}

# Build Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME . || handle_error "Failed to build Docker image."

# Check if the container already exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container..."
    # Stop the running container
    docker stop $CONTAINER_NAME || handle_error "Failed to stop the container."
    # Remove the container
    docker rm $CONTAINER_NAME || handle_error "Failed to remove the container."
else
    echo "No existing container found."
fi

# Run a new container
echo "Running new container..."
docker run -d --name $CONTAINER_NAME $IMAGE_NAME || handle_error "Failed to run the new container."

echo "Deployment completed successfully!"
