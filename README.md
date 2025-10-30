# 📘 Assignment 12: Web Component Library

**Author:** Rishitha Wickramasinghe
**Course:** Business Systems Development
**Assignment:** Component Library using React, Storybook & Docker

---

## Overview

This project is a **UI Component Library** built using **React**, **TypeScript**, **Styled Components** and **Storybook**.
It demonstrates the ability to create, test, and deploy modular, reusable UI components in a containerized environment.

The final application is packaged in a **Docker container** and served via **NGINX** on **localhost:8083**.

---

## Features

The component library includes the following **responsive and interactive components**:

- **Button** (default & disabled states)
- **Label**
- **Text**
- **Table**
  - Table Header
  - Table Row
  - Table Cell
  - Table Footer
- **Dropdown**
- **Radio Button**
- **Image**
- **Hero Image**
- **Card**

## Project Setup Instructions

### 1. Install Docker Desktop

Make sure Docker Desktop is installed and running on your system.

### 2. 📦 Clone the repository

```bash
git clone <https://github.com/Rishithaw/Component-Library>
cd component-library

### 3. Install Dependencies
npm install

### 4. To view Storybook
npm run Storybook
(Visit http://localhost:6006)

### 5. Build the Docker image:
docker build -t wickramasinghe_rishitha_coding_assignment12

### 6. Run the container with the required name and port mapping:
docker run -p 8083:8083 --name wickramasinghe_rishitha_coding_assignment12 wickramasinghe_rishitha_coding_assignment12

### 7. Once the container starts, open a browser of your choice and visit:
http://127.0.0.1:8083/
(You should see all the components you saw in the storybook)

### 8. To run tests
npm test
```
