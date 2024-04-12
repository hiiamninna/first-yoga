# Use NGINX as base image
FROM nginx:alpine

# Copy your HTML file into NGINX's default serving directory
COPY . /usr/share/nginx/html
