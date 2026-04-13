# Movie Service

A full-stack web application for browsing, managing, and reviewing movies and TV series. Users can search and filter content by title and genre, leave ratings and reviews, and authenticated users can add or edit entries.

---

## Key Features

- **Browse & Search** — search films and series by title and genre with pagination and sorting
- **Movie & Series Detail Pages** — view full info including release year, duration, categories, episodes, and aggregated rating
- **User Reviews** — authenticated users can add, edit, and delete reviews with a 1–10 rating
- **Authentication** — session-based login and registration with Spring Security; protected routes on the frontend
- **Contributor Actions** — add new films and series through dedicated forms
- **Swagger UI** — interactive API documentation available at `/swagger`
- **H2 Console** — in-memory database browser available at `/h2-console` during development

---

## Tech Stack

### Backend

| Technology                  | Purpose                                      |
| --------------------------- | -------------------------------------------- |
| Java 25                     | Core language                                |
| Spring Boot 3.5             | Application framework                        |
| Spring Security             | Session-based authentication & authorization |
| Spring Data JPA / Hibernate | ORM and database access                      |
| H2 (in-memory)              | Development database                         |
| Lombok                      | Boilerplate reduction                        |
| SpringDoc OpenAPI           | Swagger UI / API documentation               |
| Cucumber + JUnit 5          | BDD integration tests                        |
| Spring Boot Test            | Unit and integration testing                 |

### Frontend

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| React 19       | UI library                |
| Vite 7         | Build tool and dev server |
| React Router 7 | Client-side routing       |
| Cypress 15     | E2E testing               |
| Vanilla CSS    | Styling                   |

---

## How to Run

### Prerequisites

- Java 25+
- Maven (or use the included `mvnw` wrapper)
- Node.js 18+ and npm

### Backend

```bash
cd back
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`.

| Useful URLs |                                    |
| ----------- | ---------------------------------- |
| Swagger UI  | `http://localhost:8080/swagger`    |
| H2 Console  | `http://localhost:8080/h2-console` |

> H2 JDBC URL: `jdbc:h2:mem:filmdb` — no password required.

### Frontend

```bash
cd front
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧪 Testing

### Backend — unit, integration & BDD tests

```bash
cd back
./mvnw test
```

Includes:

- Unit tests for services and repositories (JUnit 5 + Mockito)
- Integration tests for all REST controllers
- BDD scenarios written in Gherkin (Cucumber)

### Frontend — E2E tests

```bash
cd front
npm test                  # headless
npm run test:open         # interactive Cypress UI
npm run test:chrome       # run in Chrome
```
