# Stage 1: Build both React app and Storybook
FROM node:20-alpine AS build

# Set working directory
WORKDIR /wickramasinghe_rishitha_ui_garden

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app (just to validate it compiles)
RUN npm run build

# Build Storybook for production (the component library)
RUN npm run build-storybook

# Stage 2: Serve Storybook build using nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Storybook static files into nginx html directory
COPY --from=build /wickramasinghe_rishitha_ui_garden/storybook-static /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
