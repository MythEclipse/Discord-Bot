#!/bin/bash

# Nama image dan container
IMAGE_NAME="botdc"
CONTAINER_NAME="mybotdc"

# Build Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

# Cek apakah container sudah ada
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container..."
    # Stop the running container
    docker stop $CONTAINER_NAME
    # Remove the container
    docker rm $CONTAINER_NAME
else
    echo "No existing container found."
fi

# Jalankan container baru
echo "Running new container..."
docker run -d --name $CONTAINER_NAME $IMAGE_NAME

echo "Deployment completed!"
