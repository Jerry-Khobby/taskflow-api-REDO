#  TaskFlow API

## Full Agile & DevOps Documentation

**Technology Stack:** NestJS, TypeScript, GitHub Actions (CI/CD)
**Project Type:** Agile & DevOps Prototype
**Delivery Model:** 3 Sprints (Sprint 0, Sprint 1, Sprint 2)

---

# Project Overview

## Objective

This project demonstrates the independent application of Agile principles and DevOps practices to plan, execute, and iteratively deliver a working backend service.

The emphasis of this project is not the complexity of the system, but the discipline of:

* Structured Agile planning
* Incremental delivery
* Continuous Integration
* Testing automation
* Monitoring and observability
* Continuous process improvement

---

# Sprint 0 – Planning & Setup

Sprint 0 focuses on defining direction, scope, quality standards, and planning the first increment of delivery.

---

## Product Vision

TaskFlow is a lightweight NestJS-based backend service that enables users to manage tasks through a simple REST API.
It serves as a practical demonstration of Agile planning, incremental delivery, CI/CD automation, and observability practices within a DevOps workflow.

This vision provides:

* Clear scope (task management API)
* Clear technical boundary (NestJS backend)
* Clear process goal (Agile + DevOps demonstration)

---

##  Product Backlog

The backlog is prioritized by business value and estimated using relative story points.

| ID  | User Story                                                     | Priority | Story Points |
| --- | -------------------------------------------------------------- | -------- | ------------ |
| US1 | As a user, I want to create a task so I can track my work      | High     | 3            |
| US2 | As a user, I want to view all tasks so I can see my workload   | High     | 2            |
| US3 | As a user, I want to update a task’s status                    | Medium   | 3            |
| US4 | As a user, I want to delete a task I no longer need            | Medium   | 2            |
| US5 | As a system, I want a health endpoint to verify availability   | Low      | 1            |
| US6 | As a developer, I want structured logs for requests and errors | Low      | 2            |

Total estimated effort: 13 story points

---

## Refined Acceptance Criteria

### US1 – Create Task

* Endpoint: `POST /tasks`
* Accepts:

  * `title` (required)
  * `description` (optional)
* Default status = `todo`
* Returns created task with unique ID
* Returns HTTP 201
* Validated using DTO and class-validator

---

### US2 – View Tasks

* Endpoint: `GET /tasks`
* Returns list of all tasks
* Returns HTTP 200
* Returns empty array if no tasks exist

---

### US3 – Update Task Status

* Endpoint: `PATCH /tasks/:id`
* Accepts only valid status values:

  * `todo`
  * `in-progress`
  * `done`
* Returns updated task
* Returns 404 if task not found

---

### US4 – Delete Task

* Endpoint: `DELETE /tasks/:id`
* Removes task from system
* Returns HTTP 204
* Returns 404 if task not found

---

### US5 – Health Endpoint

* Endpoint: `GET /health`
* Returns:

```json
{ "status": "ok" }
```

* Returns HTTP 200

---

### US6 – Logging

* Logs:

  * HTTP method
  * URL
  * Response time
* Logs errors with stack trace
* Uses NestJS Logger or Interceptor

---

## Definition of Done (DoD)

A backlog item is considered complete when:

* Code is implemented following NestJS conventions
* DTO validation is applied
* Unit tests are written
* All tests pass
* CI pipeline passes successfully
* Feature matches acceptance criteria
* Code is committed in small, focused increments

---

## Sprint 1 Plan

### Sprint Goal

Deliver the first usable increment of the TaskFlow API and establish a working CI/CD pipeline.

### Selected Stories

* US1 – Create Task
* US2 – View Tasks

These were chosen due to highest priority and foundational value.

---

# Sprint 1 – Execution

## Sprint 1 Goal

Deliver core task creation and retrieval functionality with automated testing and CI/CD integration.

---

## Work Completed

* Implemented `POST /tasks`
* Implemented `GET /tasks`
* Added DTO validation
* Wrote unit tests for TaskService
* Set up GitHub Actions CI pipeline
* Pipeline runs on push and pull request
* Tests automatically execute in CI

---

## DevOps Integration in Sprint 1

Continuous Integration was introduced:

* GitHub Actions workflow created
* On every push:

  * Install dependencies
  * Build project
  * Run tests
* Prevents broken code from merging

This establishes automated feedback loops.

---

## Evidence

### POST /tasks

![Screenshot of POST /tasks](./screenshots/post.png)

### GET /tasks

![Screenshot of GET /tasks](./screenshots/get.png)

---

## Sprint 1 Outcome

A working API capable of:

* Creating tasks
* Retrieving tasks
* Running automated tests
* Passing CI pipeline

This demonstrates incremental delivery and DevOps automation.

---

# Sprint 1 Retrospective

## What Went Well

* Clear backlog enabled focused development
* CI caught errors early
* Stories were properly scoped

## What Didn’t Go Well

* Commits were larger than ideal
* Logging was not yet implemented
* Debugging required manual inspection

##  Improvements for Sprint 2

1. Improve commit granularity (smaller commits)
2. Add structured logging for observability

These improvements were intentionally applied in Sprint 2.

---

# Sprint 2 – Execution & Improvement

##  Sprint Goal

Complete task lifecycle functionality and improve observability and process discipline.

---

## Work Completed

* Implemented `PATCH /tasks/:id`
* Implemented `DELETE /tasks/:id`
* Added `GET /health`
* Implemented structured request logging
* Improved commit granularity
* Maintained passing CI pipeline
* Added additional unit tests

---

## Monitoring & Observability

Added:

* Logging Interceptor
* Logs:

  * HTTP method
  * URL
  * Response time
* Health endpoint for availability checks

This improves:

* Debugging
* Reliability
* Operational transparency

---

## Evidence

### PATCH /tasks/:id

![Screenshot](./screenshots/patch.png)

### DELETE /tasks/:id

![Screenshot](./screenshots/delete.png)

### GET /health

![Screenshot](./screenshots/health.png)

---

## Sprint 2 Outcome

The API now supports full task lifecycle management and includes:

* CRUD operations
* Health monitoring
* Logging
* CI automation
* Improved delivery discipline

---

# Sprint 2 Final Retrospective

## Improvements Applied

* Smaller, incremental commits
* Better structured development workflow
* Improved observability
* Stronger DevOps discipline

##  Key Lessons Learned

* A clear product vision prevents ambiguity
* Acceptance criteria prevent incomplete stories
* CI/CD increases development confidence
* Logging improves system reliability
* Small commits improve traceability

---

# Final Reflection

This project demonstrates how Agile and DevOps complement each other:

Agile provided:

* Clear vision
* Structured backlog
* Iterative planning
* Retrospectives for improvement

DevOps provided:

* Automated CI pipeline
* Continuous testing
* Monitoring and logging
* Reliable deployment workflow

The evolution from Sprint 1 to Sprint 2 shows measurable process improvement, particularly in commit discipline and observability.

The final system is small, but the process discipline reflects professional software engineering practice.

---
