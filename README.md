# UI Component Library – Assignment 13

**Student:** Rishitha Wickramasinghe
**Course:** Business Systems Development – 3rd Semester
**Assignment:** 13 – UI Component Library Build and CI/CD Automation

---

## 📘 Overview

This project is a **React + TypeScript UI Component Library** designed to demonstrate:

- Component reusability and modular design
- Automated linting, formatting, and testing
- Pre-commit validation using **Husky**
- Continuous Integration via **GitHub Actions**
- Containerization with **Docker**

---

## Project Setup

```bash
# Clone the repository
git https://github.com/Rishithaw/Component-Library.git
cd Component-Library

# Install dependencies
npm ci

# Run ESLint (static code analysis)
npm run lint

# Formats code for readability and uniform style.
npm run prettier:check
npm run prettier:write

# Run Jest tests
npm test

# Build the Docker image
docker build -t wickramasinghe_rishitha_coding_assignment13 .

# Run the container
docker run -p 8018:8018 --name wickramasinghe_rishitha_coding_assignment13 wickramasinghe_rishitha_coding_assignment13

# Once the container starts, open a browser of your choice and visit:
http://127.0.0.1:8018/
(You should see all the components you saw in the storybook)
```
