# Stage 1: Build both React app and Storybook
FROM node:20-alpine AS build

# Set working directory
WORKDIR /wickramasinghe_rishitha_ui_garden_build_checks

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Run all quality checks before building
RUN npm run lint && npm run prettier:check && npm test -- --watchAll=false

# Build the React app (just to validate it compiles)
RUN npm run build

# Build Storybook for production (the component library)
RUN npm run build-storybook

# Stage 2: Serve using nginx
FROM nginx:alpine

# Copy built app into nginx html directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Storybook static files into nginx html directory
COPY --from=build /wickramasinghe_rishitha_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
