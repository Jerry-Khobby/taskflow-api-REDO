# TaskFlow API

## Project Overview
TaskFlow is a simple backend REST API built with NestJS that allows users to create, view, update, and delete tasks.  
The project was developed to demonstrate the practical application of **Agile principles** and **DevOps practices**, rather than feature complexity.

---

## Objective
The objective of this project is to:
- Plan and deliver a backend service using Agile methodology
- Work in incremental sprints
- Automate quality through CI/CD and testing
- Reflect and improve the development process

---

## Tech Stack
- **Backend Framework:** NestJS
- **Language:** TypeScript
- **Testing:** Jest
- **CI/CD:** GitHub Actions
- **Logging & Monitoring:** NestJS Logger, Health endpoint
- **Data Storage:** In-memory (for simplicity)

---

## Features
- Create tasks
- Retrieve all tasks
- Update task status
- Delete tasks
- Health check endpoint
- Request logging
- Automated tests and CI pipeline

---

## API Endpoints

### Create Task
```

POST /tasks

````
Request body:
```json
{
  "title": "My task",
  "description": "Optional description"
}
````

---

### Get All Tasks

```
GET /tasks
```

---

### Update Task Status

```
PATCH /tasks/:id
```

Request body:

```json
{
  "status": "in-progress"
}
```

---

### Delete Task

```
DELETE /tasks/:id
```

---

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "ok",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

---

##  Testing

Unit tests are written using Jest and are automatically executed via the CI pipeline.

Run tests locally:

```bash
npm run test
```

---

##  CI/CD Pipeline

The project uses GitHub Actions to:

* Install dependencies
* Run automated tests on every push and pull request

Pipeline configuration:

```
.github/workflows/main.yml
```

---

## Agile Process

### Sprint 0 – Planning

* Defined product vision
* Created and refined backlog
* Established Definition of Done
* Planned Sprint 1

### Sprint 1 – Execution

* Implemented core task endpoints
* Added automated tests
* Set up CI pipeline
* Conducted sprint review and retrospective

### Sprint 2 – Execution & Improvement

* Added task update and delete functionality
* Implemented logging and health monitoring
* Applied feedback from Sprint 1
* Conducted final sprint review and retrospective

All sprint documentation can be found in the root directory.

---

## Full Sprint Documentation

* `Documentation.md`

---

## Running the Project Locally

```bash
npm install
npm run start:dev
```

The API will be available at:

```
http://localhost:4000
```

---

## Key Learnings

* Agile planning improves clarity and delivery speed
* CI/CD ensures consistent quality
* Monitoring and logging are essential even in small systems
* Incremental delivery leads to better outcomes

---
