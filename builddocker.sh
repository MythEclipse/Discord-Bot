#!/bin/bash

# Nama image dan container
IMAGE_NAME="botdc"
CONTAINER_NAME="mybotdc"

# Build Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

# Check if the container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container..."
    # Stop the running container
    docker stop $CONTAINER_NAME
    # Remove the container
    docker rm $CONTAINER_NAME
fi

# Run the new container
echo "Running new container..."
docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

echo "Deployment completed!"
